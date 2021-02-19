import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {safePrefix, htmlToReact} from '../utils';

export default class Page extends React.Component {
 
  componentDidMount() {
    window.scrollTo(0, 0)
  }
    render() {
        return (
            <Layout {...this.props}>
            <div className="outer">
              <div className="inner-medium">
                <article className="post post-full">
                  <header className="post-header">
                    <h1 className="post-title">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                  </header>
                  {_.get(this.props, 'pageContext.frontmatter.image') && 
                  <div className="post-thumbnail">
                    <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.image'))} alt={_.get(this.props, 'pageContext.frontmatter.title')} />
                  </div>
                  }
                  {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                  <div className="post-subtitle">
                    {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                  </div>
                  }
                  <div className="post-content">
                  <span className="glf-button" data-glf-cuid="50c453a2-d190-4cc1-83dd-d2daae9a31e2" data-glf-ruid="66c5d05f-76ff-468c-9142-d082e559d3b9" mark> See MENU & Order</span>

<span className="glf-button reservation" data-glf-cuid="50c453a2-d190-4cc1-83dd-d2daae9a31e2" data-glf-ruid="66c5d05f-76ff-468c-9142-d082e559d3b9" data-glf-reservation="true" > Table Reservation</span>

Click here
                  </div>
                </article>
              </div>
            </div>
            </Layout>
        );
    }
}
