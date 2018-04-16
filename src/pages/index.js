import React from 'react'
import Link from 'gatsby-link'

import elasticseachImg from '../assets/img/elasticsearch.png'

const IndexPage = () => (
  <div className='container'>
    <div className="row center">
      <div className="col-12">
        <img
          style={{
            width: '100%',
          }} src={elasticseachImg} />
      </div>
      <h2>
        for Real-time Analytics
      </h2>
      <Link to="/who-am-i">Slide2: Who Am I {`>`} </Link>
    </div>
  </div>
)

export default IndexPage
