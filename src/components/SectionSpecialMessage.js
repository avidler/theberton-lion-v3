import React from 'react';
import _ from 'lodash';


export default class SectionSpecialMessage extends React.Component {
    
    render() {
        let section = _.get(this.props, 'section');
    return (
        <section id={_.get(this.props, 'section.section_id')} className={'wrapper alt ' + _.get(this.props, 'section.section_id')}>
            <div className="container" id="special_message">
            <h2 className="page-title">{`${section.title}`}</h2>
            <h3>INN Dependence Day – Saturday 4th July - Tomorrow!</h3>
            <p>After over a quarter of a year of enforced closure we are delighted to be reopening for both drinks and food on Saturday 4th July. We will be open ALL DAY to celebrate. We have been busying ourselves getting ready and having assessed the risks, feel we are able to open safely for our customers and staff. Our full Risk Assessment will shortly be available at www.thebertonlion.co.uk. </p>
            <p>We are <strong>strongly advising table bookings</strong> for indoors and outdoors whether you are eating or just coming in for a drink. This will help us no end. Whilst we will be open for walk-ins, bookings will take priority and you may be asked to wait until we are able to allocate a space. </p>
            <p>Our capacity inside has been reduced to ensure 1m+ distancing is observed and whilst we have extended our garden area, due to the Government restrictions on the number of households socialising as detailed in our risk assessment as well as a curfew of 9.30pm in the extended section, we anticipate that at times we will reach table capacity and be unable to accommodate unexpected arrivals. </p>
            <p>As part of our review we are changing our trading hours. We are closing an hour earlier Tuesday – Thursday and closing all day on Mondays but have taken the step to extend Saturdays to ALL DAY for drinks and food as an experiment. These times are subject to change;</p>
            <table>
                <tr><td>Monday</td><td>CLOSED ALL DAY</td><td></td></tr>
                <tr><td>Tuesday</td><td>12.00pm – 3.00pm</td><td>6.00pm – 10.00pm</td></tr>
                <tr><td>Wednesday</td><td>12.00pm – 3.00pm</td><td>6.00pm – 10.00pm</td></tr>
                <tr><td>Thursday</td><td>12.00pm – 3.00pm</td><td>6.00pm – 10.00pm</td></tr>
                <tr><td>Friday</td><td>12pm – 3.00pm</td><td>5.00pm – 11.00pm</td></tr>
                <tr><td>Saturday</td><td>12pm – 11.00pm</td><td></td></tr>
                <tr><td>Sunday</td><td>12pm – 6.00pm</td><td></td></tr>

 
            </table>
            <p>Due to restrictions at present, many of our regular events including live music, Rock and Roll Bingo and Open Mic Night are on hold but we are working on plans to reinstate <strong>Beer Club</strong> and <strong>Book Club</strong> and will be launching a monthly <strong>Big Saturday Quiz Night</strong> in the coming weeks. We will shortly be announcing our themed food nights for the next few months and our <strong>5th Annual Beer Festival</strong> will happen, just a little later in October!</p>
            <p>From Saturday our <strong>New Menu</strong> will be available to eat in but rest assured we will now permanently offer our popular <strong>Takeaway Menu.</strong> As currently, takeaway orders need 
to be booked in advance with collection slots allocated. We will then deliver to you in the car park.</p>
            <p><strong>Five real ales</strong> will be available on July 4th as well as Calvors Helles Lager, Briarbank Black Horse Stout, our extensive range of unique wines, boutique spirits and an extensive soft drink selection.</p>
            <p>When arriving at The Theberton Lion you will notice some changes.</p>
            <p>As recommended by the Government, a <strong>one-way system</strong> will be in operation with customers <strong>entering by the front door</strong> and <strong>leaving by the back</strong> and then <strong>departing via the garden gate</strong>. If re-entering, this is via the front door</p>
            <p><strong>All drinkers inside will need to be based at tables and table service will operate for these customers.</strong> There will sadly be no bar stools and no drinking at the bar at present. </p>
            <p><strong>Bar service is available to those drinking outside only</strong> but customers must enter via the front door. <strong>Vaping is no longer permitted indoors.</strong></p>
            <p>It goes without saying but please do not visit if you have any COVID symptoms, such as a new continuous cough, fever or a loss of taste/smell. Similarly we ask that you wash your hands and use the sanitisers provided regularly to keep yourselves safe. <strong>Children must be seated at tables whether inside or out.</strong> Dogs are still welcome but must be kept on leads at all times.</p>
            <p>Upon booking/arrival we will ask you to confirm how many households make up your party and will be following the latest Government advice regarding groups and social distancing. </p>
            <p>We still accept cash but prefer contactless payment where possible. Change will be given from a ‘clean float’.</p>
            <p>Signage will be displayed throughout the premises to reinforce this and other guidance. Please follow this advice and just ask if anything is unclear</p>
            <p>Whilst the Government’s stance on Covid 19 is being relaxed, there are still guidelines and legislation to keep us all safe. We have spent a considerable amount of time assessing and mitigating risks. The last thing anyone wants is a second wave of this horrid virus. With this in mind if customers are not willing to abide by our policies we will refuse service. We don’t think this will be a problem but we do have a duty of care to protect our customers and staff.</p>
            <p>Finally we want to say a massive thank you for your support during this challenging time, you have been amazing. It’s so fantastic to be back. We will get through this together so come and laugh, socialise responsibly, eat, drink and be merry safely</p>
            <p>We’ll see you very soon,</p>
            <p>Tom, Helen and the Whole Lion Team</p>
            <p>{`${section.content}`}</p>
  
            </div>
        </section>
    )
}
}