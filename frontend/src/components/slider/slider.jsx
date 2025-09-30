import './Slider.scss';
import Clock from "./clock/Clock";

const Slider = ({className = 'slider', ...props}) => {
    return(
        <div
            className={className}
            {...props}
        >
            Slider test
            <Clock />
            <div id='bar1' style={{height: '100px',}}>content1</div>
            <div id='bar2' style={{height: '100px',}}>content2</div>
            <div id='bar3' style={{height: '100px',}}>content3</div>
        </div>
    )
}

export default Slider;