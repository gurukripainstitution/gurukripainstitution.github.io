import { Link } from "react-router"; 

export default function PrimaryButton({ label, to, hoverable = true, overlay = false, border = false, type = 'link' }) {
    const baseClasses = `${hoverable
        ? overlay
            ? 'bg-white active:bg-secondary hover:bg-secondary active:text-white hover:text-white text-black'
            : 'bg-primary active:bg-secondary hover:bg-secondary text-white'
        : 'bg-secondary text-white'} ${border ? 'border-1' : ''} text-center transition-colors duration-200 font-semibold px-6 py-4 rounded-full cursor-pointer ease-in-out`;

    if (type === 'link') {
        return (
            <Link to={to} className={baseClasses}>
                {label}
            </Link>
        );
    } else {
        return (
            <button type={type === 'submit' ? 'submit' : 'button'} className={baseClasses}>
                {label}
            </button>
        );
    }
}