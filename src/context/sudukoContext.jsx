import { createContext, useContext, useState } from "react";
import { createGrid } from "../functions/createGrid";

const sudukoContext = createContext();
export let useSuduko =()=>useContext(sudukoContext);


export function SudukoProvider({children}){
 const [suduko ,setSuduko] = useState(createGrid());
 const [isRunning ,setisRunning]= useState(false);

    return <sudukoContext.Provider value={{suduko ,setSuduko,isRunning ,setisRunning}}>
        {children}
    </sudukoContext.Provider>
}