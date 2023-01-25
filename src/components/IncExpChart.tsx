import { Chart } from "react-google-charts";

const data = [
    ["Months", "Income($)", "Expense($)"],
    ["Jan", 11, 16],
    ["Feb", 2, 45],
    ["Mar", 2, 7],
    ["May", 2, 46],
    ["Jun", 7, 12],
    ["Jul", 10, 48],
    ["Aug", 14, 56],
    ["Sep", 12, 24],
    ["Oct", 11, 65],
    ["Nov", 18, 4],
    ["Dec", 36, 44],
];

const options = {
    chart: {
        title: "Monthly incomes/expenses",
        subtitle: "01/29/2023"
    },
}

export const IncExpChart = () => {
    return (
        <div>

            <Chart
                chartType="Bar"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />

        </div>
    )
}

