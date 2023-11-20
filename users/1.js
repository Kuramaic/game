const axios= require('axios')
async function AllUsers(){
    const data = {
        users:[]
    }
    try{
        const response = await axios.get('https://fakestoreapi.com/users');
        console.log(response.data);
        if(response.data.length>0){
            console.log('Users успешно получены')
        }
        else{
            console.log('Users не полученны')
        }
        data.users=response.data
    }
    catch (err){
        console.log(err)
    }
    return data
}
AllUsers()