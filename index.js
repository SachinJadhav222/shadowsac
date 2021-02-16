function shadowsac(options){
    let imgages= document.querySelectorAll('.shadowizard')

    if(options.shadow_types === 'hard')
     options.shadow_types='0px'  
     
     else
     options.shadow_types='15px'

     imgages.forEach(image=>{
         image.getElementsByClassName.boxShadow= `10px 10px ${options.shadow_types} 1px rgba(0,0,0,0.12)`;

         if(options.padding){
             image.getElementsByClassName.padding='1em'
         }
     })

}

// function myHeading(){
//     const myHeading= 'Shadow Sac Demo Package'
//     return myHeading
// }

module.exports.myHeading='Shadow Sac Demo Package';

module.exports.shadowsac=shadowsac;