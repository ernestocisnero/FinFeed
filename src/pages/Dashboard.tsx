import { ExpByCategoriesChart, PaymentHistory, PaymentStatistics } from "../components"
import { TotalBalance } from '../components/TotalBalance';
import { YourCard } from '../components/YourCard';
import { Planning } from '../components/Planning';
import { supabase } from "../supabase/client";
import { useEffect } from 'react';

export const Dashboard = (): JSX.Element => {

    const readData = async ()=>{
        const resp =await supabase.from('Users').select('Name')
        console.log(resp);
        
    }

    useEffect(() => {
        readData()
    }, [])
    

    return (
        <>
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
        </>
    )
}
