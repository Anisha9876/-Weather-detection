let url="https://api.openweathermap.org/data/2.5/weather?";
let appid="5c96db905675e300cce5713ac3226923";
// let place="bhubaneshwar";
let input=document.querySelector("input");
let place_name=document.querySelector(".place");
let temp=document.querySelector(".temp");
let humid=document.querySelector(".fa-droplet ");
let wspeed=document.querySelector(".fa-wind");
let btn=document.querySelector("#g");
let pic=document.querySelector(".cloud");

// let place2=input.value;


async function dataget(){
  place=input.value;
  let res=await fetch(url+`q=${place}`+`&appid=${appid}`);
  let r=await res.json();
  console.log(r);
  console.log(r.name);
  console.log(r.main.temp);
  place_name.innerText=r.name;
  temp.innerText=r.main.temp;
  humid.innerText=r.main.humidity;
  wspeed.innerText=r.wind.speed;
  console.log(r.weather[0].id);
  if(r.weather[0].id<804 && r.weather[0].id>801){
       pic.src= "images/drizzle.png";
  }
  elseif(r.weather[0]==800)
  {
    pic.src= "images/clear.png";

  }
  elseif(r.weather[0].id<781 && r.weather[0].id>701)
  {
    pic.src= "mist.png";

  }
  elseif(r.weather[0].id<622 && r.weather[0].id>600)
  {
    pic.src= "images/snow.png";

  }
  elseif(r.weather[0].id<531 && r.weather[0].id>500)
  {
    pic.src= "images/rain.png";

  }
  elseif(r.weather[0].id<321 && r.weather[0].id>300)
  {
    pic.src= "images/drizzle.png";

  }

  // pic.value.src=
  
  
  
  // place_name
}


btn.addEventListener("click",()=>{
  dataget();
  
  // humid.innerText=

})

