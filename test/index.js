import 'babel-polyfill';

import expect from 'expect';
import tween from 'tweening';

import colorMiddleware, { isHex } from '../src';

global.window = {
  requestAnimationFrame: func => setTimeout( func, 16.667 )
};

export default window;

describe( 'hex', () => {
  it( 'should tween between hexidecimal colors', done => {
    const from = '#000000';
    const to = '#F0F0F0';

    let currentColor;

    tween({
      from,
      to,
      duration: 100,
      middleware: [ colorMiddleware ],
      next: color => {
        currentColor = color;
        expect( isHex( color )).toBe( true );
      },
      complete: () => {
        expect( currentColor ).toBe( to );
        done();
      },
    });
  });

  it( 'should tween between shorthand hexidecimal colors', done => {
    const from = '#09B';
    const to = '#F7D';

    let currentColor;

    tween({
      from,
      to,
      duration: 100,
      middleware: [ colorMiddleware ],
      next: color => {
        currentColor = color;
        expect( isHex( color )).toBe( true );
      },
      complete: () => {
        expect( currentColor ).toBe( to );
        done();
      },
    });
  });
});
