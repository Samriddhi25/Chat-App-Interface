import './ActivityBar.scss'
function ActivityBar(props) {
    var active = props.active && 'active';
    var stats = (props.day.stats/10) + "rem";
    var top = (10 - (props.day.stats/10)) + "rem"; 
    return (
        <div className="main-bar" onClick={()=>props.onClick(props.dayName)}>
            <div className={`bar ${active}`} style={{height: stats, marginTop: top}}/>
            <div className={`circle ${active}`}/>
            <div className="text">{props.day.name}</div>
        </div>
    )
}

export default ActivityBar;