import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Nav />

    <div className='hero'>
      <h1 className='title'>Welcome to Chicken Fried Steak Finder</h1>
      <p className='description'>
        Enter your location and wait for the options of local CFS roll in.  
      </p>

      <div className='row'>
        <Link href='#'>
          <a className='result-card'>
            <h3>Result</h3>
            <p>Number in list - ordered on shortest distance accending</p>
            <p>Name of restaurant</p>
            <p>Address</p>
            <p>Estimate distance</p>
            <p>link for map directions</p>
            <p>Yelp review rating</p>
          </a>
        </Link>
      </div>
      <div className='row'>
        <Link href='#'>
          <a className='result-card'>
            <h3>CJ's Diner - click the card for directions</h3>
            <div className="row">
              <div className="left">
                <p>1</p>
                <p>1111 2nd Ave. Seattle, WA 98111</p>                
              </div>
              <div className="right">
                <p>0.2 mi</p>
                <p>Yelp - 4.5/5</p>
              </div>
            </div>
          </a>
        </Link>
      </div>

      <div className='row'>
        <Link href='https://github.com/zeit/next.js#getting-started'>
          <a className='card'>
            <h3>Getting Started &rarr;</h3>
            <p>Learn more about Next.js on GitHub and in their examples</p>
          </a>
        </Link>
        <Link href='https://github.com/zeit/next.js/tree/master/examples'>
          <a className='card'>
            <h3>Examples &rarr;</h3>
            <p>Find other example boilerplates on the Next.js GitHub</p>
          </a>
        </Link>
        <Link href='https://github.com/zeit/next.js'>
          <a className='card'>
            <h3>Create Next App &rarr;</h3>
            <p>Was this tool helpful? Let us know how we can improve it!</p>
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #e6cfc1;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 40px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .left {
        max-width: 50%;
        background-color: red;
        padding: 10px;
      }
      .right {
        max-width: 50%;
        background-color: green;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #e6cfc1;
      }
      .result-card {
        padding: 20px;
        width: 80%;
        text-align: left;
        text-decoration: none;
        color: #fff;
        border: 4px solid #9b9b9b;
        border-radius: 5px;
      }
      .result-card:hover {
        border-color: #f56e0e;
      }
      .result-card:visited {
        border-color: #f1f50e;
      }
      .result-card:active {
        border-color: #28e611;
      }
      .result-card h3 {
        margin: 0;
        color: #fff;
        font-size: 18px;
      }
      .result=card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #fff;
      }
    `}</style>
  </div>
)

export default Home
