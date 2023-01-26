
export const Card = () => {
    return (
        <div className="flex flex-col space-y-16 p-5 min-w-[60%] min-h-[150px] rounded-2xl bg-[#266663]">
            <p className="text-neutral-50">John Doe</p>

            <div className="flex justify-between text-neutral-50">
                <p>.... .... .... 1234</p>
                <p>CVV: ...</p>
                <p>Exp: 05/27</p>
            </div>
        </div>
    )
}
