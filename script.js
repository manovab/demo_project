document.getElementById('greetbn').addEventListener('click',function(){
    var name = document.getElementById('nameText').value;
    var lanugage = document.getElementById('lanugage').value;
    var greeting = document.getElementById('greet')

    var greetings = {
        Eng: "hello "+ name +" !",
        Jap: "Konnichiwa " + name + " !",
        Fra: "Bonjour " + name + " !"
    }
    greeting.innerHTML = greetings[lanugage]
});