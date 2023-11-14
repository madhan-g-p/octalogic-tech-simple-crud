const {check} = require("express-validator");
const {convertUnderScoresToCamelCase, finalValidator} = require("../../utilities/utilityFunctions");

const isValidDate= (value)=>new Date(value).toString() !== 'Invalid Date';

const wheelCheck =[check("wheels","wheels must not be empty").notEmpty().isNumeric(),
(req,res,next)=>finalValidator(req,res,next)    
];

const vehicleTypCheck =[check("type","Vehicle Type must not be empty").notEmpty().isNumeric(),
(req,res,next)=>finalValidator(req,res,next)    
];

const formCheck =[check("firstName","First Name must not be empty").notEmpty().isAlpha(),
                check("lastName","Last Name must not be empty").notEmpty().isAlpha(),
                check("modelId","Vehicle Model Id must not be empty").notEmpty().isNumeric(),
                check("fromDate").custom((value,{req})=>{
                    // from date should be future date but less than toDate
                    if(isValidDate(value) && (new Date() <  new Date(value)) && (new Date(value) < new Date(req.body.toDate))){
                        return true
                    }else{
                        throw {message: "failure",statusCode: 406,
                        detail: "From Date should be a valid future date and less than to-date",
                        path: "Error While Booking vehicle"};
                    }
                }),
                check("toDate").custom((value,{req})=>{
                    // todate should be greater than from date
                    if(isValidDate(value) && (new Date(value) > new Date(req.body.fromDate))){
                        return true
                    }else{
                        throw {message: "failure",statusCode: 406,
                        detail: "To Date should be a valid date and greater than from-date",
                        path: "Error While Booking vehicle"};
                    }
                }),

(req,res,next)=>finalValidator(req,res,next)    
];

const SQL ={
    getVehicleTypes: async(client,params)=>{
       let dbResp=  await client.query(`SELECT * FROM vehicle.vehicle_types WHERE wheels = $1`,params);
       if(dbResp.rowCount >=0 ){
        return dbResp.rows.map(convertUnderScoresToCamelCase);
       } else{
        throw { msg: "failure", desc: "error while fetching vehicle  types", path: "GET /vehicle-types api"}
       }
    },
    getVehicleModels: async(client,params)=>{
        let dbResp =  await client.query(`SELECT * FROM vehicle.vehicle_models WHERE vehicle_type_id = $1`,params);
        if(dbResp.rowCount>=0){
            return dbResp.rows.map(convertUnderScoresToCamelCase);
        }else{
            throw {msg: "failure",desc: "error while fetching vehicle models", path: "GET /vehicle-models api"}
        }
    },
    bookVehicle: async(client,params)=>{

        let conditionCheck = await client.query(`SELECT id,booking_time FROM users.booking_data
                                    WHERE (from_date BETWEEN SYMMETRIC $1::date AND   $2::date
                                    OR to_date BETWEEN SYMMETRIC  $1::date AND $2::date) AND model_id = $3;`,[params[3],params[4],params[2]]);
            if(conditionCheck.rowCount){
                throw {
                    msg: "failure", desc: "error while booking vehicle",
                detail:"The Same MOdel vehicle is already booked in the same date range",
                path: "POST /vehicle-booking api"}
            }
        let dbResp = await client.query(` INSERT INTO users.booking_data (first_name,last_name,model_id,from_date,to_date)
                                                VALUES ($1,$2,$3,$4,$5) RETURNING * ;`,params);
        if(dbResp.rowCount > 0){
            return dbResp.rows.map(convertUnderScoresToCamelCase);
        }else{
            throw {msg: "failure", desc: "error while booking vehicle",path: "POST /vehicle-booking api"}
        }
    },
    getAllBookings: async(client)=>{
        let dbResp = await client.query(`SELECT * FROM users.booking_data;`)
        if(dbResp.rowCount >= 0){
            return dbResp.rows.map(convertUnderScoresToCamelCase)
        }else{
            throw {msg: "failure", desc: "error while fetching booked vehicle",path: "GET /vehicle-booking api"}
        }
    }
}

module.exports = {
    SQL,
    wheelCheck,vehicleTypCheck,formCheck
}