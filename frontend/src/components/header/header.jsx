const Header = ({className = 'header', ...props}) => {
    return(
        <div
            className={className}
            {...props}
        >
            Header test
        </div>
    )
}

export default Header;