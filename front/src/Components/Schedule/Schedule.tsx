import "./schedule.css"

interface Props {
    days: Array<string>,
    hours: Array<string> 
}

export const Schedule = (props: Props) => {

    let days = props.days;
    let hours = props.hours;

    return(
        <>
            <div className="schedule-container">
                <div style={{background: "aqua", width: "100%"}}>

                </div>
                <div style={{background: "green", width: "100%"}}>

                </div>
                <div style={{background: "purple", width: "100%"}}>

                </div>
                <div style={{background: "yellow", width: "100%"}}>

                </div>
                <div style={{background: "orange", width: "100%"}}>

                </div>
                <div style={{background: "aqua", width: "100%"}}>

                </div>
                <div style={{background: "green", width: "100%"}}>

                </div>
                <div style={{background: "purple", width: "100%"}}>

                </div>
                <div style={{background: "aqua", width: "100%"}}>

                </div>
                <div style={{background: "orange", width: "100%"}}>

                </div>
                <div style={{background: "gray", width: "100%"}}>

                </div>
                <div style={{background: "black", width: "100%"}}>

                </div>
                


               
                {/* <div style={{ width: "100%", height: "100%"}}>

                </div> */}
              

            </div>
        </>
    )
}