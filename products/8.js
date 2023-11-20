const axios =require('axios')
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
async function RandomDelete(){
    const data={
        product:[]
    }
    try {
        let url = 'https://fakestoreapi.com/products'
        const res= await axios(url)
        let b = res.data.length
        let a =getRandomInt(0,b+1)
        url = url + '/' + a
        const response = await axios.delete(url)
        if (response.data.id){
            console.log('Продукт delete')
            data.product=response.data
        }
    }
    catch (e){
        console.log(e)
    }
    return data
}
