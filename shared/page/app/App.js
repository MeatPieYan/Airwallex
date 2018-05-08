import React from 'react';
import { object } from 'prop-types';
import { renderRoutes } from 'funsee/utils';

import Layout from '../../components/layout';

const App = ({ route }) => (
  <Layout>
    {renderRoutes(route.routes)}
  </Layout>
);


App.propTypes = {
  route: object.isRequired
};

export default App;
