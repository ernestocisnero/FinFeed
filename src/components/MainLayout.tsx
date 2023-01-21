

type MainLayoutPropType = {
    children: JSX.Element[] | JSX.Element
}
export const MainLayout = ({ children }: MainLayoutPropType) => {
    return (
        <div>
            { children }
        </div>
    )
}
