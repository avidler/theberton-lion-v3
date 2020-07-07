import React from 'react';
import _ from 'lodash';

const moment = require('moment')

export default class FullBeerList extends React.Component {
    render() {
    let newBeerList = _.get(this.props, 'pageContext.site.data.beer')
    console.log("newBeerList: ", newBeerList)
    let section = _.get(this.props, 'section');
    console.log("section: ",section)
                        
    //const upcomingEvents = newEventsList.event.filter(a => new Date(a.event_date) - new Date() > 0);
    //const sortedEvents = upcomingEvents.sort((a, b) => new Date(a.event_date) - new Date(b.event_date))
    //console.log("sortedEvents", sortedEvents)
    return (
        <section id={_.get(this.props, 'section.section_id')} className={'wrapper alt ' + _.get(this.props, 'section.section_id')}>
            <div className="events_inner">
                <div className="events_list">

                    
            
                    {_.map(newBeerList), (curr_beer, curr_beer_idx) => (
                       
                        <div className="event_item" key={curr_beer_idx}>
                            <span className="overlay"></span>
                           
                            <h3><span>{curr_event.beer_name}</span></h3>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
}