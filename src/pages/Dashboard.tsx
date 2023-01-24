import { PaymentStatistics } from "../components"

export const Dashboard = (): JSX.Element => {
    return (
        <div className="flex space-x-4">
            <div className="min-w-[60%] h-fit">
                <PaymentStatistics />
            </div>
            <div className="bg-red-900 min-w-[40%] h-fit">
                02
                02
            </div>
        </div>
    )
}
