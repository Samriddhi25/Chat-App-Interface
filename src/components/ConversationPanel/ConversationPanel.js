import { useEffect, useState } from 'react';
import DropDown from '../DropDown/DropDown';
import './ConversationPanel.scss';

function ConversationPanel(props) {

    const [activeConvo,setActiveConvo] = useState([])
    const [archiveConvo,setArchiveConvo] = useState([])

    useEffect(() => {
        var temp = props.convo;
        setActiveConvo(temp.filter(temp => temp.conversationStatus === "active"));
        setArchiveConvo(temp.filter(temp => temp.conversationStatus === "archieved"));
    },[props.convo])

    return (
        <div className="convo-box">
          <DropDown open={true} title="Active Conversation" doClick onDoClick={props.click} initial={2} options={activeConvo} />
          <DropDown open={true} title="Archived Conversation" options={archiveConvo} />
        </div>
    )
}

export default ConversationPanel;