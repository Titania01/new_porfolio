import { SVGProps } from "react";

export type ITheme = 'light' | 'dark'

export interface IName {
    name?: string;
    navLinks?: Array<string>
}

export interface ISocialsSvg extends SVGProps<SVGSVGElement> {
    theme:ITheme
}