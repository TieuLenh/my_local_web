import { useState, useEffect, useCallback} from "react"
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
        <div>
        {time.h.toString().padStart(2, "0")}:
        {time.m.toString().padStart(2, "0")}:
        {time.s.toString().padStart(2, "0")}
        </div>
    );
}

export default Clock;