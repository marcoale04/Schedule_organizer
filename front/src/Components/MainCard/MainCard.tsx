import "./mainCard.css"


interface Props {
    children: Array<React.ReactNode>;
    color: string
}

export const MainCard = (props: Props) => {

    let body = window.document.body;
    body.style.setProperty("--main-card-background", props.color);
    // body.style.setProperty("--main-card-justify", props.color);

    
    return(
        <>
             <div 
                className="main-card-wrapper"
                style={{justifyContent:`${props.children.length >= 3 ? "start" : "center"}`}}
            >
                {props.children?.map((item, index) => {
                    return(
                            item
                    )
                })}
            </div>
        </>
    )
}