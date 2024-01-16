// import { Carousel } from "../../Components/Carousel/Carousel"
import { useState } from "react";
import { InfoCard } from "../../Components/InfoCard/InfoCard"
import { MainCard } from "../../Components/MainCard/MainCard"
import { Schedule } from "../../Components/Schedule/Schedule"
import Button from 'react-bootstrap/Button';

export const Playground = () => {

    let hours = ["7:00 - 9:00", "9:00 - 11:00",  "11:00 - 13:00", "13:00 - 15:00"]
    let days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]

    const [info, setInfo] = useState([""]) ;
    return(
        <>
            <div style={{
                display:"flex", 
                flexDirection:"column", 
                width:"100%", 
                height:"100vh",
                justifyContent:"center",
                alignItems:"center"
            }}>
                {/* <Carousel children={[
                    <MainCard 
                        children={[
                            <InfoCard schedules={schedules}  />, 
                            <InfoCard schedules={schedules}  />, 
                            <InfoCard schedules={schedules}  />
                        ]}
                    />,
                    <MainCard 
                    children={[
                            <InfoCard schedules={schedules}  />, 
                            <InfoCard schedules={schedules}  />, 
                            <InfoCard schedules={schedules}  />
                        ]}
                    />,
                    <MainCard 
                        children={[
                            <InfoCard schedules={schedules}  />, 
                            <InfoCard schedules={schedules}  />, 
                            <InfoCard schedules={schedules}  />
                        ]}
                    />,
                    <MainCard 
                        children={[
                            <InfoCard schedules={schedules}  />, 
                            <InfoCard schedules={schedules}  />, 
                            <InfoCard schedules={schedules}  />
                        ]}
                    />
                ]}/> */}
                <Schedule 
                    days={days} 
                    hours={hours} 
                    background="linear-gradient(90deg, #E387F5, #FF8ABE)"
                    info={info}
                />
                
                <button
                    onClick={() => {
                        // setInfo(["Viernes 9:00 - 11:00", "Miercoles 9:00 - 11:00", "Martes 7:00 - 9:00", "Jueves 13:00 - 15:00"])
                        setInfo([...info, "Miercoles 9:00 - 11:00"])
                    }}  
                >
                    Agregar profesor
                </button>
                {/* <Button /> */}
                                    

            </div>
        </>
    )
}