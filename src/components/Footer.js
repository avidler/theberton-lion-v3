import React from 'react';
import _ from 'lodash';

import {Link, safePrefix, htmlToReact} from '../utils';
import ActionLink from './ActionLink';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="colophon" className="site-footer">
              <div className="container">
                <div className="footer_section footer_address">
                  <h5>contact/directions</h5>
                  <strong className="footer_heading">Address:</strong>
                  <p>Theberton, Leiston, Suffolk , IP16 4RU</p>
                  <strong className="footer_heading">Phone / Email: </strong>
                  <p>01728 830185</p>
                  <a title="Email Theberton Lion" href="mailto:bookings@thebertonlion.co.uk">bookings@thebertonlion.co.uk</a>
			            <strong className="footer_heading">Directions: </strong>
                  <a title="Get Directions to the Theberton Lion Pub" href="http://www.thebertonlion.co.uk/#">Click here for directions</a>	
                </div>
                <div className="footer_section footer_opening_hours">
                  <h5>Our Opening Hours</h5>
                  <div class="openingHours">
                    <p>Monday <span>12.00pm – 3.00pm | 6.00pm – 11.00pm</span></p>
                    <p>Tuesday <span>12.00pm – 3.00pm | 6.00pm – 11.00pm</span></p>
                    <p>Wednesday <span>12.00pm – 3.00pm | 6.00pm – 11.00pm</span></p>
                    <p>Thursday <span>12.00pm – 3.00pm | 6.00pm – 11.00pm</span></p>
                    <p>Friday <span>12.00pm – 3.00pm | 5.00pm – 11.00pm</span></p>
                    <p>Saturday <span>12.00pm – 3.00pm | 6.00pm – 11.00pm</span></p>
                    <p>Sunday <span>12.00pm – 3.00pm | 7.00pm – 11.00pm</span></p>
                  </div>
                </div>
                <div className="footer_section footer_logo">
                {_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img') && 
                    <p className="site-logo">
                      
                        <img className="larger" id="site-logo-img" src={safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img'))} alt="Logo" />
                     
                    </p>
                    }
                </div>
              </div>
            </footer>
        );
    }
}
