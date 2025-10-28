import React from 'react';
import _ from 'lodash';


export default class SectionLiveAleList extends React.Component {
    
    render() {
        let section = _.get(this.props, 'section');
        const beerList = _.get(this.props, 'pageContext.site.data.beer.beers')
        const beerOnNow = beerList.filter(a => a.beer_on_now)
        const beerComingSoon = beerList.filter(a => a.beer_coming_soon)
    return (
        <section id={_.get(this.props, 'section.section_id')} className={'wrapper alt ' + _.get(this.props, 'section.section_id')}>
            <div className="container" id="live_ale_list">
                <h2 className="page-title">{`${section.title}`}</h2>
                <iframe src="https://business.untappd.com/embeds/iframes/50115/175853" frameborder="0" height="2000" width="100%"></iframe>
               
            </div>
        </section>
    )
}
}