import {motion} from 'framer-motion'

export default function SplitCardContent({ heading, highlightedHeading, description, children, primaryButton, secondaryButton }) {
    return (
        <div className="flex flex-col sm:w-1/2 gap-8">
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-heading font-medium text-center sm:text-left"
            >
                {heading} <span className="text-primary"> {highlightedHeading}</span>
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }}
                viewport={{ once: true, amount: 0.2 }}
                className=''
            >
                {description}
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex gap-16"
            >
                {children}
            </motion.div>

            {
                (primaryButton || secondaryButton) && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="mt-4 flex gap-8 justify-center sm:justify-start"
                    >
                        {primaryButton}
                        {secondaryButton}
                    </motion.div>
                )
            }
        </div>
    )
}