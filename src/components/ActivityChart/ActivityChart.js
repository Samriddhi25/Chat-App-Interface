import ActivityBar from '../ActivityBar/ActivityBar';
import './ActivityChart.scss'
function ActivityChart(props) {
    return (
        <div className="main-chart">
            {Object.keys(props.week).map((value) => {
                let day = props.week[value]
                return <ActivityBar key={day.name} day={day} active={day.name === props.currentday} onClick={props.click} dayName={value}/>
            })}
        </div>
    )
}

export default ActivityChart;