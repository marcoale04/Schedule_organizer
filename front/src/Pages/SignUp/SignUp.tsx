import { useNavigate } from "react-router-dom"
import "./signUp.css"
import unam from "../../assets/Biblioteca unam.jpeg"
import { LoginForm } from "../../Components/LoginForm/LoginForm";
import { SignupForm } from "../../Components/SignupForm/SignupForm";

export const SignUp = () => {

    let navigate = useNavigate();
    return(
        <>
    

            <div className="main-signup-container">
            <div className="signup-container">
                    <img src={unam} alt="unam" width={"576px"} height={"638px"} ></img>
                    <div style={{display:"flex", width:"100%", justifyContent:"center", alignItems:"center"}}>
                        <SignupForm />
                    </div>
                </div>
            </div>
        </>
    )
}