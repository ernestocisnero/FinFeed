import { ExpByCategoriesChart, PaymentHistory, PaymentStatistics } from "../components"
import { TotalBalance } from '../components/TotalBalance';
import { YourCard } from '../components/YourCard';
import { Planning } from '../components/Planning';


export const Dashboard = (): JSX.Element => {

    return (
        <div className="p-4 w-full grid grid-cols-12">
            <div className="col-start-1 col-end-7">
                <PaymentStatistics />
                <ExpByCategoriesChart />
                <PaymentHistory />
            </div>

            <div className="col-start-8 col-end-12 p-3 border-[1px] border-neutral-100 rounded-md">
                <TotalBalance />
                <YourCard />
                <Planning />

            </div>
        </div>
    )
}
