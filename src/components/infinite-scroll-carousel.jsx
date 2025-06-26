import { useRef, useState } from "react";
import { ArrowNavButton } from "./arrow-nav-button";

export function InfiniteScrollCarousel({ cardWidth, children }) {
    const containerRef = useRef(null)
    const [isScrolling, setIsScrolling] = useState(false);

    const CARD_WIDTH = cardWidth

    const scrollOnce = (offset) => {
        const container = containerRef.current
        if (!container || isScrolling) {
            return
        }

        setIsScrolling(true)

        let start = container.scrollLeft
        let target = start + offset

        if (target >= ((children.length + 1) * CARD_WIDTH)) {
            console.log('hiiii')
            container.scrollTo({ left: 0 })
        }
        if (target < 0) {
            container.scrollTo({ left: (children.length) * CARD_WIDTH })
        }


        start = container.scrollLeft
        target = start + offset
        container.scrollTo({ left: target, behavior: 'smooth' })


        const onScroll = () => {
            if (Math.abs(container.scrollLeft - target) < 2) {
                container.removeEventListener('scroll', onScroll)
                setIsScrolling(false)
            }
        }

        container.addEventListener('scroll', onScroll)
    }

    return (
        <div className="flex flex-col gap-6">

            <div className="flex gap-8 overflow-x-scroll hide-scrollbar" ref={containerRef}>

                {children}
                {children}

            </div>


            <div className="flex gap-4">
                {/* controls */}
                <ArrowNavButton isPrev={true} onClick={() => scrollOnce(-CARD_WIDTH)} />
                <ArrowNavButton onClick={() => scrollOnce(CARD_WIDTH)} />
            </div>

        </div>
    )
}