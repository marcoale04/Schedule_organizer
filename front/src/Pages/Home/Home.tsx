import { useEffect } from "react"
import { Footer } from "../../Components/Footer/Footer"
import { Header } from "../../Components/Header/Header"
import { RedirectCard } from "../../Components/RedirectCard/RedirectCard"
import "./home.css"
import pen from "../../assets/pen-to-sqare.svg";
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


    useEffect(() => {

    })
    return(
        <>
            <Header />
            <div className="home-main-container">
                <TitleBar title={"Inicio " + dictionary[props.role]} color="var(--gradient-purples)"/>
                <div className="home-cards-container">

                    {props.role == "student" && 
                        <>
                            <RedirectCard 
                                onClick={() => {
                                    navigate("");
                                    console.log("Le picaste al lapiz")

                                }} 
                                icon="schedule" 
                                background="var(--gradient-pinks)" 
                                label="Generar horario" 
                            />
                            <RedirectCard 
                                onClick={() => {
                                    navigate("")
                                    console.log("Le picaste al calendario")

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
                                navigate("")
                                console.log("Le picaste al diario")

                            }} 
                        />
                    }

                    {props.role == "manager" && 
                        <RedirectCard 
                            icon="generate"
                            label="Registrar horarios"
                            background="var(--gradient-pink-purple)"
                            onClick={() => {
                                navigate("")
                                console.log("Le picaste al diario")

                            }} 
                        />
                    }
                    


                </div>
            </div>
            <Footer /> 
        </>
    )
}