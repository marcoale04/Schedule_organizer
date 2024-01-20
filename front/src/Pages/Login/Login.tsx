import { useNavigate } from "react-router-dom"
import "./login.css"
import { TitleBar } from "../../Components/TitleBar/TitleBar";
import { LoginForm } from "../../Components/LoginForm/LoginForm";
import unam from "../../assets/Biblioteca unam.jpeg"

export const Login = () => {

    const navigate = useNavigate();
    return(
        <>
        
            <div className="main-login-container">
                <div className="login-container">
                    <img src={unam} alt="unam" width={"576px"} height={"576px"} ></img>
                    <div style={{display:"flex", width:"100%", justifyContent:"center", alignItems:"center"}}>

                        <LoginForm />
                    </div>
                </div>
            </div>
    
        </>
    )
}