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
            <h2 className="page-title">Book for Christmas</h2>
         
            <div id="special-picture">
           <img src="/images/book_for_christmas.jpg" alt="Logo" />
          </div>

  
            </div>
        </section>
    )
}
}