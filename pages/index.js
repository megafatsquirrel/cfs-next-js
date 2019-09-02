import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
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
            <h3>CJ's Diner</h3>
            <div className="row">
              <div className="left">
                <h4 className="result-rank">1</h4>
                <h5 className="result-header">Location:</h5>
                <p>1111 2nd Ave. Seattle, WA 98111</p>
              </div>
              <div className="right">
                <h5 className="result-header">Distance:</h5>
                <p>0.2 mi</p>
                <h5 className="result-header">Rating:</h5>
                <p>Yelp - 4.5/5</p>
              </div>
            </div>
          </a>
        </Link>
      </div>
      <div className="row">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
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
        padding: 5px;
      }
      .right {
        max-width: 50%;
        padding: 5px;
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
      .result-card p {
        margin: 0;
        padding: 0;
        font-size: 14px;
        color: #fff;
      }
      .result-rank {
        font-size: 25px;
        margin: 0;
        position: relative;
        top: -20px;
        left: -20px;
        transform: rotate(10deg);
        text-align: center;
        border: 3px dashed #fff;
        border-radius: 50%;
        width: 20px;
        padding: 5px;
      }
      .result-header {
        font-weight: bold;
        font-size: 16px;
        text-transform: uppercase;
        margin: 0;
      }
      .result-header > p {
        margin-top: 0; 
      }
    `}</style>
  </div>
)

export default Home
