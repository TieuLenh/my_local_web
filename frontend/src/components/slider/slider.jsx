import React from 'react';
import { useState, useEffect } from 'react';
import './Slider.scss';
import { navElement } from '../header/nav-bar/Navbar';
import Clock from "./clock/Clock";

const Slider = ({className = 'slider', ...props}) => {
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
            Slider test
            <div id={(navElement[0].navId || '')}>
                <Clock />
            </div>
            <div id={(navElement[1].navId || '')} >content1</div>
            <div id={(navElement[2].navId || '')} >content2</div>
            <div id={(navElement[3].navId || '')} >content3</div>
        </div>
    )
}

export default Slider;