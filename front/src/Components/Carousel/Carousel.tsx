import { useState } from "react";
import "./carousel.css"

interface Props {
    children?: Array<React.ReactNode>;
}

export const Carousel = (props: Props) => {

    let [selected, setSelected] = useState(0)

    return(
        <>
        <div className={`carousel-container `}>

            <div 
                style={{
                    display: "flex", 
                    width: "100%", 
                    justifyContent: "center", 
                    alignItems:"center",
                    gap: "15px",
                    right: "0"
                    
                }}
                className={`${true ? "perritos" : ""}`}
            >
            {props.children?.map((item, index) => {
                return (
                    <>
                        <div 
                            key={index}
                            style={{}}
                            className={``}>
                            {item}
                        </div>

                    </>
                )       
            })}
            </div>
        </div>
        <button
            onClick={() => {
                setSelected(selected++)
            }}
        >
            perritos
        </button>
        </>
    )
}
