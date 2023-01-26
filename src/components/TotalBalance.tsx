

export const TotalBalance = () => {
    return (
        <div className="flex flex-col border-b-2 border-neutral-100 gap-6">

            <div className="flex justify-between">
                <div className="flex flex-col">
                    <p className="font-semibold text-sm">Total Balance</p>
                    <p className="font-bold text-xl">$80,000.00</p>
                </div>

                <button className="bg-slate-50 hover:bg-slate-100 p-1 h-fit rounded-sm">
                    <span className="material-symbols-outlined">
                        more_horiz
                    </span>
                </button>
            </div>

            <div className="flex justify-between mb-5">
                <div className="flex flex-col">
                    <p className="text-sm text-slate-400">Income</p>
                    <p className="text-md font-semibold">$30,540.00</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-sm text-slate-400">Expense</p>
                    <p className="text-md font-semibold">$18,430.00</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-sm text-slate-400">Credit Limit</p>
                    <p className="text-md font-semibold">$8,420.00</p>
                </div>
            </div>

        </div>
    )
}
