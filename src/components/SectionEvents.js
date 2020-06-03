import React from 'react';
import _ from 'lodash';

const moment = require('moment')

export default class SectionEvents extends React.Component {
    render() {
    let section = _.get(this.props, 'section');
    console.log("section: ",section)
    const upcoming_events = section.event.filter(a => new Date(a.event_date) - new Date() > 0);
    console.log("upcoming events", upcoming_events)
    return (
        <section id={_.get(this.props, 'section.section_id')} className={'wrapper alt ' + _.get(this.props, 'section.section_id')}>
            <div className="events_inner">
                <div className="events_list">

                    
            
                    {_.map(upcoming_events.slice(0,4), (curr_event, curr_event_idx) => (
                       
                        <div className="event_item" key={curr_event_idx}>
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