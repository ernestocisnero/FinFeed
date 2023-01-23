import { DrawerMenu } from "./DrawerMenu"
import { UserProfile } from "./UserProfile"


type MainLayoutPropType = {
    children: JSX.Element[] | JSX.Element
}
export const MainLayout = ({ children }: MainLayoutPropType) => {
    return (
        <div className="flex flex-col h-screen">
            <nav className="flex justify-between min-w-[100%] border-b-[1px] border-slate-300">
                <div className="p-3">
                    <img src="FinFeed.svg" alt="name_page" className="w-28"/>
                </div>
                
                <UserProfile />
            </nav>

            <div className="flex flex-grow">
                <DrawerMenu />
                <div className="">
                    {children}
                </div>
            </div>
        </div>
    )
}
