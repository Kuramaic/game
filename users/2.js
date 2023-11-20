const axios= require('axios')
async function OneUser(){
    const data = {
        user:[]
    }
    try{
        const response = await axios.get('https://fakestoreapi.com/users/1')
        console.log(response.data)
        data.products=response.data
    }
    catch (err){
        console.log(err)
    }
    return data
}
OneUser()