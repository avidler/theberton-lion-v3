import React from 'react';
import _ from 'lodash';


export default class SectionSpecialMessage extends React.Component {
    
    render() {
        let section = _.get(this.props, 'section');
    return (
        <section id={_.get(this.props, 'section.section_id')} className={'wrapper alt ' + _.get(this.props, 'section.section_id')}>
            <div className="container" id="special_message">
            <h2 className="page-title">{`${section.title}`}</h2>
            
            <p>December Update 23/12/20</p>

<p>Following much soul searching, speaking to others, looking at latest figures for the region and judging the general mood, we have decided to close The Theberton Lion for eat in service from TOMORROW NIGHT at 10pm for the time being. We will still be offering takeaway beer daily, (including 12pm-1pm on Christmas Day!), and takeaway food will be available from Monday 28th - Thu 31 December. We want everyone to stay safe and look forward to welcoming you back in the pub as soon as we can. Have a lovely, if different, but most importantly safe Christmas.
</p>
            <p>{`${section.content}`}</p>
  
            </div>
        </section>
    )
}
}