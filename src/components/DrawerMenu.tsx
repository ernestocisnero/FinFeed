import { Link } from 'react-router-dom';


export const DrawerMenu = () => {

    return (
        <aside className="flex flex-col min-w-[9.2%] border-r-[1px] border-slate-300 justify-between">
            <ul className="my-5 mx-2">
                <Link to='/' className="flex align-middle mb-2 px-1 py-3 rounded-sm text-neutral-400 hover:bg-[#266663] hover:text-neutral-50">
                    <span className="material-symbols-outlined mr-2">dashboard</span>
                    Dashboard
                </Link>
                <Link to='services' className="flex align-middle mb-2 px-1 py-3 rounded-sm text-neutral-400 hover:bg-[#266663] hover:text-neutral-50">
                <span className="material-symbols-outlined mr-2">design_services</span>
                    Services
                </Link>
                <Link to='insert' className="flex align-middle mb-2 px-1 py-3 rounded-sm text-neutral-400 hover:bg-[#266663] hover:text-neutral-50">
                    <span className="material-symbols-outlined mr-2">currency_exchange</span>
                    Insert
                </Link>
                <Link to='cards' className="flex align-middle mb-2 px-1 py-3 rounded-sm text-neutral-400 hover:bg-[#266663] hover:text-neutral-50">
                    <span className="material-symbols-outlined mr-2">credit_card</span>
                    Cards
                </Link>
                
                <Link to='history' className="flex align-middle mb-2 px-1 py-3 rounded-sm text-neutral-400 hover:bg-[#266663] hover:text-neutral-50">
                    <span className="material-symbols-outlined mr-2">summarize</span>
                    History
                </Link>
                <Link to='account' className="flex align-middle mb-2 px-1 py-3 rounded-sm text-neutral-400 hover:bg-[#266663] hover:text-neutral-50">
                    <span className="material-symbols-outlined mr-2">person</span>
                    Account
                </Link>
            </ul>

            <footer className="my-4 p-2">
                <p className="text-neutral-300 text-[10px]">
                    &copy; FinFeed {new Date().getFullYear()}
                </p>
                <p className="text-neutral-300 text-[10px]">
                    Developed by Ernesto Cisnero
                </p>
            </footer>
        </aside>
    )
}
