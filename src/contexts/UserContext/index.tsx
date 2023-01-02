import { createContext } from "react";

interface IProfileContextProps {
    children: React.ReactNode;
}

export interface IProfileContext {
}

export const UserContext = createContext<IProfileContext>({} as IProfileContext)

const UserProvider = ({children}:IProfileContextProps) => {
    <UserContext.Provider 
    value={{}}>{children}</UserContext.Provider>
}

export default UserProvider