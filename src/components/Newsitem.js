    import React, { Component } from 'react'

    export class NewsItem extends Component {
        // constructor(){
        //     super();
        //     console.log("hello this is constructor")
        // }///////can change state of div from here
    render() {
        let{title,description,imgurl,newsurl}=this.props;
        return (
        <div className='my-3'>
        <div className="card" style={{width:" 18rem"}}>
    <img src={imgurl} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="/" className="btn btn-sm btn-primary">Read more</a>
    </div>
    </div>
        </div>
        )
    }
    }

    export default NewsItem
