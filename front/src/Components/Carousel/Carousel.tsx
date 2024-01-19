import { useState } from "react";
import "./carousel.css"
import { MainCard } from "../MainCard/MainCard";
import { InfoCard } from "../InfoCard/InfoCard";
import rightArrow from "../../assets/right-arrow.svg"
import leftArrow from "../../assets/left-arrow.svg"
import { StudentsContainer } from "../StudentsContainer/StudentsContainer";

interface Props {
    children?: Array<React.ReactNode>;
    role: string,
    color: string

}

export const Carousel = (props: Props) => {

 

    let schedules1 = ["Lunes 7:00 - 9:00", "Miercoles 7:00 - 9:00", "Viernes 7:00 - 9:00"];

    let profesor1 = "Melissa Robles";

    let schedules2 = ["Jueves 7:00 - 9:00", "Martes 7:00 - 9:00", "Lunes 7:00 - 9:00"];

    let schedules3 = ["Miercoles 7:00 - 9:00", "Jueves 7:00 - 9:00", "Viernes 7:00 - 9:00"];


    let profesor2 = "Lilian Castro";

    let labels = ["Cálculo IV", "Algebra lineal"]

    let disp = 2;

    let students1 = ["Lionel Messi", "Cristiano Ronaldo", "Dua lipa", "Julio Gonzalez", "Lionel Messi", "Cristiano Ronaldo", "Dua lipa", "Julio Gonzalez", "Lionel Messi", "Cristiano Ronaldo", "Dua lipa", "Julio Gonzalez"]


    let students2 = ["Gabriel Montiel", "Federico Diaz", "Cristhian Hernandez", "Felix Hernandez", "Ricardo Ortiz", "Luis Torres"]
    const [selected, setSelected] = useState(1);

    function next() {
        if(selected == 2){
            setSelected(1);
        } else if(selected == 1){
            setSelected(2);
        }
    }

    function prev() {
        if(selected == 1){
            setSelected(2);
        } else if(selected == 2){
            setSelected(1);
        }
    }

    let estudiante1 = [
        <InfoCard schedules={schedules1} profesor={profesor1} disp={disp}  />, 
        <InfoCard schedules={schedules2}  profesor={profesor2} disp={disp}/>, 
        <InfoCard schedules={schedules1} profesor={"Juan Dinenno"} disp={disp}/>
    ]

    let estudiante2 = [
        <InfoCard schedules={schedules1} profesor={profesor2} disp={disp}  />, 
        <InfoCard schedules={schedules2}  profesor={profesor1} disp={disp}/>, 
        <InfoCard schedules={schedules3} profesor={"Roman Torres"} disp={disp}/>
    ]

    let teacher1 = [
        <StudentsContainer
            color="var(--gradient-purples)"
            students={students1}
        />
    ]

    let teacher2 = [
        <StudentsContainer
            color="var(--gradient-purples)"
            students={students2}
        />
    ]

    let body = window.document.body;
    body.style.setProperty("--carousel-background", props.color);

    return(
        <>
            <div className="carousel-main-container">
                <div className="carousel-label">
                    <p>
                        {labels[selected -1]}
                    </p>
                </div>
                <div className={`carousel-container `}>
                    <div 
                        className="arrow-button"
                        onClick={() => {
                            prev()
                        }}
                    >
                        <img src={leftArrow} alt="la" height={"20px"} width={"20px"}/>
                    </div>
                    {selected == 1 && 
                        <MainCard 
                            children={props.role == "student" ? estudiante1 : teacher1}
                            color={props.role == "student" ? "var(--gradient-pinks)" : "var(--gradient-purples)"}
                        />
                    }
                    {selected == 2 && 
                        <MainCard 
                            children={props.role == "student" ? estudiante2 : teacher2}
                            color={props.role == "student" ? "var(--gradient-pinks)" : "var(--gradient-purples)"}

                        />
                    }
                    <div 
                        className="arrow-button"
                        onClick={() => {
                            next()
                        }}
                    >
                        <img src={rightArrow} alt="ra" height={"20px"} width={"20px"}/>
                    </div>
                </div>
            
            </div>
        </>
    )
}


