import './Toggle.css';

function Toggle(props) {
    return (
        <div id="cover">
            <div className="button r" id="button-3">
                <input type="checkbox" className="checkbox" />
                <div className="knobs"></div>
                <div className="layer"></div>
            </div>
        </div>
    )
}

export default Toggle;