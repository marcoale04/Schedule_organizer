import React, { RefObject, useEffect, useRef } from 'react'
import "./popup.css";


interface Props {


    titleSlot?: React.ReactNode;
    contentSlot: React.ReactNode;
    showPopup: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    
}

export const PopUp: React.FC<Props> = (props: Props) => {

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


    const popupTitle = props.titleSlot ? props.titleSlot : <div className='title'></div>
    const poupContent = props.contentSlot;


    useOnClickOutside(myRef, () => {

        props.onClose();
        
    });


    return (
        <>

            {props.showPopup && (
                <>
                    <div className={`${"background"} `}>
                        <div ref={myRef} className={`${"popup_content"}  `}>
                            <div className={`${"popup_header"}  `} >
                                {popupTitle}
                                <i 
                                    className="fa-solid fa-xmark"
                                    onClick={() => {
                                        props.onClose();
                                    }}
                                >
                                </i>
                            </div>

                            <div className={"content_container"}>
                                {poupContent}
                            </div>
                        </div>
                    </div>
                </>
            )}

        </>
    );
}