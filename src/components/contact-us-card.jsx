import PrimaryButton from "./primary-button";
import { motion } from "framer-motion"

export default function ContactUsCard() {
    return (
        <div className="bg-primary h-[400px] w-full rounded-2xl text-white">
            <div className="flex flex-col items-center justify-center h-full px-4 gap-10 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.5 } }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="md:text-heading sm:text-4xl text-3xl font-medium"
                >
                    Reach Out and Begin Your Success Journey!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
                    viewport={{ once: true, amount: 0.2 }}
                    className=""
                >
                    <PrimaryButton label={'Contact Us'} to={'/contact'} overlay={true} />
                </motion.div>
            </div>
        </div>
    )
}