import { ServicePayment } from "./ServicePayment"

export const PaymentHistory = () => {
    return (
        <div className="m-2">

            <div className="flex justify-between">
                <h3 className="font-bold">Payment History</h3>
                <button className="bg-slate-50 hover:bg-slate-100 h-fit p-1 rounded-sm">
                    <span className="material-symbols-outlined">
                        more_horiz
                    </span>
                </button>
            </div>

            {
                [1,2,3].map((i)=>{
                    return <ServicePayment key={i}/>
                })
            }
            

        </div>
    )
}
