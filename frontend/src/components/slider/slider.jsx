import Clock from "./clock/Clock";


const Slider = ({className = 'slider', ...props}) => {
    return(
        <div
            className={className}
            {...props}
        >
            Slider test
            <Clock />
        </div>
    )
}

export default Slider;