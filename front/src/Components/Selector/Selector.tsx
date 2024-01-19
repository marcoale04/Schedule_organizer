import { useState } from "react"
import "./selector.css"

import arrowUp from "../../assets/chevron-up.svg"
import arrowDown from "../../assets/chevron-down.svg"

interface Props {
    label: string,
    options: Array<string>
}

export const Selector = (props:  Props) => {

    const [showOptions, setShowOptions] = useState(false);


    let body = window.document.body;
    body.style.setProperty("--selector-radius", showOptions ? "10px 10px 0 0" : "var(--radius)");
    return(
        <>
            <div 
                className="selector-main-container"
                onClick={() => {
                    setShowOptions(!showOptions);

                }}
            >
                <div className="selector-label">
                    <p> {props.label}</p>
                </div>
                <div className="selector-icon">
                    {showOptions && 
                        <img src={arrowUp} alt="f" height={"20px"} width={"20px"} />
                    }
                    {!showOptions && 
                        <img src={arrowDown} alt="f" height={"20px"} width={"20px"} />
                    }
                </div>
                {showOptions && 
                    <div className="selector-options">
                        {props.options.map((item, index) => {
                            return(
                                <div className="selector-option" >
                                    <p>
                                        {item}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </>
    )
}