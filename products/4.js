const axios= require('axios')
/**
 * Создание товара
 * @param {String}productTitle
 * @param {Number}productPrice
 * @param {String}productDescription
 * @param {String}productImage
 * @param {String}productCategory
 */
async function addNewProduct(productTitle,productPrice,productDescription,productImage,productCategory){
    const data={
        productId: null,
    }
    try{
        const url='https://fakestoreapi.com/products'
        const body= {
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }
        const response = await axios.post(url,body)
        console.log(response.data)
        if (response.data.id){
            console.log('Продукт создан')
            data.productId = response.data.id
        }
    }
    catch (e){
        console.log(e)
    }
    return data
}
addNewProduct()