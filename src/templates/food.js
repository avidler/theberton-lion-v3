import React from 'react';
import _ from 'lodash';

import components, {Layout} from '../components/index';

export default class FoodMenu extends React.Component {
     
    render() {
        const specialsList = _.get(this.props, 'pageContext.site.data.specials.specialslist.specials')
        const litebiteList = _.get(this.props, 'pageContext.site.data.litebites.litebites')
        const mainList = _.get(this.props, 'pageContext.site.data.mains.mains')
        console.log("specialsList", specialsList)
        console.log("litebiteList",litebiteList)
        console.log("mainList",mainList)
        return (
            <Layout {...this.props}>
            <div className="container">
                <h3>Food</h3>
                <div className="food">
                    <div className="litebites">
                        {_.map(litebiteList, (litebite, litebite_idx) => (
                        <div className="litebite_item" key={litebite_idx}>
                  
                      

                        <span className="litebite_info">
                            {litebite.litebite_name}<br />
                            <span className="litebite_info_desc">{litebite.litebite_description}</span>
<<<<<<< HEAD
                            <span className="litebite_info_price">£{litebite.litebite_price.toFixed(2)}</span>
=======
                            <span className="litebite_info_price">£{starter.litebite_price.toFixed(2)}</span>
>>>>>>> 08188ef... added more menu categories
                        </span>
                    
                        </div>
                        ))}
                    </div>

                    <div className="mains">
                        {_.map(mainList, (main, main_idx) => (
                        <div className="main_item" key={main_idx}>
                  
                      

                        <span className="main_info">
                            {main.main_course_name}<br />
                            <span className="main_info_desc">{main.main_course_description}</span>
                            <span className="main_info_price">£{main.main_course_price.toFixed(2)}</span>
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
