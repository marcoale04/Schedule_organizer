import "./mainCard.css"


interface Props {
    children?: Array<React.ReactNode>;
}

export const MainCard = (props: Props) => {
    return(
        <>
             <div className="main-card-wrapper">
                {props.children?.map((item, index) => {
                    return(
                        item
                    )
                })}
                {/* <InfoCard schedules={schedules}  /> */}

         

            </div>
        </>
    )
}