import { Typography } from "@mui/material";
import React, { Fragment, useContext } from "react";
import { Context } from "../globalState/globalContext";

const BookingDates=()=>{
    const {formState,setFormState} = useContext(Context);
    
    const handleChange=(e)=>{
        const {name,value} = e.target;
        if(setFormState)
            setFormState((prev)=>({...prev,[name]:value}))
    }
    
    return(
        <Fragment>
            <Typography variant="h5" color={"blue"}>
                Select Dates
            </Typography>
            <input type="date" name={"fromDate"}  onChange={handleChange} value={formState?.fromDate}/><br />
            <input type="date" name="toDate" onChange={handleChange} value={formState?.toDate}/>
        </Fragment>
    )
}

export default BookingDates;