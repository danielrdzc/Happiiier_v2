import React from "react"
import { CInput } from "../forms/CustomInput"
import { Link } from "react-router-dom"

export const LoginForm = () => {
    return (
        <>
            <form action="" className="flex flex-col">
                <CInput label="Usuario" type="text"/>
                
                <CInput label="Contraseña" type="password" />

                <Link to="/home">
                    <button className="bg-blue-800 px-5 py-2 rounded text-white text-sm w-full">Ingresar</button>
                </Link>
            </form>
        </>
    )
}