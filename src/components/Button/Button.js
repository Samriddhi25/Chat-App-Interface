import './Button.scss'

function Button(props) {
    return (
        <button className="my-button">
            <img className={props.align} src={props.logo} onClick={props.onClick} alt="button"/>
            {props.text}
        </button>
    );
};

export default Button;