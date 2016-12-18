import React from 'react';


export default class ChildComponent extends React.Component{

constructor(){
    super();
    this.handleChange=this.handleChange.bind(this);
}



handleChange()
{


console.log(document.getElementById("search").value);
    var searchItem=document.getElementById("search").value;
    console.log("check "+searchItem);
    this.props.ajaxUri(searchItem);

}

render(){
  return (

  <div className="container">
<div className="row">

     <div id="custom-search-input">

                      <div className="input-group col-md-12">

                          <input type="text" className="search-query form-control" id="search"  placeholder="Search"  />

                          <span className="input-group-btn">
                              <button className="btn btn-info" type="button" onClick={this.handleChange}>
                                  <span className="glyphicon glyphicon-search"></span>
                              </button>
                          </span>
                      </div>

                  </div>
                  </div>
                  </div>
   )
}
}
