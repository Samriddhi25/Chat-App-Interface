import './Avatar.scss'

function getInitials(string) {
    var names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
};

function Avatar(props) {
    if (props.user.avatarUrl.length > 0)
        return (
            <>
                <img className={props.size}
                    src={props.user.avatarUrl}
                    alt={props.user.name}
                />
                {props.show && <div className={`notif ${props.user.status}`}/> }
            </>
        );
    else
        return (
            <div className={props.size}>
                <span>{getInitials(props.user.name)}</span>
                {props.show && <div className={`notif ${props.user.status}`}/> }
            </div>
        );
};

export default Avatar;