import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    .carousel {
        overflow: hidden;
        padding: 0 20px;
        width: 100%;
    }
    
    .inner {
        cursor: grab;
        display: flex;
        gap: 30px;
        padding: 20px 0;
        width: max-content;
    }
`

function Carousel({ children }) {
    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.offsetWidth - carousel.current?.scrollWidth)
    }, [])

    return (
        <>
            <GlobalStyle />

            <motion.div className="carousel" ref={carousel}>
                <motion.div
                    className="inner"
                    whileTap={{ cursor: "grabbing" }}
                    drag="x"
                    dragConstraints={{ right: 0, left: width }}>
                    {children}
                </motion.div>
            </motion.div>
        </>
    )
}

export default Carousel
