import Avatar from '../Avatar/Avatar'
import Toggle from '../Toggle/Toggle'
import setting from '../../assets/setting.svg';
import './UserBox.scss';

function ActiveNameCard(props) {
    return (
        <div className="user-name-container">
            <div className="avatar"><Avatar user={props.author} size="large" /></div>
            <div className="info">
                <div className="main">
                    <div className="name">{props.author.name}</div>
                    <img src={setting} alt="setting" />
                </div>
                <div className="sub">{props.author.bio}</div>
                <div className="toggle">
                    <Toggle />
                    <div className="toggle-value">Active</div>
                </div>
            </div>
        </div>
    )
}

export default ActiveNameCard;