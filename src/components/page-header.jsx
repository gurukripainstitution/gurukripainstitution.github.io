import { motion } from 'framer-motion'

export default function PageHeader({ heading, highlightedHeading, description }) {
    return (
        <div className="">
            <div className="flex flex-col gap-8">
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.5 } }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="font-medium text-mainHeading"
                >
                    {heading}
                    <span className="text-primary"> {highlightedHeading}</span>
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {description}
                </motion.p>
            </div>

        </div>
    )
}