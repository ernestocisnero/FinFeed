import { InsertModal } from "../components"
import { useState } from 'react';

export const Insert = (): JSX.Element => {
    const [ showModal, setShowModal ] = useState<boolean>(false);
    const [ insertType, setInsertType ] = useState<string | null>('');

    const handleShowModal = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        setShowModal(true);
        setInsertType(event.currentTarget.textContent);
    }

    return (
        <div className="flex flex-col p-4">

            {/* Income Expenses buttons */}
            <div className="flex gap-10 w-[75vw] mt-4 border-b-2">
                <button onClick={ handleShowModal } className="hover:bg-[#266663] hover: cursor-pointer text-neutral-400 hover:text-neutral-50 border-solid border-[#266663] p-1 rounded-sm mb-3">Income</button>
                <button onClick={ handleShowModal } className="hover:bg-[#266663] hover: cursor-pointer text-neutral-400 hover:text-neutral-50 border-solid border-[#266663] p-1 rounded-sm mb-3">Expense</button>
                <button className="hover:bg-[#266663] hover: cursor-pointer text-neutral-400 hover:text-neutral-50 border-solid border-[#266663] p-1 rounded-sm mb-3">Get report</button>
            </div>

            {/* Latest movements */}

            <div className="bg-slate-300 w-[75vw] h-[15vh] p-4 mt-14">
                <div className="bg-white h-10 mt-3"></div>
            </div>

            {/* Historic movements */}
            <div className="bg-slate-300 w-[75vw] h-[50vh] p-4 mt-14">
                <div className="table w-full">
                    <div className="table-header-group">
                        <div className="table-row">
                            <div className="table-cell text-left">Song</div>
                            <div className="table-cell text-left">Artist</div>
                            <div className="table-cell text-left">Year</div>
                        </div>
                    </div>
                    <div className="table-row-group">
                        <div className="table-row">
                            <div className="table-cell">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
                            <div className="table-cell ">Malcolm Lockyer</div>
                            <div className="table-cell">1961</div>
                        </div>
                        <div className="table-row">
                            <div className="table-cell ">Witchy Woman</div>
                            <div className="table-cell ">The Eagles</div>
                            <div className="table-cell ">1972</div>
                        </div>
                        <div className="table-row">
                            <div className="table-cell ">Shining Star</div>
                            <div className="table-cell ">Earth, Wind, and Fire</div>
                            <div className="table-cell ">1975</div>
                        </div>
                    </div>
                </div>
            </div>

            <InsertModal show={ showModal } setShowModal={ setShowModal } insertType={ insertType }/>
        </div>
    )
}
