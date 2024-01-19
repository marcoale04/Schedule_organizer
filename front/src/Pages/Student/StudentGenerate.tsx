
import { Button } from "../../Components/Button/Button"
import { Carousel } from "../../Components/Carousel/Carousel"
import { Footer } from "../../Components/Footer/Footer"
import { Header } from "../../Components/Header/Header"
import { Schedule } from "../../Components/Schedule/Schedule"
import "./studentGenerate.css"

export const StudentGenerate = () => {

    let hours = ["7:00 - 9:00", "9:00 - 11:00",  "11:00 - 13:00", "13:00 - 15:00"]
    let days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
    let info = ["Lunes 7:00 - 9:00", "Miercoles 7:00 - 9:00", "Viernes 7:00 - 9:00"]
    return(
        <>
            <Header />
            <div className="student-generate-wrapper">
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
                    <Button content="Regresar" onClick={() => console.log("Regresar")}/>
                    <Button content="Continuar" onClick={() => console.log("Continuar")}/>

               </div>
            </div>
            <Footer />
        </>
    )
}