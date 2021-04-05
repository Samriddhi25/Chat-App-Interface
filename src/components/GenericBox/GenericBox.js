import './GenericBox.scss';
function GenericBox(props) {
    return (
        <div className={`activity-box ${props.value}`}>
            <div className="left">
                <div className="box-bg">
                    <img src={props.logo} alt={props.value} />
                </div>
            </div>
            <div className="right">
                <div className="activity-value">{props.item}</div>
                <div className="activity-name">{props.value}</div>
            </div>
        </div>
    )
}

export default GenericBox;