import './App.css';
import * as React from 'react';

import { Admin, Resource, fetchUtils } from 'react-admin';
import authProvider from './authProvider';
import Register from './registerPage';
import simpleRestProvider from 'ra-data-simple-rest';

const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
}

const dataProvider = simpleRestProvider('https://helsinki-city-bike-281t.onrender.com/', httpClient)

const App = () => {

  return (
    <Admin title="Helsinki city bike" dataProvider={dataProvider} authProvider={authProvider} loginPage={Register}>
    </Admin>
  );
};

export default App;