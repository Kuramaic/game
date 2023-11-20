const axios =  require('axios')


async function DeleteUser(){
    const data = {
        productId:[]
    }
    try{
        const url='https://fakestoreapi.com/users/6'
        const response = await axios.delete(url)
        if (response.data.id){
            console.log('User delete')
            data.productId=response.data
        }
    }
    catch (e){
        console.log(e)
    }
    return data
}

DeleteUser()