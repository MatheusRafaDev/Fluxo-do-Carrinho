import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import home from './home'
import detalhe from './detalhes'
import carrinho from './carrinho'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={home} />
        <Route path="/detalhe" component={detalhe} />
        <Route path="/carrinho" component={carrinho} />
      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
