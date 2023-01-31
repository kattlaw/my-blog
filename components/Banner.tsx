function Banner() {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
            <div>
                <h1 className="text-7xl text-[#3c4048]">Words by Law</h1>
                <h2 className="mt-5 md:mt-1 text-[#50535a]">
                    I guess I'll just blog my way through it. Writing about life's ups and downs.
                </h2>
            </div>
            <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
                I'll put something useful here
            </p>
        </div>
    );
}

export default Banner;