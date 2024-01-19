import { useNavigate } from "react-router-dom"
import "./login.css"
import { TitleBar } from "../../Components/TitleBar/TitleBar";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";

export const Login = () => {

    const navigate = useNavigate();
    return(
        <>
        
            <Header />

            <div className="main-container">
                <TitleBar title="Este es un titulo de prueba" color="var(--gradient-purples)"/>
                <div className="container">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div style={{margin: "20px"}}>

                    </div>
                    <div className="form-container">
                        <p className="form-header">Inicio de sesión</p>
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
                        <div className="messages-container">
                            <p
                                onClick={() => {
                                    navigate("/signup")
                                }}
                            >
                                Si aún no tienes cuenta, registrate aquí
                            </p>
                            <p>Recuperar contraseña</p>
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
            <Footer />
    
        </>
    )
}