import { ImageProps } from "next/image";
import { SVGProps } from "react";

export type ITheme = 'light' | 'dark'

export interface IName {
    name?: string;
    navLinks?: Array<string>
}

export interface ISocialsSvg extends SVGProps<SVGSVGElement> {
    theme:ITheme
}

export interface ContactArrayType {
    name: string;
    icon: HTMLOrSVGImageElement
    logo: HTMLOrSVGImageElement
    darkLogo: HTMLOrSVGImageElement
}

export interface ButtonTypes {
    logo?: any
    darkLogo?: any
    icon?: any
    darkIcon?: any
    bg?: string
    neutral?:string
    sm?:string
    opacity?: boolean
    size?: boolean
    text?: string
    font: boolean
    sFont?: string
    black?: string
    width?: any
}