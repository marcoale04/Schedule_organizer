
import { useNavigate } from "react-router-dom"
import { Button } from "../../Components/Button/Button"
import { Carousel } from "../../Components/Carousel/Carousel"
import { Footer } from "../../Components/Footer/Footer"
import { ActionButton, Header } from "../../Components/Header/Header"
import { Schedule } from "../../Components/Schedule/Schedule"
import "./studentGenerate.css"
import { PopUp } from "../../Components/Popup/Popup"
import { useState } from "react"
import { TitleBar } from "../../Components/TitleBar/TitleBar"

export const StudentGenerate = () => {

    const hours = ["7:00 - 9:00", "9:00 - 11:00",  "11:00 - 13:00", "13:00 - 15:00"]
    const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
    const info = ["Lunes 7:00 - 9:00", "Miercoles 7:00 - 9:00", "Viernes 7:00 - 9:00"]
    const nav = useNavigate()

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
                            <p>¡Confirmación!</p>
                        </div>
                    }

                    contentSlot={
                        <div className="default_box">
                            <p>Estás a punto de registrar tu horario, ¿Estás seguro de continuar?</p>
                            <Button content="Aceptar" onClick={() => setPopup(false)}/>
                        </div>
                    }
                >
                </PopUp>
        )
    }

    const button_action: Array<ActionButton> = [
        {label: "Registrar horario", action: () => nav("/registrar_horario")},
        {label: "Consultar horario", action: () => nav("/consultar_horario")},
        {label: "Inicio", action: () => nav("/inicio")},
        {label: "Cerrar sesión", action: () => nav("/")}
    ]


    
    return(
        <>
            <Popupcito />
            <Header
                userName="Marco Alejandro Gomez Cabrera"
                actions={button_action}  
                color="var(--gradient-purple-blue"
            />
            <div className="student-generate-wrapper">
                <TitleBar title="Generar horario" color="var(--gradient-purples)"/>

                <div className="student-generate-main">
                    <Carousel role="student" color="var(--gradient-pinks)" />
                    <Schedule
                        days={days}
                        hours={hours}
                        background="var(--gradient-pinks)"
                        info={info}
                    />
                </div>
               <div className="student-generate-buttons">
                    <Button content="Regresar" onClick={() => nav(-1)}/>
                    <Button content="Continuar" onClick={() => setPopup(true)}/>

               </div>
            </div>
            <Footer />
        </>
    )
}