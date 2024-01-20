import "./teacherContainer.css"
interface Props {
    teacher: string,
    subject: string
}
export const TeacherContainer = (props : Props) => {
    return(
        <>
            <div className="teacher-container-wrapper">
                <div className="teacher-subject-container">
                    <p>
                        {props.subject}
                    </p>
                </div>
                <p>
                    {props.teacher}
                </p>
            </div>
        </>
    )
}