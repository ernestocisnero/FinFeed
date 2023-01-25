import { PaymentStatistics } from "../components"

export const Dashboard = (): JSX.Element => {
    return (
        <>
            <div className="col-start-1 col-end-7">
                <PaymentStatistics /> 
            </div>

            <div className="col-start-8 col-end-12">
                <div>01</div>
                <div>02</div>
                <div>03</div>
                <div>04</div>
            </div>
        </>
    )
}
