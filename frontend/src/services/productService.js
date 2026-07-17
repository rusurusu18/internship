import API from './api.js'

//get request

export const getProducts() =>{
API.get("/products")
}

//post requests
export const createProducts=(product)=>{
    API.post("/products",products)

}

export const updateProducts=(id,product)=>{
    API.put('/products/${id}',product)

}

export const deleteProduct=(id)=>{
API.delete('/products/${id}');
}