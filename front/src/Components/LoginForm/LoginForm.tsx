import { useNavigate } from "react-router-dom"
import "./loginForm.css"
import { Button } from "../Button/Button";
import { useState } from "react";
import { PopUp } from "../Popup/Popup";

export const LoginForm = () => {

    const [userName, setUser] = useState("");

    const [pass, setPass] = useState("");

    const nav = useNavigate();

    const [showPopup, setPopup] = useState(false)

    function Popupcito() {
        return(
            <PopUp
                    showPopup={showPopup}
                    onClose={() => {
                        setPopup(false)
                    }}

                    titleSlot={
                        <div className="title">
                            <p>¡Error!</p>
                        </div>
                    }

                    contentSlot={
                        <div className="default_box">
                            <p>Datos ingresados incorrectamente, intentalo de nuevo</p>
                            <Button content="Aceptar" onClick={() => setPopup(false)}/>
                        </div>
                    }
                >
                </PopUp>
        )
    }

    return(
        <>
            <Popupcito />
             <div className="form-container">
                        <p className="form-header">Inicio de sesión</p>
                        <span className="input-container">
                            <p>
                                Nombre de usuario
                            </p>
                            <input 
                                type="text"
                                value={userName}
                                onChange={(e) => {
                                    setUser(e.target.value);
                                }}
                            />
                        </span>
                        <span className="input-container">
                            <p>
                                Contraseña
                            </p>
                            <input 
                                type="password"
                                value={pass}
                                onChange={(e) => {
                                    setPass(e.target.value);
                                }}
                            />
        
                            
                        </span>
                        <div className="messages-container">
                            <p
                                onClick={() => {
                                    nav("/signup")
                                }}
                            >
                                Si aún no tienes cuenta, registrate aquí
                            </p>
                        </div>
                        <div style={{margin: "10px"}}>

                        </div>
                        <div className="bts-form-container">
                            <Button
                                content="Continuar"  
                                onClick={() => {
                                    if(userName == "marco" && pass.length > 0){
                                        nav("/alumno");
                                    } else if(userName == "melissa" && pass.length > 0){
                                        nav("/profesor");
                                    } else if(userName == "federico" && pass.length > 0){
                                        nav("/directivo")
                                    } else {
                                        setPopup(true);
                                    }
                                }}      
                            />
                                
                         

                        </div>
                    </div>
        </>
    )
}