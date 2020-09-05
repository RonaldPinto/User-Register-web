import React, {Component} from 'react'
import { render } from 'react-dom';
import Router from "./router";
import toggleConfig from "./Config/togglesConfig";
import { Provider } from './Config/appContext';


export default class Main extends Component {
  
    render() {
      return (
        <Provider {...this.props}>
          <Router />
        </Provider>
      );
    }
  }
  
  const searchConfigPromise = toggleConfig();

  Promise
  .all([searchConfigPromise])
  .then(([searchConfig]) => {
    const { status } = searchConfig;
    
    if(status !== 'enabled') {
     console.log("error en el status");
     
    }
    render(<Main {...status} />, document.getElementById('root'));
 
  })