import { useNavigate } from "react-router-dom"
import { ActionButton, Header } from "../../Components/Header/Header"
import { Schedule } from "../../Components/Schedule/Schedule"
import { TitleBar } from "../../Components/TitleBar/TitleBar"
import { Button } from "../../Components/Button/Button"
import { Footer } from "../../Components/Footer/Footer"
import { Carousel } from "../../Components/Carousel/Carousel"

import "./teacher.css"


export const Teacher = () => {

    let hours = ["7:00 - 9:00", "9:00 - 11:00",  "11:00 - 13:00", "13:00 - 15:00"]
    let days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
    let info = ["Lunes 7:00 - 9:00", "Miercoles 7:00 - 9:00", "Viernes 7:00 - 9:00"]


    let nav = useNavigate();

    const button_action: Array<ActionButton> = [
        {label: "Consultar matrícula", action: () => nav("/consulta_matricula")},
        {label: "Inicio", action: () => nav("/inicio")},
        {label: "Cerrar sesión", action: () => nav("/")}
    ]

    return(
        <>
            <Header
                userName="Melissa Lilian Robles Castro"
                actions={button_action} 
                color="var(--gradient-pinks)" 
            />
            <div className="teacher-query-wrapper">
                <TitleBar title="Consultar matricula" color="var(--gradient-purples)"/>

                <div className="teacher-query-main">
                    <Carousel role="teacher" color="var(--gradient-purple-blue)" />

                    <Schedule
                        days={days}
                        hours={hours}
                        background="var(--gradient-pinks)"
                        info={info}
                    />
                </div>
               <div className="teacher-query-buttons">
                    <Button content="Regresar" onClick={() => nav("/profesor")}/>
               </div>
            </div>
            <Footer />
        </>
    )
}