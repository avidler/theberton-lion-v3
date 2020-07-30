import React from 'react';
import _ from 'lodash';

export default class SectionServices extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        console.log("section: ",section.section_id)
        return (
            <section id={_.get(section, 'section_id')} className="hero-block outer">
              <div className="service_inner">
                      <div className="service_list">
                    {_.map(section.service_section, (service, service_idx) => (
                        <div className="service_item">
                        <a href={`./${service.service_page_link}`}>
                       
                        <div id={`service-${service_idx}`} className="service_details panel">
                            <span className="overlay"></span>
                            <img src={`${service.service_image}`} className="service_image" alt={`${service.service_name}`}/>
                            <h3><span className="service_name">{`${service.service_name}`}</span></h3>
                        </div>
                        </a>
                        </div>
                    ))}
                    </div>

              </div>
            </section>
        );
    }
}
