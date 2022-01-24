
const input=document.querySelector('input');
const ul=document.querySelector('ul')
const watchdugme=document.querySelector('.watch')
const watchdiv=document.querySelector('.watchdiv')

function uzimanje(data){

    // console.log(data);

    const show=data.slice(0,50);
    console.log(show);
    show.map((el,i,arr)=>{
        const card=document.createElement('div');
        const img=document.createElement('img');
        const text=document.createElement('h4');
        const dugme=document.createElement('button');
        dugme.classList="dodajdugme";
        dugme.textContent="ADD to  Watch List"
        img.setAttribute('src',el.image.medium);
        text.textContent=el.name;
        card.appendChild(img);
        card.appendChild(text);
        card.appendChild(dugme);
        card.classList='card'
        const conatainer=document.querySelector('.container')    
        conatainer.appendChild(card);
        img.addEventListener('click',pokreni=>{
            sessionStorage.setItem("user",el.id)
            window.open("./nova.html","_self")
            
        })
    })
}




function fetchData(){
    fetch('https://api.tvmaze.com/shows')
    .then(res=>res.json())
    .then(res=>uzimanje(res))
}

function fetchS(){
    fetch('')
}
function search(data){
    console.log(data);
    
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

        dugmic.addEventListener('click',=>{
            let elementniz=[];
            elementniz.push(el.show.name)
            render()
        })
    })
  

    
}
function watchlista(naslov){
    const lista=naslov.name;
   
    elementniz.push(lista);
    render(elementniz);
}

 let noviarr=[]
function render(elementniz){
     noviarr=elementniz.filter((e,i)=>{
       return  elementniz.indexOf(e)===i;
    })
    noviarr.map((e,i,arr)=>{
        const lista=document.createElement('li');
        lista.textContent=e.name;
        const ulista=document.createElement('ul')
        ulista.appendChild(lista);
        watchdiv.appendChild(ulista)

    })
}
function fecsearch(){
    fetch("https://api.tvmaze.com/search/shows?q="+input.value)
    .then(res=>res.json())
    .then(res=>search(res))
}
const watch=document.querySelector('.watch');
input.addEventListener('keyup',fecsearch)
window.addEventListener('load',fetchData);
watchdugme.addEventListener('click',()=>watchdiv.classList.toggle('open'))

