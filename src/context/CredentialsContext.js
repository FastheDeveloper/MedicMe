import { createContext } from "react";

//credential context

export const CredentialsContext = createContext({storedCredentials:{} ,setStoredCredentials: () => {} })
