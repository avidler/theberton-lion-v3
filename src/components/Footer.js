import React from 'react';
import _ from 'lodash';
import OpeningHoursTable from './OpeningHoursTable'

import { safePrefix } from '../utils';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="colophon" className="site-footer">
              <div className="container">
                <div className="footer_section footer_address">
                  <h5>contact/directions</h5>
                  <strong className="footer_heading">Address:</strong>
                  <p>Theberton, Leiston, Suffolk, IP16 4RU</p>
                  <strong className="footer_heading">Phone / Email: </strong>
                  <p>01728 830185</p>
                  <a title="Email Theberton Lion" href="mailto:bookings@thebertonlion.co.uk">bookings@thebertonlion.co.uk</a>
			            <strong className="footer_heading">Directions: </strong>
                  <a title="Get Directions to the Theberton Lion Pub" href="http://www.thebertonlion.co.uk/#">Click here for directions</a>	
                </div>
                <div className="footer_section footer_opening_hours">
                 <OpeningHoursTable {...this.props} />
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
