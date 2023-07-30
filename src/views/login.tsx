import React from "react"
export const Login = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="bg-white rounded shadow-lg max-w-md">
                <div className="mb-4">
                    <img src="http://happiiiercommunity.com/Images/Logo%20500x137%20transparente.png" alt="" />
                </div>
                <div className="">
                    <form action="" className="flex flex-col">
                        <div className="flex flex-col">
                            <label htmlFor="">Usuario</label>
                            <input className="border" type="text" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Contraseña</label>
                            <input className="border" type="password" />
                        </div>

                        <button>Ingresar</button>
                        <a href="">¿Olvidaste la contraseña?</a>
                        <div>¿Te interesa unirte? <a href="">Conoce más</a></div>
                    </form>
                </div>
            </div>
        </div>
    )
}