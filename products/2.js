const axios= require('axios')
async function OneProduct(){
    const data = {
        products:[]
    }
    try{
        const response = await axios.get('https://fakestoreapi.com/products/1');
        console.log(response.data);
        data.products=response.data
    }
    catch (err){
        console.log(err)
    }
    return data
}
OneProduct()