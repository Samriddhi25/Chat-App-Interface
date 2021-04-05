import Avatar from '../Avatar/Avatar'
import Button from '../Button/Button'
import email from '../../assets/email.svg';
import avatar from '../../assets/avatar.svg';
import bin from '../../assets/bin.svg';
import './ActiveNameCard.scss';

function ActiveNameCard(props) {

    return (
        <div className="active-name-container">
            <div  className="auto">
            <Avatar user={props.author} size="large" />
            </div>
            <div className="info">
                <div className="active-email">
                    <img className="icon" src={email} alt={props.author.email}/>
                    <div className="text">{props.author.email}</div>
                </div>
                <div className="active-name">
                    <img className="icon" src={avatar} alt={props.author.name}/>
                    <div className="text">{props.author.name}</div>
                </div>
            </div>
             <div  className="auto">
            <Button logo={bin} text="Archive" align="right" onClick={() => {}} />
            </div>
        </div >
    )
}

export default ActiveNameCard;