import { MainSlidePresentation } from "../../components"

type AuthLayoutType = {
    children: JSX.Element | JSX.Element[]
}

export const AuthLayout = ({ children }: AuthLayoutType) => {
    return (
        <div className="grid grid-cols-2 min-h-screen">
            <div className="bg-[#9da0a373] flex flex-col gap-28">

                <div className="flex justify-start mt-20 ml-10">
                    <img src="FinFeed.svg" alt="name_page" className="w-30" />
                </div>

                <div className="flex justify-center items-center">
                    <div className="p-2">
                        <img src="ExpensesbyCategoryImage.png" alt="expensesbycategoryimage" className="w-[15rem] rounded-lg shadow-2xl" />
                    </div>
                    <div className="p-2">
                        <img src="expensesbycategorychartline.png" alt="expensesbycategoryimage" className="w-[15rem] rounded-lg shadow-2xl" />
                    </div>
                </div>

                <div className="ml-10">
                    <MainSlidePresentation />
                </div>


            </div>

            <div className="bg-[#FFF]">
                {
                    children
                }
            </div>
        </div>
    )
}
