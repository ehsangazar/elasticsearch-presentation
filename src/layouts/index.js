import React from 'react';
import Helmet from 'react-helmet';

import './index.css';
import './simple-grid.css';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Elasticsearch for real time analytics Talk by Ehsan Gazar' },
      ]}
    />
    <div
      style={{
        paddingBottom: '200px',
      }}
    >
      {children()}
    </div>
  </div>
);

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
