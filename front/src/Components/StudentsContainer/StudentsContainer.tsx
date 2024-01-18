import "./studentsContainer.css"

interface Props {
    color: string,
    students: Array<string>
}

export const StudentsContainer = (props: Props) => {

    let body = window.document.body;
    body.style.setProperty("--student-background", props.color);
    
    return(
        <>
            <div className="students-wrapper">
                {props.students.map((item, index) => {
                    return(
                        <div key={index} className="student">
                            <p>{item}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}