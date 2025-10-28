import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';

function DrinksList(props) {
           
    const [drinksChoice, setDrinksChoice] = useState("ales")

    const beerList = _.get(props, 'pageContext.site.data.beer.beers')
    const beerOnNow = beerList.filter(a => a.beer_on_now)
    const beerComingSoon = beerList.filter(a => a.beer_coming_soon)
    const ciderList = _.get(props, 'pageContext.site.data.cider')
    const bottledbeerList = _.get(props, 'pageContext.site.data.bottledbeer')
    const craftbeerList = _.get(props, 'pageContext.site.data.craftbeer')
    const lowalcbeerList = _.get(props, 'pageContext.site.data.lowalcbeer')
    const softsList = _.get(props, 'pageContext.site.data.softs')
    const spiritsList = _.get(props, 'pageContext.site.data.spirits')
    const wineList = _.get(props, 'pageContext.site.data.wine')
    console.log(bottledbeerList)
    
      useEffect(() => {
          
        const script = document.createElement("script");
        script.src = "https://www.fbgcdn.com/embedder/js/ewm2.js";
        script.async = true;
        document.body.appendChild(script);
        window.scrollTo(0, 0)
        var header = document.getElementById("menuNav");
    var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
      }
      )

      function showMenu(drinksChoice) {
        if (drinksChoice === "ales") {
            return(
            <div className="drink_category ales">
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

            </div>)
        }

        else if (drinksChoice === "craftbeer") {
            return(
                <div className="drink_category craftbeer">
                    <h3>{craftbeerList.craft_beer_title}</h3>
                    {_.map(craftbeerList.craft_beers, (craftbeer, craftbeer_idx) => (
                    <div className="drink_item craftbeer_item" key={craftbeer_idx}>
                        <span className="drink_info craftbeer_info">
                            <span className="drink_info_name_and_desc craftbeer_info_name_and_desc">
                                
                                <span className="drink_info_name craftbeer_info_name"><strong>{craftbeer.craft_beer_brewery}</strong> {craftbeer.craft_beer_name}</span>
                                <span className="drink_info_desc">{craftbeer.craft_beer_brewery_location} {craftbeer.craft_beer_abv}%</span>
                               
                                
                                <span className="drink_info_desc craftbeer_info_desc">{craftbeer.craft_beer_description}</span>
                            </span>
                            <span className="craft_beer_prices">
                                <span className="drink_info_price craftbeer_info_price">£{craftbeer.craft_beer_pint_price.toFixed(2)} | pint</span>
                                <span className="drink_info_price craftbeer_info_price">£{craftbeer.craft_beer_half_price.toFixed(2)} | half</span>
                            </span>
                        </span>
                    </div>
                    ))}
                </div>
            )
        }

        else if (drinksChoice === "bottledbeer") {
            return(
                <div className="drink_category bottledbeer">
                    <h3>{bottledbeerList.bottled_beer_title}</h3>
                    <p>{bottledbeerList.bottled_beer_description}</p>
                    {_.map(bottledbeerList.bottled_beer_list, (bottledbeer, bottledbeer_idx) => (
                    <div className="drink_item bottledbeer_item" key={bottledbeer_idx}>
                        <span className="drink_info bottledbeer_info">
                            <span className="drink_info_name_and_desc bottledbeer_info_name_and_desc">
                                
                                <span className="drink_info_name bottledbeer_info_name">{bottledbeer.bottled_beer_name}</span>
                                <span className="drink_info_desc">{bottledbeer.bottled_beer_abv}%</span>
                             </span>
                            <span className="bottled_beer_prices">
                                <span className="drink_info_price bottledbeer_info_price">£{bottledbeer.bottled_beer_price.toFixed(2)}</span>
                                    </span>
                        </span>
                    </div>
                    ))}
                </div>
            )
        }

        else if (drinksChoice === "lowalcbeer") {
            return(
                <div className="drink_category lowalcbeer">
                    <h3>{lowalcbeerList.low_alc_beer_title}</h3>
                    <p>{lowalcbeerList.low_alc_beer_description}</p>
                    {_.map(lowalcbeerList.low_alc_beer_list, (lowalcbeer, lowalcbeer_idx) => (
                    <div className="drink_item lowalcbeer_item" key={lowalcbeer_idx}>
                        <span className="drink_info lowalcbeer_info">
                            <span className="drink_info_name_and_desc lowalcbeer_info_name_and_desc">
                                
                                <span className="drink_info_name lowalcbeer_info_name"><strong>{lowalcbeer.low_alc_beer_brewery}</strong> {lowalcbeer.low_alc_beer_name}</span>
                                <span className="drink_info_desc"><span className="drink_info_desc_item">{lowalcbeer.low_alc_beer_location}</span><span className="drink_info_desc_item">   {lowalcbeer.low_alc_beer_abv}% </span><span className="drink_info_desc_item">  {lowalcbeer.low_alc_beer_bottlesize}ml</span></span>

                                
                                <span className="drink_info_desc lowalcbeer_info_desc">{lowalcbeer.low_alc_beer_description}</span>
                           
                             </span>
                            <span className="lowalc_beer_prices">
                                <span className="drink_info_price lowalcbeer_info_price">£{lowalcbeer.low_alc_beer_price.toFixed(2)}</span>
                                    </span>
                        </span>
                    </div>
                    ))}
                </div>
            )
        }

        else if (drinksChoice === "cider") {
            return(
                <div className="drink_category cider">
                    <div>
                    <h3>{ciderList.real_cider_title}</h3>
                    
                    {_.map(ciderList.real_cider_list, (cider, cider_idx) => (
                    <div className="drink_item cider_item" key={cider_idx}>
                        <span className="drink_info cider_info">
                            <span className="drink_info_name_and_desc cider_info_name_and_desc">
                                
                                <span className="drink_info_name cider_info_name"><strong>{cider.real_cider_brewery}</strong> {cider.real_cider_name}</span>
                                <span className="drink_info_desc"><span className="drink_info_desc_item">{cider.real_cider_location}</span><span className="drink_info_desc_item">   {cider.real_cider_abv}% </span></span>

                                
                                <span className="drink_info_desc cider_info_desc">{cider.real_cider_description}</span>
                           
                             </span>
                            <span className="cider_prices">
                                <span className="drink_info_price cider_info_price">£{cider.real_cider_pint_price.toFixed(2)} | pint</span>
                                <span className="drink_info_price cider_info_price">£{cider.real_cider_half_price.toFixed(2)} | half</span>
                           
                            </span>
                        </span>
                    </div>
                    ))}
</div><div>
<h3>{ciderList.craft_ciders_title}</h3>
                    
                    {_.map(ciderList.craft_cider_list, (cider, cider_idx) => (
                    <div className="drink_item cider_item" key={cider_idx}>
                        <span className="drink_info cider_info">
                            <span className="drink_info_name_and_desc cider_info_name_and_desc">
                                
                                <span className="drink_info_name cider_info_name"><strong>{cider.craft_cider_brewery}</strong> {cider.craft_cider_name}</span>
                                <span className="drink_info_desc"><span className="drink_info_desc_item">{cider.craft_cider_location}</span><span className="drink_info_desc_item">   {cider.craft_cider_abv}% </span></span>

                                
                                <span className="drink_info_desc cider_info_desc">{cider.craft_cider_description}</span>
                           
                             </span>
                            <span className="cider_prices">
                                <span className="drink_info_price cider_info_price">£{cider.craft_cider_pint_price.toFixed(2)} | pint</span>
                                <span className="drink_info_price cider_info_price">£{cider.craft_cider_half_price.toFixed(2)} | half</span>
                           
                            </span>
                        </span>
                    </div>
                    ))}
</div><div>
<h3>{ciderList.bottled_ciders_title}</h3>
                    
                    {_.map(ciderList.bottled_cider, (cider, cider_idx) => (
                    <div className="drink_item cider_item" key={cider_idx}>
                        <span className="drink_info cider_info">
                            <span className="drink_info_name_and_desc cider_info_name_and_desc">
                                
                                <span className="drink_info_name cider_info_name"><strong>{cider.bottled_cider_brewery}</strong> {cider.bottled_cider_name}</span>
                                {_.map(cider.bottled_cider_varieties, (variety, variety_idx) => (
                                    <span key={variety_idx}>{variety.bottled_cider_variety_name}</span>
                                ))}
                                <span className="drink_info_desc"><span className="drink_info_desc_item">{cider.bottled_cider_location}</span><span className="drink_info_desc_item">   {cider.bottled_cider_abv}% </span></span>

                                
                                <span className="drink_info_desc cider_info_desc">{cider.bottled_cider_description}</span>
                           
                             </span>
                            <span className="cider_prices">
                                <span className="drink_info_price cider_info_price">£{cider.bottled_cider_price.toFixed(2)}</span>
                              
                            </span>
                        </span>
                    </div>
                    ))}
                </div></div>
            )
        }

        else if (drinksChoice === "wine") {
            
            return(
                <div className="drink_category wine">
                    <div>
                        <h3>Wine</h3>
                        {_.map(wineList.wine_categories, (wine_category, wine_category_idx) => (
                            <div className="wine_category" key={wine_category_idx}>
                               <span className="wine_title">{wine_category.wine_category}</span>
                               {_.map(wine_category.wine_category_list,(wine, wine_idx) => (
                               <div className="drink_item wine_item" key={wine_idx}>
                               <span className="drink_info wine_info">
                               <span className="drink_info_name_and_desc wine_info_name_and_desc">
                               
                               <span className="drink_info_name wine_info_name"><strong>{wine.wine_vineyard}</strong> {wine.wine_name}</span>
                               <span className="drink_info_desc">{wine.wine_location}</span>
                               
                               
                               <span className="drink_info_desc wine_info_desc">{wine.wine_description}</span>
                               </span>
                               <span className="wine_prices">
                               {_.map(wine.wine_prices,(wineprice, wineprice_idx) => (
                                                              
                                                                 
                                                             
                               <span className="drink_info_price wine_info_price" key={wineprice_idx}>£{wineprice.wine_price.toFixed(2)} | {wineprice.wine_size}</span>
                                ))}
                               </span>
                               </span>
                               </div>
                                  
                               ))}
                            </div>
                        ))}
                    </div>
                </div>
            )
        }

        else if (drinksChoice === "spirits") {
            return(
                <div className="drink_category spirits">
                    <div className="spirits_list">
                        <span className="spirits_title"><h3>Spirits</h3></span>
                        {_.map(spiritsList.spirit_categories, (spirit_category, spirit_category_idx) => (
                            <div className="spirit_category" key={spirit_category_idx}>
                            <span className="spirit_title">{spirit_category.spirit_category}</span>
                               {_.map(spirit_category.spirit_category_list,(spirit, spirit_idx) => (
                               <div className="drink_item spirit_item" key={spirit_idx}>
                               <span className="drink_info spirit_info">
                               <span className="drink_info_name_and_desc spirit_info_name_and_desc">
                               
                               <span className="drink_info_name spirit_info_name">{spirit.spirit_name}</span>
                                                              
                               
                               <span className="drink_info_desc spirit_info_desc">{spirit.spirit_description}</span>
                               </span>
                               <span className="spirit_prices">
                             
                                                              
                                  {spirit.spirit_price > 0 ?                              
                                                             
                               <span className="drink_info_price spirit_info_price">£{spirit.spirit_price.toFixed(2)}</span>
                            :null}
                               </span>
                               </span>
                               </div>
                                  
                               ))}
                            </div>
                        ))}
                    </div>
                </div>
            )
        }

        else if (drinksChoice === "softs") {
            return(
                <div className="drink_category softs">
                    <span className="softs_title"><h3>Soft Drinks</h3></span>
                      <div className="softs_list">
                        
                           <div className="softs_category">
                                <span className="softs_title">Draught</span>
                               {_.map(softsList.draught_soft_drinks,(soft, soft_idx) => (
                               <div className="drink_item soft_item" key={soft_idx}>
                               <span className="drink_info soft_info">
                               <span className="drink_info_name_and_desc soft_info_name_and_desc">
                               
                               <span className="drink_info_name soft_info_name">{soft.draught_soft_drink_name}</span>
                                                              
                               </span>
                               <span className="soft_prices">
                               {_.map(soft.draught_soft_drink_prices, (softprice, softprice_idx) => (
                                                                                         
                                                                                                                            
                               <span key={softprice_idx} className="drink_info_price soft_info_price">£{softprice.draught_soft_drink_price.toFixed(2)} | {softprice.draught_soft_drink_unit}</span>
                               ))}
                               </span>
                               </span>
                               </div>
                                  
                               ))}
                            </div>

                            <div className="softs_category">
                                <span className="softs_title">Bottles & Cans</span>
                               {_.map(softsList.bottles_cans_soft_drinks,(soft, soft_idx) => (
                               <div className="drink_item soft_item" key={soft_idx}>
                               <span className="drink_info soft_info">
                               <span className="drink_info_name_and_desc soft_info_name_and_desc">
                               
                               <span className="drink_info_name soft_info_name">{soft.bottle_can_soft_drink_brand}</span>
                                    <span className="drink_info_desc soft_info_variety">{soft.bottle_can_soft_drink_variety}</span>
                                                          
                               </span>
                               <span className="soft_prices">
                                                                                         
                                                                                                                            
                               <span className="drink_info_price soft_info_price">£{soft.bottle_can_soft_drink_price.toFixed(2)}</span>
                               
                               </span>
                               </span>
                               </div>
                                  
                               ))}
                            </div>
                        </div>



                        <div className="softs_category">
                                <span className="softs_title">Mixers</span>
                               {_.map(softsList.mixers_soft_drinks,(soft, soft_idx) => (
                               <div className="drink_item soft_item" key={soft_idx}>
                               <span className="drink_info soft_info">
                               <span className="drink_info_name_and_desc soft_info_name_and_desc">
                               
                               <span className="drink_info_name soft_info_name">{soft.mixers_soft_drink_brand}</span>
                               <span className="soft_info_varieties">
                               {_.map(soft.mixers_soft_drink_varieties,(variety, variety_idx) => (
                                    <span className="drink_info_desc soft_info_variety" key={variety_idx}>{variety.mixers_soft_drink_variety_name}</span>
                               ))} 
                               </span>                     
                               </span>
                               <span className="soft_prices">
                                                                                         
                                                                                                                            
                               <span className="drink_info_price soft_info_price">£{soft.mixers_soft_drink_price.toFixed(2)} | {soft.mixers_soft_drink_measure}</span>
                               
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
                <div className="drink_header">
                <span className="drink_header_title"></span>
                <span className="drink_header_nav">
                <nav id="menuNav" className="menuNav">
               
                   
                </nav>
                 <iframe src="https://business.untappd.com/embeds/iframes/50115/175853" frameborder="0" height="2000" width="100%"></iframe>
               
                </span>
                </div>
                
            </div>
           
            </Layout>
        );
    }

export default DrinksList