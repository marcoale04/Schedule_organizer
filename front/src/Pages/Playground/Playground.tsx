// import { Carousel } from "../../Components/Carousel/Carousel"
import { useState } from "react";
import { InfoCard } from "../../Components/InfoCard/InfoCard"
import { MainCard } from "../../Components/MainCard/MainCard"
import { Schedule } from "../../Components/Schedule/Schedule"
import Button from 'react-bootstrap/Button';
import { Carousel } from "../../Components/Carousel/Carousel";
import { RedirectCard } from "../../Components/RedirectCard/RedirectCard";
import { TitleBar } from "../../Components/TitleBar/TitleBar";
import { StudentsContainer } from "../../Components/StudentsContainer/StudentsContainer";
import { PopUp } from "../../Components/Popup/Popup";
import { Selector } from "../../Components/Selector/Selector";

export const Playground = () => {

    let hours = ["7:00 - 9:00", "9:00 - 11:00",  "11:00 - 13:00", "13:00 - 15:00"]
    let days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]

    let schedules = ["Lunes 7:00 - 9:00", "Miercoles 7:00 - 9:00", "Viernes 7:00 - 9:00"];

    let profesor = "Melissa Robles";

    let students = ["Lionel Messi", "Cristiano Ronaldo", "Dua lipa", "Julio Gonzalez", "Lionel Messi", "Cristiano Ronaldo", "Dua lipa", "Julio Gonzalez", "Lionel Messi", "Cristiano Ronaldo", "Dua lipa", "Julio Gonzalez"]

    let disp = 2;

    const [info, setInfo] = useState([""]) ;

    const [popup, setPopup] = useState(false)

    
    return(
        <>
            <div style={{
                display:"flex", 
                flexDirection:"column", 
                width:"100%", 
                height:"100vh",
                justifyContent:"center",
                alignItems:"center"
            }}>
                
{/*                 
                <PopUp
                    showPopup={popup}
                    onClose={() => {
                        setPopup(false)
                    }}

                    titleSlot={
                        <div className="title">
                            <p>¡Prueba!</p>
                        </div>
                    }

                    contentSlot={
                        <div className="default_box">
                            <p>Este es un popup de prueba</p>
                            <button onClick={() => {

                                    setPopup(false)
                                }}
                            >
                                Aceptar
                            </button>
                        </div>
                    }
                >
                </PopUp>

                <button onClick={() => {
                    setPopup(true)
                }}>Popup</button> */}

                <Carousel role="jj" color="var(--gradient-purples)" />
                

                {/* <Selector label="Perritos" options={["Chihuahua", "Labrador", "pug", "Boxer", "Pastor", "Labrador", "pug", "Boxer", "Pastor"]} /> */}



                
        
                                    

            </div>
        </>
    )
}