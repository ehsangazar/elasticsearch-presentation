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
                  If Elasticsearch can store data with ready to use RESTful APIs, Could you use it instead of Mongodb?
                </h2>
              </li>
              <li style={{ padding: '1.5em 0px' }}>
                <h2>
                  What is an alternative of ElasticSearch?
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
