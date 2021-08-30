import { Button } from "@material-ui/core";
import React from "react";
import Daños from "../ModalDaños/Daños";

export default function Propiedad() {
  return (
    <div
      style={{
        margin: "auto",
        width: "50%",
        marginTop: 30,
        background: "#eceff1",
        borderRadius: 20,
        padding: 20,
      }}
    >
      <div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ margin: 20 }}
        >
          Pagar arriendo
        </Button>
        <Button variant="contained" color="primary" size="large">
          Lista de pagos realizados
        </Button>

        <div>
          <Button style={{ margin: 20 }}>
            <Daños></Daños>
          </Button>

          <Button variant="contained" color="primary" size="large">
            <a
              href="https:pse.com"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              Pagar servicios
            </a>
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ margin: 20 }}
          >
            Extraer resumen de movimientos financieros
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ margin: 20 }}
          >
            Enviar mensaje al dueño
          </Button>
        </div>
      </div>
    </div>
  );
}
