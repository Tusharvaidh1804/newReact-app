    import React, { Component } from 'react'
    import NewsItem from './Newsitem'
    
    export class News extends Component {
        articles=[{
            "status": "ok",
            "totalResults": 6,
            "articles": [
                {
                    "source": {
                        "id": null,
                        "name": "The New Yorker"
                    },
                    "author": "Simon Webster",
                    "title": "Understanding the Laws of Cricket",
                    "description": "My hope is that these brief and straightforward instructions will bring legions of new fans into the British Empire—I mean, global cricket family.",
                    "url": "https://www.newyorker.com/humor/daily-shouts/understanding-the-laws-of-cricket",
                    "urlToImage": "https://media.newyorker.com/photos/6579d39668872af306a7c711/16:9/w_1280,c_limit/Webster-Shouts-Cricket.jpg",
                    "publishedAt": "2023-12-14T11:00:00Z",
                    "content": "Cricket is the second most popular sport in the world, with some two and a half billion fans globally, including several Americans. And theres always room for more, which is why Ive prepared this sho… [+4172 chars]"
                },
                {
                    "source": {
                        "id": "bbc-news",
                        "name": "BBC News"
                    },
                    "author": "https://www.facebook.com/bbcnews",
                    "title": "Usman Khawaja: Cricket Australia warns batter against making Gaza message",
                    "description": "The Australian batter had planned to wear shoes bearing the words \"all lives are equal\" during a Test.",
                    "url": "https://www.bbc.co.uk/news/world-australia-67700408",
                    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/DE29/production/_132037865_gettyimages-1846372164.jpg",
                    "publishedAt": "2023-12-13T05:12:15Z",
                    "content": "Australian cricketer Usman Khawaja has been warned against showing an on-field message in support of Palestinians at a Test match against Pakistan.\r\nThe batter had planned to wear shoes bearing the w… [+1424 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "XDA Developers"
                    },
                    "author": "Christopher Burke",
                    "title": "How to download Cricket 07 in Windows 11",
                    "description": "Although Cricket games are no longer made by EA, you can still play the classic Cricket 07 on Windows 11",
                    "url": "https://www.xda-developers.com/how-download-cricket-07-windows/",
                    "urlToImage": "https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2023/12/77.png",
                    "publishedAt": "2023-12-23T12:00:25Z",
                    "content": "EA was the king of sports games in the early 2000s, covering nearly every major sport. Cricket was one of the recurring titles in the EA Sports franchise. But, by the end of the decade, EA stopped pr… [+4660 chars]"
                },
                {
                    "source": {
                        "id": "bbc-news",
                        "name": "BBC News"
                    },
                    "author": "https://www.facebook.com/bbcnews",
                    "title": "Blackpool Tower fire: Five other times people were fooled by false alarms",
                    "description": "After orange netting was mistaken for flames, we revisit five other big public \"whoops\" moments.",
                    "url": "https://www.bbc.co.uk/news/uk-67802959",
                    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/84C2/production/_132168933_01hjrkww9b6na25se5xhhmv2ev.jpg",
                    "publishedAt": "2023-12-29T14:15:20Z",
                    "content": "Things are not always what they seem. And there is no better example of that old adage than Blackpool Tower and the fire that never was.\r\nOn Thursday, six fire engines, a drone team and a rope-rescue… [+3911 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Mental Floss"
                    },
                    "author": "Ellen Gutoskey",
                    "title": "Wikipedia’s 25 Most Popular Pages of 2023",
                    "description": "Four of the most visited Wikipedia pages involve cricket.",
                    "url": "https://www.mentalfloss.com/posts/most-popular-wikipedia-pages-2023",
                    "urlToImage": "https://images2.minutemediacdn.com/image/upload/c_crop,w_3300,h_1856,x_0,y_117/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/mentalfloss/01hh0f46ea54h48nkvk5.jpg",
                    "publishedAt": "2023-12-10T13:00:02Z",
                    "content": "To some people, perusing a long Wikipedia page is one of lifes greatest pleasures. This year, millions of people did that with Oppenheimerboth the person and the blockbuster biopic he inspired.\r\nAs t… [+2864 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Deadspin"
                    },
                    "author": "Cale Clinton",
                    "title": "These are the oldest players in NFL history",
                    "description": "The NFL is a rough, violent game. The average career length in the modern NFL is just 3.3 years in the league. This is why it’s so impressive to see these NFL legends play so deep into their 40s. How many more names will we see join the ranks of the league’s …",
                    "url": "https://deadspin.com/oldest-nfl-players-tom-brady-george-blanda-testaverde-1851087598",
                    "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/df14b07ad80c4f8d96f3b2ac25859b4c.jpg",
                    "publishedAt": "2023-12-24T12:00:00Z",
                    "content": "Age: 44 years, 117 days\r\nTeams: Detroit Lions, Kansas City Chiefs, Tampa Bay Buccaneers, Dallas Cowboys, Philadelphia Eagles, Washington, Minnesota Vikings\r\nFun fact: His Canadian high school didnt o… [+69 chars]"
                }
            ]
        }]
        constructor(){
            super();
            console.log("hello this is constructor from news components");
            this.state={
                articles:this.articles,
                    loading:false
            }
        }
    render() {
        return (
        <div className='container my-3'>
            <h2>NewsMonkey - top headlines</h2>
            <div className="row" >
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}  >
                             <NewsItem title={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.newsurl}/>  
                             </div>
                })}  
               </div>

        </div>
        )
    }
    }

    export default News
