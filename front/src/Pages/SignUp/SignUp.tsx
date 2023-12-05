import { useNavigate } from "react-router-dom"
import "./signUp.css"

export const SignUp = () => {

    let navigate = useNavigate();
    return(
        <>
        
            <header>
                <div className="header-content">
                
                
                </div>
            </header>

            <div className="main-container">
                <div className="title-container">
                    <div className="title">
                        <p>
                            Genera tu cuenta
                        </p>

                    </div>
                    <div className="hr-purple">
                    </div>
                </div>
                <div className="container">
                    <div style={{margin: "20px"}}>

                    </div>
                    <div className="form-container">
                        <p className="form-header">Registro de usuario</p>
                        <span className="input-container">
                            <p>
                                Nombre(s)
                            </p>
                            <input type="text"></input>
                        </span>
                        <span className="input-container">
                            <p>
                                Apellido(s)
                            </p>
                            <input type="text"></input>
                        </span>
                        <span className="input-container">
                            <p>
                                Nombre de usuario
                            </p>
                            <input type="text"></input>
                        </span>
                        <span className="input-container">
                            <p>
                                Contraseña
                            </p>
                            <input type="password"></input>
                        </span>
                        <span className="input-container">
                            <p>
                                Confirmación de ontraseña
                            </p>
                            <input type="password"></input>
                        </span>
                        <div className="messages-container">
                            <p onClick={() => {
                                navigate("/")
                            }}>
                                Si ya tienes una cienta, ingresa aquí
                            </p>
                        </div>
                        <div style={{margin: "10px"}}>

                        </div>
                        <div className="bts-form-container">
                            <button>
                                Regresar
                            </button>
                            <button
                                style={{background: "#F2F2F8", 
                                color:" #313132",
                                cursor: "default",
                                }}
                                
                            >
                                Continuar
                            </button>

                        </div>
                    </div>
                    
                </div>
            </div>
            <footer>
                
            </footer>
        </>
    )
}