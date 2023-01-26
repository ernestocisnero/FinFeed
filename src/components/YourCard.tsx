import { Card } from "./Card"

export const YourCard = () => {
    return (
        <>
            <p className="font-semibold mt-3"> Your Card </p>

            <div className="flex py-3">
                <Card />
                <button className="bg-red-50 min-h-[150px] min-w-[15%] rounded-2xl mx-8 text-xs outline outline-offset-4 outline-slate-200 outline-1">
                    + Add Card
                </button>
            </div>

        </>
    )
}
