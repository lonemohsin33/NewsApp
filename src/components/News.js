import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import data from '../data.json'

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state= {
            articles: [],
            loading: false,
            page:1
                
        }     
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=31adf65de46d458aad1221928289dcb2&page={}`

        let data = await fetch(url)
        let parsedData = await data.json()
        
        console.log(parsedData)
        this.setState({articles:parsedData.articles})
    }
    handlePrev = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=31adf65de46d458aad1221928289dcb2&page=${this.state.page-1}`

        let data = await fetch(url)
        let parsedData = await data.json()
        
        console.log(parsedData)
        this.setState({articles:parsedData.articles, page:this.state.page-1})
    }
    handleNext = async () => {
        if (this.state.page + 1 > (Math.ceil(this.state.totalPages / 20))) {
            
        }
        else {
            
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=31adf65de46d458aad1221928289dcb2&page=${this.state.page+1}`
            
            let data = await fetch(url)
            let parsedData = await data.json()
            
            console.log(parsedData)
            this.setState({articles:parsedData.articles, page:this.state.page+1, totalPages: parsedData.totalResults})
        }
        
        
    }
   
  render() {
    return (
        <div className='container my-3'>
            <h3>Top News</h3>
            <div className="row" >
                {this.state.articles.map((elem) => {
                    return <div className="col-md-4" key={elem.url}>
                    <NewsItem title={elem.title} description={elem.description} urlToImage={elem.urlToImage} url={elem.url} />
                </div>
                })}
                <div className='container my-3 d-flex justify-content-between'>
                    <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrev}> &larr;Previous
                       </button>
                    <button disabled={this.state.page + 1 > (Math.ceil(this.state.totalPages / 20))} type="button" class="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
            </div>
                
            </div>
                
            
        
      </div>
    )
  }
}
