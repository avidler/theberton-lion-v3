import React from 'react';
import _ from 'lodash';

import components, {Layout} from '../components/index';

export default class DrinksList extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            Drinks List Template
            </Layout>
        );
    }
}
