import InputField from "../../components/input-field";
import PageHeader from "../../components/page-header";
import PrimaryButton from "../../components/primary-button";
import Section from "../../components/section";
import { motion } from 'framer-motion'


function ContactForm() {
    return (
        <form action={'#'} method="get" className="py-12 px-8 sm:px-16 bg-surface flex flex-col gap-4 rounded-xl">
            <p className="text-4xl font-medium">Send Us A Message</p>

            <p>
                Have questions or need more information? Send us a message and our team will get back to you shortly.
            </p>

            <div className="sm:grid sm:grid-cols-2 flex flex-col gap-4">
                <InputField label={'Full Name'} />
                <InputField label={'Email'} />
                <InputField label={'Phone'} />
                <div></div>

                <div className="col-span-2">
                    <InputField label={'Message'} type="textarea" />

                </div>
            </div>

            <PrimaryButton type="submit" label={'Submit'} hoverable={false} />
        </form>
    )
}

function FeatureCard({ logoSrc, heading, description, body, bgColor }) {
    return (
        <div className={`flex flex-col sm:flex-row py-12 px-6 items-start gap-8 rounded-xl`} style={{ backgroundColor: bgColor }}>
            <div className="h-18 min-w-14 m-auto sm:m-0">
                <img className="object-cover w-full h-full" src={logoSrc} alt="" />
            </div>

            <div className="flex flex-col gap-4 m-auto text-center sm:m-0 sm:text-left">
                <p className="text-2xl font-medium">{heading}</p>
                <p>{description}</p>
                <p className="font-medium">{body}</p>
            </div>
        </div>
    )
}

export default function Contact() {
    return (
        <div className="flex flex-col gap-24">

            <Section>
                <div className="sm:px-24 md:px-48 px-8 text-center flex flex-col items-center gap-8 mt-8">
                    <PageHeader
                        heading={'We\'re here to'}
                        highlightedHeading={'Help!'}
                        description={'We want to hear from you. Let us know how we can help.'}
                    />
                </div>
            </Section>

            <Section>
                <div className="flex gap-4 md:flex-row flex-col">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }}
                        viewport={{ once: true, amount: 0 }}
                        className="md:w-3/5"
                    >
                        <ContactForm />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
                        viewport={{ once: true, amount: 0 }}
                        className="flex flex-col gap-4 md:w-2/5"
                    >
                        <FeatureCard
                            logoSrc={"images/icons/email.png"}
                            heading={'Email Us'}
                            description={'Email us for scheduling'}
                            body={'harish.snr@gmail.com'}
                            bgColor={'#F0EBFF'}
                        />
                        <FeatureCard
                            logoSrc={"images/icons/location.png"}
                            heading={'Visit our office'}
                            description={'Visit us for scheduling'}
                            body={'Shaheed Naresh Chowk Sundernagar Distt. Mandi, HP, 175019'}
                            bgColor={'#FFEFEB'}
                        />
                        <FeatureCard
                            logoSrc={"images/icons/contact.png"}
                            heading={'Contact us'}
                            description={'Call us for scheduling'}
                            body={'+(91) 98171-62762'}
                            bgColor={'#E8FCF7'}
                        />
                    </motion.div>
                </div>
            </Section >

        </div >
    )
}