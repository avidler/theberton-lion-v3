import React from 'react';
import _ from 'lodash';

import components, {Layout} from '../components/index';

export default class DrinksList extends React.Component {
     
    render() {
        const beerList = _.get(this.props, 'pageContext.site.data.beer.beers')
        console.log("beerList", beerList)
        const beerOnNow = beerList.filter(a => a.beer_on_now)
        const beerComingSoon = beerList.filter(a => a.beer_coming_soon)
        console.log("beerOnNow",beerOnNow)
        console.log("beerComingSoon",beerComingSoon)
        return (
            <Layout {...this.props}>
            <div className="container">
                <h3>Beer On Now</h3>
                <div className="beer_on_now">
                {_.map(beerOnNow, (beer, beer_idx) => (
                    <div className="beer_on_now_item" key={beer_idx}>
                        {console.log(beer.beer_image)}
                        {beer.beer_image === '/images/blank.png' ? console.log("blank image found"): console.log("Blank image not found")}
                        <span className="beer_pump_clip"><img src={beer.beer_image} /></span>
                        <span className="beer_info">
                            {beer.beer_name} by {beer.beer_brewery}<br />
                            {beer.beer_abv}%
                            £{beer.beer_price.toFixed(2)}
                        </span>
                    
                    </div>
                ))}
                </div>
                <h3>Beer Coming Soon</h3>
                <div className="beer_coming_soon">
                
                {_.map(beerComingSoon, (beer, beer_idx) => (
                    
                    <div className="beer_coming_soon_item" key={beer_idx}>
                        {console.log(beer.beer_image)}
                    {beer.beer_image === '/images/blank.png' ? console.log("blank image found"): console.log("Blank image not found")}
                    
                        <span className="beer_pump_clip"><img src={beer.beer_image} /></span>
                        <span className="beer_info">
                        {beer.beer_name} by {beer.beer_brewery}<br />
                        {beer.beer_abv}%
                        £{beer.beer_price.toFixed(2)}
                        </span>
                    </div>
                ))}
                </div>
            </div>
            </Layout>
        );
    }
}
