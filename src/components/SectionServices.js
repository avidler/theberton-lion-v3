import React from 'react';
import _ from 'lodash';

import {safePrefix, markdownify} from '../utils';
import ActionLink from './ActionLink';

export default class SectionHero extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section id={_.get(section, 'section_id')} className="block hero-block bg-accent outer">
              <div className="inner">
                <div className="grid">
                    <p>Services Section</p>

                </div>
              </div>
            </section>
        );
    }
}
