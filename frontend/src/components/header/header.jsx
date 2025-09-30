import './Header.scss';
import { useEffect, useState } from 'react';


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
            <ul>
                {(data.idList|| []).map((val, idx) => <li key={idx}><a href={'#'+val}>nav{idx}</a></li>)}
            </ul>
        </div>
    )
}

export default Header;