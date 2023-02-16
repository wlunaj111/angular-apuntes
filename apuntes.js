 //Install the Angular CLI 
 npm install -g @angular/cli

 //Create a workspace and initial application
 ng new my-app

//Run the application
cd my-app
ng serve --open

//Generate component 
ng generate component hola-mundo
ng g c modules/paquete/componentes/paquete-pay-dialog // a partir de la carpeta modules

//Install json-server 
npm i -g json-server

//Install angular material
ng add @angular/material

// Generar modulo -m=app para que me incluya el modulo en app.module.ts,   --route products me crea una ruta "/productss"
ng g m pages/products -m=app --route products

// Crear un componente sin archivo de testing --skip-tests
ng g c pages/products/product --skip-tests

// Crear un service sin fichero de testing 
ng g service pages/services/products --skip-tests

//Para generar el environment en Angular 15
 ng generate environments
//Para generar los guards
 ng g g auth //este es un ejemplo
