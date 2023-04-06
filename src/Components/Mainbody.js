import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';


export default function Mainbody() {

  const [pt7, setpt7] = useState([]);
  const [per2, setper2] = useState([]);
  const [vwap, setvwap] = useState([]);
  const [rsi30, setrsi30] = useState([]);
  const [rsi70, setrsi70] = useState([]);

  setInterval(() => {
    let za = fetch("http://kumrawatyogesh.pythonanywhere.com/getsuddenpt7")
    za.then(res =>
      res.json()).then(d => {
        let varia = d.split("#")
        varia.shift()
        varia.sort()
        setpt7(varia)
      })
    let zb = fetch("http://kumrawatyogesh.pythonanywhere.com/getsudden2per")
    zb.then(res =>
      res.json()).then(d => {
        let varia = d.split("#")
        varia.shift()
        varia.sort()
        setper2(varia)
      })
    let zc = fetch("http://kumrawatyogesh.pythonanywhere.com/getvwap")
    zc.then(res =>
      res.json()).then(d => {
        let varia = d.split("#")
        varia.shift()
        varia.sort()
        setvwap(varia)
      })
    let zd = fetch("http://kumrawatyogesh.pythonanywhere.com/getrsi30")
    zd.then(res =>
      res.json()).then(d => {
        let varia = d.split("#")
        varia.shift()
        varia.sort()
        setrsi30(varia)
      })
    let ze = fetch("http://kumrawatyogesh.pythonanywhere.com/getrsi70")
    ze.then(res =>
      res.json()).then(d => {
        let varia = d.split("#")
        varia.shift()
        varia.sort()
        setrsi70(varia)
      })
  }, 60000);

  {
    let za = fetch("http://kumrawatyogesh.pythonanywhere.com/getsuddenpt7")
    za.then(res =>
      res.json()).then(d => {
        let varia = d.split("#")
        varia.shift()
        varia.sort()
        setpt7(varia)
      })
    let zb = fetch("http://kumrawatyogesh.pythonanywhere.com/getsudden2per")
    zb.then(res =>
      res.json()).then(d => {
        let varia = d.split("#")
        varia.shift()
        varia.sort()
        setper2(varia)
      })
    let zc = fetch("http://kumrawatyogesh.pythonanywhere.com/getvwap")
    zc.then(res =>
      res.json()).then(d => {
        let varia = d.split("#")
        varia.shift()
        varia.sort()
        setvwap(varia)
      })
    let zd = fetch("http://kumrawatyogesh.pythonanywhere.com/getrsi30")
    zd.then(res =>
      res.json()).then(d => {
        let varia = d.split("#")
        varia.shift()
        varia.sort()
        setrsi30(varia)
      })
    let ze = fetch("http://kumrawatyogesh.pythonanywhere.com/getrsi70")
    ze.then(res =>
      res.json()).then(d => {
        let varia = d.split("#")
        varia.shift()
        varia.sort()
        setrsi70(varia)
      })
  }

return (
  <div className="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <br />
    <div className="listcontainer">
      <div className="resultList">
        <ul class="list-group">
          <span>Sudden Change</span>
          {pt7.map((artist) => (
            <li class="list-group-item">{artist}</li>
          ))}
        </ul>
      </div>
      <div className="resultList">
        <ul class="list-group">
          <span>Sudden Change</span>
          {per2.map((artist) => (
            <li class="list-group-item">{artist}</li>
          ))}
        </ul>
      </div>
      <div className="resultList">
        <ul class="list-group">
          <span>Sudden Change</span>
          {vwap.map((artist) => (
            <li class="list-group-item">{artist}</li>
          ))}
        </ul>
      </div>
      <div className="resultList">
        <ul class="list-group">
          <span>Sudden Change</span>
          {rsi30.map((artist) => (
            <li class="list-group-item">{artist}</li>
          ))}
        </ul>
      </div>
      <div className="resultList">
        <ul class="list-group">
          <span>VWAP</span>
          {rsi70.map((artist) => (
            <li class="list-group-item">{artist}</li>
          ))}
        </ul>
      </div>
    </div>


    <div class="quotes page-width">
      <div class="quotes-slide slideshow__slide--active" data-slider-slide-index="0" aria-hidden="false" tabindex="-1">
        <blockquote class="quotes-slider__text text-left">
          <span class="quote-icon">
            <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-quote" viewBox="0 0 41 35">
              <path d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z"                         ></path>
            </svg>
          </span>

          <div class="content">
            <p>Must go faster. Hey, take a look at the earthlings. Goodbye! I was part of something special. Jaguar
              shark! So tell me - does it really exist? They're using our own satellites against us. And the clock
              is ticking. Must go faster... go, go, go, go, go!
            </p>
          </div>
          <cite>Jeff Goldblum</cite>
        </blockquote>
      </div>

      <div class="quotes-slide slideshow__slide--active" data-slider-slide-index="1" aria-hidden="false" tabindex="-1">
        <blockquote class="quotes-slider__text text-left">
          <span class="quote-icon"><svg aria-hidden="true" focusable="false" role="presentation"
            class="icon icon-quote" viewBox="0 0 41 35">
            <path d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z">
            </path>
          </svg>
          </span>

          <div class="content">
            <p>I was part of something special. God help us, we're in the hands of engineers. Jaguar shark! So tell
              me - does it really exist? Checkmate... We gotta burn the rain forest, dump toxic waste, pollute the
              air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it
              anymore!
            </p>
          </div>
          <cite>Jeff Goldblum</cite>
        </blockquote>
      </div>

      <div class="quotes-slide slideshow__slide--active" data-slider-slide-index="2" aria-hidden="false" tabindex="-1">
        <blockquote class="quotes-slider__text text-left">
          <span class="quote-icon"><svg aria-hidden="true" focusable="false" role="presentation"
            class="icon icon-quote" viewBox="0 0 41 35">
            <path d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z"></path>
          </svg>
          </span>
          <div class="content">
            <p>Must go faster... go, go, go, go, go! Yes, Yes, without the oops! Life finds a way. My dad once told
              me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little
              bastard! Hey, you know how I'm, like, always trying to save the planet? Here's my chance.</p>
          </div>
          <cite>Jeff Goldblum</cite>
        </blockquote>
      </div>
    </div>
    <footer style={{ padding: "20px", border: "none", boxShadow: "0px 5px 10px rgba(0,0,0,0.1)" }}>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div class="col-md-4">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h3>Contact Us</h3>
            <ul>
              <li><i class="fa fa-map-marker"></i> 123 Main Street, New York, NY 10001</li>
              <li><i class="fa fa-phone"></i> +1 (555) 555-1212</li>
              <li><i class="fa fa-envelope"></i> info@example.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <p>&copy; 2023 Company Name. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
)
}

