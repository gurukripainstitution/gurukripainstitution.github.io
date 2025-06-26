import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'

function AccordionItem({ label, description, isExpanded, onClick }) {
    return (
        <div className={`flex flex-col rounded-xl ${isExpanded ? 'bg-primary text-white' : 'bg-white text-black'} transition ease-in-out`}>

            <div className={`flex justify-between px-6 py-4 rounded-xl items-center cursor-pointer select-none transition ${isExpanded ? 'text-white' : 'bg-surface text-black'} ease-in-out`} onClick={onClick}>
                <p className="flex-1 text-xl md:text-2xl font-medium">{label}</p>
                <div className={`${isExpanded ? 'rotate-45' : 'rotate-0'} transition`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                    </svg>
                </div>
            </div>
            <AnimatePresence>

                {
                    isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden text-xs sm:text-sm"
                        >
                            <div className="bg-divider h-[0.5px] w-full mb-2"></div>
                            <p className="px-6 py-4">
                                {description}
                            </p>
                        </motion.div>
                    )
                }
            </AnimatePresence>


        </div>
    )
}

function AccordionContainer({ children }) {
    return (
        <div className="flex flex-col gap-4">
            {children}
        </div>
    )
}

export default function Faq() {


    const questions = [
        { label: 'Is Guru Kripa Institute affiliated with NIELIT?', description: 'Yes, our institute is officially affiliated with NIELIT (National Institute of Electronics & Information Technology), ensuring government-recognized certifications.' },
        { label: 'Are the certificates recognized?', description: 'Yes, all certificates issued through NIELIT-affiliated courses are valid for government and private sector jobs.' },
        { label: 'Do I need to have my own laptop/computer to study at Guru Kripa Institution?', description: 'No, you don’t need to have your own laptop/computer. Guru Kripa Institution usually provides you with a computer to practice on during the classes.' },
        { label: 'Can I apply online?', description: 'No, you can either contact via call/email or visit institute.' },
        { label: 'Do you provide industrial training / internships?', description: 'Yes, we do provide industrial training and internships for polytechnic students as well as for B.Tech CSE, BSc IT/CS, MSc IT/CS, BCA, MCA with duration from 1-2 months.' },
        { label: 'Do you provide study material?', description: 'Yes, we provide both handwritten and digital study material for all courses.' },
        { label: 'What are the operating hours of Guru Kripa Institution?', description: 'The operating hours of Guru Kripa Institution are 09:00 am - 5:00 pm for Monday to Saturday, Sunday closed.' },
        { label: 'What are the class timings?', description: 'We offer flexible batch timings, including morning and evening sessions, to suit students and working professionals.' },
    ]

    const [expandedItemIdx, setExpandedItemIdx] = useState(null)

    function handleItemClick(idx) {
        if (expandedItemIdx === idx) {
            setExpandedItemIdx(null)
        }
        else {
            setExpandedItemIdx(idx)
        }
    }

    return (
        <div className="flex w-full items-start relative flex-col gap-8 md:gap-2 md:flex-row">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.5 } }}
                viewport={{ once: true, amount: 0 }}
                className="md:w-2/5 text-center md:text-left md:sticky top-4"
            >
                <p className="text-heading font-medium">Frequently Asked Questions</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
                viewport={{ once: true, amount: 0 }}
                className="flex-1 w-full"
            >
                <AccordionContainer>
                    {
                        questions.map((question, index) => (
                            <AccordionItem key={index} isExpanded={expandedItemIdx === index} onClick={() => handleItemClick(index)} label={question.label} description={question.description} />
                        ))
                    }
                </AccordionContainer>
            </motion.div>
        </div>
    )
}