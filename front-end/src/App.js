import React, { Fragment, useContext, useEffect, useState } from 'react';
import './App.css';
import NameDetails from './pages/details';
import StateProvider from './globalState/globalContext';
import { Context } from './globalState/globalContext';
import Wheels from './pages/wheels';
import VehicleType from './pages/vehicleType';
import VehicleModel from './pages/modelName';
import { Button } from '@mui/material';
import BookingDates from './pages/dates';

const forms = ["details","wheels","type","model","dates"];

const SwitchComponents=()=>{
  const {formState,setFormState} = useContext(Context);
  const [currentForm,setCurrentForm] = useState(0);

  const SwitchComponent=()=>{
    switch(formState.pageName){
      case "details":
        return <NameDetails />
      case "wheels":
        return <Wheels />
      case "type":
        return <VehicleType />
      case "model":
        return <VehicleModel />
      case "dates":
        return <BookingDates />;

      default:
        return null;
    }
  }
  useEffect(()=>{
    setFormState((prev)=>({...prev,pageName:forms[currentForm]}))
  },[currentForm,setFormState])
  const handleButtonClick=(state)=>{
    switch(state){
      case "prev":
        setCurrentForm((prev)=>prev-1)
        break;
      case "next":
        setCurrentForm((prev)=>prev+1);
        break;
      case "submit":
        console.log(formState);
         break;
        default:
            return null;
    }
  }
  return(
    <Fragment>
    <SwitchComponent />
    <div style={{display:"flex",margin: "2em 0",justifyContent:"space-between"}}>

    <Button  variant="contained"onClick={()=>handleButtonClick("prev")} disabled={currentForm===0}>PREV</Button>
    
    {currentForm === 2 ? 
    <Button variant={"contained"} onClick={()=>handleButtonClick("submit")}>Submit</Button>
    :
    <Button variant={"contained"} onClick={()=>handleButtonClick("next")}>Next</Button>
  }
  </div>
  </Fragment>
  )
}
function App() {

 
  return (
    <Fragment>
      <StateProvider>
        <div className='App'>
        <SwitchComponents />
        
        </div>
      </StateProvider>
    </Fragment>
  );
}

export default App;
