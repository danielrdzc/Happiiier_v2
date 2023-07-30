import React from "react"
import { LoginForm } from "../components/login/LoginForm"

export const Login = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="bg-white rounded shadow-lg max-w-md">
                <div className="mb-4">
                    <img src="http://happiiiercommunity.com/Images/Logo%20500x137%20transparente.png" alt="" />
                </div>
                <div className="px-6 py-4">
                    
                    <LoginForm />

                    <div className="mt-4 text-center">
                        <a className="text-blue-500" href="">¿Olvidaste la contraseña?</a>
                        <div>¿Te interesa unirte? <a className="text-blue-500" href="">Conoce más</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}