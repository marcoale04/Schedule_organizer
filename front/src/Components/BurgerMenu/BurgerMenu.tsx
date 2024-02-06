import { ActionButton } from "../Header/Header"

interface Props {
    actions: Array<ActionButton>,
    showMenu: boolean
    
}
export const BurgerMenu = (props: Props) => {


    return(
        <>
            {props.showMenu && 
                <>
                    <div className={`${"background"} `}>
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
                    </div>
                </>
            
            }
            
        </>
    )
}