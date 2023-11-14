const router = require("express").Router();
const pool = require("../../dbConnection/db");
const { sendRes } = require("../../utilities/utilityFunctions");
const {SQL,wheelCheck,vehicleTypCheck,formCheck} = require("./sqlConstants");


router.get('/vehicle-types/:wheels',wheelCheck,async(req,res,next)=>{
    await SQL.getVehicleTypes(pool,[req.params.wheels])
            .then((asset)=>{
                return sendRes(res,200,'Successfully fetched vehicle types',null,asset);
            })
            .catch((err)=>{
                next(err,req,res,next);
            })
});

router.get('/vehicle-models/:type',vehicleTypCheck,async(req,res,next)=>{
    await SQL.getVehicleModels(pool,[req.params.type])
            .then((asset)=>{
                return sendRes(res,200,'Successfully fetched vehicle models',null,asset);
            })
            .catch((err)=>{
                next(err,req,res,next);
            })
});

router.post('/',formCheck,async(req,res,next)=>{
    const client = await pool.connect();
    const {firstName,lastName,modelId,fromDate,toDate} = req.body;
    await client.query('BEGIN;');
    await SQL.bookVehicle(client,[firstName,lastName,modelId,fromDate,toDate])
    .then(async(asset)=>{
                await client.query('COMMIT;');
                return sendRes(res,200,'Successfully Booked Vehicle',null,asset);
            })
            .catch(async(err)=>{
                await client.query('ROLLBACK;');
                next(err,req,res,next)
            })
})

router.get('/',async(req,res,next)=>{
    await SQL.getAllBookings(pool)
            .then(asset=>sendRes(res,200,'Successfully fetched all the bookings',null,asset))
            .catch(err=>next(err,req,res,next))
})
module.exports = router
