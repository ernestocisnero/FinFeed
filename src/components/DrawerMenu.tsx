


export const DrawerMenu = () => {
    return (
        <aside className="flex flex-col min-w-[9.2%] border-r-[1px] border-slate-300 justify-between">
            <ul className="my-5 mx-2">
                <li className="flex align-middle mb-2 px-1 py-3 rounded-sm text-neutral-400 hover:bg-[#266663] hover:text-neutral-50">
                    <span className="material-symbols-outlined">dashboard</span>
                    <a href="#" className="ml-2">Dashboard</a>
                </li>
                <li className="flex align-middle mb-2 px-1 py-3 rounded-sm text-neutral-400 hover:bg-[#266663] hover:text-neutral-50">
                <span className="material-symbols-outlined">design_services</span>
                    <a href="#" className="ml-2">Services</a>
                </li>
                <li className="flex align-middle mb-2 px-1 py-3 rounded-sm text-neutral-400 hover:bg-[#266663] hover:text-neutral-50">
                    <span className="material-symbols-outlined">currency_exchange</span>
                    <a href="#" className="ml-2">Exchange</a>
                </li>
                <li className="flex align-middle mb-2 px-1 py-3 rounded-sm text-neutral-400 hover:bg-[#266663] hover:text-neutral-50">
                    <span className="material-symbols-outlined">credit_card</span>
                    <a href="#" className="ml-2">Cards</a>
                </li>
                <li className="flex align-middle mb-2 px-1 py-3 rounded-sm text-neutral-400  hover:bg-[#266663] hover:text-neutral-50">
                    <span className="material-symbols-outlined">attach_money</span>
                    <a href="#" className="ml-2">Deposit</a>
                </li>
                <li className="flex align-middle mb-2 px-1 py-3 rounded-sm text-neutral-400 hover:bg-[#266663] hover:text-neutral-50">
                    <span className="material-symbols-outlined">summarize</span>
                    <a href="#" className="ml-2">History</a>
                </li>
                <li className="flex align-middle mb-2 px-1 py-3 rounded-sm text-neutral-400 hover:bg-[#266663] hover:text-neutral-50">
                    <span className="material-symbols-outlined">person</span>
                    <a href="#" className="ml-2">Account</a>
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
