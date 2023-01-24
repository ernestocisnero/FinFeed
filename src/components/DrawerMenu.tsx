import { Link } from 'react-router-dom';


export const DrawerMenu = () => {
    return (
        <aside className="flex flex-col min-w-[9.2%] border-r-[1px] border-slate-300 justify-between">
            <ul className="my-5 mx-2">
                <li className="flex align-middle mb-2 px-1 py-3 rounded-sm text-neutral-400 hover:bg-[#266663] hover:text-neutral-50">
                    <span className="material-symbols-outlined">dashboard</span>
                    <Link to='/' className="ml-2">Dashboard</Link>
                </li>
                <li className="flex align-middle mb-2 px-1 py-3 rounded-sm text-neutral-400 hover:bg-[#266663] hover:text-neutral-50">
                <span className="material-symbols-outlined">design_services</span>
                    <Link to='/services' className="ml-2">Services</Link>
                </li>
                <li className="flex align-middle mb-2 px-1 py-3 rounded-sm text-neutral-400 hover:bg-[#266663] hover:text-neutral-50">
                    <span className="material-symbols-outlined">currency_exchange</span>
                    <Link to='exchange' className="ml-2">Exchange</Link>
                </li>
                <li className="flex align-middle mb-2 px-1 py-3 rounded-sm text-neutral-400 hover:bg-[#266663] hover:text-neutral-50">
                    <span className="material-symbols-outlined">credit_card</span>
                    <Link to='cards' className="ml-2">Cards</Link>
                </li>
                <li className="flex align-middle mb-2 px-1 py-3 rounded-sm text-neutral-400  hover:bg-[#266663] hover:text-neutral-50">
                    <span className="material-symbols-outlined">attach_money</span>
                    <Link to='deposit' className="ml-2">Deposit</Link>
                </li>
                <li className="flex align-middle mb-2 px-1 py-3 rounded-sm text-neutral-400 hover:bg-[#266663] hover:text-neutral-50">
                    <span className="material-symbols-outlined">summarize</span>
                    <Link to='history' className="ml-2">History</Link>
                </li>
                <li className="flex align-middle mb-2 px-1 py-3 rounded-sm text-neutral-400 hover:bg-[#266663] hover:text-neutral-50">
                    <span className="material-symbols-outlined">person</span>
                    <Link to='account' className="ml-2">Account</Link>
                </li>
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
