import React from 'react';
import _ from 'lodash';



import {Link, safePrefix, classNames} from '../utils';

export default class Header extends React.Component {

  

  componentDidMount() {
    
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }
  resizeHeaderOnScroll() {
    
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 100,
      headerEl = document.getElementById("site-logo-img");

    if (distanceY > shrinkOn) {
      headerEl.classList.remove("larger");
      headerEl.classList.add("smaller");
    } else if (distanceY < (shrinkOn -70)){
      headerEl.classList.remove("smaller");
      headerEl.classList.add("larger");
    }
  }
    render() {
        return (
          
            <header id="masthead" className="site-header outer">
              
              <div className="inner">
              
                <div className="site-header-inside">
                  <div className="site-branding">
                    {_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img') && 
                    <p className="site-logo">
                      <Link to={safePrefix('/')}>
                        <img className="larger" id="site-logo-img" src={safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img'))} alt="Logo" />
                      </Link>
                    </p>
                    }
                    {((_.get(this.props, 'pageContext.frontmatter.template') === 'landing') || (_.get(this.props, 'pageContext.frontmatter.template') === 'blog')) ? 
                    <h1 className="site-title"><Link to={safePrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title')}</Link></h1>
                     : 
                    <p className="site-title"><Link to={safePrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title')}</Link></p>
                    }
                  </div>
                    <div className="nav-and-social">

                  {(_.get(this.props, 'pageContext.site.siteMetadata.header.nav_links') && _.get(this.props, 'pageContext.site.siteMetadata.header.has_nav')) && <React.Fragment>
                  <nav id="main-navigation" className="site-navigation" aria-label="Main Navigation">
                    <div className="site-nav-inside">
                      <button id="menu-close" className="menu-toggle"><span className="screen-reader-text">Open Menu</span><span
                          className="icon-close" aria-hidden="true" /></button>
                      <ul className="menu">
                        {_.map(_.get(this.props, 'pageContext.site.siteMetadata.header.nav_links'), (action, action_idx) => (
                        <li key={action_idx} className={classNames('menu-item', {'current-menu-item': _.get(this.props, 'pageContext.url') === _.get(action, 'url'), 'menu-button': _.get(action, 'primary')})}>
                          <Link to={safePrefix(_.get(action, 'url'))}
                             {...(_.get(action, 'new_window') ? {target: '_blank', rel: 'noopener'} : null)}
                             className={classNames({'button': _.get(action, 'primary')})}>{_.get(action, 'label')}</Link>
                        </li>
                        ))}
                      </ul>
                    </div>
                  </nav>
                  <button id="menu-open" className="menu-toggle"><span className="screen-reader-text">Close Menu</span><span className="icon-menu"
                      aria-hidden="true" /></button>
                  </React.Fragment>}
                  {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_social') && 
                        <div className="social-nav">
                          <ul className="social-links">
                           <li><a href="https://www.facebook.com/thebertonlion" rel="noreferrer" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                           <li><a href="https://twitter.com/thebertonlion?lang=en" rel="noreferrer" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                          
                          </ul>
                        </div>
                        }
                        </div>
                       
                </div>
              
             
              </div>
            </header>
            
        );
    }
}
