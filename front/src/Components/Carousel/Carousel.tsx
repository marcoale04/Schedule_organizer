import "./carousel.css"

interface Props {
    children?: Array<React.ReactNode>;
}

export const Carousel = (props: Props) => {

    return(
        <>
        <div className="carousel-container">

            {props.children?.map((item, index) => {
                return item
            })}
        </div>
        </>
    )
}