
type AuthLayoutType = {
    children: JSX.Element | JSX.Element[]
}

export const AuthLayout = ({ children }: AuthLayoutType) => {
    return (
        <div className="grid grid-cols-2 min-h-screen">
            <div className="bg-[#F5F7F9] px-40 py-10">
                <div className="flex flex-col justify-start gap-2 mb-32">
                    {/* <img src="logoFinFeed.svg" className="rounded-full w-11 h-11 m-1" alt="profile image" /> */}
                    <div className="p-5">
                        <img src="FinFeed.svg" alt="name_page" className="w-28" />
                    </div>
                </div>

                <div className="p-2">
                    <img src="ExpensesbyCategoryImage.png" alt="name_page" className="w-[30rem] rounded-lg" />
                </div>
                <div className="p-2">
                    <img src="paymentHistory.png" alt="name_page" className="w-[30rem] rounded-lg" />
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
