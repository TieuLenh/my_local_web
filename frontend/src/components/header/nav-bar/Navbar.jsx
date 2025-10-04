import { subList } from "../../alrithemtic";

const navElement = [
    {
        navId: '',
        navName: 'Home',
    },
    {
        navId: 'nav1',
        navName: 'Nav1',
    },
    {
        navId: 'nav2',
        navName: 'Nav2',
    },
    {
        navId: 'nav3',
        navName: 'Nav3',
    },
    {
        navId: 'nav4',
        navName: 'Nav4',
    },
]

const Navbar = ({className = 'navbar', ...props}) => {
    return(
        <ul
            className={className}
            {...props}
        >
            {(subList(navElement, 0, 4) || []).map((val, idx) => <li key={idx}><a href={`#${val.navId}`}>{val.navName}</a></li>)}
        </ul>
    )
}

export default Navbar;
export {navElement};