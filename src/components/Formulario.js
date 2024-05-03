import React, { Fragment, useState } from "react";
import { v4 as uuid } from "uuid";
import PropTypes from 'prop-types';


const Formulario = ({ crearCita }) => {
  // Crear state de citas
  const [cita, setCita] = useState({
    // creo objeto
    //actualizarCita
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  //state validar formulario
  const [errorCita, setErrorCita] = useState(false);

  // Funcion que cambia el state.
  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita; //utiliza destructuring para no tener que colocar cita.proeda c/vez

  //Enviar formulario

  const submitCita = (e) => {
    e.preventDefault();

    console.log(mascota);
    //Validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setErrorCita(true);
      return;
    }
    //eliminar mensaje de error
    setErrorCita(false);

    //Asignar id
    cita.id = uuid();
    console.log(cita);
    //Crear cita
    crearCita(cita);

    //Reiniciar cita
    setCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h2>Crear cita</h2>
      {errorCita ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={submitCita}>
        <label>Nombre Mascota*</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          onChange={handleChange}
          value={mascota}
        />

        <label>Nombre Dueño*</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          onChange={handleChange}
          value={propietario}
        />

        <label>Fecha*</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />

        <label>Hora*</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />

        <label>Diagnostico*</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={handleChange}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};


Formulario.propTypes ={
    crearCita: PropTypes.func.isRequired
}

export default Formulario;
