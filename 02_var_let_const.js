//// ---- VAR EXAMPLE --------
// var i = "global"; // variable de ámbito global
// console.log(i)
// function foo() {
//     i = "local"; // se sobrescribe el valor 
//     console.log(i); // “local”
// }    
// foo();
// console.log(i); // “local”



//// ---- LET EXAMPLE --------
// function foo() {    
//     let i = 0;    
//     if(true) {        
//         let i = 1; // Sería otra variable i solo para el bloque if        
//         console.log(i); // 1
//     }    
//     console.log(i); // 0
// }
// foo();
// console.log(i);



//// ---- CONST EXAMPLE --------
// const user = 'Juan';
// user = 'Manolo'; 
// TypeError: Assignment to constant variable
