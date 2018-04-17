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
            <div className="col-12">
              <p>
                <h3><strong>Cluster</strong></h3> − It is a collection of one or more nodes. Cluster provides collective indexing and search capabilities across all the nodes for entire data.
              </p>
              <p>
                <h3><strong>Index</strong></h3> − It is a collection of different type of documents and document properties. Index also uses the concept of shards to improve the performance. For example, a set of document contains data of a social networking application.
              </p>
              <p>
                <h3><strong>Shard</strong></h3> − Indexes are horizontally subdivided into shards. This means each shard contains all the properties of document, but contains less number of JSON objects than index. The horizontal separation makes shard an independent node, which can be store in any node. Primary shard is the original horizontal part of an index and then these primary shards are replicated into replica shards.
              </p>
              <p>
                <h3><strong>Replicas</strong></h3> − Elasticsearch allows a user to create replicas of their indexes and shards. Replication not only helps in increasing the availability of data in case of failure, but also improves the performance of searching by carrying out a parallel search operation in these replicas.
              </p>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Index;
