import "./login.css"
import { LoginForm } from "../../Components/LoginForm/LoginForm";
import unam from "../../assets/Biblioteca unam.jpeg"

export const Login = () => {

    

    return(
        <>
        
            <div className="main-login-container">
                <div className="login-container">
                    <img src={unam} alt="unam"  ></img>
                    <div style={{display:"flex", width:"100%", justifyContent:"center", alignItems:"center"}}>

                        <LoginForm />
                    </div>
                </div>
            </div>
    
        </>
    )
}