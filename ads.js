"use strict";

//const API_CLICK99 = 'http://localhost:8002/v1/click/'
//const API_IMPRESSION = 'http://localhost:8002/v1/impression/'


//http://172.28.106.26:8080/piatex/es/resource/?medio=28&zone_name=1&zone_size=300x200&quantity=1
// 'http://10.37.41.177:8002/es/resource/?medio=28&zone_name=1&zone_size=300x200&quantity=1'
fetch('https://piatex.mprc.cu/piatex/es/resource/?medio=28&zone_name=1&zone_size=300x200&quantity=1', {
  method: "GET",
  headers: {"Content-type": "application/json;charset=UTF-8"}
})
.then(response => response.json()) 
.then(json => {

    console.log(json)
    ////////////////////////////////////////////
    const mostrarData = (data) => {

      console.log('jaja',document.getElementById('box').firstElementChild)

      if(document.getElementById('box').firstElementChild){
        console.log('hay pan con azucar')
        document.getElementById('box').removeChild(document.getElementById('box').firstChild);
      }

      //  if(document.getElementById('box')){
      //   console.log('si existe')
      //  }

      //console.log('probando',data.results[0].extra_properties.source)
      const srcimage = data.results[0].extra_properties.source;
      const srclink = data.results[0].url_website;
  
      const resource = data.results[0].url_website;
      const advertiser = data.results[0].ad.advertisers[0];
      //console.log('advertiser',advertiser)
  
      const image = document.createElement('img');
  
  // 👇️ Local image
  // image.setAttribute('src', 'my-img.png');
  
  // 👇️ Remote image
  image.setAttribute(
    'src',
    srcimage,
  );
  
  image.setAttribute('alt', 'nature');
  
  image.setAttribute('height', '150'); // 👈️ height in px
  image.setAttribute('width', '450'); // 👈️ width in px
  
  // 👇️ optionally style the image
  image.style.border = '5px solid #263241';
  image.style.backgroundColor = "gray";
  
  
  
  image.onerror = function handleError() {
    console.log('Image could not be loaded');
    // 👇️ Can set image.src to a backup image here
    // image.src = 'backup-image png'
  
    // 👇️ Or hide image
    // image.style.display = 'none';
  };
  
  image.onload = function handleImageLoaded() {
    console.log('image loaded successfully');
  };
  
  const box = document.getElementById('box');
  // box.style.backgroundColor = 'gray';
  
  box.addEventListener('mouseover',function(){
      box.style.cursor="pointer";
      
   })
  box.addEventListener('click',function(){
  
    let formData = new FormData()
    formData.append('resource', '404');
    formData.append('advertiser', '169');
  
    fetch('http://localhost:8002/v1/click/', {
      method: "POST",   
      body: formData,
      //headers: {"Content-type": 'multipart/form-data'}
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err));
  
      window.location.href = srclink;
   })
  // box.addEventListener('mouseleave',function(){
  //     box.style.backgroundColor="red";
  //  })
  
  box.appendChild(image);
  
  }
  mostrarData(json)
  
////////////////////////////////////////////////////////////////

})
.catch(err => console.log(err));

