function CourseCardAttribute({ icon, value }) {
    return (
        <div className="border border-divider rounded-full px-2 py-1 flex gap-2">
            <div>
                {icon}
            </div>
            {value}
        </div>
    )
}

export default function CourseCard({ course, bg = 'white' }) {
    return (
        <div className="rounded-xl p-4 flex flex-col gap-4 cursor-pointer group" style={{ backgroundColor: bg }}>
            <div className="rounded-xl overflow-hidden h-48">
                <img className="h-full w-full object-cover group-active:scale-120 pointer-events-none group-hover:scale-120 transition duration-400 ease-in-out" src={course.img} alt="" />
            </div>

            <div className="flex text-xs gap-2">

                {
                    course.duration && (
                        <CourseCardAttribute
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                </svg>
                            }
                            value={course.duration}
                        />
                    )
                }
                {
                    course.eligibility && (
                        <CourseCardAttribute
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mortarboard" viewBox="0 0 16 16">
                                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z" />
                                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z" />
                                </svg>
                            }
                            value={course.eligibility}
                        />
                    )
                }

            </div>

            <p className="text-lg sm:text-base md:text-lg font-medium">
                {course.name}
            </p>
        </div>
    )
}