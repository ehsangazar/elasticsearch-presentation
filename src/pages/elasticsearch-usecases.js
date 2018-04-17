import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Page from '../components/page';
import Routes from '../routes';

const Index = (props) => {
  const IndexNumber = Routes.findIndex(item => item.link === props.location.pathname) || 0;
  return (
    <div>
      <Helmet
        title={Routes[IndexNumber] && Routes[IndexNumber].title}
      />
      <Header currentNumber={IndexNumber} />
      <Page>
        <div className="container">
          <div className="row">
            <ul>
              <li style={{ padding: '1.5em 0px' }}>
                <h2>
                  Log Analytics
                </h2>
              </li>
              <li style={{ padding: '1.5em 0px' }}>
                <h2>
                  Full Text Search
                </h2>
              </li>
              <li style={{ padding: '1.5em 0px' }}>
                <h2>
                  Distributed Document Store
                </h2>
              </li>
              <li style={{ padding: '1.5em 0px' }}>
                <h2>
                  Real-time Application Monitoring
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Index;
