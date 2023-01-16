"use strict";


//Class definition
var PiatexAds = function () {



  var globalMedio = document.querySelector('script[src="http://10.37.41.117:5501/adspiatex.js"]').getAttribute('data-medio');
  var toolbar;
  //var URL = 'https://piatex.mprc.cu/piatex/es/resource/?medio=2553231789ef454d96ec6bfde3a052e1&zone_name=1&quantity=1'
 //var URL = 'http://localhost:8002/piatex/es/resource/?medio=2553231789ef454d96ec6bfde3a052e1&zone_name=1&quantity=1'
  //var URL = 'https://piatex.mprc.cu/piatex/es/resource/?medio=28&zone_name=1&zone_size=300x200&quantity=1'
  //var URL = 'http:localhost:8002/piatex/es/resource/?medio=28&zone_name=1&zone_size=300x200&quantity=1'
  
  //var array = []

  // function findAndReplace(array, property, value, replaceProperty, replaceValue) {
  //   $.each(array, function(index, result) {
  //       if (result[property] == value) {
  //           result[replaceProperty] = replaceValue;
  //       }
  //   });
  //  } 


  //function populateStorage() {
    //localStorage.setItem('idClientPiatexAds', '3de5270c-1af6-4d3d-82c4-c105d6f6021f');
    var miStorage = window.localStorage;
    console.log('miStorage',miStorage)
  //}

  //populateStorage()

  var mostrarData = (data,element) => {

    //console.log('probando',data.results[0].extra_properties.source)
    //console.log('probando',data.results[0])
    const srcimage = data.results[0].extra_properties.source;
    //const srclink = data.results[0].url_shortener;
    //const srclink = data.results[0].url_shortener;
    const srclink = data.results[0].url_website;
    const advertiser = data.results[0].ad.advertisers[0];
    const image = document.createElement('img');

    //Remote image
    image.setAttribute(
    'src',
    srcimage,
    );

    image.setAttribute('alt', 'nature');

    //image.setAttribute('height', '150'); // height in px
    //image.setAttribute('width', '450'); // width in px

    // optionally style the image   
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

 
  const div = document.createElement('div');
  div.appendChild(image);
  element.addEventListener('mouseover',function(){
    element.style.cursor="pointer";
  })

element.addEventListener('click',function(evt){


  //console.log('array',array)



  var clickIMage = evt.target;

  console.log('dio click aqui',clickIMage)

  //let srcI = array.find(imagen => imagen.src === clickIMage.src);
  

  //console.log('srcI',srcI.cont<1)

  //var idClientPiatexAds = localStorage.getItem('idClientPiatexAds');
  //var idClientGetApi = '3de5270c-1af6-4d3d-82c4-c105d6f6021f'

  //if((idClientGetApi==idClientPiatexAds)&&(srcI.cont<1)){

    //findAndReplace(array, 'src', clickIMage.src, 'cont', 1);

    //console.log('arrayahora',array)
    //console.log('contar click')
  //}


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
  console.log('este es el link',srclink)
  window.open(srclink, "_blank")
    // window.location.href = srclink;
 })

// box.addEventListener('mouseleave',function(){
//     box.style.backgroundColor="red";
//  })
 element.innerHTML = div.innerHTML;
}

  // Private functions
  var initForm = function (config) {    
    
   const elements = document.getElementsByClassName('adsbypiatex')
 

   // console.log('elements',elements)
    // console.log('elements',elements.length)
   // console.log('elements',elements[0])
    

   for (let i = 0; i < elements.length; i++) {
    //console.log('entrando al for')
       

    const element =elements[i]
    //console.log('elementos',element)
    if(element){
      const zone = element.getAttribute('data-zone')
      const medio = element.getAttribute('data-medio') || config.medio || globalMedio

      
      if(!medio){
        console.error('medio no existe')
        return
      }
      //console.log('medio',medio)
      async function fetchAds(){
        //const response = await fetch(`https://piatex.mprc.cu/piatex/es/resource/?medio=${medio}&zone_name=${zone}&zone_size=300x200&quantity=1`)
        //const response = await fetch(`https://piatex.mprc.cu/piatex/es/resource/?medio=${medio}&zone_name=${zone}&quantity=1`)
        const response = await fetch(`https://piatex.mprc.cu/piatex/es/resource/?medio=${medio}&zone_name=${zone}&quantity=1`)
        const json = await response.json()
       // console.log(response)
       //console.log('este es el json',json)
        await mostrarData(json,element)

        //Creando arreglo con contadores para las imágenes
        //var jsonImages = {}
        //jsonImages.src = elements[i].getElementsByTagName("img")[0].src
        //jsonImages.cont = 0
        //array.push(jsonImages)
        //console.log('arrayantes',array)
        //Creando arreglo con contadores para las imágenes
      }
      fetchAds()   
    }
  }
  //console.log('array',array)
//   var ins = document.querySelectorAll("ins.adsbypiatex");

//   for (let unHijo of ins) {
//     unHijo.addEventListener("click", function(evt){
//         var hijo = evt.target;
      
//         console.log("Se hizo click en", hijo);
//         //console.log("Texto del enlace:", hijo.src);
//     });
// }

}

  return {
    init: function async (config) {  
       initForm(config);
    }
  };

}()
