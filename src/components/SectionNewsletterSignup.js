import React from 'react';
import _ from 'lodash';


export default class SectionNewsletterSignup extends React.Component {
    
    render() {
        let section = _.get(this.props, 'section');
    return (
        <section id={_.get(this.props, 'section.section_id')} className={'wrapper alt ' + _.get(this.props, 'section.section_id')}>
            <div className="container">
            <h4 className="page-title">{`${section.newsletter_signup_title}`}</h4>
            <p className="subtext">{`${section.newsletter_blurb}`}</p>
            <div id="msg"></div>
            <form class="subform" id="subform" action="" method="get" novalidate="novalidate">
            <input name="email" id="email" type="text" placeholder="Enter Your Email Address" value="" />
		    <input name="esubmit" type="submit" value="Go" />		 
            </form>
            </div>
        </section>
    )
}
}