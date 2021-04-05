import React, { useEffect, useState } from 'react';
import GenericBox from '../GenericBox/GenericBox';
import ActivityChart from '../ActivityChart/ActivityChart';
import './ActivityPanel.scss'

function ActivityPanel(props) {

    const [day, setDay] = useState('')
    const [dayNum, setDayNum] = useState(1)
    const [dayData, setDayData] = useState({})

    useEffect(() => {
        var d = new Date();
        var n = d.getDay();
        var name = "";
        setDayNum(n);
        let temp = [ 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        name = temp[n]
        setDay(name);
        var data = Object.keys(props.week)[dayNum]
        setDayData(props.week[data].activity);
    }, [dayNum, props.week]);

    const daysetter = (changeDay) => { 
        setDayData(props.week[changeDay].activity);
        setDay(props.week[changeDay].name);
    }

    return (
        <div className="activity-panel">
            <div className="box-activity">
                {Object.keys(dayData).map((data) => <GenericBox logo={`/assets/${data}.svg`} key={data} item={dayData[data]} value={data} />)}
            </div>
            <div className="chart-box">
                <div className="box-heading">
                    <div className="main">Current Week</div>
                    <div className="sub">Activity</div>
                </div>
                <div className="box-content">
                    <ActivityChart week={props.week} click={daysetter} currentday={day} />
                </div>
            </div>
        </div>
    )
}

export default ActivityPanel;