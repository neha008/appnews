import React from 'react';
import Jumbo from './Jumbo.jsx';
export default class ComponentManager extends React.Component{

constructor(){
    super();
}
render(){
var newAr=this.props.cm.map(function(e){
return  <Jumbo obj={e}  />
});
return (
<div>
{newAr}
</div>
)
}
}
