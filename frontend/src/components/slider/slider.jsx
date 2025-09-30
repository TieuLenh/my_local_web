import './Slider.scss';
import Clock from "./clock/Clock";

const Slider = ({className = 'slider', ...props}) => {
    return(
        <div
            className={className}
            {...props}
        >
            Slider test
            <div id='clock-container'>
                <Clock />
            </div>
            <div id='nav1' style={{height: '1000px',}}>content1</div>
            <div id='nav2' style={{height: '1000px',}}>content2</div>
            <div id='nav3' style={{height: '1000px',}}>content3</div>
        </div>
    )
}

export default Slider;