var React = require('react');
var {Link} = require('react-router');
export default class NavBar extends React.Component{

render() {
 return(
 <div>
   <nav className="navbar navbar-default bg-faded">
     <div className="container-fluid">
       <ul className="nav navbar-nav">
           <li><Link to="/home">Home</Link></li>
           <li><Link to="/FavNews">FavouriteNews</Link></li>

           <li><Link to="/about">About Us</Link></li>
        </ul>
      </div>
     </nav>
   </div>
 );
}
}
