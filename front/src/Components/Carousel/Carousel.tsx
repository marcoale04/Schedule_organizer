import { useState } from "react";
import "./carousel.css"
import { MainCard } from "../MainCard/MainCard";
import { InfoCard } from "../InfoCard/InfoCard";
import rightArrow from "../../assets/right-arrow.svg"
import leftArrow from "../../assets/left-arrow.svg"

interface Props {
    children?: Array<React.ReactNode>;
}

export const Carousel = (props: Props) => {

 

    let schedules1 = ["Lunes 7:00 - 9:00", "Miercoles 7:00 - 9:00", "Viernes 7:00 - 9:00"];

    let profesor1 = "Melissa Robles";

    let schedules2 = ["Jueves 7:00 - 9:00", "Martes 7:00 - 9:00", "Lunes 7:00 - 9:00"];

    let profesor2 = "Lilian Castro";

    let disp = 2;

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

    return(
        <>
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
                        children={[
                            <InfoCard schedules={schedules1} profesor={profesor1} disp={disp}  />, 
                            <InfoCard schedules={schedules1}  profesor={profesor1} disp={disp}/>, 
                            <InfoCard schedules={schedules1} profesor={profesor1} disp={disp}/>
                        ]}
                    />
                }
                {selected == 2 && 
                    <MainCard 
                        children={[
                            <InfoCard schedules={schedules2} profesor={profesor2} disp={disp}  />, 
                            <InfoCard schedules={schedules2}  profesor={profesor2} disp={disp}/>, 
                            <InfoCard schedules={schedules2} profesor={profesor2} disp={disp}/>
                        ]}
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
        
        </>
    )
}


