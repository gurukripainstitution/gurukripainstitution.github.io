import {motion} from 'framer-motion'

export default function CoursesContainer({animationDelay=0.3, children}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: animationDelay, duration: 0.5 } }}
            viewport={{ once: true, amount: 0 }}
            className="grid sm:grid-cols-3 gap-4"
        >
            {children}
        </motion.div>
    )
}