import './Header.scss';
import { useEffect, useState } from 'react';


const Header = ({className = 'header', ...props}) => {
    const [data, setData] = useState((addr = '/api') => {
            async function getData(addr) {
            try {
                const res = await fetch(addr);   // đợi fetch xong
                const data = await res.json();           // đợi parse xong
                return data;
            } catch (err) {
                console.error(err);
            }
            }
            return getData();
        }
    ) 
    return(
        <div
            className={className}
            {...props}
        >
            <ul>
                {(data|| []).map((val, idx) => <li key={idx}><a href={'#'+val}>nav{idx}</a></li>)}
            </ul>
        </div>
    )
}

export default Header;