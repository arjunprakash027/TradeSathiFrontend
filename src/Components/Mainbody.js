import React from 'react'
import { useState } from 'react';

export default function Mainbody() {
  const [pt7, setpt7] = useState([]);

  setInterval(() => {
    let zx = fetch("http://lakshyakum.pythonanywhere.com/getinfo")
    zx.then(res =>
      res.json()).then(d => {
        // console.log(d)
        let suddenpt7 = d.suddenpt7.split("#")
        let sudden2per = d.suddenpt7.split("#")
        let rsi30 = d.rsi30.split("#")
        let rsi70 = d.rsi70.split("#")
        let vwap = d.vwap.split("#")
        // suddenpt7.forEach(element => {
        //   setpt7([
        //     pt7.push(element)
        //   ]);
        // });   
        setpt7(suddenpt7)
      })
  }, 60000);

  let zx = fetch("http://lakshyakum.pythonanywhere.com/getinfo")
  zx.then(res =>
    res.json()).then(d => {
      // console.log(d)
      let suddenpt7 = d.suddenpt7.split("#")
      let sudden2per = d.suddenpt7.split("#")
      let rsi30 = d.rsi30.split("#")
      let rsi70 = d.rsi70.split("#")
      let vwap = d.vwap.split("#")
      // suddenpt7.forEach(element => {
      //   setpt7([
      //     pt7.push(element)
      //   ]);
      // });   
      setpt7(suddenpt7)
    })

  // let zx = fetch("http://lakshyakum.pythonanywhere.com/getinfo")
  // zx.then(res =>
  //   res.json()).then(d => {
  //     // console.log(d)
  //     let suddenpt7 = d.suddenpt7.split("#")
  //     let sudden2per = d.suddenpt7.split("#")
  //     let rsi30 = d.rsi30.split("#")
  //     let rsi70 = d.rsi70.split("#")
  //     let vwap = d.vwap.split("#")
  //     // suddenpt7.forEach(element => {
  //     //   setpt7([
  //     //     pt7.push(element)
  //     //   ]);
  //     // });   
  //     setpt7(suddenpt7)
  //   })



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
            {pt7.map((artist, index) => (
              // <li >{artist}</li>
              <li class="list-group-item">{artist}</li>
            ))}
          </ul>
        </div>
        <div className="resultList">
          <ul class="list-group">
            {pt7.map(artist => (
              // <li >{artist}</li>
              <li class="list-group-item">{artist}</li>
            ))}
          </ul>
        </div>
        <div className="resultList">
          <ul class="list-group">
            {pt7.map(artist => (
              // <li >{artist}</li>
              <li class="list-group-item">{artist}</li>
            ))}
          </ul>
        </div>
        <div className="resultList">
          <ul class="list-group">
            {pt7.map(artist => (
              // <li >{artist}</li>
              <li class="list-group-item">{artist}</li>
            ))}
          </ul>
        </div>
        <div className="resultList">
          <ul class="list-group">
            <span>VWAP</span>
            {pt7.map((artist, index) => (
              // if (index == 0){
              //   continue;
              // }
              <li class="list-group-item">{artist}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
