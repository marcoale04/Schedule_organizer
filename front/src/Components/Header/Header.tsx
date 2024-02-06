
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./header.css"
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export interface ActionButton {
    label: string,
    action: () => void
}
interface Props {
    userName: string,
    actions: Array<ActionButton>,
    color: string
}

export const Header = (props: Props) => {
    const root = window.document.body;

	const ref = useRef<HTMLDivElement>(null);

	const [width, setWidth] = useState(0);
  	const [height, setHeight] = useState(0);
    const [responsive, setResponsive] = useState(false);
    const [showMenu, setMenu] = useState(false);

	

    let body = window.document.body;
    body.style.setProperty("--header-background", props.color);
    useLayoutEffect(() => {
        setWidth((ref.current as HTMLElement).clientWidth);
        setHeight((ref.current as HTMLElement).clientHeight);
    

        root.style.setProperty('--header-size', height + "px");
    }, [ref.current?.clientHeight]);

    useEffect(() => {
        function handleWindowResize() {
            setWidth((ref.current as HTMLElement).clientWidth);
            setHeight((ref.current as HTMLElement).clientHeight);
        
        }

        console.log("EL acho que ya trae el header es::::", width);

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function ResponsiveMenu () {
        if(width < 1100){
            return(
                <BurgerMenu actions={props.actions} showMenu={showMenu} />
            )
        } else{
            return(
                <>
                </>
            )
        }
    }
    
    return(
        <>
            <ResponsiveMenu />          
            <header ref={ref}>
                <div className="header-content">
                    <div className="name-container">
                        <p>{props.userName}</p>
                        
                    </div>
                    <div className="bts-header-container">
                        {width >= 1100 ? 
                            <>
                                {props.actions.map((item, index) => {
                                    return(
                                        <p
                                            onClick={() => {
                                                item.action()
                                            }}
                                            key={index}
                                        >
                                            {item.label}
                                        </p>
                                        
                                    )
                                })}
                            </>
                            : 
                            <>
                                {/* <BurgerMenu actions={props.actions} /> */}
                                <div onClick={() => {
                                    setMenu(true);
                                }}>
                                    <i className="fa-solid fa-bars"></i>

                                </div>
                            </>
                        }
                        
                

                    </div>
                    
                </div>
            </header>
        </>
    )
}
