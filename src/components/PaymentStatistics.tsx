
export const PaymentStatistics = () => {
    return (
        <div className="m-2">
            <div className="flex justify-between">
                <h3 className="font-bold">Payment Statistic</h3>

                <button className="bg-slate-50 hover:bg-slate-100 p-1 rounded-sm">
                    <span className="material-symbols-outlined">
                        tune
                    </span>
                </button>
            </div>
            <div className="flex justify-start gap-10 my-2">
                <div className="hover:bg-[#266663] hover: cursor-pointer text-neutral-400 hover:text-neutral-50 border-solid border-[#266663] p-1 rounded-sm ">Today</div>
                <div className="hover:bg-[#266663] hover: cursor-pointer text-neutral-400 hover:text-neutral-50 border-solid border-[#266663] p-1 rounded-sm ">Week</div>
                <div className="hover:bg-[#266663] hover: cursor-pointer text-neutral-400 hover:text-neutral-50 border-solid border-[#266663] p-1 rounded-sm ">Month</div>
                <div className="hover:bg-[#266663] hover: cursor-pointer text-neutral-400 hover:text-neutral-50 border-solid border-[#266663] p-1 rounded-sm ">Year</div>
            </div>
            <div className="border-solid border-slate-200 border-b-[1px] w-full"></div>

            <div className="flex justify-between">
                <div className="my-4">
                    <p className="text-xs text-neutral-400">05 diciembre 2022</p>
                    <p className="text-xl font-bold">$50,450.00</p>
                </div>

                <div className="my-4">
                    <p className="text-md text-[#266663]">Last month profit 20%
                        <span className="material-symbols-outlined">
                            north_east
                        </span>
                    </p>
                    <p className="text-md text-red-700">Last month profit 20%
                        <span className="material-symbols-outlined">
                            south_west
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}
