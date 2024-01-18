// import { Carousel } from "../../Components/Carousel/Carousel"
import { useState } from "react";
import { InfoCard } from "../../Components/InfoCard/InfoCard"
import { MainCard } from "../../Components/MainCard/MainCard"
import { Schedule } from "../../Components/Schedule/Schedule"
import Button from 'react-bootstrap/Button';
import { Carousel } from "../../Components/Carousel/Carousel";
import { RedirectCard } from "../../Components/RedirectCard/RedirectCard";

export const Playground = () => {

    let hours = ["7:00 - 9:00", "9:00 - 11:00",  "11:00 - 13:00", "13:00 - 15:00"]
    let days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]

    let schedules = ["Lunes 7:00 - 9:00", "Miercoles 7:00 - 9:00", "Viernes 7:00 - 9:00"];

    let profesor = "Melissa Robles";

    let disp = 2;

    const [info, setInfo] = useState([""]) ;
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
                
                
                {/* <Carousel /> */}
                <RedirectCard icon="calendar" background="var( --gradient-pinks)" label="Suaves y redondos" />


            
        

                
                {/* <Button /> */}
                                    

            </div>
        </>
    )
}