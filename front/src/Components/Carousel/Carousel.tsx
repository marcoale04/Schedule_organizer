interface Props {
    children?: Array<React.ReactNode>;
}

export const Carousel = (props: Props) => {

    return(
        <>
            
            <div style={{
                display:"flex",
                width: "500px",
                height: "500px",
                justifyContent:"center",
                alignItems:"center",
                flexDirection: "column",
                gap:"10px",
                overflow: "scroll",
                background: "linear-gradient(90deg, #E387F5, #FF8ABE",
                borderRadius: "var(--radius)",
                padding: "10px"
            }}>
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