import React from 'react';
import _ from 'lodash';


export default class SectionWelcome extends React.Component {
    
    render() {
        let section = _.get(this.props, 'section');
    return (
        <section id={_.get(this.props, 'section.section_id')} className={'wrapper alt ' + _.get(this.props, 'section.section_id')}>
            <div className="container" id="welcome">
            <h2 className="page-title">{`${section.title}`}</h2>
            <p>{`${section.content1}`}</p>
            <p>{`${section.content2}`}</p>
            </div>
        </section>
    )
}
}