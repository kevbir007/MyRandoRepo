const initialState = {
    products :{
        Reeses:{
            price: "$1.49",
            quantity:0
        },
        Kitkat:{
            price: "$1.49",
            quantity:0
        },
        Warheads:{
            price: "$0.98",
            quantity:0
        },
        AirHeads:{
            price: "$0.50",
            quantity:0
        },
        MilkyWay:{
            price: "$1.49",
            quantity:0
        },
        PayDay:{
            price: "$1.30",
            quantity:0
        },
        Oreos:{
            price: "$2.00",
            quantity:0
        },
        SourPatchKids:{
            price: "$3.00",
            quantity0
        },
        Toblerone:{
            price: "$2.50",
            quantity:0
        },
        SourGummyWorms:{
            price: "$3.00",
            quantity:0
        },
        Necco:{
            price: "$0.01",
            quantity:0
        },

    },

    cart: []
}

const UPDATE_REESES = "UPDATE_REESES";
const UPDATE_KITKAT = "UPDATE_KITKAT";
const UPDATE_WARHEADS = "UPDATE_WARHEADS";
const UPDATE_AIRHEADS = "UPDATE_AIRHEADS";
const UPDATE_MILKYWAY = "UPDATE_MILKYWAY";
const UPDATE_PAYDAY = "UPDATE_PAYDAY";
const UPDATE_OREOS = "UPDATE_OREOS";
const UPDATE_SOURPATCHKIDS = "UPDATE_SOURPATCHKIDS";
const UPDATE_TOBLERONE = "UPDATE_TOBLERONE";
const UPDATE_SOUREGUMMYWORMS = "UPDATE_SOURGUMMYWORMS";
const UPDATE_NEKKO = "UPDATE_NEKKO";
const ADD_TO_CART = "ADD_TO_CART";


function reducer( state = initialState, action ) { 
    console.log('REDUCER HIT: Action ->', action );
    
    switch( action.type ){
        case UPDATE_REESES:

            return Object.assign( {}, state,state.cart,{Reeses: "$1.49" } );
        case UPDATE_KITKAT:
            return Object.assign( {}, state.cart, { Kitkat: "$1.49" } );
        case UPDATE_WARHEADS:
            return Object.assign( {}, state.cart, { Warheads: "$0.98" } );
        case UPDATE_AIRHEADS:
            return Object.assign( {}, state.cart, { AirHeads: "$0.50" } );
        case UPDATE_MILKYWAY:
            return Object.assign( {}, state.cart, { MilkyWay: "$1.49" } );
        case UPDATE_PAYDAY:
            return Object.assign( {}, state.cart, { PayDay: "$1.30" } );
        case UPDATE_OREOS:
            return Object.assign( {}, state.cart, { Oreos: "$2.00" } );
        case UPDATE_SOURPATCHKIDS:
            return Object.assign( {}, state.cart, { SourPatchKids: "$3.00" } );
        case UPDATE_TOBLERONE:
            return Object.assign( {}, state.cart, { Toblerone: "$2.50" } );
        case UPDATE_SOUREGUMMYWORMS:
            return Object.assign( {}, state.cart, { SourGummyWorms: "$3.00" } );
        case UPDATE_NEKKO:
            return Object.assign( {}, state.cart, { Nekko: "$0.01"   } );

        default: return state;
    }
} 



export function updateReeses( Reeses ){
    return {
      type: UPDATE_REESES,
      payload: Reeses
    };
  }

  export function updateKitkat( Kitkat ){
    return {
      type: UPDATE_KITKAT,
      payload: Kitkat
    };
  }
  
  export function updateWarheads( Warheads ){
    return {
      type: UPDATE_WARHEADS,
      payload: Warheads
    };
  }

  export function updateAirheads( AirHeads ){
    return {
      type: UPDATE_AIRHEADS,
      payload: AirHeads
    };
  }

  export function updateMilkyway( MilkyWay ){
    return {
      type: UPDATE_MILKYWAY,
      payload: MilkyWay
    };
  }

  export function updatePayday( PayDay ){
    return {
      type: UPDATE_PAYDAY,
      payload: PayDay
    };
  }

  export function updateOreos( Oreos ){
    return {
      type: UPDATE_OREOS,
      payload: Oreos
    };
  }

  export function updateSourpatchkids( SourPatchKids ){
    return {
      type: UPDATE_SOURPATCHKIDS,
      payload: SourPatchKids
    };
  }

  export function updateToblerone( Toblerone ){
    return {
      type: UPDATE_TOBLERONE,
      payload: Toblerone
    };
  }

  export function updateSourGummyWorms( SourGummyWorms ){
    return {
      type: UPDATE_SOUREGUMMYWORMS,
      payload: SourGummyWorms
    };
  }

  export function updateOikos( Nekko ){
    return {
      type: UPDATE_NEKKO,
      payload: Nekko
    };
  }

  export default reducer; 