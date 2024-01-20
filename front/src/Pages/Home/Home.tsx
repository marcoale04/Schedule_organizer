import { useEffect, useState } from "react"
import { Footer } from "../../Components/Footer/Footer"
import { ActionButton, Header } from "../../Components/Header/Header"
import { RedirectCard } from "../../Components/RedirectCard/RedirectCard"
import "./home.css"
import { useNavigate } from "react-router-dom"
import { TitleBar } from "../../Components/TitleBar/TitleBar"
interface Props {
    role: string
}

export const Home = (props: Props) => {

    let navigate = useNavigate();

    let dictionary: {[key: string]: string} = {
        "teacher": "profesor",
        "student": "alumno",
        "manager": "directivo"
    }

    let nav = useNavigate()
    const [user, setUser] = useState("");
    const [color, setColor] = useState("");

    const [buttonAction, setButton] = useState<Array<ActionButton>>([])
    useEffect(() => {
        switch(props.role){
            case "student":
                setUser("Marco Alejandro Gomez Cabrera");
                setColor("var(--gradient-purple-blue")
                setButton(
                    [
                        {label: "Registrar horario", action: () => nav("/registrar_horario")},
                        {label: "Consultar horario", action: () => nav("/consultar_horario")},
                        {label: "Inicio", action: () => nav("/alumno")},
                        {label: "Cerrar sesión", action: () => nav("/login")}
                    ]
                )
                break;
            case "teacher":
                setColor("var(--gradient-pinks)")

                setButton(
                    [
                        {label: "Consultar matrícula", action: () => nav("/consulta_matricula")},
                        {label: "Inicio", action: () => nav("/profesor")},
                        {label: "Cerrar sesión", action: () => nav("/login")}
                    ]
                )
                setUser("Melissa Lilian Robles Castro")
                break;
            case "manager":
                setColor("var(--gradient-pink-blue)")
                setButton(
                    [
                        {label: "Registrar horarios", action: () => nav("/generar_horario")},
                        {label: "Inicio", action: () => nav("/directivo")},
                        {label: "Cerrar sesión", action: () => nav("/login")}
                    ]
                )
                setUser("Federico Diaz Acuña");
                break;
        }
    }, [])

    return(
        <>
            <Header
                userName={user}
                actions={buttonAction}  
                color={color}
            />
            <div className="home-main-container">
                <TitleBar title={"Inicio " + dictionary[props.role]} color="var(--gradient-purples)"/>
                <div className="home-cards-container">

                    {props.role == "student" && 
                        <>
                            <RedirectCard 
                                onClick={() => {
                                    navigate("/registrar_horario");
                                }} 
                                icon="schedule" 
                                background="var(--gradient-pinks)" 
                                label="Generar horario" 
                            />
                            <RedirectCard 
                                onClick={() => {
                                    navigate("/consultar_horario")
                                }} 
                                icon="calendar" 
                                background="var(--gradient-pinks)" 
                                label="Consultar horario" 
                            />

                        </>
                    }

                    {props.role == "teacher" && 
                        <RedirectCard 
                            icon="diary"
                            label="Consultar matrícula"
                            background="var(--gradient-purples)"
                            onClick={() => {
                                navigate("/consulta_matricula");
                            }} 
                        />
                    }

                    {props.role == "manager" && 
                        <RedirectCard 
                            icon="generate"
                            label="Registrar horarios"
                            background="var(--gradient-pink-purple)"
                            onClick={() => {
                                navigate("/generar_horario")
                                
                            }} 
                        />
                    }
                    


                </div>
            </div>
            <Footer /> 
        </>
    )
}