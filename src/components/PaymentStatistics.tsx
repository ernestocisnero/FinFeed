
export const PaymentStatistics = () => {
    return (
        <>
            <div className="flex justify-between">
                <h3 className="font-bold">Payment Statistic</h3>

                <div className="w-5 h-5 bg-slate-500">S</div>
            </div>
            <div className="grid grid-cols-4 gap-8">
                <div className="hover:border-b-4 hover: cursor-pointer border-solid border-[#266663] my-3">Today</div>
                <div className="hover:border-b-4 hover: cursor-pointer border-solid border-[#266663] my-3">Week</div>
                <div className="hover:border-b-4 hover: cursor-pointer border-solid border-[#266663] my-3">Month</div>
                <div className="hover:border-b-4 hover: cursor-pointer border-solid border-[#266663] my-3">Year</div>
            </div>
            <div>
                <p>05 diciembre 2022</p>
                <p>$50,450.00</p>
            </div>
        </>
    )
}
