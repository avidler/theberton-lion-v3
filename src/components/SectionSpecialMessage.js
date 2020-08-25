import React from 'react';
import _ from 'lodash';


export default class SectionSpecialMessage extends React.Component {
    
    render() {
        let section = _.get(this.props, 'section');
    return (
        <section id={_.get(this.props, 'section.section_id')} className={'wrapper alt ' + _.get(this.props, 'section.section_id')}>
            <div className="container" id="special_message">
            <h2 className="page-title">{`${section.title}`}</h2>
            
            <p>We are delighted to be open again and welcoming customers old and new to The Theberton Lion. 
                We are Covid Secure and ready to serve you.  
                In order to achieve this there will be some changes to keep you safe.  
                These are detailed in full in our Covid Secure Risk Assessment which can be viewed <a href="./covid-19-risk-assessment">here</a>.
                The headlines are as follows;</p>
            
            <ul>
           <li> Table service for inside tables. Bar service for outside tables.</li>
           <li>No vertical drinking inside. (You need to be sat at a table – no standing and drinking at the bar.</li>
            <li>Bookings for either food or drink are strongly recommended to avoid disappointment.</li>
            <li>We are operating new opening times.  We are closed all day on Mondays but now open all day on Saturdays. From Tuesday – Thursday we now close at 10pm.</li>
            <li>A one-way system is in operation.  Please enter via the front door and exit at the back.</li>
            <li>Upon booking / arrival we will ask you to confirm how many households make up your party. We will be following the Government’s latest advice regarding groups and social distancing.</li>
            </ul>


            <p>Whilst the Government’s stance on Covid 19 is being relaxed, there are still guidelines and legislation to keep us all safe.  We have spent a considerable amount of time assessing and mitigating risks.  The last thing anyone wants is a second wave of this horrid virus. With this in mind if customers are not willing to abide by our policies we will refuse service.  We don’t think this will be a problem but we do have a duty of care to protect our customers and staff.</p> 
            <p>Finally we want to say a massive thank you for your support during this challenging time, you have been amazing. It’s so fantastic to be back.  We will get through this together so come and laugh, socialise responsibly, eat, drink and be merry safely.</p>
            <p>We’ll see you very soon,</p>
            <p>Tom, Helen and the Lion Team</p>
            <p>{`${section.content}`}</p>
  
            </div>
        </section>
    )
}
}