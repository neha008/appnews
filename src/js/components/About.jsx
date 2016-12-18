var React = require('react');
export default class About extends  React.Component{

render()
{
 return(
   <div className="container-fluid">
       <div className="row">

               <div className="jumbotron">
                   <h1>
                       About Us
                   </h1>
                   <p>
                   All the news you want. All in one place.
News collects all the stories you want to read — so you no longer need to move from app to app to stay informed. And with a completely reimagined For You tab, it’s easier than ever to find the stories that matter most to you. News also features breaking news notifications and subscriptions to some of your favorite publications.


                   </p>
                   <p>
                       <a className="btn btn-primary btn-large" href="#">Learn more</a>
                   </p>

           </div>
       </div>
   </div>
 );
}
}
