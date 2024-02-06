import "./signUp.css"
import unam from "../../assets/Biblioteca unam.jpeg"
import { SignupForm } from "../../Components/SignupForm/SignupForm";

export const SignUp = () => {

    return(
        <>
    

            <div className="main-signup-container">
            <div className="signup-container">
                    <img src={unam} alt="unam"></img>
                    <div style={{display:"flex", width:"100%", justifyContent:"center", alignItems:"center"}}>
                        <SignupForm />
                    </div>
                </div>
            </div>
        </>
    )
}