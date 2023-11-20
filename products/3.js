const axios= require('axios')
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

async function RandomProduct(){
    const data = {
        product:[]
    }
    try{
        const response = await axios.get('https://fakestoreapi.com/products');
        if(response.data.length>0){
            console.log('Продукты успешно получены')
        }
        else{
            console.log('Продукты не полученны')
        }
        let a = getRandomInt(0,response.data.length)
        console.log(response.data[a]);
        data.product=response.data[a];

    }
    catch (err){
        console.log(err)
    }
    return data.product
}
RandomProduct()
