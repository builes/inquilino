import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inicio from "../components/Inicio/Inicio";
import Inmueble from "../components/Inmueble/Inmueble";
import BarraNavegacion from "../components/BarraNavegacion/BarraNavegacion";
import GetData from "../components/GetData/GetData";
import Login from "../components/Login1/Login.jsx";
import EditProperty from "../components/EditProperty/EditProperty";
import Cuenta from "../components/Cuenta/Cuenta";
import Checkout1 from "../components/Pago1/Checkout";
import Propiedad from "../components/propiedad/Propiedad";

export default function AppRouter() {
  return (
    <Router>
      <BarraNavegacion />
      <Switch>
        <Route exact path="/" component={GetData} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/inmueble/:id" component={Inmueble} />
        <Route exact path="/editproperty/" component={EditProperty} />
        <Route exact path="/cuenta/" component={Cuenta} />
        <Route exact path="/pagoArriendo/" component={Checkout1} />
        <Route exact path="/inmueble/" component={Propiedad} />
      </Switch>
    </Router>
  );
}
