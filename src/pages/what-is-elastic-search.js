import React from 'react';
import Helmet from 'react-helmet';
import luecenImg from '../assets/img/lucene.png';
import Header from '../components/header';
import Page from '../components/page';
import Routes from '../routes';

const Index = (props) => {
  const IndexNumber = Routes.findIndex(item => item.link === props.location.pathname) || 0;
  return (
    <div>
      <Helmet
        title={Routes[IndexNumber].title}
      />
      <Header currentNumber={IndexNumber} />
      <Page>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 >
                Elasticsearch is an open-source, RESTful, distributed search and analytics engine built on
            <a rel="noopener noreferrer" href="https://lucene.apache.org/core/"> Apache Lucene</a>

              </h2>
              <br />
              <hr />
              <br />
              <br />

              <h3>
                But What is Apache Lucene?
              </h3>
              <div className="center">
                <img src={luecenImg} alt="lecene" />
              </div>
              <br />
              <h2 >
                Apache LuceneTM is a high-performance, full-featured text search engine library written entirely in Java. It is a technology suitable for nearly any application that requires full-text search, especially cross-platform.
              </h2>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Index;
