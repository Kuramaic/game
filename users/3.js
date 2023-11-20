const axios= require('axios')
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

async function RandomUser(){
    const data = {
        user:[]
    }
    try{
        const response = await axios.get('https://fakestoreapi.com/users');
        if(response.data.length>0){
            console.log('Users успешно получены')
        }
        else{
            console.log('Users не полученны')
        }
        let a = getRandomInt(0,response.data.length)
        console.log(response.data[a]);
        data.user=response.data[a];

    }
    catch (err){
        console.log(err)
    }
    return data.user
}
RandomUser()
