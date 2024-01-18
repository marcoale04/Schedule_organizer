import "./TitleBar.css"

interface Props{
    title: string,
    color: string
}
export const TitleBar = (props: Props) => {

    let body = window.document.body;
    body.style.setProperty("--background-title-var", props.color);
    return(
        <>
            <div className="title-container">
                <div className="title">
                    <p>
                        {props.title}
                    </p>

                </div>
                <div className="hr-purple">
                </div>
            </div>
        </>
    )
}