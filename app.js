const date = document.getElementById('clock');
function upDateTime(){
    const now = new Date() 
    const h = now.getHours()
    const m = now.getMinutes()
    const s = now.getSeconds()
    if(h < 10){
        date.textContent = '0'+ h + ':'+ m + ':' + s
    }else{
        date.textContent = h + ':' + m + ':' + s
    }
    if(m < 10){
        date.textContent = h + ':0'+ m + ':' + s
    }else{
        date.textContent = h + ':' + m + ':' + s
    }
    if(s < 10){
        date.textContent = h + ':' + m + ':0' + s
    }else{
        date.textContent = h + ':' + m + ':' + s
    }
}
upDateTime()
setInterval(upDateTime, 1000);

var formGrammer = document.querySelector('#form-grammer');
var formGoi = document.querySelector('#form-goi');
var searchGrammer = document.getElementById("searchGrammer");
var searchGoi = document.getElementById('searchGoi')
formGrammer.addEventListener('submit', function (e) {
    e.preventDefault();
    var searchQuery = searchGrammer.value.toLowerCase();
    var foundUser = data.find(function (user) {
        return user.grammerName.toLowerCase() === searchQuery;
    });
    if (foundUser) {
        const content = document.querySelector('.content');
        content.classList.add('p-4')
        content.innerHTML = `                  
            <div class="content-header">
                <h1 class="text-center">${foundUser.grammerName}</h1>
                <h3 class="text-start">${foundUser.imi}</h3>
            </div>
            <div class="content-main">
                <h5>1 ${foundUser.example0}</h5>
                <h5>2 ${foundUser.example1}</h5>
                <h5>3 ${foundUser.example2}</h5>
            </div>
      `;
    } else {
        document.querySelector('.content').innerHTML = `
        <p>No user found with that name.</p>
      `;
    }
});
// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     data.push(searchValue.value);
//     console.log(data);
// });