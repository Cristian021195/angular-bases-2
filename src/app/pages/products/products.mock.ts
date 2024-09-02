export const products:Product[] = [
    {id:1,name:'Lavandina',price:10, description: 'Bottella de 1 litro'},
    {id:2,name:'Detergente',price:8, description: 'Dura 120 lavados'},
    {id:3,name:'Limpia vidrios',price:4, description: 'Tus vidrios transaparentes'},
    {id:4,name:'Quita grasa',price:6, description: 'Cocina tranquilo, nosotros limpiamos'},
    {id:5,name:'Perfume piso',price:2, description: 'El olor a campo mas realista'},
];
export interface Product{
    id:number,
    name:string,
    price:number,
    description:string
}