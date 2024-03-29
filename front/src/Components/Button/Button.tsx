import "./button.css"

interface Props {
    content: string,
    onClick: () => void
}

export const Button = (props: Props) => {
    return(
        <>
            <div 
                className="new-button"
                style={{color:"var(--white)"}}
                onClick={() => {
                    props.onClick()
                }}
            >
                <p>{props.content}</p>
            </div>
        </>
    )
}