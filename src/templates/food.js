import React from 'react';
import _ from 'lodash';

import components, {Layout} from '../components/index';

export default class FoodMenu extends React.Component {
     
    render() {
        const allData = _.get(this.props, 'pageContext.site.data')
        const specialsList = _.get(this.props, 'pageContext.site.data.specials.specials_list')
        const litebiteList = _.get(this.props, 'pageContext.site.data.litebites.lite_bites')
        const sidesList = _.get(this.props, 'pageContext.site.data.sides.side_dishes')
        const mainList = _.get(this.props, 'pageContext.site.data.mains.mains')
        const sunday = _.get(this.props, 'pageContext.site.data.sunday')
        const dessertsList = _.get(this.props, 'pageContext.site.data.desserts.desserts')
        const lunchList = _.get(this.props, 'pageContext.site.data.lunch')
        const snacksList = _.get(this.props, 'pageContext.site.data.snacks')

        console.log("allData", allData)

        return (
            <Layout {...this.props}>
            <div className="container">
                <h2>Food</h2>
                <div className="food">
                    <div className="specials">
                        <h3>Today's Specials</h3>
                        {_.map(specialsList, (special, special_idx) => (
                        <div className="special_item" key={special_idx}>
                            <span className="special_info">
                                <span className="special_info_name">{special.special_name}</span>
                                <span className="special_info_desc">{special.special_description}</span>
                                <span className="special_info_price">£{special.special_price.toFixed(2)}</span>
                            </span>
                        </div>
                        ))}
                    </div>

                    <div className="mains">
                        <h3>Main Menu</h3>
                        {_.map(mainList, (main, main_idx) => (
                        <div className="main_item" key={main_idx}>
                            <span className="main_info">
                                <span className="main_info_name">{main.main_course_name}</span>
                                <span className="main_info_desc">{main.main_course_description}</span>
                                <span className="main_info_price">£{main.main_course_price.toFixed(2)}</span>
                            </span>
                        </div>
                        ))}
                    </div>  

                    <div className="litebites">
                        <h3>Lite Bites and Appetisers</h3>
                        {_.map(litebiteList, (litebite, litebite_idx) => (
                        <div className="litebite_item" key={litebite_idx}>
                            <span className="litebite_info">
                                <span className="litebite_info_name">{litebite.lite_bite_name}</span>
                                <span className="litebite_info_desc">{litebite.lite_bite_description}</span>
                                <span className="litebite_info_price">£{litebite.lite_bite_price.toFixed(2)}</span>
                            </span>
                        </div>
                        ))}
                    </div>

 
                    <div className="sides">
                        <h3>Side Dishes & Snacks</h3>
                        {_.map(sidesList, (side, side_idx) => (
                        <div className="side_item" key={side_idx}>
                            <span className="side_info">
                                <span className="side_info_name">{side.side_dish_name}</span>
                                <span className="side_info_desc">{side.side_dish_description}</span>
                                <span className="side_info_price">£{side.side_dish_price.toFixed(2)}</span>
                            </span>
                        </div>
                        ))}
                    </div>

                    <div className="sunday">
                        <h3>Sunday Lunch</h3>
                         <div className="sunday_item">
                            <span className="sunday_info">
                                 <span className="sunday_info_desc">{sunday.sunday_lunch_description}</span>
                            </span>
                        </div>
                    </div>

                    <div className="desserts">
                        <h3>Desserts</h3>
                        {_.map(dessertsList, (dessert, dessert_idx) => (
                        <div className="dessert_item" key={dessert_idx}>
                            <span className="dessert_info">
                                <span className="dessert_info_name">{dessert.dessert_name}</span>
                                <span className="dessert_info_desc">{dessert.dessert_description}</span>
                                <span className="dessert_info_price">£{dessert.dessert_price.toFixed(2)}</span>
                            </span>
                        </div>
                        ))}
                    </div>

                    <div className="lunch">
                        <h3>Lunch Menu</h3>
                        <p>{lunchList.lunch_rolls.rolls_description}</p>
                        {_.map(lunchList.lunch_rolls.rolls_varieties, (lunch, lunch_idx) => (
                        <div className="lunch_item" key={lunch_idx}>
                            <span className="lunch_info">
                                <span className="lunch_name">{lunch.roll_filling}</span>
                                <span className="lunch_price">£{lunch.roll_price.toFixed(2)}</span>
                            </span>
                        </div>
                        ))}
                        {_.map(lunchList.other_lunches, (lunch, lunch_idx) => (
                        <div className="lunch_item" key={lunch_idx}>
                            <span className="lunch_info">
                                <span className="lunch_name">{lunch.other_lunch_name}</span>
                                <span className="lunch_description">{lunch.other_lunch_description}</span>
                                <span className="lunch_price">£{lunch.other_lunch_price.toFixed(2)}</span>
                            </span>
                        </div>
                        ))}
                        <h4>{lunchList.jacket_potatoes.jacket_potato_title}</h4>
                        <p>{lunchList.jacket_potatoes.jacket_potato_description}</p>
                        {_.map(lunchList.jacket_potatoes.jacket_potato_varieties, (lunch, lunch_idx) => (
                        <div className="lunch_item" key={lunch_idx}>
                            <span  className="lunch_info">
                                <span className="lunch_name">{lunch.jacket_potato_variety_name}</span>
                                <span className="lunch_price">£{lunch.jacket_potato_variety_price.toFixed(2)}</span>
                            </span>
                        </div>
                        ))}
                    </div>    

                    <div className="snacks">
                        <h3>Lion Bar Snacks</h3>
                        <p>{snacksList.snacks_intro}</p>
                        {_.map(snacksList.snack_list, (snack, snack_idx) => (
                        <div className="snack_item" key={snack_idx}>
                            <span className="snack_info">
                                <span className="snack_info_name">{snack.snack_brand_name}</span>
                                {_.map(snack.snack_brand_Variety, (snack_brand_variety, snack_brand_variety_idx) => (
                                    <div className="snack_item_variety" key={snack_brand_variety_idx}>
                                        <span className="snack_brand_variety_name">{snack_brand_variety.snack_brand_variety_name}</span>
                                        <span className="snack_brand_variety_price">£{snack_brand_variety.snack_brand_variety_price.toFixed(2)}</span>
                                    </div>
                                ))}    
                            </span>
                        </div>
                        ))}
                    </div>                

                </div>
            </div>
        </Layout>
        );
    }
}
