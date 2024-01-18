import { useEffect, useState } from "react";
import "./redirectCard.css"
import calendar from "../../assets/calendar.svg"
import pen from "../../assets/pen-to-sqare.svg"
import clipboard from "../../assets/clipboard.svg"
import addressBook from "../../assets/address-book.svg"

interface Props {
    icon: "calendar" | "schedule" | "diary" | "generate",
    background: string,
    label: string

}

export const RedirectCard = (props: Props) => {


    let body = window.document.body;
    body.style.setProperty("--background-redirect-card", props.background);

    const [icon, setIcon] = useState("");

    useEffect(() => {

        switch(props.icon){
            case "calendar":
                setIcon(calendar)
                break;
            case "schedule":
                setIcon(pen)
                break;
            case "diary":
                setIcon(addressBook)
                break;
            case "generate":
                setIcon(clipboard)
                break;
        }

    }, [])

    return(
        <>
            <div className="redirect-card-wrapper">
                <div className="redirect-icon">
                    <img src={icon} alt="a" height={"170px"} width={"170px"} />
                </div>
                <div className="redirect-description">
                    <p>{props.label}</p>
                </div>
            </div>
        </>
    )
}