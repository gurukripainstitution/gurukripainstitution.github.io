import { useContext, useEffect, useRef } from "react"
import PrimaryButton from "../../../components/primary-button"
import CourseCard from "../../../components/course-card"
import { motion } from "framer-motion"
import CoursesContainer from "../../../components/courses-container"
import CourseContext from "../../../contexts/CourseContext"


export default function PopularCourses() {
    const {courses} = useContext(CourseContext)

    return (
        <div className="">
            <div className="py-16 flex flex-col gap-8">
                <div className="flex flex-col md:flex-row md:gap-2 gap-8 justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.5 } }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-heading font-medium text-center sm:text-left"
                    >
                        Most Popular <span className="text-primary"> Courses</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <PrimaryButton to={'/courses'} label={'View All Courses'} />
                    </motion.div>
                </div>

                <CoursesContainer>
                    {
                        [...courses].sort((a, b)=>b.popularity - a.popularity).filter((course)=>course.popularity>0.8).map((course, index) => (
                            <CourseCard key={index} course={course} />
                        ))
                    }
                </CoursesContainer>
            </div>
        </div>
    )
}