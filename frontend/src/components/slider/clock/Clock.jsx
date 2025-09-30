import { useState, useEffect, useCallback} from "react";
import './Clock.scss';

const formatNum = (t = 1, space = 2) => {
    return t.toString().padStart(space, "0");
}

const Clock = ({className = 'clock', ...props}) => {
    const [time, setTime] = useState(() => {
        const current = new Date();
        return {
            h: current.getHours(),
            m: current.getMinutes(),
            s: current.getSeconds()
        };
    });

    useEffect(() => {
        const interval = setInterval(() => {
        const current = new Date();
        setTime({
            h: current.getHours(),
            m: current.getMinutes(),
            s: current.getSeconds()
        });
        }, 1000); // cập nhật mỗi giây

        // cleanup để tránh memory leak
        return () => clearInterval(interval);
    }, []); // chỉ chạy 1 lần khi mount

    return (
        <div
            className={className}
            {...props}
        >
            <div className="time_symbol">
                {formatNum(time.h)}
            </div>
            <div className="time_symbol"> 
                :
            </div>
            <div className="time_symbol">
                {formatNum(time.m)}
            </div>
            <div className="time_symbol"> 
                :
            </div>
            <div className="time_symbol">
                {formatNum(time.s)}
            </div>
            
        </div>
    );
}

export default Clock;

