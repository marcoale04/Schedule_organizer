
import { Footer } from "../../Components/Footer/Footer"
import { Header } from "../../Components/Header/Header"
import "./managerGenerator.css"
import { Schedule } from "../../Components/Schedule/Schedule"
import { Carousel } from "../../Components/Carousel/Carousel"
import { Button } from "../../Components/Button/Button"
import { Selector } from "../../Components/Selector/Selector"

export const ManagerGenerator = () => {

    let hours = ["7:00 - 9:00", "9:00 - 11:00",  "11:00 - 13:00", "13:00 - 15:00"]
    let days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
    let info = ["Miercoles 11:00 - 13:00", "Viernes 13:00 - 15:00", "Martes 7:00 - 9:00"]

    let options = ["501", "502", "503", "104", "543", "212", "111" ]
    return(
        <>
            <Header />
            <div className="manager-generate-wrapper">
                <div className="manager-generate-selector">

                    <Selector label="Seleccionar grupo" options={options} />
                </div>
                <div className="manager-generate-main">
                    <Carousel role="manager" color="var(--gradient-pink-purple)" />
                    <Schedule
                        days={days}
                        hours={hours}
                        background="var(--gradient-pinks)"
                        info={info}
                    />
                </div>
               <div className="manager-generate-buttons">
                    <Button content="Regresar" onClick={() => console.log("Regresar")}/>
                    <Button content="Continuar" onClick={() => console.log("Continuar")}/>

               </div>
            </div>
            <Footer />
        </>
    )
}