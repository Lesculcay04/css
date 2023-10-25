//Ejercico en clase expuesto//
interface TheIceCream {
    flavor: string;
    scoops: number;
}

let  ice :TheIceCream;
ice = {
    flavor: 'Chocolate',
    scoops: 1
};
console.log(ice.flavor)

interface Sundae extends TheIceCream {
    sauce: 'chocolate' | 'caramel' | 'stranwberry';
    nuts?:boolean;
    whippedCream?:boolean;
    instructions?:boolean;
}
//incrementacion de la interfase sundae// para agregar un tipo de interseccion en la intrfas, esta debe de estar al principio, caso contrario tendra un error.
type IceCream = TheIceCream & Sundae;

function tooManyScoops(iceCream:IceCream) {
    if (iceCream.scoops > 4 ) {
        return iceCream.scoops + " A sobrepasado el numero de Scoops";
    }else{
        return 'Tu orden está lista con ' + iceCream.sauce + ' como adereso.';
    }
}
console.log(tooManyScoops({flavor: 'Chocolate', scoops: 2, sauce: 'caramel'}));

// agegacion de otro ejemplo a lavariable//
let myIceCream: Sundae = {
    flavor:'Vainilla',
    scoops:2,
    sauce: 'chocolate',
    nuts: true
};
