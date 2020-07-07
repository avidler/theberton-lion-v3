import React from 'react';
import _ from 'lodash';

export default class FullBeerList extends React.Component {
    render() {
    //let newBeerList = _.get(this.props, 'pageContext.site.data.beer')
    //console.log("newBeerList: ", newBeerList)
    let section = _.get(this.props, 'section');
    console.log("section: ",section)
    return (
        <section id={_.get(this.props, 'section.section_id')} className={'wrapper alt ' + _.get(this.props, 'section.section_id')}>
            <div className="events_inner">
                <div className="events_list">

                    
            
                    Beer List Here
                </div>
            </div>
        </section>
    )
}
}