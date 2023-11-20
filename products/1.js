const axios= require('axios')
async function AllProduct(){
    const data = {
        products:[]
    }
    try{
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response.data);
        if(response.data.length>0){
            console.log('Продукты успешно получены')
        }
        else{
            console.log('Продукты не полученны')
        }
        data.products=response.data
    }
    catch (err){
        console.log(err)
    }
    return data
}
AllProduct()