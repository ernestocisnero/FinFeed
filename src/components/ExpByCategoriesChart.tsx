import { Chart } from 'react-google-charts';

const data = [
    ["Category", "Cost"],
    ["Food", 100],
    ["Car & Transport", 250],
    ["House", 300],
    ["Services", 105],
    ["Restaurants & Dining", 85],
    ["Shopping & Entertainment", 25],
];

const options = {
    title: "Expenses by categories",
    is3D: true,
};


export const ExpByCategoriesChart = () => {
    return (
        <div>

            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />

        </div>
    )
}
