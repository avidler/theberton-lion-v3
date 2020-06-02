import React from 'react';
import _ from 'lodash';




export default class SectionEvents extends React.Component {
    render() {
    let section = _.get(this.props, 'section');
    console.log("section: ",section.section_id)
    return (
        <section id={_.get(this.props, 'section.section_id')} className={'wrapper alt ' + _.get(this.props, 'section.section_id')}>
            Events Section
           
        </section>
    )
}
}