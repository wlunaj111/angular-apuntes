"use strict";


//Class definition
var PiatexAds = function () {

  //Private variables
  var toolbar;
  var URL = 'https://piatex.mprc.cu/piatex/es/resource/?medio=28&zone_name=1&zone_size=300x200&quantity=1'


  var mostrarData = (data,element) => {

    //console.log('box',document.getElementById('box'))
    //console.log('data',data)
 
    console.log('data',data)

    //console.log('mostrando',document.getElementById(id))

    //Comprueba que existe ya una imagen cargada previamente 
    // if(document.getElementById('box').firstElementChild){
    //   document.getElementById('box').removeChild(document.getElementById('box').firstChild);
    // }

    // if(document.getElementById(id).firstElementChild){
    //   document.getElementById(id).removeChild(document.getElementById(id).firstChild);
    // }


    // console.log('comprobando imagen',document.getElementById(id).firstElementChild)
    // Comprueba que existe ya una imagen cargada previamente 
    // if(document.getElementById(id).firstElementChild){
    //   document.getElementById(id).removeChild(document.getElementById(id).firstChild);
    // }


    

    //console.log('probando',data.results[0].extra_properties.source)
    const srcimage = data.results[0].extra_properties.source;
    console.log('srcimage',srcimage)
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

  //const box = document.getElementById('box');
  // box.style.backgroundColor = 'gray';


  //Elements
  //const element = document.querySelector(id);
  
  const div = document.createElement('div');
  div.appendChild(image);
  element.addEventListener('mouseover',function(){
    element.style.cursor="pointer";
  })

element.addEventListener('click',function(){

  // let formData = new FormData()
  // formData.append('resource', '404');
  // formData.append('advertiser', '169');

  // fetch('http://localhost:8002/v1/click/', {
  //   method: "POST",   
  //   body: formData,
  //   //headers: {"Content-type": 'multipart/form-data'}
  // })
  // .then(response => response.json()) 
  // .then(json => console.log(json))
  // .catch(err => console.log(err));
  window.open(srclink, "_blank")
    // window.location.href = srclink;
 })
// box.addEventListener('mouseleave',function(){
//     box.style.backgroundColor="red";
//  })
 element.innerHTML = div.innerHTML;
}

  // Private functions
  var initForm = function (containers) {
    
   for (let i = 0; i < containers.length; i++) {
    
    const id = containers[i];
    const element = document.getElementById(id)
    if(element){
      const zone = element.getAttribute('data-zone')
      async function fetchAds(){
        const response = await fetch(`https://piatex.mprc.cu/piatex/es/resource/?medio=28&zone_name=${zone}&zone_size=300x200&quantity=1`)
        const json = await response.json()
        await mostrarData(json,element)
      }
  
      fetchAds()   
    }

  //---------------------------------------------------------------------------------------------------------------------------------------------------
// fetch('https://piatex.mprc.cu/piatex/es/resource/?medio=28&zone_name=1&zone_size=300x200&quantity=1', {
//   method: "GET",
//   headers: {"Content-type": "application/json;charset=UTF-8"}
// })
// .then(response => response.json()) 
// .then(json => {

//     console.log(json)
//     ////////////////////////////////////////////
//     const mostrarData = (data) => {

//       console.log('jaja',document.getElementById('box').firstElementChild)

//       //Comprueba que existe ya una imagen cargada previamente 
//       if(document.getElementById('box').firstElementChild){
//         document.getElementById('box').removeChild(document.getElementById('box').firstChild);
//       }


//       //console.log('probando',data.results[0].extra_properties.source)
//       const srcimage = data.results[0].extra_properties.source;
//       const srclink = data.results[0].url_website;
  
//       const resource = data.results[0].url_website;
//       const advertiser = data.results[0].ad.advertisers[0];
//       //console.log('advertiser',advertiser)
  
//       const image = document.createElement('img');
  
//   // 👇️ Local image
//   // image.setAttribute('src', 'my-img.png');
  
//   // 👇️ Remote image
//   image.setAttribute(
//     'src',
//     srcimage,
//   );
  
//   image.setAttribute('alt', 'nature');
  
//   image.setAttribute('height', '150'); // 👈️ height in px
//   image.setAttribute('width', '450'); // 👈️ width in px
  
//   // 👇️ optionally style the image   
//   image.style.border = '5px solid #263241';
//   image.style.backgroundColor = "gray";
  
  
  
//   image.onerror = function handleError() {
//     console.log('Image could not be loaded');
//     // 👇️ Can set image.src to a backup image here
//     // image.src = 'backup-image png'
  
//     // 👇️ Or hide image
//     // image.style.display = 'none';
//   };
  
//   image.onload = function handleImageLoaded() {
//     console.log('image loaded successfully');
//   };
  
//   const box = document.getElementById('box');
//   // box.style.backgroundColor = 'gray';
  
//   box.addEventListener('mouseover',function(){
//       box.style.cursor="pointer";
      
//    })
//   box.addEventListener('click',function(){
  
//     let formData = new FormData()
//     formData.append('resource', '404');
//     formData.append('advertiser', '169');
  
//     fetch('http://localhost:8002/v1/click/', {
//       method: "POST",   
//       body: formData,
//       //headers: {"Content-type": 'multipart/form-data'}
//     })
//     .then(response => response.json()) 
//     .then(json => console.log(json))
//     .catch(err => console.log(err));
  
//       window.location.href = srclink;
//    })
//   // box.addEventListener('mouseleave',function(){
//   //     box.style.backgroundColor="red";
//   //  })
  
//   box.appendChild(image);
  
//   }
//   mostrarData(json)
  
// ////////////////////////////////////////////////////////////////

// })
// .catch(err => console.log(err));
//---------------------------------------------------------------------------------------------------------------------------------------------------
  }
}

  return {
    init: function async (containers) {
      console.log('containers',containers)
        // Elements
        //  toolbar = document.querySelector(containers[0]);
        //  console.log('toolbar',toolbar)

        // if (!toolbar) {
        //     return;
        // }
      console.log('init is called')
      initForm(containers);
    }
  };

}()

//http://172.28.106.26:8080/piatex/es/resource/?medio=28&zone_name=1&zone_size=300x200&quantity=1
//'http://10.37.41.177:8002/es/resource/?medio=28&zone_name=1&zone_size=300x200&quantity=1'







