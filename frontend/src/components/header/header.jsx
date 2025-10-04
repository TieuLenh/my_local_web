import { useEffect, useState } from 'react';
import './Header.scss';
import Navbar, { navElement } from './nav-bar/Navbar';

const Header = ({className = 'header', ...props}) => {
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await fetch('/api');
            const json = await res.json();
            setData(json);
        } catch (err) {
            console.error(err);
        }
        };

        fetchData();
    }, []);
    return(
        <div
            className={className}
            {...props}
        >
            <Navbar />
        </div>
    )
}

export default Header;