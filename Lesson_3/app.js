// let name = prompt('Как вас зовут: ','Введите своё имя')
// function show_masg(){
//     let text = `Привет, ${name}`
//     alert(text);}


// // show_masg()

// alert(confirm("Ты в порядке")?`ну и хорошо`: `ну и хуй с тобой`)

// function oneclick(){
//     var inputvalue = document.getElementById('my_input').value;
//     alert(inputvalue);
// }

var body = document.getElementById("di");
let themebotton = document.querySelector(".btn");
themebotton.onclick = function(){
    body.classList.toggle("dark");
    body.classList.toggle("line");
    
}

// null как если 0
