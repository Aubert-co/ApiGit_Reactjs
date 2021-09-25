

async function FindUsersService(Username){
const datas = await fetch(`https://api.github.com/users/${Username}`)
const values =  await datas.json()
return values
/*return fetch(`https://api.github.com/users/${Username}`)
    .then((data)=>data.json())
    .then((data)=>{
       const {avatar_url,Login,name,public_repost,email,location} = data
       //img.innerHTML = `<img src=${avatar_url}>`
      //console.log(data)
       return data
})*/
}

/*async function FindSubscritionsService(subscriptions_url){
    const datas = await fetch(subscriptions_url)
    const jsonDatas = await datas.json()
    return jsonDatas
}*/
export  {FindUsersService}