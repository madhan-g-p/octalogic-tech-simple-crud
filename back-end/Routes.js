const apis = [
    {url: "/vehicle-booking",path: "./v1/vehicle-booking/index"}
]

const apiRoutes =(app)=>{

   return apis.map((module)=>app.use(module.url,require(module.path)));
};


module.exports = apiRoutes;