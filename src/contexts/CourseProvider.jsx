import { useEffect, useState } from "react"
import CourseContext from "./CourseContext"

export default function CourseProvider({ children }) {
    const [courses, setCourses] = useState(
        [
            { name: 'BCC - Basic Computer Course', img: 'images/bcc.png', duration: '36 hours', category: 'Digital Literacy Courses', popularity: 0.8, eligibility: null },
            { name: 'CCC - Course on Computer Concepts', img: 'images/ccc.png', duration: '90 hours', category: 'Digital Literacy Courses', popularity: 0.2, eligibility: '10th Pass' },
            { name: 'CCC Plus - Course on Computer Concepts Plus', img: 'images/cccp.png', duration: '126 hours', category: 'Digital Literacy Courses', popularity: 0.4, eligibility: '10th Pass' },
            { name: 'ECC - Expert Computer Course', img: 'images/ecc.png', duration: '200 hours', category: 'Digital Literacy Courses', popularity: 0.9, eligibility: '12th Pass' },

            { name: 'DCA - Diploma in Computer Applications (Subject Tuition only)', img: 'images/dca.png', duration: '1 year', category: 'Subject Tuition', popularity: 0.9, eligibility: '12th Pass' },
            { name: 'PGDCA - Post Graduate Diploma in Computer Applications (Subject Tuition only)', img: 'images/pgdca.png', duration: '1 year', category: 'Subject Tuition', popularity: 0.9, eligibility: 'Graduation' },

            { name: 'Tally Basics', img: 'images/tally-basics.jpg', duration: '4 months', category: 'Tally', popularity: 0.3, eligibility: '10th Pass' },
            { name: 'Tally Operator', img: 'images/tally-operator.jpg', duration: '4 months', category: 'Tally', popularity: 0.9, eligibility: '12th Pass' },
            { name: 'Tally Expert', img: 'images/tally-expert.jpg', duration: '4 months', category: 'Tally', popularity: 0.2, eligibility: '12th Pass' },
            { name: 'Tally Prime with GST', img: 'images/tally-prime-with-gst.jpg', duration: '4 months', category: 'Tally', popularity: 0.4, eligibility: '12th Pass' },
            { name: 'Tally with Return Filing', img: 'images/tally-with-return-filing.jpg', duration: '4 months', category: 'Tally', popularity: 0.5, eligibility: '12th Pass' },

            { name: 'MS Office', img: 'images/ms-office.png', duration: '4 months', category: 'Certificate Courses', popularity: 0.8, eligibility: '10th Pass' },
            { name: 'Advance Excel', img: 'images/advanced-excel.png', duration: '4 months', category: 'Certificate Courses', popularity: 0.9, eligibility: '12th Pass' },
            { name: 'Web Development', img: 'images/web-dev.png', duration: '4 months', category: 'Certificate Courses', popularity: 0.8, eligibility: '12th Pass' },
            { name: 'Android Programming', img: 'images/android-programming.png', duration: '4 months', category: 'Certificate Courses', popularity: 0.3, eligibility: '12th Pass' },
            { name: 'Hindi/English Typing', img: 'images/hindi-english-typing.png', duration: '4 months', category: 'Certificate Courses', popularity: 0.2, eligibility: '10th Pass' },
            { name: 'Any Computer Language', img: 'images/any-computer-language.png', duration: '4 months', category: 'Certificate Courses', popularity: 0.4, eligibility: '12th Pass' },

            { name: 'Python Django', img: 'images/django.png', duration: '1-2 months', category: 'Project Development', popularity: 0.9, eligibility: null },
            { name: 'Java Spring Boot Web', img: 'images/java-spring-boot.png', duration: '1-2 months', category: 'Project Development', popularity: 0.6, eligibility: null },
            { name: 'PHP', img: 'images/php.png', duration: '1-2 months', category: 'Project Development', popularity: 0.7, eligibility: null },
            { name: 'MySQL', img: 'images/mysql.png', duration: '1-2 months', category: 'Project Development', popularity: 0.9, eligibility: null },
            { name: 'Python Tkinter', img: 'images/python-tkinter.png', duration: '1-2 months', category: 'Project Development', popularity: 0.9, eligibility: null },
            { name: 'Java Swing', img: 'images/java-swing.png', duration: '1-2 months', category: 'Project Development', popularity: 0.9, eligibility: null },
            { name: 'Arduino Programming', img: 'images/arduino-programming.png', duration: '1-2 months', category: 'Project Development', popularity: 0.7, eligibility: null },
            { name: 'Node JS', img: 'images/nodejs.png', duration: '1-2 months', category: 'Project Development', popularity: 0.6, eligibility: null },
            { name: 'React JS', img: 'images/reactjs.png', duration: '1-2 months', category: 'Project Development', popularity: 0.6, eligibility: null }
        ]
    )

    let courseCategories = [
        { name: 'Digital Literacy Courses', bg: '#F0EBFF', img: 'images/icons/digital-literacy-courses.png' },
        { name: 'Tally', bg: '#E8FCF7', img: 'images/icons/tally.png' },
        { name: 'Subject Tuition', bg: '#FFFBEB', img: 'images/icons/subject-tuition.png' },
        { name: 'Certificate Courses', bg: '#53ff722e', img: 'images/icons/certificate-courses.png' },
        { name: 'Project Development', bg: '#53a3ff2e', img: 'images/icons/project-development.png' },
    ]

    courseCategories = courseCategories.map((category) => {
        const coursesLength = courses.filter((course) => course.category.toLowerCase() === category.name.toLowerCase()).length

        return {
            ...category, count: coursesLength
        }
    })

    return (
        <CourseContext.Provider
            value={{ courses, setCourses, courseCategories }}
        >
            {children}
        </CourseContext.Provider>
    )
}