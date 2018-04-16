import React from 'react'
import Link from 'gatsby-link'
import profileImg from '../assets/img/profile.jpg'

const WhoAmI = () => (
  <div className='container'>
    <div className="row">
      <div
        className="col-2"
        style={{ textAlign: 'center' }}
      >
        <img
          style={{
            width: '100%',
          }} src={profileImg} />
      </div>
      <div className="col-10">
        <h1 style={{
          fontSize: '5em'
        }}>
          Ehsan Gazar
        </h1>
        <h3>
          Full Stack Engineer at <a href="cheproximity.com.au">CHE Proximity</a>
        </h3>
        <p>
          An entrepreneur, engineer, writer, philanthropist and optimist who can help you evolve yourself
          </p>
        <ul>
          <li>
            <a href="http://ehsangazar.com">EhsanGazar.com</a>
          </li>
          <li>
            <a href="http://twitter.com/ehsangazar">@ehsangazar</a>
          </li>
          <li>
            <a href="mailto:me@ehsangazar.com">me@ehsangazar.com</a>
          </li>
        </ul>
        <span style={{ fontSize: '12px' }}>This presentation created by Gatsby.</span>
      </div>
      <Link to="/">{`<`} Slide1: Home</Link>
    </div>
  </div>
)

export default WhoAmI
