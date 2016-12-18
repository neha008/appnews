import React from 'react';

export default class NewsDisplay extends React.Component{

constructor(){
  super();
     this.DeleteNews=this.DeleteNews.bind(this);
}
DeleteNews()
{

$.ajax({

        url: " http://localhost:8095/news/delete",
        type: "DELETE",
        data : this.props.news,
        success : function(msg){

       alert("deleted successfully");

           /*msg reprewsents JSON data of news headlines sent back by external API*/

           }.bind(this),

        error: function(err){

            console.log("Error occured "+err);

        }.bind(this)
});
}



render(){

return (

<div>
          <div className="jumbotron">
              <div className="row">
              <div className="col-sm-1">
              </div>
                  <div className="col-sm-5">
                    <img src={this.props.news.urlToImage} width="500px" height="300px"/>


                  </div>
                <div className="col-sm-5">


                <h4>{this.props.news.Author}</h4>
                <h6>{this.props.news.Title}</h6>
                <h6>{this.props.news.Description}</h6>
                <h6>{this.props.news.PublishedAt}</h6>




                <button type="button" className="btn btn-info" onClick={this.DeleteNews}>Delete</button>
                </div>
                <div className="col-sm-1">
                </div>
              </div>
            </div>
</div>
)
}
}
