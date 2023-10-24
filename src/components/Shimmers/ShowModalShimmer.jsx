export default function ShowModalShimmer() {
    return (
        <div className="fixed z-50 top-0 left-0 bg-black/80 flex items-center rounded-xl w-full h-full overflow-scroll" >
            <div className="w-full mx-auto flex flex-wrap justify-center gap-4 items-start animate-pulse">

                <div className=" box-border flex justify-end bg-white w-[290px] h-[440px] rounded-lg">
                </div>
                <div className="relative w-[90vw] md:w-1/2">
                    <div className="bg-white w-1/2 h-8 text-4xl font-bold mb-4 rounded-lg"></div>
                    <div className='w-full h-5 bg-white rounded-md mb-3'></div>
                    <div className='w-full h-5 bg-white rounded-md mb-3'></div>
                    <div className='w-full h-5 bg-white rounded-md mb-3'></div>
                    <div className='w-full h-5 bg-white rounded-md mb-3'></div>
                    <div className='w-full h-5 bg-white rounded-md mb-3'></div>
                    <div className='w-full h-5 bg-white rounded-md mb-3'></div>
                    <div className='w-full h-5 bg-white rounded-md mb-3'></div>
                    <div className='w-full h-5 bg-white rounded-md mb-3'></div>
                    <div className='w-full h-5 bg-white rounded-md mb-3'></div>
                </div>
            </div>
        </div>
    )
}