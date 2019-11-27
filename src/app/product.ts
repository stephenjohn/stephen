export class Product {

    productid:number
    name:string
    price:number
    description:string
    
    constructor(productid,name,price,description){
        this.productid=productid
        this.name=name
        this.price=price
        this.description=description
        console.log("product:",this.productid)
        console.log("name:",this.name)
        console.log("price:",this.price)
        console.log("description:",this.description)
    }
    }


