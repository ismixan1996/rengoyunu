$(document).ready(function(){



    



    let colors=[];
    // $('.color-rgb').text(color)


    for (let index = 0; index < 3; index++) {
   
    let red = parseInt(Math.random()*255);
    let green = parseInt(Math.random()*255);
    let blue = parseInt(Math.random()*255);
    
    let color ='rgb( ' + red + ' , ' + green + ' , ' + blue + ' )';
    
    colors.push(color)
    
    $('.box').eq(index).css('background-color',color)


      
}

let selectedColor = colors[Math.floor(Math.random()*colors.length)];

$('.color-rgb').text(selectedColor)


$('.box').click(function(){
    if(selectedColor===$(this).css('backgound-color')){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }


})


});