import React from 'react';
import _ from 'lodash';


export default class SectionSpecialMessage extends React.Component {
    
    render() {
        let section = _.get(this.props, 'section');
        const dates = ["Tue - Thu 12.00pm - 2.00pm  - Drinks Only",<br />,
            "Friday 12.00pm - 3.00pm & 5.00pm - 9.00pm :: Food 12.00pm - 3.00pm & 5.00pm - 9.00pm",<br />,
            "Saturday 12.00pm - 9.00pm :: Food 12.00pm - 9.00pm",<br />,
            "Sunday 12.00pm - 6.00pm :: Food 12.00pm - 5.00pm"]
    return (
        <section id={_.get(this.props, 'section.section_id')} className={'wrapper alt ' + _.get(this.props, 'section.section_id')}>
            <div className="container" id="special_message">
            <h2 className="page-title">{`${section.title}`}</h2>
           
            <p>We are very excited at the prospect of being able to welcome you back to The Lion again and are planning to open our outside spaces on Monday April 12 provided nothing changes between now and then.
            
With the restrictions limiting us to garden tables we will be operating different hours to normal as detailed below. With the unpredictability of the weather these are subject to change at short notice;
</p><p>
</p><p><div id="special-picture" style={{display:"flex", justifyContent:"center"}}><img src="./images/april.jpg" display="block" width="40%"></img></div></p>
            <p>{`${section.content}`}</p>
  
            </div>
        </section>
    )
}
}