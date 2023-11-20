const axios =  require('axios')


async function DeleteProduct(){
    const data = {
        productId:[]
    }
    try{
        const url='https://fakestoreapi.com/products/6'
        const response = await axios.delete(url)
        if (response.data.id){
            console.log('Продукт delete')
            data.productId=response.data
        }
    }
    catch (e){
        console.log(e)
    }
    return data
}

DeleteProduct()