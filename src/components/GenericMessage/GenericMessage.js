import Avatar from '../Avatar/Avatar';
import './GenericMessage.scss'
function Message(props) {

    var timestamp = props.message.time * 1000;
    var time = new Date(timestamp).toLocaleTimeString("en-US")

    return (
        <div className={`message-box ${props.align}`}>
            <div className="user">
                <Avatar show user={props.author} size="small" />
            </div>
            <div className="message-info">
                <div className="message-text">{props.message.message}</div>
                <div className="message-time">{time}</div>
            </div>
        </div>
    )
}

export default Message;