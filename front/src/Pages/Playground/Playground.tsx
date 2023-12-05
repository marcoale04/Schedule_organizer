import { InfoCard } from "../../Components/InfoCard/InfoCard"

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
                <div style={{
                    display:"flex",
                    width: "500px",
                    height: "500px",
                    justifyContent:"center",
                    alignItems:"center",
                    flexDirection: "column",
                    gap:"10px",
                    overflow: "scroll",
                    background: "linear-gradient(90deg, #E387F5, #FF8ABE",
                    borderRadius: "var(--radius)"
                }}>
                    <InfoCard schedules={schedules}  />

                </div>

            </div>
        </>
    )
}