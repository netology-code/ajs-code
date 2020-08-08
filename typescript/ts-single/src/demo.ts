let bonus: number;
let totalAmount: number = 0;

let errorCode: number | null = null;
errorCode = 404; // ok

function calculateBonus(amount: number): number {
    return Math.ceil(amount * 0.01);
}

type Item = {
    id: number,
    name: string,
    author: string,
};

let item : Item = {
    id: 1008,
    name: 'Meteora',
    author: 'Linkin Park',
};

item = {
    id: 1001,
    name: 'War and Piece',
    author: 'Leo Tolstoy',
};