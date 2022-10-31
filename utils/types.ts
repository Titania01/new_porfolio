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
    bg?: any
    neutral?: any
    sm?:any
    opacity?: any
    size?: any
    text?: string
    font: any
    sFont?: any
    black?: any
    width?: any
}

export interface ProjectArrayTypes {
    img: HTMLImageElement,
    alt: string,
    desc: string,
    techStack: string[],
    href: any
}