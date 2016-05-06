import 'babel-polyfill';

import expect from 'expect';
import tween from 'tweening';

import colorMiddleware, { isHexStr, isRgbStr, isRgbaStr } from '../src';

global.window = {
  requestAnimationFrame: func => setTimeout( func, 16.667 )
};

export default window;

describe( 'hex', () => {
  it( 'should tween between hex colors', done => {
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
        expect( isHexStr( color )).toBe( true );
      },
      complete: () => {
        expect( currentColor ).toBe( to );
        done();
      },
    });
  });

  it( 'should tween between shorthand hex colors', done => {
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
        expect( isHexStr( color )).toBe( true );
      },
      complete: () => {
        expect( currentColor ).toBe( to );
        done();
      },
    });
  });

  it( 'should tween from hex color to rgb color', done => {
    const from = '#000000';
    const to = 'rgb(240,100,80)';

    let currentColor;

    tween({
      from,
      to,
      duration: 100,
      middleware: [ colorMiddleware ],
      next: color => {
        currentColor = color;
        expect([ isHexStr( color ), isRgbStr( color )]).toInclude( true );
      },
      complete: () => {
        expect( currentColor ).toBe( to );
        done();
      },
    });
  });

  it( 'should tween from hex color to rgba color', done => {
    const from = '#000000';
    const to = 'rgba(240,100,80,0.5)';

    let currentColor;

    tween({
      from,
      to,
      duration: 100,
      middleware: [ colorMiddleware ],
      next: color => {
        currentColor = color;
        expect([ isHexStr( color ), isRgbaStr( color )]).toInclude( true );
      },
      complete: () => {
        expect( currentColor ).toBe( to );
        done();
      },
    });
  });
});

describe( 'rgb', () => {
  it( 'should tween between rgb colors', done => {
    const from = 'rgb( 200, 50, 30 )';
    const to = 'rgb(240,100,80)';

    let currentColor;

    tween({
      from,
      to,
      duration: 100,
      middleware: [ colorMiddleware ],
      next: color => {
        currentColor = color;
        expect( isRgbStr( color )).toBe( true );
      },
      complete: () => {
        expect( currentColor ).toBe( to );
        done();
      },
    });
  });

  it( 'should tween from rgb color to hex color', done => {
    const from = 'rgb(240,100,80)';
    const to = '#000000';

    let currentColor;

    tween({
      from,
      to,
      duration: 100,
      middleware: [ colorMiddleware ],
      next: color => {
        currentColor = color;
        expect([ isRgbStr( color ), isHexStr( color )]).toInclude( true );
      },
      complete: () => {
        expect( currentColor ).toBe( to );
        done();
      },
    });
  });

  it( 'should tween from rgb color to rgba color', done => {
    const from = 'rgb(240,100,80)';
    const to = 'rgba( 200, 50, 30, 0.5 )';

    let currentColor;

    tween({
      from,
      to,
      duration: 100,
      middleware: [ colorMiddleware ],
      next: color => {
        currentColor = color;
        expect([ isRgbStr( color ), isRgbaStr( color )]).toInclude( true );
      },
      complete: () => {
        expect( currentColor ).toBe( to );
        done();
      },
    });
  });
});

describe( 'rgba', () => {
  it( 'should tween between rgba colors', done => {
    const from = 'rgba( 200, 50, 30, 0.5 )';
    const to = 'rgba(240,100,80,0.95)';

    let currentColor;

    tween({
      from,
      to,
      duration: 100,
      middleware: [ colorMiddleware ],
      next: color => {
        currentColor = color;
        expect( isRgbaStr( color )).toBe( true );
      },
      complete: () => {
        expect( currentColor ).toBe( to );
        done();
      },
    });
  });

  it( 'should tween from rgba color to hex color', done => {
    const from = 'rgba( 200, 50, 30, 0.5 )';
    const to = '#000000';

    let currentColor;

    tween({
      from,
      to,
      duration: 100,
      middleware: [ colorMiddleware ],
      next: color => {
        currentColor = color;
        expect([ isRgbaStr( color ), isHexStr( color )]).toInclude( true );
      },
      complete: () => {
        expect( currentColor ).toBe( to );
        done();
      },
    });
  });

  it( 'should tween from rgba color to rgb color', done => {
    const from = 'rgba( 200, 50, 30, 0.5 )';
    const to = 'rgb(240,100,80)';

    let currentColor;

    tween({
      from,
      to,
      duration: 100,
      middleware: [ colorMiddleware ],
      next: color => {
        currentColor = color;
        expect([ isRgbaStr( color ), isRgbStr( color )]).toInclude( true );
      },
      complete: () => {
        expect( currentColor ).toBe( to );
        done();
      },
    });
  });
});
