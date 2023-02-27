
type propType = {
    show: boolean, 
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    insertType: string | null
}

export const InsertModal = ({ show, setShowModal, insertType}:propType): JSX.Element => {
    return (
        <div className={`${show ? '': 'hidden'} absolute inset-x-0 top-60 left-60 bg-slate-400 w-[50vw] h-[50vh] p-4 mt-14`}>
            InsertModal
            <button onClick={ () => setShowModal(false) } className='ml-5 bg-red-600'>Close</button>
            {
                insertType && <p>{insertType}</p>
            }
        </div>
    )
}
