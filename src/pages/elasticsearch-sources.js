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
              <li style={{ padding: '.5em 0px' }}>
                <h3>
                  https://en.wikipedia.org/wiki/Elasticsearch
                </h3>
              </li>
              <li style={{ padding: '.5em 0px' }}>
                <h3>
                  https://aws.amazon.com/elasticsearch-service/
                </h3>
              </li>
              <li style={{ padding: '.5em 0px' }}>
                <h3>
                  https://www.elastic.co/cloud
                </h3>
                <span style={{ paddingLeft: '2em' }}>Kibana, Logstach, ...</span>
              </li>
              <li style={{ padding: '.5em 0px' }}>
                <h3>
                  https://github.com/elastic/elasticsearch
                </h3>
              </li>
              <li style={{ padding: '.5em 0px' }}>
                <h3>
                  https://lucene.apache.org/core/
                </h3>
              </li>
              <li style={{ padding: '.5em 0px' }}>
                <h3>
                  https://www.youtube.com/watch?v=bZGSHm-XE1A
                </h3>
              </li>
              <li style={{ padding: '.5em 0px' }}>
                <h3>
                  https://www.quora.com/Which-should-I-learn-Apache-Solr-or-Elasticsearch
                </h3>
              </li>
              <li style={{ padding: '.5em 0px' }}>
                <h3>
                  https://stackoverflow.com/questions/12723239/elasticsearch-v-s-mongodb-for-filtering-application
                </h3>
              </li>
              <li style={{ padding: '.5em 0px' }}>
                <h3>
                  https://www.tutorialspoint.com/elasticsearch
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Index;
