import React, {ButtonHTMLAttributes} from "react";
export type SpecialPropsType = {
    disable: boolean
}


type Props = ButtonHTMLAttributes<HTMLButtonElement> & SpecialPropsType;

export const SuperButton = ({title, onClick, disable}: Props) => {
    return (
        <button onClick={onClick} disabled={disable}>{title}</button>
    )
}