
import { Footer } from "../../Components/Footer/Footer"
import { ActionButton, Header } from "../../Components/Header/Header"
import "./managerGenerator.css"
import { Schedule } from "../../Components/Schedule/Schedule"
import { Carousel } from "../../Components/Carousel/Carousel"
import { Button } from "../../Components/Button/Button"
import { Selector } from "../../Components/Selector/Selector"
import { TitleBar } from "../../Components/TitleBar/TitleBar"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { PopUp } from "../../Components/Popup/Popup"

export const ManagerGenerator = () => {

    let hours = ["7:00 - 9:00", "9:00 - 11:00",  "11:00 - 13:00", "13:00 - 15:00"]
    let days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
    let info = ["Miercoles 11:00 - 13:00", "Viernes 13:00 - 15:00", "Martes 7:00 - 9:00"]

    let options = ["501", "502", "503", "104", "543", "212", "111" ]

    let nav = useNavigate();

    const button_action: Array<ActionButton> = [
        {label: "Registrar horarios", action: () => nav("/generar_horario")},
        {label: "Inicio", action: () => nav("/inicio")},
        {label: "Cerrar sesión", action: () => nav("/")}
    ]

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
                            <p>Estás a punto de registrar el horario del grupo X, ¿Estás seguro de continuar?</p>
                            <Button content="Aceptar" onClick={() => setPopup(false)}/>
                        </div>
                    }
                >
            </PopUp>
        )
    }
    return(
        <>
            <Popupcito />
            <Header 
                userName="Federico Diaz Acuña"
                actions={button_action}
                color="var(--gradient-purple-blue)"

            />
            <div className="manager-generate-wrapper">
                <TitleBar title="Generar horario" color="var(--gradient-purples)"/>
                <div className="manager-generate-selector">

                    <Selector label="Seleccionar grupo" options={options} />
                </div>
                <div className="manager-generate-main">
                    <div style={{display:"flex", width:"50%", justifyContent:"center", alignItems:"center"}}>
                        <Carousel role="manager" color="var(--gradient-pink-purple)" />

                    </div>
                    <div style={{display:"flex", width:"50%", justifyContent:"center", alignItems:"center"}}>

                        <Schedule
                            days={days}
                            hours={hours}
                            background="var(--gradient-pinks)"
                            info={info}
                        />
                    </div>
                </div>
               <div className="manager-generate-buttons">
                    <Button content="Regresar" onClick={() => nav(-1)}/>
                    <Button content="Continuar" onClick={() => setPopup(true) }/>

               </div>
            </div>
            <Footer />
        </>
    )
}