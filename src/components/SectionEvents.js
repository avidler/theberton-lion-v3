import React from 'react';
import _ from 'lodash';

const moment = require('moment')

export default class SectionEvents extends React.Component {
    render() {
    //console.log("pageContext.site",pageContext.site)
    let newEventsList = _.get(this.props, 'pageContext.site.data.events')
    //console.log("newEventsList: ", newEventsList)
    let section = _.get(this.props, 'section');
    
                        
    const upcomingEvents = newEventsList.event.filter(a => new Date(a.event_date) - new Date() > 0);
    const sortedEvents = upcomingEvents.sort((a, b) => new Date(a.event_date) - new Date(b.event_date))
    //console.log("sortedEvents", sortedEvents)
    return (
        <section id={_.get(this.props, 'section.section_id')} className={'wrapper alt ' + _.get(this.props, 'section.section_id')}>
            <div className="events_inner">
            <h2 className="page-title" style={{color:"#fff"}}>{`${section.title}`}</h2>
                <div className="events_list">

                    
            
                    {_.map(sortedEvents.slice(0,4), (curr_event, curr_event_idx) => (
                       
                        <div className="event_item" key={curr_event_idx}>
                            <span className="overlay"></span>
                            <img src={`${curr_event.event_image}`} className="service_image" alt="the event"/>
                           
                            <h3><span>{curr_event.event_title}</span></h3>
                            <p className="event_date">Date: {moment(curr_event.event_date).format("Do MMMM YYYY")}</p>
                            <p className="event_time">Time: {moment(curr_event.event_date).format("LT")}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
}