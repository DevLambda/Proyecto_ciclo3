import axios from 'axios';


export const obtenerProductos = async (successCallback, errorCallback) => {
  const options = { method: 'GET',
  url: 'http://localhost:3001/productos/' };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const registrarProducto = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:3001/productos/create',
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarProducto = async ( data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: 'http://localhost:3001/productos/update/',
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};


/*--------------------------VENTAS---------------------------------------*/

export const obtenerVentas = async (successCallback, errorCallback) => {
  const options = { method: 'GET', url: 'http://localhost:3001/ventas/' };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const registrarVentas = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:3001/ventas/create',
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarVentas = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:3001/ventas/update/`,
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};


/*---------USUARIOS-------------*/

export const obtenerUsuarios = async (successCallback, errorCallback) => {
  const options = { method: 'GET',
  url: 'http://localhost:3001/usuarios/' };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const registrarUsuarios = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:3001/usuarios/create',
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarUsuarios = async ( data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: 'http://localhost:3001/usuarios/update/',
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
