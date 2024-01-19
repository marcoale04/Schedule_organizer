import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./footer.css"

export const Footer = () => {

    const root = window.document.body;

	const ref = useRef<HTMLDivElement>(null);

	const [width, setWidth] = useState(0);
  	const [height, setHeight] = useState(0);

	useLayoutEffect(() => {
            setWidth((ref.current as HTMLElement).clientWidth);
            setHeight((ref.current as HTMLElement).clientHeight);
        

		root.style.setProperty('--footer-size', height + "px");
	}, [ref.current?.clientHeight]);
	
	useEffect(() => {
		function handleWindowResize() {
		  setWidth((ref.current as HTMLElement).clientWidth);
		  setHeight((ref.current as HTMLElement).clientHeight);
		  
		}

		window.addEventListener('resize', handleWindowResize);
	
		return () => {
		  	window.removeEventListener('resize', handleWindowResize);
		};
	}, []);
    return(
        <footer ref={ref}>
            <div className="footer-main-container">
                <div className="footer-info-container">
                    <p>
                        Bienvenido al prototipo del sistema de organización
                        de horarios universitarios  
                    </p>
                    <p>
                        2024, Ciudad de México, todos los derechos reservados
                    </p>
                </div>
                <div className="footer-icons-container">
                    <div className="footer-icon">

                    </div>
                    <div className="footer-icon">
                        
                    </div>
                    <div className="footer-icon">
                        
                    </div>
                    <div className="footer-icon">
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}