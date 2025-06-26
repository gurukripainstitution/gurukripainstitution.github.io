import { motion } from 'framer-motion'

export default function SplitCardImage({ imgSrc, children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.5 } }}
            viewport={{ once: true, amount: 0.2 }}
            className="sm:w-2/5 w-full relative rounded-3xl overflow-hidden"
        >
            <img className="object-cover w-full h-full" src={imgSrc} alt="" />

            {children}
        </motion.div>
    )
}