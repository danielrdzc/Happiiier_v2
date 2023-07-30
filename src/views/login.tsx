import React from "react"
import { Link } from "react-router-dom"
export const Login = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="bg-white rounded shadow-lg max-w-md">
                <div className="mb-4">
                    <img src="http://happiiiercommunity.com/Images/Logo%20500x137%20transparente.png" alt="" />
                </div>
                <div className="px-6 py-4">
                    <form action="" className="flex flex-col">
                        <div className="flex flex-col mb-4">
                            <label className="text-xs font-medium text-blue-900 mb-2" htmlFor="">Usuario</label>
                            <input className="border border-gray-300 focus:border-gray-400 focus:border-1 
                                focus:outline-0 rounded-md py-2 px-3.5" type="text" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="text-xs font-medium text-blue-900 mb-2" htmlFor="">Contraseña</label>
                            <input className="border border-gray-300 focus:border-gray-400 focus:border-1 
                                focus:outline-0 rounded-md py-2 px-3.5" type="password" />
                        </div>

                        <Link to="/home">
                            <button className="bg-blue-800 px-5 py-2 rounded text-white text-sm w-full">Ingresar</button>
                        </Link>
                        
                        <div className="mt-4 text-center">
                            <a className="text-blue-500" href="">¿Olvidaste la contraseña?</a>
                            <div>¿Te interesa unirte? <a className="text-blue-500" href="">Conoce más</a></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}