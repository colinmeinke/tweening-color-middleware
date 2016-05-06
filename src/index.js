const isHexStr = v => (
  typeof v === 'string' &&
  v.match( /^#(?:[0-9a-f]{3}){1,2}$/i ) !== null
);

const isRgbStr = v => (
  typeof v === 'string' &&
  v.startsWith( 'rgb(' )
);

const isRgbaStr = v => (
  typeof v === 'string' &&
  v.startsWith( 'rgba(' )
);

const isHexObj = v => (
  typeof v === 'object' &&
  v.colorType === 'hex'
);

const isRgbObj = v => (
  typeof v === 'object' &&
  v.colorType === 'rgb'
);

const isRgbaObj = v => (
  typeof v === 'object' &&
  ( v.colorType === 'rgba' || v.a < 1 )
);

const hexToObj = hex => {
  let value = hex.replace( '#', '' );

  if ( value.length === 3 ) {
    value = value.split( '' ).map( v => `${ v }${ v }` ).join( '' );
  }

  return {
    middleware: 'color',
    colorType: 'hex',
    r: parseInt( value.slice( 0, 2 ), 16 ),
    g: parseInt( value.slice( 2, 4 ), 16 ),
    b: parseInt( value.slice( 4, 6 ), 16 ),
    a: 1,
  };
};

const rgbToObj = v => {
  const rgb = v.replace( /\s/g, '' );

  const [ r, g, b ] = rgb.substring( 4, rgb.length - 1 ).split( ',' );

  return {
    middleware: 'color',
    colorType: 'rgb',
    r: parseFloat( r ),
    g: parseFloat( g ),
    b: parseFloat( b ),
    a: 1,
  };
};

const rgbaToObj = v => {
  const rgba = v.replace( /\s/g, '' );

  const [ r, g, b, a ] = rgba.substring( 5, rgba.length - 1 ).split( ',' );

  return {
    middleware: 'color',
    colorType: 'rgba',
    r: parseFloat( r ),
    g: parseFloat( g ),
    b: parseFloat( b ),
    a: parseFloat( a ),
  };
};

const objToHex = obj => {
  let r = Math.ceil( obj.r ).toString( 16 );
  let g = Math.ceil( obj.g ).toString( 16 );
  let b = Math.ceil( obj.b ).toString( 16 );

  r = r.length === 1 ? `0${ r }` : r;
  g = g.length === 1 ? `0${ g }` : g;
  b = b.length === 1 ? `0${ b }` : b;

  return `#${ r }${ g }${ b }`;
}

const objToRgb = ({ r, g, b }) => `rgb(${ r },${ g },${ b })`;

const objToRgba = ({ r, g, b, a }) => `rgba(${ r },${ g },${ b },${ a })`;

const colorMiddleware = {
  name: 'color',
  i: v => {
    if ( isHexStr( v )) {
      return hexToObj( v );
    } else if ( isRgbStr( v )) {
      return rgbToObj( v );
    } else if ( isRgbaStr( v )) {
      return rgbaToObj( v );
    }

    return v;
  },
  o: v => {
    if ( isRgbaObj( v )) {
      return objToRgba( v );
    } else if ( isHexObj( v )) {
      return objToHex( v );
    } else if ( isRgbObj( v )) {
      return objToRgb( v );
    }

    return v;
  },
};

export { isHexStr, isRgbStr, isRgbaStr };

export default colorMiddleware;
