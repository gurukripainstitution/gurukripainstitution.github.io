export default function NielitLogo() {
    return (
        <div className="flex items-center gap-2 h-18">
            <div className="">
                <img src="images/nielit-logo-small.png" alt="" />
            </div>

            <div className="w-[1px] h-full bg-black"></div>

            <div className="flex flex-col gap-1 mt-4 text-xs sm:text-sm">
                <p>
                    राष्ट्रीय इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी संस्थान
                </p>
                <p>
                    National Institute of Electronics & Information Technology
                </p>
            </div>
        </div>
    )
}