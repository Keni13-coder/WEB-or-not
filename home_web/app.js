window.addEventListener('scroll', (d) => {
	document.getElementById("myId").style.setProperty('--scrollTop', `${this.scrollY}px`)})
let btns = document.querySelector(".btn");

btns.onclick = (e) =>{  
    var namee  = document.getElementById("nam").value;
    var value = document.getElementById('em').value;
        if (value === ''|| (namee === '')) {
            alert('Ммм...');
            alert('Странник ты что-то забыл.');
            alert('Хммм...');
            alert('Что же это?');
        }
    
        else{
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var valid = re.test(value);
            if (valid){
                document.getElementById("myId").disabled = false;
                var bt = document.getElementById("myId");
                bt.setAttribute("style","opacity: 1 ; transition: opacity 4s; transform: translate3d(0,calc(var(--scrollTop) / 5.7),600px);font-size:calc(var(--index)*5);" );
                alert(`${namee} Тебе открылся путь в Земли Рассвета`)}
            else{
                alert(`Прилядись ${namee} ты что-то упускаешь.`)
            }}    
           

}

