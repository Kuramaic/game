const axios =  require('axios')

/**
 * @param {String}NewTitle
 * @param {String}NewPrice
 * @param {String}NewDescription
 * @param {String}NewImage
 * @param {String}NewCategory
 * @returns {Promise<void>}
 * @constructor
 */
async function UpdateProduct(NewTitle,NewPrice,NewDescription,NewImage,NewCategory){
    const data = {
        productId:[]
    }
    try{
        const url='https://fakestoreapi.com/products/7'
        const body={
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'}
        const response = await axios.put(url,body)
        if (response.data.id){
            console.log('Продукт обновлён')
            data.productId=response.data
        }
    }
    catch (e){
        console.log(e)
    }
    return data
}

const a =UpdateProduct()
console.log(a)