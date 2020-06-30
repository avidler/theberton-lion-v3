import React from 'react';
import _ from 'lodash';


export default class SectionSpecialMessage extends React.Component {
    
    render() {
        let section = _.get(this.props, 'section');
    return (
        <section id={_.get(this.props, 'section.section_id')} className={'wrapper alt ' + _.get(this.props, 'section.section_id')}>
            <div className="container" id="special_message">
            <h2 className="page-title">{`${section.title}`}</h2>
            <h3>INN Dependence Day – Saturday 4th July</h3>
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
            <p>{`${section.content}`}</p>
  
            </div>
        </section>
    )
}
}