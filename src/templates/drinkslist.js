import React from 'react';
import _ from 'lodash';

import components, {Layout} from '../components/index';

export default class DrinksList extends React.Component {
     
    render() {
        const beerList = _.get(this.props, 'pageContext.site.data.beer.beers')
        const beerOnNow = beerList.filter(a => a.beer_on_now === true)
        const beerComingSoon = beerList.filter(a => a.beer_coming_soon === true)
        console.log("beerList",beerList)
        return (
            <Layout {...this.props}>
            Beer On Now
            {_.map(beerOnNow, (beer, beer_idx) => (
                
                <div className="beer_idx">
                    {beer.beer_name} by {beer.beer_brewery}
                    {beer.beer_abv}%
                    £{beer.beer_price}
                    {console.log("beer",beer)}
                </div>
            ))}
            Beer Coming Soon
            {_.map(beerComingSoon, (beer, beer_idx) => (
                
                <div className="beer_idx">
                    {beer.beer_name} by {beer.beer_brewery}
                    {beer.beer_abv}%
                    £{beer.beer_price}
                    {console.log("beer",beer)}
                </div>
            ))}
            </Layout>
        );
    }
}
