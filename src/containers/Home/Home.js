import React from 'react';
import './Home.scss'
import ActivityPanel from '../../components/ActivityPanel/ActivityPanel';
import ActiveNameCard from '../../components/ActiveNameCard/ActiveNameCard';
import UserBox from '../../components/UserBox/UserBox';
import Message from '../../components/GenericMessage/GenericMessage';
import ConversationPanel from '../../components/ConversationPanel/ConversationPanel';
import Keyboard from '../../components/Keyboard/Keyboard';
import { getConversationData } from '../../utils/helper/data';

const author = {
  name: "Samriddhi Agarwal",
  email: "samriddhiagarwal2@gmail.com",
  status: "active", //active or inactive 
  avatarUrl: "", // url link
  bio: "Frontend developer",
  friend: [{
    name: "Robert",
    email: "robertrobert@gmail.com",
    status: "active",
    avatarUrl: "",
    conversationStatus: "active"
  },
  {
    name: "Striker",
    email: "strikerrobert@gmail.com",
    status: "inactive",
    avatarUrl: "",
    conversationStatus: "archieved"
  },
  {
    name: "Luke",
    email: "lukelantansi@gmail.com",
    status: "inactive",
    avatarUrl: "",
    conversationStatus: "active"
  },
  {
    name: "Henry",
    email: "henryhenry@gmail.com",
    status: "inactive",
    avatarUrl: "",
    conversationStatus: "active"
  }
  ],
  week: { //props.week
    monday: {
      name: 'MON',
      stats: 60,
      activity: {
        "ScreenTime": "13h",
        "Friend": "102",
        "Unread": "13",
        "Productivity": "0hr"
      }
    },
    tuesday: {
      name: 'TUE',
      stats: 80,
      activity: {
        "ScreenTime": "10h",
        "Friend": "102",
        "Unread": "3",
        "Productivity": "3hr"
      }
    },
    wednusday: {
      name: 'WED',
      stats: 50,
      activity: {
        "ScreenTime": "3h",
        "Friend": "110",
        "Unread": "1",
        "Productivity": "7hr"
      }
    },
    thrusday: {
      name: 'THU',
      stats: 40,
      activity: {
        "ScreenTime": "10h",
        "Friend": "112",
        "Unread": "0",
        "Productivity": "0hr"
      }
    },
    friday: {
      name: 'FRI',
      stats: 10,
      activity: {
        "ScreenTime": "5h",
        "Friend": "112",
        "Unread": "3",
        "Productivity": "30min"
      }
    },
    saturday: {
      name: 'SAT',
      stats: 50,
      activity: {
        "ScreenTime": "16h",
        "Friend": "132",
        "Unread": "10",
        "Productivity": "11hr"
      }
    },
    sunday: {
      name: 'SUN',
      stats: 95,
      activity: {
        "ScreenTime": "10h",
        "Friend": "132",
        "Unread": "3",
        "Productivity": "6hr"
      }
    }
  }
}

export default class Home extends React.Component {
  state = {
    user: author.name,
    userInConvo: "Henry",
    dataUserInConvo: {
      name: "Henry",
      email: "henryhenry@gmail.com",
      status: "inactive",
      avatarUrl: "",
      conversationStatus: "active"
    },
    data: {}
  }

  componentDidMount() {
    this.getData(this.state.userInConvo)
  }

  getData(currentName) {
    getConversationData().then(res => {
      var temp = res[this.state.user].conversations;
      var convoData = temp.find(temp => temp.destination === currentName);
      this.setState({ data: convoData })
    })

    var name = author.friend;
    var data = name.find(name => name.name === currentName);
    this.setState({ dataUserInConvo: data })
  }

  update = (name) => this.getData(name)

  getMessage(data) {
    if (data.messages) {
      return data.messages.map((item, index) => { 
        var align = item.from === author.name ? "right" : "left";
        return <Message message={item} align={align} key={index} author={align === "right" ? author : this.state.dataUserInConvo}/>
      });
    }
  }

  render() {
    return (
      <div className="home-container">
        <div className="left-container">
          <div className="block1"><UserBox author={author} /></div>
          <div className="block2"><ConversationPanel convo={author.friend} click={this.update}/></div>
        </div>
        <div className="middle-container">
          <div className="block">
            <div className="all-message-box">{this.getMessage(this.state.data)}</div>
            <div className="keyboard-box"><Keyboard /></div>
          </div>
        </div>
        <div className="right-container">
          <div className="block1"><ActiveNameCard author={this.state.dataUserInConvo}/></div>
          <div className="block2"><ActivityPanel week={author.week}/></div>
        </div>
      </div>
    );
  }
}