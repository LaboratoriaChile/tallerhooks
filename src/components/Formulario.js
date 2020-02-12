import React, { useState } from 'react';

const Formulario = () => {

  const [datos, setDatos] = useState({
    nombre: '',
    apellido: ''
  })

  const handleInputChange = (e) => {
    // console.log(e.target.value)
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    })
  }

  const enviarDatos = (e) => {
    e.preventDefault();
    console.log(datos.nombre + ' ' + datos.apellido)
    e.target.reset()
  }

  return (
    <div>
      <h2>Formularios</h2>
      <form action="" onSubmit={enviarDatos}>
        <input
          placeholder='Ingrese nombre'
          type='text'
          name='nombre'
          onChange={handleInputChange}
        />
        <input
          placeholder='Ingrese apellido'
          type='text'
          name='apellido'
          onChange={handleInputChange}
        />
        <button type='submit'>Enviar</button>
      </form>
      <h3>{datos.nombre} {datos.apellido}</h3>
    </div>
  );
}

export default Formulario;