import "./schedule.css"

interface Props {
    days: Array<string>,
    hours: Array<string>, 
    background: string,
    info?: Array<string>
}

export const Schedule = (props: Props) => {

    let days = props.days;
    let hours = props.hours;

    let prueba = days.length * hours.length;

    
    // let a = Object.fromEntries(gatito)


    let body = window.document.body;
    body.style.setProperty("--background-calendar", props.background);

    let schedules: {[key: string]: string} = {
        "0": "Lunes 7:00 - 9:00",
        "1": "Martes 7:00 - 9:00",
        "2": "Miercoles 7:00 - 9:00",
        "3": "Jueves 7:00 - 9:00",
        "4": "Viernes 7:00 - 9:00",
        "5": "Lunes 9:00 - 11:00" ,
        "6": "Martes 9:00 - 11:00",
        "7": "Miercoles 9:00 - 11:00",
        "8": "Jueves 9:00 - 11:00",
        "9": "Viernes 9:00 - 11:00",
        "10": "Lunes 11:00 - 13:00",
        "11": "Martes 11:00 - 13:00",
        "12": "Miercoles 11:00 - 13:00",
        "13": "Jueves 11:00 - 13:00",
        "14": "Viernes 11:00 - 13:00",
        "15": "Lunes 13:00 - 15:00",
        "16":  "Martes 13:00 - 15:00",
        "17": "Miercoles 13:00 - 15:00",
        "18": "Jueves 13:00 - 15:00",
        "19": "Viernes 13:00 - 15:00",
    }

    return(
        <>
            <div className="schedule-container">
                <div onClick={() => console.log()} className="corner">

                </div>
                <div 
    
                    
                    className="days-container"
                >
                   {days.map((item,index) => {
                        return(
                            <div key={index} style={{display: "flex", width:"100%", height:"100%", justifyContent:"center", alignItems:"center", border:"0.5px solid gray" }}>
                                <p key={index}>{item}</p>
                            </div>
                        )
                   })}

                </div>
                <div className="hours-container">
                    {hours.map((item, index) => {
                        return(
                            <div key={index}style={{display: "flex", width:"100%", height:"100%", justifyContent:"center", alignItems:"center", border:"0.5px solid gray" }}>

                            <p key={index}>{item}</p>
                            </div>
                        )
                    })}
                </div>

                <div className="match-container">
                    {[...Array(prueba).keys()].map((item, index) => {
                        return(
                            <div key={index} style={{display: "flex", width:"100%", height:"100%", justifyContent:"center", alignItems:"center", border:"0.5px solid gray" }}>
                                {props.info?.includes(schedules[String(item)])   && <p >{item}</p> }
                                
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}