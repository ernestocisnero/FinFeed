
export const Plan = () => {
    return (
        <div className=" flex justify-between">

            <div className="flex justify-between border-2 border-neutral-100 rounded-md min-w-[90%] p-2">
                <div className="flex flex-col">
                    <p className="font-semibold text-sm">Buy a Laptop</p>
                    <p className="font-light text-xs text-slate-400">$1500 / $2000</p>
                </div>


                <div className="min-w-[70%] h-fit bg-gray-200 my-auto rounded-sm">
                    <div className="bg-blue-600 text-xs font-medium text-blue-100 rounded-sm text-center p-0.5 leading-none" style={{ width: `${25}%` }}>25%</div>
                </div>

            </div>

            <button className="bg-slate-50 hover:bg-slate-100  px-2 border-2 border-neutral-100 rounded-md">
                <span className="material-symbols-outlined">
                    edit
                </span>
            </button>

        </div>
    )
}
