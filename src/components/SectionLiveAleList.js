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
                    <div id="live_ale_list_on_now_and_coming_soon">
                    <div id="live_ale_list_on_now">
                    <h3>Real Ale On Now</h3>
                    <div className="beer_on_now live_beer_on_now">
                        {_.map(beerOnNow, (beer, beer_idx) => (
                        <div className="beer_on_now_item live_beer_on_now_item" key={beer_idx}>
                            <span className="beer_pump_clip live_beer_pump_clip">
                                <img src={beer.beer_image} alt="beer pump clip"/>
                                {beer.beer_image === '../images/blank.png' ? 
                                <span className="blank_pump_clip">
                                    {beer.beer_brewery}<br />
                                    {beer.beer_name}<br />
                                    <span class="blank_pump_clip_abv">
                                        {beer.beer_abv}%
                                    </span>
                                </span>
                                :console.log("Blank image not found")}                        
                            </span>
                            <span className="beer_info live_beer_info">
                                <span className="beer_info_name">{beer.beer_name} by {beer.beer_brewery}</span>
                                <span className="beer_info_extras live_beer_info_extras">
                                    <span className="beer_info_abv live_beer_info_abv">{beer.beer_abv}%</span>
                                    <span className="beer_info_price live_beer_info_price">£{beer.beer_price.toFixed(2)}</span>
                                </span>
                            </span>
                        </div>
                        ))}
                    </div>
                </div>
                    <div id="live_ale_list_coming_soon">
                    <h3>Real Ale Coming Soon</h3>
                    <div className="beer_coming_soon live_beer_on_now">
                
                    {_.map(beerComingSoon, (beer, beer_idx) => (
                    
                    <div className="beer_coming_soon_item live_beer_coming_soon_item" key={beer_idx}>
                        <span className="beer_pump_clip live_beer_pump_clip">
                            <img src={beer.beer_image} alt="beer pump clip live_beer_pump_clip"/>
                                {beer.beer_image === '../images/blank.png' ? 
                                    <span className="blank_pump_clip">
                                    {beer.beer_brewery}<br />
                                    {beer.beer_name}<br />
                                    <span class="blank_pump_clip_abv">{beer.beer_abv}%</span>
                                    </span>
                                :console.log("Blank image not found")}                        
                        </span>

                        <span className="beer_info live_beer_info">
                        {beer.beer_name} by {beer.beer_brewery}<br />
                        <span className="beer_info_extras live_beer_info_extras">
                        <span className="beer_info_abv live_beer_info_abv">{beer.beer_abv}%</span>
                        <span className="beer_info_price live_beer_info_price">£{beer.beer_price.toFixed(2)}</span>
                        </span>
                        </span>
                    </div>
                ))}
                </div>
                    </div>
                    </div>
            </div>
        </section>
    )
}
}