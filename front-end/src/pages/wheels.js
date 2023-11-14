import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React, { Fragment, useContext } from "react";
import { Context } from "../globalState/globalContext";

const Wheels = () => {
    const{formState,setFormState} = useContext(Context);

  return (
    <Fragment>
      <Typography variant="h5" color={"blue"}>
        Number of Vehicles
      </Typography>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={formState.wheels}
        onChange={(e)=>setFormState((prev)=>({...prev,wheels:e.target.value}))}
      >
        <FormControlLabel value={2} control={<Radio />} label={2} />
        <FormControlLabel value={4} control={<Radio />} label={4} />
      </RadioGroup>
    </Fragment>
  );
};

export default Wheels;
