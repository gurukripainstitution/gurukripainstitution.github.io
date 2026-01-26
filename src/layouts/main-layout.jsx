import { Link, NavLink, Outlet } from "react-router";
import PrimaryButton from "../components/primary-button";
import Section from "../components/section";
import ContactUsCard from "../components/contact-us-card";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../components/logo";


function MobileMenu({ onClose }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])
    return (
        <motion.div
            key={'mobile-menu'}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.1, ease: 'easeInOut' }}
            className="absolute bg-white left-0 top-0 w-screen h-full z-50 p-8 flex flex-col gap-8"
        >
            <div className="flex justify-between">
                <Logo />

                <button type="button" onClick={onClose} className="cursor-pointer hover:text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                </button>
            </div>

            <div className="text-base flex flex-col gap-4">
                <NavLink
                    to={'/'}
                    className={({ isActive, isPending }) => {
                        const cls = `active:text-primary hover:text-primary transition duration-200 ease-in-out py-2 ` + (isActive ? 'text-primary' : 'text-black')
                        return cls
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    to={'/about'}
                    className={({ isActive, isPending }) => {
                        const cls = `active:text-primary hover:text-primary transition duration-200 ease-in-out py-2 ` + (isActive ? 'text-primary' : 'text-black')
                        return cls
                    }}
                >
                    About
                </NavLink>
                <NavLink
                    to={'/courses'}
                    className={({ isActive, isPending }) => {
                        const cls = `active:text-primary hover:text-primary transition duration-200 ease-in-out py-2 ` + (isActive ? 'text-primary' : 'text-black')
                        return cls
                    }}
                >
                    Courses
                </NavLink>
                <NavLink
                    to={'/contact'}
                    className={({ isActive, isPending }) => {
                        const cls = `active:text-primary hover:text-primary transition duration-200 ease-in-out py-2 ` + (isActive ? 'text-primary' : 'text-black')
                        return cls
                    }}
                >
                    Contact
                </NavLink>
            </div>
        </motion.div>
    )
}

function NavBar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <nav className="flex justify-between py-8 items-center">

            <Logo />

            <div className="justify-between w-[350px] hidden md:flex">
                <NavLink
                    to={'/'}
                    className={({ isActive, isPending }) => {
                        const cls = `active:text-primary hover:text-primary transition duration-200 ease-in-out ` + (isActive ? 'text-primary' : 'text-black')
                        return cls
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    to={'/about'}
                    className={({ isActive, isPending }) => {
                        const cls = `active:text-primary hover:text-primary transition duration-200 ease-in-out ` + (isActive ? 'text-primary' : 'text-black')
                        return cls
                    }}
                >About</NavLink>
                <NavLink
                    to={'/courses'}
                    className={({ isActive, isPending }) => {
                        const cls = `active:text-primary hover:text-primary transition duration-200 ease-in-out ` + (isActive ? 'text-primary' : 'text-black')
                        return cls
                    }}
                >Courses</NavLink>
                {/* <NavLink
                    className={'hover:text-primary transition duration-200 ease-in-out'}
                >Teachers</NavLink> */}
                <NavLink
                    to={'/contact'}
                    className={({ isActive, isPending }) => {
                        const cls = `active:text-primary hover:text-primary transition duration-200 ease-in-out ` + (isActive ? 'text-primary' : 'text-black')
                        return cls
                    }}
                >Contact</NavLink>
            </div>

            <div className="hidden md:block">
                <PrimaryButton label={"Contact Us"} to={'/contact'} />
            </div>

            <button type="button" className="md:hidden cursor-pointer hover:text-primary" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
            </button>



            <AnimatePresence>
                {
                    showMobileMenu && (
                        <MobileMenu onClose={() => setShowMobileMenu(false)} />
                    )
                }
            </AnimatePresence>

        </nav>
    )
}

function Footer() {
    return (
        <div className="grid md:grid-cols-3 md:grid-rows-none mb-24 sm:mb-0 md:mb-24 sm:grid-cols-2 sm:grid-rows-2 mt-16 text-sm sm:text-base gap-12">
            <div className="flex flex-col gap-4">
                <Logo />
                <p className="text-sm">
                    Guru Kripa Institute of Management and Information Technology is a NIELIT facilitation centre to conduct Digital Literacy Courses (DLC i.e. ACC, BCC, CCC, CCC+, & ECC).
                </p>

                <div className="flex gap-4">
                    <Link to={'https://www.instagram.com/gurukripainstitution/'} target="_blank" className="active:text-primary hover:text-primary transition ease-in-out cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                        </svg>
                    </Link>
                    <Link to={'https://www.facebook.com/gurukripainstitution/'} target="_blank" className="active:text-primary hover:text-primary transition ease-in-out cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg>
                    </Link>
                </div>

                <div className="mt-8 text-sm">
                    <PrimaryButton to={'/contact'} label={'Contact Us'} />
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <p className="text-lg font-medium">Company</p>

                <NavLink
                    to={'/'}
                    className={'active:text-primary hover:text-primary transition ease-in-out'}
                >
                    Home
                </NavLink>
                <NavLink
                    to={'/about'}
                    className={'active:text-primary hover:text-primary transition ease-in-out'}
                >
                    About
                </NavLink>
                <NavLink
                    to={'/courses'}
                    className={'active:text-primary hover:text-primary transition ease-in-out'}
                >
                    Courses
                </NavLink>
                {/* <NavLink
                    className={'hover:text-primary transition ease-in-out'}
                >
                    Teachers
                </NavLink> */}
                <NavLink
                    to={'/contact'}
                    className={'active:text-primary hover:text-primary transition ease-in-out'}
                >
                    Contact
                </NavLink>
            </div>

            <div className="flex flex-col gap-4">
                <p className="text-lg font-medium">Contact</p>

                <p>+(91) 98171-62762</p>
                <p>harish.snr@gmail.com</p>
                <p>House No: 60/10, Shaheed Naresh Chowk, Tehsil Sundernagar, Distt. Mandi, HP, 175019</p>

                <div className="flex items-center gap-2">
                    <div className="h-8">
                        <img className="object-cover w-full h-full" src="images/icons/google-maps.png" alt="" />
                    </div>
                    <a className="hover:text-primary transition duration-200 ease-in-out" href="https://www.google.com/maps/place/31%C2%B032'33.1%22N+76%C2%B053'50.8%22E/@31.5425396,76.8974304,17z" target="_blank">View on Google Maps</a>
                </div>
            </div>
        </div>
    )
}

export default function MainLayout() {
    return (
        <div className="text-sm">

            <Section>
                <NavBar />
            </Section>

            <div className="h-[0.5px] bg-divider w-full"></div>


            <div className="py-8">
                <Outlet />
            </div>

            <Section>
                <ContactUsCard />
            </Section>

            <Section>
                <Footer />
            </Section>

            <div className="h-[0.5px] bg-divider w-full"></div>

            <Section>
                <div className="flex justify-between py-4 gap-4">
                    <p className="text-xs">© All rights reserved.</p>
                    <p className="text-xs text-right sm:text-sm sm:text-left">Powered by <a target="_blank" href="https://github.com/hisuperaman" className="active:text-primary hover:text-primary transition ease-in-out">hisuperaman</a></p>
                </div>
            </Section>
        </div>
    )
}