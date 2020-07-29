import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import components, {Layout} from '../components/index';



function FoodMenu (props) {
    const [menuChoice, setMenuChoice] = useState("specials") 
    
        const allData = _.get(props, 'pageContext.site.data')
        const specialsList = _.get(props, 'pageContext.site.data.specials.specials_list')
        const litebiteList = _.get(props, 'pageContext.site.data.litebites.lite_bites')
        const sidesList = _.get(props, 'pageContext.site.data.sides.side_dishes')
        const mainList = _.get(props, 'pageContext.site.data.mains.mains')
        const sunday = _.get(props, 'pageContext.site.data.sunday')
        const dessertsList = _.get(props, 'pageContext.site.data.desserts.desserts')
        const lunchList = _.get(props, 'pageContext.site.data.lunch')
        const snacksList = _.get(props, 'pageContext.site.data.snacks')

        //console.log("allData", allData)
        
        useEffect(() => {
            var header = document.getElementById("menuNav");
    var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
        })

        

        function showMenu(menuChoice) {
            if (menuChoice === "specials") {
                return(
                <div className="food_category specials">
                    <h3>Today's Specials</h3>
                    {_.map(specialsList, (special, special_idx) => (
                    <div className="food_item special_item" key={special_idx}>
                        <span className="food_info special_info">
                            <span className="food_info_name_and_desc">
                                <span className="food_info_name special_info_name">{special.special_name}</span>
                                <span className="food_info_desc special_info_desc">{special.special_description}</span>
                            </span>
                            <span className="food_info_price special_info_price">£{special.special_price.toFixed(2)}</span>
                        </span>
                    </div>
                    ))}
                </div>)
            }
            else if (menuChoice === "mains") {
                return(
                    <div className="food_category mains">
                    <h3>Main Menu</h3>
                    {_.map(mainList, (main, main_idx) => (
                    <div className="food_item main_item" key={main_idx}>
                        <span className="food_info main_info">
                            <span className="food_info_name_and_desc">
                                <span className="food_info_name main_info_name">{main.main_course_name}</span>
                                <span className="food_info_desc main_info_desc">{main.main_course_description}</span>
                            </span>
                            <span className="food_info_price main_info_price">£{main.main_course_price.toFixed(2)}</span>
                        </span>
                    </div>
                    ))}
                </div>  
                )
            }

            else if (menuChoice === "litebites") {
                return(
                    <div className="food_category litebites">
                    <h3>Lite Bites and Appetisers</h3>
                    {_.map(litebiteList, (litebite, litebite_idx) => (
                    <div className="food_item litebite_item" key={litebite_idx}>
                        <span className="food_info litebite_info">
                            <span className="food_info_name_and_desc">
                                <span className="food_info_name litebite_info_name">{litebite.lite_bite_name}</span>
                                <span className="food_info_desc litebite_info_desc">{litebite.lite_bite_description}</span>
                            </span>
                            <span className="food_info_price litebite_info_price">£{litebite.lite_bite_price.toFixed(2)}</span>
                            
                        </span>
                    </div>
                    ))}
                </div>
                )
            }

            else if (menuChoice === "sides") {
                return(
                    <div className="food_category sides">
                    <h3>Side Dishes & Snacks</h3>
                    {_.map(sidesList, (side, side_idx) => (
                    <div className="food_item side_item" key={side_idx}>
                        <span className="food_info side_info">
                            <span className="food_info_name_and_desc">
                                <span className="food_info_name side_info_name">{side.side_dish_name}</span>
                                <span className="food_info_desc side_info_desc">{side.side_dish_description}</span>
                            </span>
                            <span className="food_info_price side_info_price">£{side.side_dish_price.toFixed(2)}</span>
                        </span>
                    </div>
                    ))}
                </div>
                )
            }

            else if (menuChoice === "sunday") {
                return(
                    <div className="food_category sunday">
                    <h3>Sunday Lunch</h3>
                     <div className="food_item sunday_item">
                        <span className="food_info sunday_info">
                             <span className="food_info_desc sunday_info_desc">{sunday.sunday_lunch_description}</span>
                        </span>
                    </div>
                </div>
                )
            }

            else if (menuChoice === "desserts") {
                return (
                    <div className="food_category desserts">
                    <h3>Desserts</h3>
                    {_.map(dessertsList, (dessert, dessert_idx) => (
                    <div className="food_item dessert_item" key={dessert_idx}>
                        <span className="food_info dessert_info">
                            <span className="food_info_name_and_desc">
                                <span className="food_info_name dessert_info_name">{dessert.dessert_name}</span>
                                <span className="food_info_desc dessert_info_desc">{dessert.dessert_description}</span>
                            </span>
                            <span className="food_info_price dessert_info_price">£{dessert.dessert_price.toFixed(2)}</span>
                        </span>
                    </div>
                    ))}
                </div>
                )
            }

            else if (menuChoice === "lunch") {
                return (
                    <div className="food_category lunch">
                    <h3>Lunch Menu</h3>
                    {_.map(lunchList.other_lunches, (lunch, lunch_idx) => (
                    <div className="food_item lunch_item" key={lunch_idx}>
                        <span className="food_info lunch_info">
                            <span className="food_info_name_and_desc">
                                <span className="food_info_name lunch_name">{lunch.other_lunch_name}</span>
                                <span className="food_info_desc lunch_description">{lunch.other_lunch_description}</span>
                            </span>
                            <span className="food_info_price lunch_price">£{lunch.other_lunch_price.toFixed(2)}</span>
                        </span>
                    </div>
                    ))}

                    <span className="rolls">
                    <span className="rolls_description">{lunchList.lunch_rolls.rolls_description}</span>
                    {_.map(lunchList.lunch_rolls.rolls_varieties, (lunch, lunch_idx) => (
                    <div className="food_item lunch_item" key={lunch_idx}>
                        <span className="food_info lunch_info">
                            <span className="food_info_name roll_name">{lunch.roll_filling}</span>
                            <span className="food_info_price roll_price">£{lunch.roll_price.toFixed(2)}</span>
                        </span>
                    </div>
                    ))}
                    </span>

                    <span className="potatoes">
                    <span className="potato_title">{lunchList.jacket_potatoes.jacket_potato_title}</span><br />
                    <span className="potato_description">{lunchList.jacket_potatoes.jacket_potato_description}</span>
                    {_.map(lunchList.jacket_potatoes.jacket_potato_varieties, (lunch, lunch_idx) => (
                    <div className="food_item lunch_item" key={lunch_idx}>
                        <span className="food_info lunch_info">
                            <span className="food_info_name potato_name">{lunch.jacket_potato_variety_name}</span>
                            <span className="food_info_price potato_price">£{lunch.jacket_potato_variety_price.toFixed(2)}</span>
                        </span>
                    </div>
                    ))}
                    </span>
                </div> 
                )
            }

            else if (menuChoice === "snacks") {
                return (
                    <div className="food_category snacks">
                    <h3>Lion Bar Snacks</h3>
                    <span className="snacks_intro">{snacksList.snacks_intro}</span>
                    <div className="snack_items">
                    {_.map(snacksList.snack_list, (snack, snack_idx) => (
                    <div className="food_item snack_item" key={snack_idx}>
                        <span className="food_info snack_info">
                            <span className="food_info_name snack_info_name">{snack.snack_brand_name}</span>
                            <span className="snack_brand_variety_info">
                            {_.map(snack.snack_brand_Variety, (snack_brand_variety, snack_brand_variety_idx) => (
                                <div className="food_item_variety snack_item_variety" key={snack_brand_variety_idx}>
                                    <span className="food_info_variety_name snack_brand_variety_name">{snack_brand_variety.snack_brand_variety_name}</span>
                                    <span className="food_info_variety_price snack_brand_variety_price">£{snack_brand_variety.snack_brand_variety_price.toFixed(2)}</span>
                                </div>
                            ))}   
                            </span> 
                        </span>
                    </div>
                    ))}
                    </div>
                </div>  
                )
            }

        }

        return (
            <Layout {...props}>
            <div className="container">
                <div className="food_header">
                <span className="food_header_title"><h1>Food</h1></span>
                <span className="food_header_nav">
                <nav id="menuNav" class="menuNav">
                    <ul><li className="btn active" onClick={() => setMenuChoice("specials")}>Specials</li></ul>
                    <ul><li className="btn" onClick={() => setMenuChoice("mains")}>Mains</li></ul>
                    <ul><li className="btn" onClick={() => setMenuChoice("litebites")}>Lite Bites</li></ul>
                    <ul><li className="btn" onClick={() => setMenuChoice("sides")}>Sides</li></ul>
                    <ul><li className="btn" onClick={() => setMenuChoice("sunday")}>Sunday Lunch</li></ul>
                    <ul><li className="btn" onClick={() => setMenuChoice("desserts")}>Desserts</li></ul>
                    <ul><li className="btn" onClick={() => setMenuChoice("lunch")}>Lunch</li></ul>
                    <ul><li className="btn" onClick={() => setMenuChoice("snacks")}>Bar Snacks</li></ul>
                </nav>
                </span>
                </div>
                <div className="food">{showMenu(menuChoice)}</div>
            </div>
        </Layout>
      
        );
    }


export default FoodMenu