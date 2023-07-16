let details = document.querySelector('.details');
let imgContainer = document.querySelector('.img-container');
let getUserBtn = document.getElementById('get-user-btn');
let url = 'https://random-data-api.com/api/v2/users?size=1&response_type=json';

let getUser = () => {
  fetch(url)
    .then(res => res.json())
    .then(user => {
      console.log(user);
      console.log(user.avatar);
      console.log(user.first_name);
      console.log(user.last_name);
      console.log(user.employment.title);
      console.log(user.address.city);

      imgContainer.innerHTML = `
        <img src="${user.avatar}">
      `

      details.innerHTML = `
        <h2>${user.first_name} ${user.last_name}</h2>
        <h3>${user.employment.title}</h3>
        <h4><i class="fa-solid fa-location-dot"></i> ${user.address.city}</h4>
      `

      let randomColor = '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
      console.log(randomColor);
      document.documentElement.style.setProperty('--theme-color', randomColor);  
    })    
}

window.addEventListener('load', getUser);
getUserBtn.addEventListener('click', getUser);