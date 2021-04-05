import Avatar from '../Avatar/Avatar';
import './NameBox.scss';

function NameBox(props) {
    return (
        <div className={`name-box ${props.active}`} onClick={props.click} >
            <div className="avatar">
                <Avatar user={props.author} size="small"/>
            </div>
            <div className="name">
                {props.author.name}
            </div>
        </div>
    )
}

export default NameBox;