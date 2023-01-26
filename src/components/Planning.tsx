import { Plan } from "./Plan"

export const Planning = () => {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex justify-between p-2">
                <h3 className="font-bold">Planing</h3>

                <button className="bg-slate-50 hover:bg-slate-100 h-fit p-1 rounded-sm">
                    <span className="material-symbols-outlined">
                        add
                    </span>
                </button>
            </div>

            { 
                [1,2,3].map((i)=>{
                    return <Plan key={i}/>
                })
            }
            
        </div>
    )
}
