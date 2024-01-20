import { useNavigate } from "react-router-dom"
import "./signupForm.css"
import { Button } from "../Button/Button";

export const SignupForm = () => {

    let navigate = useNavigate();
    return(
        <>
             <div className="form-signup-container">
                        <p className="form-signup-header">Registro de usuario</p>
                        <span className="input-container">
                            <p>
                                Nombre(s)
                            </p>
                            <input type="text"></input>
                        </span>
                        <span className="input-signup-container">
                            <p>
                                Apellido(s)
                            </p>
                            <input type="text"></input>
                        </span>
                        <span className="input-signup-container">
                            <p>
                                Nombre de usuario
                            </p>
                            <input type="text"></input>
                        </span>
                        <span className="input-signup-container">
                            <p>
                                Contraseña
                            </p>
                            <input type="password"></input>
                        </span>
                        <span className="input-signup-container">
                            <p>
                                Confirmación de ontraseña
                            </p>
                            <input type="password"></input>
                        </span>
                        <div className="messages-signup-container">
                            <p onClick={() => {
                                navigate("/login")
                            }}>
                                Si ya tienes una cienta, ingresa aquí
                            </p>
                        </div>
                        <div style={{margin: "10px"}}>

                        </div>
                        <div className="bts-form-signup-container">
                            <Button
                                content="Continuar"
                                onClick={() => {
                                    navigate("/login")
                                }}
                            />
                            
                        </div>
                    </div>
        </>
    )
}