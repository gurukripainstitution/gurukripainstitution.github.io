import { useContext, useRef, useState } from "react"
import { ArrowNavButton } from "../../../components/arrow-nav-button"
import { InfiniteScrollCarousel } from "../../../components/infinite-scroll-carousel"
import { motion } from 'framer-motion'
import CourseContext from "../../../contexts/CourseContext"

function CourseCategoryCard({ course }) {
    return (
        <div
            className="flex flex-col items-start p-6 rounded-xl flex-shrink-0 justify-between"
            style={{ backgroundColor: course.bg, width: '200px', height: '200px' }}
        >
            <div className="w-16">
                <img className="pointer-events-none object-cover h-full w-full" src={course.img} alt="" />
            </div>

            <div className="flex flex-col gap-2">
                <p className="font-medium text-lg">{course.name}</p>
                <p>{course.count} Courses</p>
            </div>
        </div>
    )
}

function CoursesContainer() {
    const { courseCategories } = useContext(CourseContext)

    const CARD_WIDTH = 232

    return (
        <div className="w-full">
            <InfiniteScrollCarousel
                cardWidth={CARD_WIDTH}
            >
                {
                    courseCategories.map((course, index) => (
                        <CourseCategoryCard course={course} key={index} />
                    ))
                }
            </InfiniteScrollCarousel>
        </div>
    )
}

export default function CourseCategories() {
    return (
        <div className="flex flex-col sm:flex-row gap-8">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.5 } }}
                viewport={{ once: true, amount: 0.2 }}
                className="w-full sm:w-2/5"
            >
                <p className="text-heading font-medium text-center sm:text-left">
                    Explore Course <span className="text-primary"> Categories</span>
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
                viewport={{ once: true, amount: 0.2 }}
                className="w-full sm:w-3/5"
            >
                <CoursesContainer />
            </motion.div>
        </div>
    )
}