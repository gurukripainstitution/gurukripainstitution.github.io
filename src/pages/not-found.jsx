import PrimaryButton from "../components/primary-button";

export default function NotFound() {
    return (
        <div className="max-w-[1280px] m-auto flex justify-between items-center min-h-screen">

            <div className="flex flex-col items-center m-auto translate-y-[-10%]">
                <p className="text-[20rem] font-bold mb-0 text-primary">404</p>

                <div className="flex flex-col justify-between items-center gap-8">
                    <p>
                        The page you are looking for doesn't exist or has been moved
                    </p>
                    <PrimaryButton to={'/'} label={'Go Back to Home >'} hoverable={false} />
                </div>
            </div>

        </div>
    )
}