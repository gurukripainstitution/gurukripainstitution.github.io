import PageHeader from "../../components/page-header";
import PrimaryButton from "../../components/primary-button";
import Section from "../../components/section";
import SplitCard from "../../components/split-card";
import SplitCardContent from "../../components/split-card-content";
import SplitCardImage from "../../components/split-card-image";
import Faq from "../home/components/faq";
import { motion } from "framer-motion"

function GeneralInfoItem({ label, description }) {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-primary text-3xl sm:text-6xl font-medium">{label}</p>
            <p className="text-xs sm:text-sm">{description}</p>
        </div>
    )
}

function GeneralInfo() {
    return (
        <div className="flex flex-col gap-12">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }}
                viewport={{ once: true, amount: 0 }}
                className="w-full rounded-xl overflow-hidden"
            >
                <img className="object-cover h-full w-full" src="images/img3.jpeg" alt="" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.5 } }}
                viewport={{ once: true, amount: 0 }}
                className="flex flex-wrap gap-4 justify-between"
            >
                <GeneralInfoItem
                    label={'1,000+'}
                    description={'Students Enrolled'}
                />
                <GeneralInfoItem
                    label={'50+'}
                    description={'Five-star reviews'}
                />
            </motion.div>
        </div>
    )
}

function CoreValueCard({ bg, img, label, description }) {
    return (
        <div
            className="flex flex-col items-start p-6 rounded-xl justify-between mx-auto md:mx-0"
            style={{ backgroundColor: bg, height: '225px' }}
        >
            <div className="h-18">
                <img className="object-cover w-full h-full" src={img} alt="" />
            </div>

            <div className="flex flex-col gap-2">
                <p className="font-medium text-base sm:text-lg">{label}</p>
                <p className="text-xs sm:text-sm">{description}</p>
            </div>
        </div>
    )
}

function CoreValues() {
    const coreValuesData = [
        { bg: '#F0EBFF', label: 'Quality Education', description: 'Delivering industry-relevant knowledge with certified courses.', img: 'images/icons/quality-education.png' },
        { bg: '#FFEFEB', label: 'Integrity', description: 'Maintaining honesty and transparency in all our practices.', img: 'images/icons/integrity.png' },
        { bg: '#E8FCF7', label: 'Student Success', description: 'Focusing on skill development and career growth.', img: 'images/icons/student-success.png' },
        { bg: '#FFFBEB', label: 'Innovation', description: 'Embracing modern technology and teaching methods.', img: 'images/icons/innovation.png' },
    ]

    return (
        <div className="flex flex-col gap-8">
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.5 } }}
                viewport={{ once: true, amount: 0.2 }}
                className="font-medium text-heading text-center"
            >
                Our Core <span className="text-primary">Values</span>
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
                viewport={{ once: true, amount: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
            >
                {
                    coreValuesData.map((coreValue, index) => (
                        <CoreValueCard
                            key={index}
                            bg={coreValue.bg}
                            img={coreValue.img}
                            label={coreValue.label}
                            description={coreValue.description}
                        />
                    ))
                }
            </motion.div>

        </div>
    )
}

export default function About() {
    return (
        <div className="flex flex-col gap-24">

            <Section>
                <div className="sm:px-8 md:px-24 lg:px-36 text-center flex flex-col items-center gap-8 mt-8">
                    <PageHeader
                        heading={'About Guru Kripa Institute of'}
                        highlightedHeading={'Management and Information Technology'}
                        description={'Providing quality IT education and practical training to build career-ready professionals.'}
                    />
                </div>
            </Section>

            <Section>
                <GeneralInfo />
            </Section>

            <Section>
                <CoreValues />
            </Section>



            <Section>
                <SplitCard>
                    <SplitCardImage imgSrc={'images/nielit-logo.png'} />

                    <SplitCardContent
                        heading={'NIELIT Facilitation Centre for'}
                        highlightedHeading={'Quality IT Education'}
                        description={'Guru Kripa Institute of Management and Information Technology is proudly affiliated with NIELIT, offering certified courses and hands-on training to shape future-ready IT professionals.'}
                        primaryButton={
                            <PrimaryButton to={'/courses'} label={'Explore Courses'} />
                        }
                    >
                        <ul className="flex flex-col gap-2 list-disc">
                            <li>NIELIT Certified Courses: BCC, CCC, ECC, etc.</li>
                            <li>Practical Training in Word, Excel, and Industry Tools.</li>
                            <li>Career-Oriented Internships and Expert Faculty.</li>
                        </ul>
                    </SplitCardContent>

                </SplitCard>
            </Section>


            <Section>
                <SplitCard>
                    <SplitCardContent
                        heading={'Inspiring Journey of'}
                        highlightedHeading={'Guru Kripa Institute'}
                        description={'Guru Kripa Institute began with a vision to make quality IT education accessible to all. From a humble start to becoming a NIELIT-affiliated center, our journey reflects dedication to excellence, skill development, and student success in the field of computer science and technology.'}
                        primaryButton={
                            <PrimaryButton to={'/courses'} label={'Explore Courses'} />
                        }
                    >
                        <ul className="flex flex-col gap-2 list-disc">
                            <li>Established in 2007 with a mission to provide affordable, quality IT education in the region.</li>
                            <li>Achieved NIELIT affiliation, ensuring recognized and government-certified courses.</li>
                            <li>Empowered hundreds of students with practical skills and industry readiness.</li>
                        </ul>
                    </SplitCardContent>
                    <SplitCardImage imgSrc={'images/img4.jpeg'} />

                </SplitCard>
            </Section>


            <Section>
                <SplitCard>
                    <SplitCardImage imgSrc={'images/img7.jpeg'} />

                    <SplitCardContent
                        heading={'Why Choose Guru Kripa Institute'}
                        highlightedHeading={'Training?'}
                        description={'Guru Kripa Institute offers a perfect blend of certified courses, practical training, and career guidance, making it a trusted choice for aspiring IT professionals.'}
                        primaryButton={
                            <PrimaryButton to={'/courses'} label={'Explore Courses'} />
                        }
                    >
                        <ul className="flex flex-col gap-2 list-disc">
                            <li>NIELIT Affiliated: Government-recognized certifications.</li>
                            <li>Hands-on Learning: Practical training with real-world tools.</li>
                            <li>Skilled Faculty: Experienced instructors from IT backgrounds.</li>
                            <li>Career Support: Internships and job-oriented guidance.</li>
                        </ul>
                    </SplitCardContent>

                </SplitCard>
            </Section>


            <Section>
                <Faq />
            </Section>

        </div>
    )
}