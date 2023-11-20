const axios =  require('axios')

/**
 * @param {Object}NewInfo
 * @param {String}NewInfo.email - ЭЭЭ погоди барашка домой зашла
 * @param {String}NewInfo.username - логин
 * @param {String}NewInfo.password - пароль
 * @param {Object}NewBio
 * @param {String}NewBio.phone - телефон пользователя
 * @param {Object}NewBio.name
 * @param {String}NewBio.name.firstname - Имя
 * @param {String}NewBio.name.lastname - Фамилия
 * @param {Object}NewAddress
 * @returns {Promise<void>}
 * @constructor
 */
async function UpdateUser(NewInfo,NewBio,NewAddress){
    const data = {
        userId:[]
    }
    try{
        const url='https://fakestoreapi.com/users/7'
        const body={
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
            data.userId=response.data
        }
    }
    catch (e){
        console.log(e)
    }
    return data
}

UpdateUser()