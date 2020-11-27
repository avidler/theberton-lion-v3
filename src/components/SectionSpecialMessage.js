import React from 'react';
import _ from 'lodash';


export default class SectionSpecialMessage extends React.Component {
    
    render() {
        let section = _.get(this.props, 'section');
    return (
        <section id={_.get(this.props, 'section.section_id')} className={'wrapper alt ' + _.get(this.props, 'section.section_id')}>
            <div className="container" id="special_message">
            <h2 className="page-title">{`${section.title}`}</h2>
            
            <p>In light of the recent announcement of Suffolk being placed under Tier 2 Restrictions as the Covid 19 pandemic continues, we would like to outline our plan for reopening this December.  We will not let this virus beat us and can't wait to welcome you back inside the pub. However, we have to be sensible as to the effect these new rules will have on trade. With this in mind we have decided to open for dine-in and takeaway on Fridays, Saturdays and Sundays only for now. Don't worry, takeaway ale will continue to be available daily by pre-ordering!</p>
            <p>As Helen and I are due to get married, (finally!), on Friday 4th December, we will be reopening on the evening of Saturday 5th December as detailed in the new opening hours below. We are needless to say planning a wonderful full celebration next year.</p>
            <p>As we enter December we are launching a menu of Winter Warmers, (again below), that will be available in its entirety for both eat in and take out. Booking is actively encouraged and pre-ordering for takeaways is essential. We'll see you back at The Lion very soon.  As I've said before, we will get through this,  together. Take care.</p>
            <div style={{'display' : 'flex'}}>
                <div style={{'width': '45%', 'padding': '5px', 'float': 'left'}}><img src="./images/dec20openhours.jpg" /></div>
                <div style={{'width': '45%'}}><img src="./images/winterwarmers.jpg"></img></div>
            </div>
            <p>{`${section.content}`}</p>
  
            </div>
        </section>
    )
}
}