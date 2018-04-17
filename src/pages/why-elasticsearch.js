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
                  Rapid Query Execution
                </h2>
              </li>
              <li style={{ padding: '1.5em 0px' }}>
                <h2>
                  Easy-to-use APIs
                </h2>
              </li>
              <li style={{ padding: '1.5em 0px' }}>
                <h2>
                  Complimentary Tooling and Plug-ins
                </h2>
                <span style={{ paddingLeft: '2em' }}>Kibana, Logstach, ...</span>
              </li>
              <li style={{ padding: '1.5em 0px' }}>
                <h2>
                  Near Real-time Index Updates
                </h2>
              </li>
              <li style={{ padding: '1.5em 0px' }}>
                <h2>
                  Support for your Favourite Development Language
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
