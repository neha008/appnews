import React from 'react';

export default class Jumbo extends React.Component{

constructor(){
    super();
        this.saveNews=this.saveNews.bind(this);
}
saveNews()
{
console.log("done");
$.ajax({

         url: "http://localhost:8095/news/adddatatodb",
         type: "POST",
         data:this.props.obj,
         success : function(msg){
        console.log("saved");
        alert(" data saved");

            /*msg reprewsents JSON data of news headlines sent back by external API*/

            }.bind(this),

         error: function(err){
         alert("error");

             console.log("Error occured "+err);

         }.bind(this)
});
}


render(){

return (
<div>
              <div className="jumbotron" style={{margin:"15px"}}>
                  <div className="row">
                  <div className="col-12">
                  <div className="col-sm-1">



                  </div>
                      <div className="col-sm-5">
                      <img src={this.props.obj.urlToImage} alt="" width="450px" height="250px"/>
                      </div>
                    <div className="col-sm-5">
                    <h4> {this.props.obj.author} </h4>
                    <a href="{this.props.obj.url}">{this.props.obj.url}</a>
                    <h6> {this.props.obj.title}</h6>
                    <h6> {this.props.obj.description}</h6>
                    <h6> {this.props.obj.publishedAt}</h6>
                    <button type="button" className="btn btn-info" style={{margin:"10px"}} onClick={this.saveNews}>Save</button>
                    <button type="button" className="btn btn-info" style={{margin:"10px"}}>Comment</button>
                    </div>
                    <div className="col-sm-1">



                    </div>
                  </div>
                  </div>
                </div>
          </div>


)
}
}
