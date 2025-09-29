// import { useState, useEffect, useCallback} from "react";

// const displayTime = (h, m, s) => {
//     return (
//         h.toString().padStart(2, "0") 
//         + ':' + 
//         m.toString().padStart(2, "0")
//         + ':' + 
//         s.toString().padStart(2, "0")
//     )
// }

// const Clock = ({className = 'clock', ...props}) => {
//     const [time, setTime] = useState(() => {
//         const current = new Date();
//         return {
//             h: current.getHours(),
//             m: current.getMinutes(),
//             s: current.getSeconds()
//         };
//     });

//     useEffect(() => {
//         const interval = setInterval(() => {
//         const current = new Date();
//         setTime({
//             h: current.getHours(),
//             m: current.getMinutes(),
//             s: current.getSeconds()
//         });
//         }, 1000); // cập nhật mỗi giây

//         // cleanup để tránh memory leak
//         return () => clearInterval(interval);
//     }, []); // chỉ chạy 1 lần khi mount

//     return (
//         <div
//             className={className}
//             {...props}
//         >
//             {displayTime(time.h, time.m, time. s)}
//         </div>
//     );
// }

// export default Clock;

import { useState, useEffect } from "react";
import "./Clock.scss";

export default function Clock() {
  const [time, setTime] = useState(() => {
    const c = new Date();
    return { h: c.getHours(), m: c.getMinutes(), s: c.getSeconds() };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const c = new Date();
      setTime({ h: c.getHours(), m: c.getMinutes(), s: c.getSeconds() });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const two = (n) => n.toString().padStart(2, "0");

  return (
    <div className="cyber-clock">
      <div className="cyber-clock__frame">
        <div className="cyber-clock__display">
          <span className="cyber-clock__part">{two(time.h)}</span>
          <span className="cyber-clock__colon">:</span>
          <span className="cyber-clock__part">{two(time.m)}</span>
          <span className="cyber-clock__colon">:</span>
          <span className="cyber-clock__part">{two(time.s)}</span>
        </div>

        <div className="cyber-clock__hud">
          <div className="dot green" />
          <div className="dot yellow" />
          <div className="dot red" />
        </div>
      </div>
    </div>
  );
}
