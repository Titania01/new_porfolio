import { entity, persistence } from "simpler-state";
import { ITheme } from "./types";

const defaultState: ITheme = "light"
const stored = 
typeof window !== "undefined" && window.localStorage.getItem("portfolio-theme")
const initialState = stored ? JSON.parse(stored) : defaultState

export const portfolioTheme = entity(initialState, [persistence("portfolio-theme")])

export const setTheme = () => 
console.log('change', )
portfolioTheme.set((currentState: ITheme) => 
 currentState === "light" ? "dark" : 'light')