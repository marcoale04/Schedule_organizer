import "./infoCard.css"

interface Props {
    color?: string,
    schedules: Array<string>,
    profesor: string,
    disp: number
}
export const InfoCard = (props: Props) => {
    return(
        <>
            <div className="info-card-container">
                <div
                    style={{ 
                        background: `${props.color ? props.color : "linear-gradient(90deg, #E387F5, #FF8ABE"}`
                    }}
                    className="schedule-container"
                    
                >
                    {props.schedules.map((item, index) => {
                        return(
                            <p key={index}>{item}</p>
                        )
                    })}
                </div>
                <div
                    style={{ 
                        background: `${props.color ? props.color : "linear-gradient(90deg, #E387F5, #FF8ABE"}`
                    }}
                    className="teacher-info-container"
                >
                    <p>
                        Profesor(a)
                    </p>
                    <p>
                        {props.profesor}
                    </p>
                </div>
                <div
                    style={{ 
                        background: `${props.color ? props.color : "linear-gradient(90deg, #E387F5, #FF8ABE"}`
                    }}
                    className="disp-info-container"
                >
                    <p>
                        Espacios disponibles
                    </p>
                    <p className="disp">
                        {props.disp}
                    </p>
              
                </div>
                
                

            </div>
        </>
    )
}