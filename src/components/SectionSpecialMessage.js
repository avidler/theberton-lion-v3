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
            <div>
            <h3>Friday 17 December 2021</h3>
<p>
Sadly one of our children has tested positive for COVID this morning on a lateral flow test having tested negative each day previously this week. We are all otherwise testing negative at present.
</p>
<p>
It is important to say that this has NOT been spread through the pub and appears to have most likely come from a school setting.  To put your minds at rest they have no symptoms and are well but of course we are following the necessary protocol and want to keep you all safe, as well as our family. We have all gone for PCR tests today these usually are returned in 48 hours.
</p>
<p>
As a small team we do not have the available resources to operate easily without the landlord and landlady and as we are close contacts of our children we cannot work until we have negative PCR Tests. We would then need to continue our daily testing regime for seven days.
</p>
<p>
It is important to say we are both fully vaccinated. 
</p>
<p>
We believe that the only way forward currently is to close the pub until we have PCR results. The pub will be deep cleaned as a matter of course and we will post further information shortly.
</p>
<p>
Thank you for your understanding, please take care.
</p>
<p>
Tom and Helen
</p>
            </div>
            <div id="special-picture">
           <img src="/images/book_for_christmas.jpg" alt="Logo" />
          </div>

  
            </div>
        </section>
    )
}
}