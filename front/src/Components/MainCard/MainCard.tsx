import "./mainCard.css"


interface Props {
    children?: Array<React.ReactNode>;
    color: string
}

export const MainCard = (props: Props) => {

    let body = window.document.body;
    body.style.setProperty("--main-card-background", props.color);
    
    return(
        <>
             <div className="main-card-wrapper">
                {props.children?.map((item, index) => {
                    return(
                            item
                    )
                })}
            </div>
        </>
    )
}