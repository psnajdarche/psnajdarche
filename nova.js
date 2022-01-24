const id=sessionStorage.getItem("user");
const ul=document.querySelector('ul')
const body=document.querySelector('body');
const input=document.querySelector('input');
const watch=document.querySelector('.watch')
function podaci(e){
    const card=document.createElement('div');
    const slika=document.createElement('img');
    const name=document.createElement('h1');
    const silkadiv=document.querySelector('.slikadiv')
    slika.setAttribute("src",e.image.medium)
    name.textContent=e.name
    const naslov=document.querySelector('.naslov');
    const container=document.querySelector('.container');
    naslov.appendChild(name);
    card.appendChild(slika);
    silkadiv.appendChild(card)
    const detalji=document.createElement('p');
    detalji.innerHTML=e.summary;
    const showdetalji=document.createElement('h2')
    showdetalji.textContent="Show Details"
    const detaljidiv=document.querySelector('.detalji')
    detaljidiv.appendChild(showdetalji);
    detaljidiv.appendChild(detalji)

  
    

    console.log(e);

}
function podacisesion(e){
    const sesion=document.createElement('h2');
    sesion.textContent="Sesion("+e.length+")"
    const gornjakartica=document.createElement('div');
    const sc=document.querySelector('.sc')
    gornjakartica.appendChild(sesion)
    sc.appendChild(gornjakartica)
    e.map((e,i,arr)=>{
        const date=document.createElement("p");
        date.textContent=e.premiereDate+"-"+e.endDate
        gornjakartica.appendChild(date)
        sc.appendChild(gornjakartica)
    })
    console.log(e);
}
function podacicast(e){
    const cast=document.createElement('h2')
    const donjakartica=document.createElement('div');
    cast.textContent="CAST"
    donjakartica.appendChild(cast);
    const sc=document.querySelector('.sc')
    sc.appendChild(donjakartica)
    
    e.map((e,i,arr)=>{
        const glumac=document.createElement("p");
        glumac.textContent=e.character.name
        donjakartica.appendChild(glumac)
        sc.appendChild(donjakartica)
    })
    console.log(e);
}
function search(data){
    
    const brisi=document.querySelectorAll('li');
    brisi.forEach(data=>data.remove());
    data.forEach((el,i,arr)=>{
        let li=document.createElement('li')
        li.classList="li"
        
        li.textContent=el.show.name;
        ul.appendChild(li);
        li.addEventListener('click',()=>{
            sessionStorage.setItem("user",el.show.id)
            window.open("./nova.html","_self")
        })
    })
}

function fecsearch(){
    fetch("https://api.tvmaze.com/search/shows?q="+input.value)
    .then(res=>res.json())
    .then(res=>search(res))
}
function fec(){
    fetch("https://api.tvmaze.com/shows/"+id)
    .then(res=>res.json())
    .then(res=>podaci(res))
}

function fecsesion(){
    fetch("https://api.tvmaze.com/shows/"+id+"/seasons")
    .then(res=>res.json())
    .then(res=>podacisesion(res))
}


function feccast(){
    fetch("https://api.tvmaze.com/shows/"+id+"/cast")
    .then(res=>res.json())
    .then(res=>podacicast(res))
}

input.addEventListener('keyup',fecsearch)
window.addEventListener('load',fec)
window.addEventListener('load',fecsesion)
window.addEventListener('load',feccast)