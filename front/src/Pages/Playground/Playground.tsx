import { Carousel } from "../../Components/Carousel/Carousel"
import { InfoCard } from "../../Components/InfoCard/InfoCard"
import { MainCard } from "../../Components/MainCard/MainCard"

export const Playground = () => {

    let schedules = ["Lun 7:00 - 9:00", "Mie 7:00 - 9:00",  "Vie 7:00 - 9:00"]
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
                <Carousel children={[
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
                ]}/>
                
                

            </div>
        </>
    )
}