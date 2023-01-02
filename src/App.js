import "./App.css";
import React, { Component } from 'react'
import Navbar from './components/Navbar.js'
import News from "./components/News";
// import NewsItem from "./components/NewsItem";



export default class App extends Component {

// }
// //   async componentDidMount() {
// //     let data = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=31adf65de46d458aad1221928289dcb2")
// //     console.log(data)
// // }
  render() {
    return (
      <div>
        <Navbar />
        <News />
        
         
      </div>
    )
  }
}

