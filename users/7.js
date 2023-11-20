const axios =require('axios')
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
async function RandomUpdate(){
    const data={
        User:[]
    }
    try {
        let url = 'https://fakestoreapi.com/users'
        const res= await axios(url)
        let b = res.data.length
        let a =getRandomInt(0,b+1)
        url = url + '/' + a
        const body ={
            email:'John@gmail.com',
            username:'johnd',
            password:'m38rmF$',
            name:{
                firstname:'John',
                lastname:'Doe'
            },
            address:{
                city:'kilcoole',
                street:'7835 new road',
                number:3,
                zipcode:'12926-3874',
                geolocation:{
                    lat:'-37.3159',
                    long:'81.1496'
                }
            },
            phone:'1-570-236-7033'
        }
        const response = await axios.put(url,body)
        if (response.data.id){
            console.log('User обновлён')
            data.User=response.data
        }
    }
    catch (e){
        console.log(e)
    }
    return data
}