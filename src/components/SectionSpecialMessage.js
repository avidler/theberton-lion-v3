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
           
           

<h2>
    Update Monday 17 May 2021
    </h2>
 
    <p>
    We are very excited to be able to welcome you back inside.  Alfresco April was fun but challenging and all steps have been taken to adhere to the latest guidance to ensure we remain Covid Secure inside and out.
    </p>
 
    <p>
    It has been a strange five months but we are confident that we can now slowly get back to normal. For now, you will need a mask to enter the pub and for when you’re moving around inside.  Once seated you’re free to sup your pint and tuck in to your lamb shank.  We will be continuing with our one way system which means entry is via the front door and departure via the beer garden.  Table service remains for both inside and out. We are continuing to offer takeaways and deliveries of both food and drink if you’re not quite ready to come back to the pub. Booking is actively encouraged for dine in and pre-ordering for takeaways is essential. It is simple to order takeaway or reserve a table from our website.
    </p>
 
    <p>
    We'll see you back at The Lion very soon. As I've said before, we will get through this, together. Take care.
    </p>
 

    <p>Tom and Helen</p>
  
            </div>
        </section>
    )
}
}