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
            <div id='bar1' style={{height: '1000px',}}>content1</div>
            <div id='bar2' style={{height: '1000px',}}>content2</div>
            <div id='bar3' style={{height: '1000px',}}>content3</div>
        </div>
    )
}

export default Slider;