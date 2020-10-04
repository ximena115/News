import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Store from "./redux/Store"
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import NewsConteiner from "./components/NewsContainer/index";
import New from "./components/New/index";

const Root=(
  <Provider store={Store}>
    <BrowserRouter>
      <Switch>
          <Route path="/NewsContainer" component={NewsConteiner}/>
          <Route path="/New/:itemId" component={New}/>
          <Redirect from="/" to="/NewsContainer"/>
      </Switch>
    </BrowserRouter>
   </Provider>
)

ReactDOM.render(
  Root,
  document.getElementById('root')
);
