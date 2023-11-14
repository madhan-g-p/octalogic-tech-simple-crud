import React,{Fragment, createContext,useState} from 'react';

export const Context= createContext();

const StateProvider=(props)=>{

    const [formState,setFormState] = useState({
        firstName: "",
        lastName: "",
        wheels: "",
        type: "",
        model: "",
        pageName: "details",
        fromDate: "",
        toDate: ""
    });

    return(
        <Context.Provider value={{formState,setFormState}}>
            <Fragment>
                {props.children}
            </Fragment>
        </Context.Provider>
    )
}

export default StateProvider;