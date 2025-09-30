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
            <div id='bar1'>content1</div>
            <div id='bar2'>content2</div>
            <div id='bar3'>content3</div>
        </div>
    )
}

export default Slider;