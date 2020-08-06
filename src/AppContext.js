import React, { createContext, useState } from 'react';


const datos = {
    NumOfPizas: 0,
    NumOfGue: 0,
}




export const Context = createContext();



function AppProvider({children}){
    const[state, setState] = useState(datos);

    return(
    <Context.Provider value={{state, setState}}>{children}</Context.Provider>
    )
}

export default AppProvider;