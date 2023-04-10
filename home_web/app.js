
let btns = document.querySelector(".btn");

btns.onclick = (e) =>{  
    var namee  = document.getElementById("nam").value;
    var value = document.getElementById('em').value;
        if (value === ''|| (namee === '')) {
            alert('Oops, there are still empty fields left')}
    
        else{
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var valid = re.test(value);
            if (valid){
                document.getElementById("myId").disabled = false;

            alert(`${namee} Тебе открылся путь в Земли Рассвета`)}
            else{
                alert("пидор")
            }}    
           

}

