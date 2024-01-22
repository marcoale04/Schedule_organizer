import { ActionButton, Header } from "../../Components/Header/Header"
import { Schedule } from "../../Components/Schedule/Schedule"
import "./studentQuery.css"
import { Footer } from "../../Components/Footer/Footer"
import { MainCard } from "../../Components/MainCard/MainCard"
import { TeacherContainer } from "../../Components/TeacherContainer/TeacherContainer"
import { Button } from "../../Components/Button/Button"
import { useNavigate } from "react-router-dom"
import { TitleBar } from "../../Components/TitleBar/TitleBar"

export const StudentQuery = () => {

    let hours = ["7:00 - 9:00", "9:00 - 11:00",  "11:00 - 13:00", "13:00 - 15:00"]
    let days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
    let info = ["Lunes 7:00 - 9:00", "Miercoles 7:00 - 9:00", "Viernes 7:00 - 9:00"]

    let nav = useNavigate()

    const button_action: Array<ActionButton> = [
        {label: "Registrar horario", action: () => nav("/registrar_horario")},
        {label: "Consultar horario", action: () => nav("/consultar_horario")},
        {label: "Inicio", action: () => nav("/inicio")},
        {label: "Cerrar sesión", action: () => nav("/")}
    ]

    return(
        <>
            <Header
                userName="Marco Alejandro Gomez Cabrera"
                actions={button_action} 
                color="var(--gradient-purple-blue" 
            />
            <div className="student-query-wrapper">
                <TitleBar title="Consultar horario" color="var(--gradient-purples)"/>

                <div className="student-query-main">
                    <Schedule
                        days={days}
                        hours={hours}
                        background="var(--gradient-pinks)"
                        info={info}
                    />
                    <MainCard 
                        color="var(--gradient-pinks)"
                        children={[
                            <TeacherContainer 
                                teacher="Juan Escobar"
                                subject="Calculo IV"
                            />,
                            <TeacherContainer 
                                teacher="Cesar Huerta"
                                subject="Calculo II"

                            />,
                            <TeacherContainer 
                                teacher="Lionel Messi"
                                subject="Ecuaciones diferenciales"

                            />,
                            <TeacherContainer 
                                teacher="Emma Watsom"
                                subject="Matemáticas avanzadas de la física"
                            />,
                            <TeacherContainer 
                                teacher="Alejandro Mendoza"
                                subject="Variable compleja"

                            />,
                            <TeacherContainer 
                                teacher="Heriberto Romo"
                                subject="Topologia"

                            />,
                        ]}
                    />
                </div>
               <div className="student-query-buttons">
                    <Button content="Regresar" onClick={() => nav(-1)}/>
               </div>
            </div>
            <Footer />
        </>
    )
}