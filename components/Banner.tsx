function Banner() {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
            <div>
                <h1 className="text-7xl text-[#171922]">KatPost</h1>
                <h2 className="mt-5 md:mt-0 text-[#1e212d]">
                    A Software Engineer and{" "}
                    <span className="underline decoration-4 decoration-[#bcece0]">
                    Her Blog About Life
                    </span>{" "}
                    .
                </h2>
            </div>
            <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">Something clever here</p>
        </div>
    );
}

export default Banner;