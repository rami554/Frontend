/*import incontratos from "./incontratos";

const expect = global.expect;

describe('incontratos',() => {
    test('Prueba Correcta', () => {
        expect(true).toBeTruthy();
    });
});*/
import React from 'react';
import ReactDOM from 'react-dom';
import incontratos from './incontratos';

it('Componentes de Registro de Contratos', () => {
  const div = document.createElement('div');
  ReactDOM.render(<incontratos />, div);
  ReactDOM.unmountComponentAtNode(div);
});