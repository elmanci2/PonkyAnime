import { createContext, useState } from "react";
import { Children } from "../../types";



export const MayconfigsProvider = createContext({} as any)

export const MayConfigFuction = ({ children }: Children) => {

    const [configData, setConfigData] = useState({
        darckMode: false
    });

    return (
        <MayconfigsProvider.Provider value={{ configData, setConfigData }} >
            {children}
        </MayconfigsProvider.Provider>
    )

}




