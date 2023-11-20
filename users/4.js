/**
 * Создание нового пользователя
 * @param {Object}userInfo
 * @param {String}userInfo.email - ЭЭЭ погоди барашка домой зашла
 * @param {String}userInfo.username - логин
 * @param {String}userInfo.password - пароль
 * @param {Object}userBio
 * @param {String}userBio.phone - телефон пользователя
 * @param {Object}userBio.name
 * @param {String}userBio.name.firstname - Имя
 * @param {String}userBio.name.lastname - Фамилия
 * @param {Object}userAddress
 * @returns {Promise<{userId: null}>}
 */
async function addNewUser(userInfo,userBio,userAddress){
    const data={
        userId: null,
    }
    try{
        const url='https://fakestoreapi.com/users'
        const body= {
            email:userInfo.email,
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
        const response = await axios.post(url,body)
        if (response.data.id){
        console.log('Пользователь создан')
        }
    }
    catch (e){
        console.log(e.message, e.stack)
    }
    return data
}