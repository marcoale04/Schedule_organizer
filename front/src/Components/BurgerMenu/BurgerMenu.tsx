import { RefObject, useEffect, useRef } from "react"
import { ActionButton } from "../Header/Header"

import "./burgerMenu.css"

interface Props {
    actions: Array<ActionButton>,
    showMenu: boolean
    onClose: () => void
    
}
export const BurgerMenu = (props: Props) => {

    type AnyEvent = MouseEvent | TouchEvent;

    const myRef = useRef(null);

    function useOnClickOutside<T extends HTMLElement = HTMLElement>(
        ref: RefObject<T>,
        handler: (event: AnyEvent) => void,
        noRef?: RefObject<T>,
    ) {
        useEffect(() => {
            const listener = (event: AnyEvent) => {
                const el = ref?.current;
                const noEl = noRef?.current;
                if (
                    !el
                    || el.contains(event.target as Node)
                    || (noEl && noEl.contains(event.target as Node))
                ) {
                    return;
                }
                handler(event);
            };
            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);
            return () => {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('touchstart', listener);
            };
        }, [ref, handler]);
    }

    useOnClickOutside(myRef, () => {

        props.onClose();
        
    });


    return(
        <>
            {props.showMenu && 
                <>
                    <div  className="background-menu">
                        <div ref={myRef} className="burger-menu-container">
                            <div className="options-burger-container">
                                <i 
                                    className="fa-solid fa-xmark"
                                    onClick={() => {
                                        props.onClose()
                                    }}
                                >
                                </i>

                                {props.actions.map((item, index) => {
                                    return(
                                    <span className= "option-burger">
                                        <p
                                            onClick={() => {
                                                item.action()
                                                props.onClose()

                                            }}
                                            key={index}
                                        >
                                            {item.label}
                                        </p>

                                    </span>
                                )
                                })}
                            </div>

                        </div>
                    </div>
                </>
            
            }
            
        </>
    )
}