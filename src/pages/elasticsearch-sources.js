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
                  <a href="https://en.wikipedia.org/wiki/Elasticsearch">
                    https://en.wikipedia.org/wiki/Elasticsearch
                  </a>
                </h3>
              </li>
              <li style={{ padding: '.5em 0px' }}>
                <h3>
                  <a href="https://aws.amazon.com/elasticsearch-service/">
                    https://aws.amazon.com/elasticsearch-service/
                  </a>
                </h3>
              </li>
              <li style={{ padding: '.5em 0px' }}>
                <h3>
                  <a href="https://www.elastic.co/cloud">
                    https://www.elastic.co/cloud
                  </a>
                </h3>
                <span style={{ paddingLeft: '2em' }}>Kibana, Logstach, ...</span>
              </li>
              <li style={{ padding: '.5em 0px' }}>
                <h3>
                  <a href="https://github.com/elastic/elasticsearch">
                    https://github.com/elastic/elasticsearch
                  </a>
                </h3>
              </li>
              <li style={{ padding: '.5em 0px' }}>
                <h3>
                  <a href="https://lucene.apache.org/core/">
                    https://lucene.apache.org/core/
                  </a>
                </h3>
              </li>
              <li style={{ padding: '.5em 0px' }}>
                <h3>
                  <a href="https://www.youtube.com/watch?v=bZGSHm-XE1A">
                    https://www.youtube.com/watch?v=bZGSHm-XE1A
                  </a>
                </h3>
              </li>
              <li style={{ padding: '.5em 0px' }}>
                <h3>
                  <a href="https://www.quora.com/Which-should-I-learn-Apache-Solr-or-Elasticsearch">
                    https://www.quora.com/Which-should-I-learn-Apache-Solr-or-Elasticsearch
                  </a>
                </h3>
              </li>
              <li style={{ padding: '.5em 0px' }}>
                <h3>
                  <a href="https://stackoverflow.com/questions/12723239/elasticsearch-v-s-mongodb-for-filtering-application">
                    https://stackoverflow.com/questions/12723239/elasticsearch-v-s-mongodb-for-filtering-application
                  </a>
                </h3>
              </li>
              <li style={{ padding: '.5em 0px' }}>
                <h3>
                  <a href="https://www.tutorialspoint.com/elasticsearch">
                    https://www.tutorialspoint.com/elasticsearch
                  </a>
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
