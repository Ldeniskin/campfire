/*Selector Range*/
class Range extends React.Component {
    constructor(props) {
        super(props);
        this.monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        this.daysNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    }
    dateInfo(date){
        let dateRow;
        let rangeMonthText = 'Choose a date';
        if(date){
            dateRow = <td rowSpan="2"><span className="calendar__range-date">{date.getDate()}</span></td>;
            rangeMonthText = this.monthNames[date.getMonth()]+' '+ date.getFullYear();
        }
        return (<tr>
            {dateRow}
            <td>
                <span className="calendar__range-month">
                    {rangeMonthText}
                </span>
            </td>
        </tr>);
    }
    dumbDate(date, title){
       let day = (date)?(<tr>
               <td>
                   <span className="calendar__range-day">{this.daysNames[date.getDay()]}</span>
               </td>
           </tr>)
           :null;
       return (<div className="calendar__from-date">
            <table>
                <tbody>
                    <tr>
                        <td colSpan="2"><span className="calendar__range-h">{title}</span></td>
                    </tr>
                    {this.dateInfo(date)}
                    {day}
                </tbody>
            </table>
        </div>)
    }
    render() {
        let {dateFrom, dateTo} = this.props;
        dateTo = dateTo ? new Date(dateTo) : dateTo;
        dateFrom = dateFrom ? new Date(dateFrom) : dateFrom;
        return (<div className="calendar__range">
            {this.dumbDate(dateFrom,'check-in')}
            <div className="calendar__image-arrow">
                <span>&#8594;</span>
            </div>
            {this.dumbDate(dateTo,'check-out')}
        </div>)
    }
}
/*Header Table*/
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        this.dayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    }
    shouldComponentUpdate(nextProps){
        return nextProps.date != this.props.date;
    }
    render() {
        let date  = new Date(this.props.date);
        return (<div className="calendar__header">
            <div className="calendar__month-chooser">
                <span className="calendar__prev-month" onClick={this.props.prevMonth}>❮</span>
                <span>{this.monthNames[date.getMonth()]}</span>
                <span className="calendar__next-month" onClick={this.props.nextMonth}>❯</span>
            </div>
            <table className="calendar__days-names" cellSpacing="0">
                <tbody>
                    <tr>
                        {this.dayNames.map((i, key)=> <td className="calendar__day-name" key={key}>{i}</td>)}
                    </tr>
                </tbody>
            </table>
        </div>)
    }
}

/*Calendar Table*/
class Calendar extends React.Component{
    constructor(props){
        super(props);
        this.selectionEnaled = false;
        this.animationDirection = "forward";
        this.shortMonthNames = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec']
        this.currentDate = new Date();
    }
    handleClick(index){
        let {setRange, indexStart, indexEnd} = this.props;
        if(this.selectionEnabled ){
            if((index == indexStart)){
                this.selectionEnabled = false;
                setRange();
            }else{
                this.selectionEnabled = false;
                setRange(this.props.indexStart, index);
            }
        }else{
            if(index == indexEnd){
                this.selectionEnabled = true;
            }else{
                this.selectionEnabled = true;
                setRange(index);
            }
        }
    }
    mouseOver(index){
        if(this.selectionEnabled){
            this.props.setRange(this.props.indexStart, index);
        }
    }
    componentWillUpdate(nextProps){
        if(nextProps.date != this.props.date){
            this.animationDirection = (nextProps.date - this.props.date > 0) ? "forward" : "backward"
        }
    }
    componentDidUpdate(prevProps){
        if(prevProps.date != this.props.date){
            this.refs.calendar.classList.add(`animate--${this.animationDirection}`);
        }
    }
    getDay(date, key, month){
        let time = date.getTime();
        let currentDate = this.currentDate;
        let {indexEnd, indexStart} = this.props;
        let dayClass = (time > indexStart && time < indexEnd) ? 'selected' : '';
        dayClass += ( date < currentDate.setHours(0)) ?' out--range':'';
        dayClass += (time == indexStart && indexEnd > indexStart) ? ' sel--start' : '';
        dayClass += (time == indexEnd && time > indexStart) ? ' sel--end' : '';
        dayClass += (date.getMonth() == month)?' calendar__day':' calendar__day dis';
        return(<td className={dayClass}
                   onClick={this.handleClick.bind(this, time)}
                   onMouseOver={this.mouseOver.bind(this,time)}
                   key={key}>
                       <div className="calendar__inner-day">
                           {date.getDate()}
                       </div>
              </td>)
    }
    render(){
        let date  = new Date(this.props.date);
        let month = date.getMonth();
        date.setDate(1);
        if(this.animationDirection == "forward"){
            date.setMonth(date.getMonth() - 1);
        }
        let firstDay = date.getDay();
        if(firstDay !== 1){
            (firstDay == 0)?
                date.setDate(date.getDate() - 6)
                :date.setDate(date.getDate() - (firstDay - 1));
        }
        date.setDate(date.getDate() - 1);
        return(<div className="calendar__wrap">
            <table className="calendar__table" ref="calendar" key={this.props.date} cellSpacing="0">
                <tbody>
                {Array(12).fill(0).map((i, key)=> {
                    return <tr key={key}>
                        {Array(7).fill(0).map((_i, _key)=> {
                            date.setDate(date.getDate() + 1);
                            return this.getDay(date, _key, month);
                        })}
                    </tr>
                })}
                </tbody>
            </table>
        </div>)
    }
}


/*Smart Component*/
class Calendar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date:Date.now(),
            selectionStart: 0,
            selectionEnd: 0
        }
    }
    prevMonth(){
        let date = new Date(this.state.date);
        date.setMonth(date.getMonth() - 1);
        this.setState({date:date.getTime()});
    }
    nextMonth(){
        let date = new Date(this.state.date);
        date.setMonth(date.getMonth() + 1);
        this.setState({date:date.getTime()});
    }
    setRange(selectionStart = 0, selectionEnd = 0){
        this.setState({selectionStart, selectionEnd});
    }
    render(){
       let {date, selectionStart, selectionEnd} = this.state;
       return (<div className="Calendar">
           <Range dateFrom={selectionStart} dateTo={selectionEnd}/>
           <Header date={date} prevMonth={::this.prevMonth} nextMonth={::this.nextMonth}/>
           <Calendar date={date}
                     indexStart = {selectionStart}
                     indexEnd = {selectionEnd}
                     setRange = {::this.setRange}
                     />
       </div>)
    }
}

ReactDOM.render(<Calendar />, document.querySelector('#Calendar'));
