const isHex = v => (
  typeof v === 'string' &&
  v.match( /^#(?:[0-9a-f]{3}){1,2}$/i ) !== null
);

const isRgb = v => (
  typeof v === 'object' &&
  'r' in v &&
  'g' in v &&
  'b' in v
);

const hexToRgb = hex => {
  let value = hex.replace( '#', '' );

  if ( value.length === 3 ) {
    value = value.split( '' ).map( v => `${ v }${ v }` ).join( '' );
  }

  return {
    middleware: 'color',
    r: parseInt( value.slice( 0, 2 ), 16 ),
    g: parseInt( value.slice( 2, 4 ), 16 ),
    b: parseInt( value.slice( 4, 6 ), 16 ),
  };
};

const rgbToHex = rgb => {
  let r = Math.ceil( rgb.r ).toString( 16 );
  let g = Math.ceil( rgb.g ).toString( 16 );
  let b = Math.ceil( rgb.b ).toString( 16 );

  r = r.length === 1 ? `0${ r }` : r;
  g = g.length === 1 ? `0${ g }` : g;
  b = b.length === 1 ? `0${ b }` : b;

  return `#${ r }${ g }${ b }`;
}

const colorMiddleware = {
  name: 'color',
  i: v => isHex( v ) ? hexToRgb( v ) : v,
  o: v => isRgb( v ) ? rgbToHex( v ) : v,
};

export default colorMiddleware;
