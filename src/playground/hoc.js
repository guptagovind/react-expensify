import React from 'react';
import ReactDom from 'react-dom';

//HOC: Higher order component: A component render another component.
//Reuse code
//Render hijacking
//prop manipulation
//Abstract state

const Info = (props)=>(
  <div>
    <h1>Info</h1>
    <p>This is your info: {props.info}</p>
  </div>
);

const requireAuthentication =(WrappedComponent)=>{
  return (props) =>(
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props}/>: 'Please authenticate yourself'}

    </div>
  );
};

const AuthInfo = requireAuthentication(Info);


ReactDom.render(<AuthInfo isAuthenticated={true} info="There are the details."/>,document.getElementById('app'));