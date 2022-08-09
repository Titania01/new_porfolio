import { entity, persistence } from "simpler-state";
import { ITheme } from "./types";

const defaultState: ITheme = "light"
// const stored = typeof window !== "undefined" && window.localStorage.getItem("portfolio-theme")
// const initialState = stored ? JSON.parse(stored) : defaultState

export const portfolioTheme = entity<ITheme>(defaultState)

export const setTheme = () => {
    portfolioTheme.set((currentState: ITheme) => 
     currentState === "dark" ? "light" : "dark")
}