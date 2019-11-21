/*import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import contratos from "./contratos";

const expect = global.expect;

describe('contratos',() => {
    test('Prueba Correcta', () => {
        expect(true).toBeTruthy();
    });
});*/
import React from 'react';
import ReactDOM from 'react-dom';
import contratos from './Contratos';

it('Componente de Contratos Listo', () => {
  const div = document.createElement('div');
  ReactDOM.render(<contratos />, div);
  ReactDOM.unmountComponentAtNode(div);
});