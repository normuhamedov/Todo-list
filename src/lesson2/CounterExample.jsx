import { createContext, useState } from "react";
export const MyContext = createContext();
export const MyProvider = ({ children }) => {
    const [counter, setCounter] = useState(false);
    return (
        <MyContext.Provider value={{ counter, setCounter}}>
           {children}
        </MyContext.Provider>
    )
}