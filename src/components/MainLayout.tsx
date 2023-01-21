import { UserProfile } from "./UserProfile"


type MainLayoutPropType = {
    children: JSX.Element[] | JSX.Element
}
export const MainLayout = ({ children }: MainLayoutPropType) => {
    return (
        <div>
            <nav className="flex justify-between min-w-[100%] h-fit border-b-[1px] border-slate-300">
                <div className="w-fit p-3">
                    <img src="FinFeed.svg" alt="" />
                </div>
                
                <UserProfile />
            </nav>

            <div className="flex">
                <aside className="flex flex-col min-w-[9.2%] min-h-screen border-r-[1px] border-slate-300">
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </aside>
                <main className="">
                    {children}
                </main>
            </div>
        </div>
    )
}
