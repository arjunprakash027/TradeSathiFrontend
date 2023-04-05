import React from 'react'
import { useState } from 'react';


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

            
      <div className="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}
