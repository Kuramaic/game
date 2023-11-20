const axios =require('axios')
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
async function RandomUpdate(){
    const data={
        product:[]
    }
    try {
        let url = 'https://fakestoreapi.com/products'
        const res= await axios(url)
        let b = res.data.length
        let a =getRandomInt(0,b+1)
        url = url + '/' + a
        const body ={
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }
        const response = await axios.put(url,body)
        if (response.data.id){
            console.log('Продукт обновлён')
            data.product=response.data
        }
    }
    catch (e){
        console.log(e)
    }
    return data
}