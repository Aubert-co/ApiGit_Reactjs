

function FindUsers(Username){

return fetch(`https://api.github.com/users/${Username}`)
    .then((data)=>data.json())
   /* .then((data)=>{
       const {avatar_url,Login,name,public_repost,email,location} = data
       //img.innerHTML = `<img src=${avatar_url}>`
      //console.log(data)
       return data
})*/
}
export default FindUsers