import { useRef } from "react"

export function Marquee({ children }) {
    return (
        <div className="flex gap-8 overflow-hidden whitespace-nowrap">

            <div
                className="flex flex-shrink-0 gap-8 animate-infinite-scroll min-w-max"
            >
                {children}
            </div>

            <div
                className="flex flex-shrink-0 gap-8 animate-infinite-scroll min-w-max"
            >
                {children}
            </div>

        </div>
    )
}