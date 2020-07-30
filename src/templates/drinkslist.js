import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';

export default class DrinksList extends React.Component {
    
      componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        
        const beerList = _.get(this.props, 'pageContext.site.data.beer.beers')
        const beerOnNow = beerList.filter(a => a.beer_on_now)
        const beerComingSoon = beerList.filter(a => a.beer_coming_soon)

        return (
            <Layout {...this.props}>
            <div className="container">
                <h3>Real Ale On Now</h3>
                <div className="beer_on_now">
                {_.map(beerOnNow, (beer, beer_idx) => (
                    <div className="beer_on_now_item" key={beer_idx}>
   
                      
                        <span className="beer_pump_clip">
                            <img src={beer.beer_image} alt="beer pump clip"/>
                                {beer.beer_image === '../images/blank.png' ? 
                                    <span className="blank_pump_clip">
                                    {beer.beer_brewery}<br />
                                    {beer.beer_name}<br />
                                    <span class="blank_pump_clip_abv">{beer.beer_abv}%</span>
                                    </span>
                                :null}                        
                        </span>

                        <span className="beer_info">
                            {beer.beer_name} by {beer.beer_brewery}<br />
                            <span className="beer_info_abv">{beer.beer_abv}%</span>
                            <span className="beer_info_price">£{beer.beer_price.toFixed(2)}</span>
                        </span>
                    
                    </div>
                ))}
                </div>
                <h3>Real Ale Coming Soon</h3>
                <div className="beer_coming_soon">
                
                {_.map(beerComingSoon, (beer, beer_idx) => (
                    
                    <div className="beer_coming_soon_item" key={beer_idx}>
                   
                    
                        <span className="beer_pump_clip">
                            <img src={beer.beer_image} alt="beer pump clip"/>
                                {beer.beer_image === '../images/blank.png' ? 
                                    <span className="blank_pump_clip">
                                    {beer.beer_brewery}<br />
                                    {beer.beer_name}<br />
                                    <span class="blank_pump_clip_abv">{beer.beer_abv}%</span>
                                    </span>
                                :null}                        
                        </span>

                        <span className="beer_info">
                        {beer.beer_name} by {beer.beer_brewery}<br />
                        <span className="beer_info_abv">{beer.beer_abv}%</span>
                        <span className="beer_info_price">£{beer.beer_price.toFixed(2)}</span>
                        </span>
                    </div>
                ))}
                </div>
                

            </div>
            </Layout>
        );
    }
}
