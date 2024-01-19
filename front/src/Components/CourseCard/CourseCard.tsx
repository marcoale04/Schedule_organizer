import "./courseCard.css"

interface Props {
    teacher: string
}

export const CourseCard = (props: Props) => {
    return(
        <>
            <div className="course-card-main">
                <div className="course-card-teacher">
                    <div style={{display:"flex", justifyContent:"start", alignItems:"center", width:"100%", paddingLeft: "20px"}}>
                        <p style={{textAlign: "start"}}>
                            Profesor(a)
                        </p>

                    </div>
                    <p style={{textAlign: "center"}}>
                        {props.teacher}
                    </p>
                </div>
                <div className="course-card-editor">
                    <div className="course-card-message">
                        <p>Ingrese días y horarios</p>
                    </div>
                    <div className="course-card-schedules">
                            <input type="text"></input>
                            <input type="text"></input>
                        
                            <input type="text"></input>
                            <input type="text"></input>
                            <input type="text"></input>
                        
                            <input type="text"></input>
                        
                      
                      

                    </div>
                </div>
            </div>
        </>
    )
}