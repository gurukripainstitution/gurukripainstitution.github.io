import { useContext, useState } from "react";
import CourseCard from "../../components/course-card";
import CoursesContainer from "../../components/courses-container";
import PageHeader from "../../components/page-header";
import Section from "../../components/section";
import { motion } from "framer-motion";
import CourseContext from "../../contexts/CourseContext";

function CourseCategoryButton({ label, isActive, onClick }) {
    return (
        <button type="button" onClick={onClick} className={`py-4 text-nowrap px-8 cursor-pointer rounded-full ${isActive ? 'bg-primary text-white' : ''}`}>
            {label}
        </button>
    )
}

export default function Courses() {
    const [currentCategory, setCurrentCategory] = useState('all')

    const {courses} = useContext(CourseContext)

    const {courseCategories} = useContext(CourseContext)

    function handleCategoryClick(category) {
        setCurrentCategory(category.toLowerCase())
    }

    return (
        <div className="flex flex-col gap-24">

            <Section>
                <div className="sm:px-24 md:px-48 px-8 text-center flex flex-col items-center gap-8 mt-8">
                    <PageHeader
                        heading={'Browse our'}
                        highlightedHeading={'Courses'}
                        description={'Explore 500+ hours of expert-led courses and learn at your own pace. Browse now and start your journey!'}
                    />
                </div>
            </Section>

            <Section>
                <div className="flex flex-col gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="px-4 py-3 bg-surface flex gap-1 rounded-full overflow-auto">
                            {
                                [{name: 'All'}, ...courseCategories].map((category, index) => (
                                    <CourseCategoryButton key={index} label={category.name} isActive={category.name.toLowerCase() === currentCategory} onClick={() => handleCategoryClick(category.name)} />
                                ))
                            }
                        </div>
                    </motion.div>

                    <div
                        key={currentCategory}
                    >
                        <CoursesContainer animationDelay={0.1}>

                            {
                                courses.map((course, index) => {
                                    if (currentCategory === 'all' || currentCategory === course.category.toLowerCase()) {
                                        return <CourseCard key={index} bg="#F7F7F7" course={course} />
                                    }
                                    return null
                                })
                            }
                        </CoursesContainer>
                    </div>
                </div>
            </Section>


        </div>
    )
}