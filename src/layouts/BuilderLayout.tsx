interface LayoutProps{
    children: JSX.Element
}

const BuilderLayout = ({children}: LayoutProps) => {
    return (
        <>
          {children}
        </>
    )
}

export default BuilderLayout