import 'file?name=[name].[ext]!../index.html';

import React from 'react';
import ReactDOM from 'react-dom';
var {browserHistory,hashHistory, Route, Router, IndexRoute}
  = require('react-router');

import About from './components/About.jsx';
import HomeComponent from './components/HomeComponent.jsx';

import NavBar from './components/NavBar.jsx';
import FavNewsComponent from './components/FavNewsComponent.jsx';

class MainComponent extends React.Component{

render(){

return (
<div>
<NavBar/>
  <br/><br/><br/><br/>

    {this.props.children}
</div>
)
}
}
ReactDOM.render(
<Router history={hashHistory}>
<Route path="/" component={MainComponent}>
             <Route path="/home" component={HomeComponent}/>
             <IndexRoute component={HomeComponent}/>

             <Route path="/FavNews" component={FavNewsComponent}/>

             <Route path="/About" component={About}/>

</Route>
</Router>,document.getElementById('content'));
