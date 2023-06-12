// //Detecting button press;
// var len = document.querySelectorAll('.drum').length;
// for (var i = 0; i < len; i++) {
//     document.querySelectorAll('.drum')[i].addEventListener('click', function () {
//         var key = this.innerHTML;
//         makeSound(key);
//         buttonAnimation(key);
//     });
// }

// //Detecting key press;
// document.addEventListener('keydown',(event)=>{
//     var key = event.key;
//     makeSound(key);
//     buttonAnimation(key);
    
// })

// function makeSound(key){
//     switch (key) {
//         case 'w':
//             var audio = new Audio('./sounds/crash.mp3');
//             audio.play();
//             break;
//         case 'a':
//             var audio = new Audio('./sounds/kick-bass.mp3');
//             audio.play();
//             break;
//         case 's':
//             var audio = new Audio('./sounds/snare.mp3');
//             audio.play();
//             break;

//         case 'd':
//             var audio = new Audio('./sounds/tom-1.mp3');
//             audio.play();
//             break;

//         case 'j':
//             var audio = new Audio('./sounds/tom-2.mp3');
//             audio.play();
//             break;

//         case 'k':
//             var audio = new Audio('./sounds/tom-3.mp3');
//             audio.play();
//             break;

//         case 'l':
//             var audio = new Audio('./sounds/tom-4.mp3');
//             audio.play();
//             break;
//         default:
//             break;
//     }
// }

// function buttonAnimation(key){
//    var btn =  document.querySelector("."+key);
//    btn.classList.add("pressed");
//    setTimeout(function(){
//     btn.classList.remove("pressed");
//    },100);
// }


//Detect button press;
var len = document.querySelectorAll('.drum').length;
for (var i = 0; i < len; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        var key = this.innerHTML;
        makeSound(key);
        buttonAnimation(key);
    });
}

//Detect key press;
document.addEventListener('keydown',(event)=>{
    var key = event.key;
    makeSound(key);
    buttonAnimation(key);
    
})

function makeSound(key){
    switch (key) {
        case 'w':
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;

        case 'd':
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;

        case 'j':
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;

        case 'k':
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;

        case 'l':
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(key){
   var btn = document.querySelector("."+key);
   btn.classList.add("pressed");
   setTimeout(function(){
    btn.classList.remove("pressed");
   },100);
}