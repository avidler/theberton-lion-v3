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
            <div className="beer_on_now">
            Beer On Now
            {_.map(beerOnNow, (beer, beer_idx) => (
                
                <div className="beer_idx">
                    {beer.beer_name} by {beer.beer_brewery}
                    {beer.beer_abv}%
                    £{beer.beer_price}
                    On Now:{beer.beer_on_now}
                    Coming Soon:{beer.beer_coming_soon}
                </div>
            ))}
            </div>
            <div className="beer_coming_soon">
            Beer Coming Soon
            {_.map(beerComingSoon, (beer, beer_idx) => (
                
                <div className="beer_idx">
                    {beer.beer_name} by {beer.beer_brewery}
                    {beer.beer_abv}%
                    £{beer.beer_price}
                    On Now:{beer.beer_on_now}
                    Coming Soon:{beer.beer_coming_soon}
                    {console.log("beer",beer)}
                </div>
            ))}
            </div>
            </Layout>
        );
    }
}
