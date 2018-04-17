import React from 'react';
import Link from 'gatsby-link';
import styled, { keyframes } from 'styled-components';
import bouncein from 'react-animations/lib/bounce-in';
import slideinleft from 'react-animations/lib/slide-in-left';
import Helmet from 'react-helmet';
import Header from '../components/header';

import elasticseachImg from '../assets/img/elasticsearch.png';


const bounceinAnimation = keyframes`${bouncein}`;
const slideinleftnimation = keyframes`${slideinleft}`;

const BounceInDiv = styled.div`
  animation: 1s ${bounceinAnimation};
`;

const SlideInLeftLi = styled.li`
  animation-name: ${slideinleftnimation};
  animation-duration: ${props => props.time || 1}s;
  animation-delay: 0s;
  font-size: 1.7em;
`;

const IndexPage = () => (
  <div>
    <Helmet
      title="Elasticsearch Talk by Ehsan Gazar"
    />
    <Header nextSlide={{ link: '/who-am-i', title: 'Who Am I' }} />
    <div className="container">
      <div className="row ">
        <BounceInDiv>
          <div className="col-12 center">
            <img
              alt="Profile Ehsan Gazar"
              style={{
                width: '100%',
              }}
              src={elasticseachImg}
            />
          </div>
        </BounceInDiv>
        <ul>
          <SlideInLeftLi time={0.1}>
            <Link to="/who-am-i">Slide 2: Who Am I </Link>
          </SlideInLeftLi>
          <SlideInLeftLi time={0.2}>
            <Link to="/what-is-elastic-search">Slide 3: What is ElasticSearch </Link>
          </SlideInLeftLi>
          <SlideInLeftLi time={0.4}>
            <Link to="/what-is-kibana">Slide 4: What is Kibana </Link>
          </SlideInLeftLi>
          <SlideInLeftLi time={0.5}>
            <Link to="/how-to-install-elasticsearch">Slide 5: How to Install Elasticsearch </Link>
          </SlideInLeftLi>
          <SlideInLeftLi time={0.6}>
            <Link to="/How-to-install-kibana">Slide 6: How to Install Kibana </Link>
          </SlideInLeftLi>
          <SlideInLeftLi time={0.8}>
            <Link to="/how-to-start-with-amazon-elasticsearch-or-elastic-io">Slide 7: How to Start with Amazon Elasticsearch or Elastic.io </Link>
          </SlideInLeftLi>
          <SlideInLeftLi time={1}>
            <Link to="/how-to-import-sample-data-to-elasticsearch">Slide 8: How to Import Sample Data to Elasticsearch </Link>
          </SlideInLeftLi>
          <SlideInLeftLi time={1.2}>
            <Link to="/elasticsearch-important-concepts">Slide 9: Elasticsearch Importatnt Concepts </Link>
          </SlideInLeftLi>
          <SlideInLeftLi time={1.4}>
            <Link to="/elasticsearch-api-get-status">Slide 10: Elasticsearch API: GET status </Link>
          </SlideInLeftLi>
          <SlideInLeftLi time={1.6}>
            <Link to="/elasticsearch-api-post">Slide 11: Elasticsearch API: POST </Link>
          </SlideInLeftLi>
          <SlideInLeftLi time={1.8}>
            <Link to="/elasticsearch-api-put">Slide 12: Elasticsearch API: PUT </Link>
          </SlideInLeftLi>
          <SlideInLeftLi time={2}>
            <Link to="/elastic-search-api-get">Slide 13: Elasticsearch API: GET </Link>
          </SlideInLeftLi>
          <SlideInLeftLi time={2.2}>
            <Link to="/elastic-search-api-delete">Slide 14: Elasticsearch API: DELETE </Link>
          </SlideInLeftLi>
          <SlideInLeftLi time={2.4}>
            <Link to="/elastic-search-api-search">Slide 15: Elasticsearch API: SEARCH </Link>
          </SlideInLeftLi>
          <SlideInLeftLi time={2.6}>
            <Link to="/elastic-search-query-dsl">Slide 16: Elasticsearch API: Query DSL </Link>
          </SlideInLeftLi>
          <SlideInLeftLi time={2.8}>
            <Link to="/elastic-search-mapping">Slide 17: Elasticsearch API: _mapping </Link>
          </SlideInLeftLi>
          <SlideInLeftLi time={3}>
            <Link to="/elastic-search-aggregation">Slide 18: Elasticsearch API: Aggregation </Link>
          </SlideInLeftLi>
          <SlideInLeftLi time={3.2}>
            <Link to="/why-elasticsearch">Slide 19: Why ElasticSearch </Link>
          </SlideInLeftLi>
          <SlideInLeftLi time={3.4}>
            <Link to="/elasticsearch-usecases">Slide 20: Elasticsearch Use Cases </Link>
          </SlideInLeftLi>
          <SlideInLeftLi time={3.6}>
            <Link to="/elasticsearch-common-questions">Slide 21: Answering Common Questions </Link>
          </SlideInLeftLi>
          <SlideInLeftLi time={3.8}>
            <Link to="/elasticsearch-jobs">Slide 22: Jobs </Link>
          </SlideInLeftLi>
          <SlideInLeftLi time={4.2}>
            <Link to="/elasticsearch-sources">Slide 23: Sources </Link>
          </SlideInLeftLi>
          <SlideInLeftLi time={4}>
            <Link to="/thanks">Slide 24: Thanks </Link>
          </SlideInLeftLi>
        </ul>
      </div>
    </div>
  </div>
);

export default IndexPage;
