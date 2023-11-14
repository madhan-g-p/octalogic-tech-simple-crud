import React, { Fragment, useContext,useEffect,useState } from "react";
import {Typography,TextField} from "@mui/material";
import { Context } from "../globalState/globalContext";

const NameDetails=()=>{
    const {formState,setFormState} = useContext(Context);
    const [form,setForm] = useState({firstName:"",lastName:""});
    const handleChange=(e)=>{
        const {name,value} = e.currentTarget;
        setForm((prev)=>({...prev,[name]:value}));
        setFormState((prev)=>({...prev,[name]:value}))
    }
    useEffect(()=>{
        const {firstName,lastName} = formState;
        setForm({firstName,lastName});
    },[formState])

    return(
        <Fragment>
            <Typography variant="h5" color={"blue"}>
                What is Your Name?
            </Typography>
            <div>

            <TextField key={"fname"} autoFocus={document.activeElement?.name==='firstName'} label="First Name" value={form.firstName} onChange={handleChange} name="firstName" variant="outlined" />
            <TextField key={"lname"} autoFocus={document.activeElement?.name==='lastName'} label="Last Name" value={form.lastName} onChange={handleChange} name="lastName" variant="outlined" />
            </div>

        </Fragment>
    )
}

export default NameDetails;