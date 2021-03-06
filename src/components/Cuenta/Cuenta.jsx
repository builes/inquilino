import { Flex } from "@chakra-ui/layout";
import React from "react";
import image from "../Cuenta/mujer.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  general: {
    marginLeft: 250,
    marginRight: 250,
    marginTop: 100,
    background: "#eceff1",
    borderRadius: 20,
    padding: 30,
  },
  informacion: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  elementos: {
    width: "50%",
  },
});

export default function Cuenta() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.center}>
        <img
          style={{ margin: "auto", borderRadius: "100%" }}
          src={image}
          alt="image"
          width="200"
          height="200"
        ></img>
      </div>
      <div className={classes.general}>
        <div className={classes.informacion}>
          <div className={classes.elementos}>
            <h6>Nombres</h6>
            <p>Luisa Maria</p>
          </div>
          <div className={classes.elementos}>
            <h6>Apellidos</h6>
            <p>Rios Zapata</p>
          </div>
          <div className={classes.elementos}>
            <h6>Correo</h6>
            <p>luisa@gmail.com</p>
          </div>
          <div className={classes.elementos}>
            <h6>Contraseña</h6>
            <p>*******</p>
          </div>
          <div className={classes.elementos}>
            <h6>Cedula</h6>
            <p>1.088.365.256</p>
          </div>
          <div className={classes.elementos}>
            <h6>Telefono</h6>
            <p>3005689568</p>
          </div>
        </div>

        <Button variant="contained" color="primary" size="large">
          Editar informacion
        </Button>
      </div>
    </>
  );
}
