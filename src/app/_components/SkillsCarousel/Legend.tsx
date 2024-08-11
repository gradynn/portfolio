function Legend() {
    return (
        <div className="w-full flex md:flex-row flex-col items-center items-center justify-center mt-2">
            <div className="flex text-xs text-gray-400 md:p-3 p-1 md:ml-0 ml-3">
                <div className="rounded-sm bg-gray-400 w-[1rem] h-[1rem] md:mr-1 mr-2"></div>
                Practical experience through projects or coursework
            </div>
            <div className="flex text-xs text-gray-400 md:p-3 p-1">
                <div className="rounded-sm bg-gray-400 w-[1rem] h-[1rem] mr-2 outline outline-gray-400 outline-offset-2"></div>
                Demonstrated proficiency in a professional setting
            </div>
        </div>
    )
}

export default Legend