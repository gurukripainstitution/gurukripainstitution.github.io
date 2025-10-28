import { div } from "framer-motion/client"
import PrimaryButton from "../../components/primary-button"
import { motion } from "framer-motion"
import { Marquee } from "../../components/marquee"
import CourseCategories from "./components/course-categories"
import PopularCourses from "./components/popular-courses"
import SplitCard from "../../components/split-card"
import Section from "../../components/section"
import SplitCardImage from "../../components/split-card-image"
import SplitCardContent from "../../components/split-card-content"
import Faq from "./components/faq"
import ContactUsCard from "../../components/contact-us-card"
import PageHeader from "../../components/page-header"
import { useLocation } from "react-router"
import NielitLogo from "../../components/nielit-logo"




function CompanySlider() {
    return (
        <div className="flex flex-col items-center gap-6">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <NielitLogo />

            </motion.div>

            <div className="w-screen bg-primary text-white py-4 text-lg">
                <Marquee>
                    {/* {[...Array(5)].map((_, k) => (
                        <img
                            key={k}
                            className="md:w-56 sm:w-42 w-36 h-auto"
                            src="https://cdn.prod.website-files.com/67ae25e5b332f13dff9ebd8d/67b360b29cf6f3d8e1e4a04b_eba940398cf5618c608285cedd01432b_Brand%20Logo%205.svg"
                            alt="Brand Logo"
                        />
                    ))} */}
                    <p>Guru Kripa Institute (NIELIT Facilitation Centre) - Practical courses like CCC, CCCP, ECC; Subject Tuition for DCA, PGDCA; Industrial training for Polytechnic/B.Tech - <span className="">Call: 98171-62762</span></p>
                </Marquee>
            </div>
        </div >
    )
}


export default function Home() {
    return (
        <div className="flex flex-col gap-24">

            <Section>
                {/* <div className="relative sm:px-8 md:px-24 lg:px-36 text-center flex flex-col items-center gap-8 mt-8"> */}
                <div className="relative sm:px-8 md:px-24 lg:px-36 text-center flex flex-col items-center gap-8 mt-8">
                    <PageHeader
                        heading={'Learn and Grow with Expert'}
                        highlightedHeading={'IT Courses'}
                        description={'Guru Kripa Institute offers certified courses like BCC, ECC and hands-on industrial training & internships to boost your IT career.'}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex sm:flex-row flex-col gap-4"
                    >
                        <PrimaryButton
                            to={'/courses'}
                            label={'Explore Courses'}
                        />
                        <PrimaryButton
                            label={'Contact Us'}
                            to={'/contact'}
                            border={true}
                            overlay={true}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="absolute right-0 bottom-12 sm:right-10 md:right-30 lg:right-40 -rotate-20 animate-float"
                    >
                        <img src="images/icons/landing-page-computer.svg" className="w-10 sm:w-12 pointer-events-none opacity-60" alt="" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="absolute left-0 bottom-0 sm:left-10 md:left-30 lg:left-40 -rotate-20 animate-float"
                    >
                        <img src="images/icons/landing-page-book.svg" className="w-10 sm:w-12 pointer-events-none opacity-60" alt="" />
                    </motion.div>
                </div>
            </Section>



            <Section>
                <div className="grid sm:grid-cols-[2fr_1fr_1fr] gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
                        viewport={{ once: true, amount: 0 }}
                        className="bg-red-200 rounded-xl overflow-hidden"
                    >
                        <img className="object-cover h-full w-full" src="images/img1.jpeg" alt="" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } }}
                        viewport={{ once: true, amount: 0 }}
                        className="flex flex-col gap-4"
                    >
                        <div className="bg-[#FF9F87] flex-1 p-4 flex flex-col gap-4 rounded-xl">
                            <div className="flex">
                                <img className="pointer-events-none w-28 sm:w-36" src="images/nielit-logo-small.png" alt="" />
                            </div>
                            <p className="text-lg sm:text-xl font-medium">
                                A NIELIT Facilitation Centre.
                            </p>
                        </div>
                        <div className="bg-[#7CEED0] flex-1 p-4 rounded-xl flex flex-col justify-center gap-8">

                            <p className="text-lg sm:text-xl font-medium">
                                "Education is the most powerful tool to transform lives, especially when combined with technology."
                            </p>

                            <div className="flex flex-col">
                                <p className="font-medium">Dr. A.P.J. Abdul Kalam</p>
                                {/* <p>Quote from our teacher</p> */}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.5 } }}
                        viewport={{ once: true, amount: 0 }}
                        className="bg-blue-200 rounded-xl overflow-hidden"
                    >
                        <img className="object-cover h-full w-full" src="images/img2.jpeg" alt="" />
                    </motion.div>
                </div>
            </Section>

            <Section>
                <CompanySlider />
            </Section>

            <Section>
                <CourseCategories />
            </Section>


            <Section bg="bg-surface">
                <PopularCourses />
            </Section>


            <Section>
                <SplitCard>

                    <SplitCardImage imgSrc={'images/img6.png'}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="absolute bottom-4 left-4 bg-white rounded-xl p-4 w-48 flex flex-col gap-4"
                        >
                            <p className="font-medium text-lg">Average class completion rate</p>
                            <p className="text-primary text-4xl font-medium">93%</p>
                        </motion.div>
                    </SplitCardImage>

                    <SplitCardContent
                        heading={'Empowering Future IT Professionals with'}
                        highlightedHeading={'NIELIT Certification'}
                        description={'Guru Kripa Institute of Management and IT provides industry-recognized NIELIT courses combined with practical training and real-world internships. Our expert faculty and modern labs prepare you for a successful career in technology.'}
                        primaryButton={
                            <PrimaryButton to={'/courses'} label={'Explore Courses'} />
                        }
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex gap-16"
                        >
                            <div className="flex flex-col gap-2">
                                <p className="font-medium text-2xl sm:text-3xl">300+</p>
                                <p className="text-xs sm:text-sm">
                                    We offer over 300 hours of comprehensive IT courses including BCC, ECC, etc., and professional software training.
                                </p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="font-medium text-2xl sm:text-3xl">1000+</p>
                                <p className="text-xs sm:text-sm">
                                    Join over 1,000 students who have chosen Guru Kripa Institute to build skills and unlock career opportunities in IT and management.
                                </p>
                            </div>
                        </motion.div>
                    </SplitCardContent>
                </SplitCard>
            </Section>


            <Section>
                <Faq />
            </Section>


        </div>
    )
}