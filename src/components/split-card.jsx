export default function SplitCard({children}) {
    return (
        <div className="flex sm:flex-row flex-col gap-16">
            {children}
        </div>
    )
}