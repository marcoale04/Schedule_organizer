import "./infoCard.css"

interface Props {
    color?: string,
    schedules: Array<string>
}
export const InfoCard = (props: Props) => {
    return(
        <>
            <div className="info-card-container">
                <div
                    className="schedule-container"
                    style={{ 
                        background: `${props.color ? props.color : "linear-gradient(90deg, #E387F5, #FF8ABE"}`
                    }}
                >
                    {props.schedules.map((item, index) => {
                        return(
                            <div key={index} className="schedule">
                                <p>{item}</p>
                            </div>
                        )
                    })}
                    
                </div>
                
                

            </div>
        </>
    )
}