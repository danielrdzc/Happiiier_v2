import React, { FC } from "react"
import ICustomInputProps from "../../interfaces/props/ICustomInputProps"

export const CInput: FC<ICustomInputProps> = ({label, type}) => {
    return (
        <div className="flex flex-col mb-4">
            <label className="text-xs font-medium text-blue-900 mb-2" htmlFor="">{label}</label>
            <input className="border border-gray-300 focus:border-gray-400 focus:border-1 
                focus:outline-0 rounded-md py-2 px-3.5" type={type} />
        </div>
    )
}