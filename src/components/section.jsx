export default function Section({ bg = '', children }) {
    return (
        <div className={`w-screen ${bg}`}>
            <div className={`px-8 max-w-[1280px] m-auto`}>
                {children}
            </div>
        </div>
    )
}