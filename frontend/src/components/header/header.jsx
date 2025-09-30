const Header = ({className = 'header', ...props}) => {
    return(
        <div
            className={className}
            {...props}
        >
            <ul>
                <li><a href="#bar1">bar1</a></li>
                <li><a href="#bar2">bar2</a></li>
                <li><a href="#bar3">bar3</a></li>
            </ul>
        </div>
    )
}

export default Header;