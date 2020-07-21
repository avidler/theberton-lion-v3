import React from 'react'
import _ from 'lodash';

export default class OpeningHoursTable extends React.Component {
    render() {

        return(
            <>
           
            <>
                <h5>Our Opening Hours</h5>
                  <div className="openingHours">
                    <p>Monday 
                        <span>
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.monday.monday_afternoon_open')} –&nbsp; 
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.monday.monday_afternoon_close')} |&nbsp; 
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.monday.monday_evening_open')} –&nbsp; 
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.monday.monday_evening_close')}
                        </span>
                    </p>
                    <p>Tuesday 
                        <span>
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.tuesday.tuesday_afternoon_open')} –&nbsp; 
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.tuesday.tuesday_afternoon_close')} |&nbsp; 
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.tuesday.tuesday_evening_open')} –&nbsp; 
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.tuesday.tuesday_evening_close')}
                        </span>
                    </p>
                    <p>Wednesday 
                        <span>
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.wednesday.wednesday_afternoon_open')} –&nbsp; 
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.wednesday.wednesday_afternoon_close')} |&nbsp; 
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.wednesday.wednesday_evening_open')} –&nbsp; 
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.wednesday.wednesday_evening_close')}
                        </span>
                    </p>
                    <p>Thursday 
                        <span>
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.thursday.thursday_afternoon_open')} –&nbsp; 
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.thursday.thursday_afternoon_close')} |&nbsp; 
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.thursday.thursday_evening_open')} –&nbsp; 
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.thursday.thursday_evening_close')}
                        </span>
                    </p>
                    <p>Friday 
                        <span>
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.friday.friday_afternoon_open')} –&nbsp; 
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.friday.friday_afternoon_close')} |&nbsp; 
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.friday.friday_evening_open')} –&nbsp; 
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.friday.friday_evening_close')}
                        </span>
                    </p>
                    <p>Saturday 
                        <span>
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.saturday.saturday_afternoon_open')} –&nbsp; 
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.saturday.saturday_afternoon_close')} |&nbsp; 
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.saturday.saturday_evening_open')} –&nbsp; 
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.saturday.saturday_evening_close')}
                        </span>
                    </p>
                    <p>Sunday 
                        <span>
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.sunday.sunday_afternoon_open')} –&nbsp; 
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.sunday.sunday_afternoon_close')} |&nbsp; 
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.sunday.sunday_evening_open')} –&nbsp; 
                        {_.get(this.props, 'pageContext.site.siteMetadata.opening_hours.sunday.sunday_evening_close')}
                        </span>
                    </p>                                                                                        
                    
                  </div>
                
            </>
        
        </>
        )
    }
}