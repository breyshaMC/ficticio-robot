function habilitar(){
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    num = document.getElementById("num").value;
    val = 0;

    if(name == ""){
        val++;
    }
    if(email == ""){
        val++;
    }
    if(num == ""){
        val++;
    }
    if(val == 0){
        document.getElementById("btn").disabled = false;
    } else {
        document.getElementById("btn").disabled = true;
    }
}
document.getElementById("name").addEventListener("keyup", habilitar);
document.getElementById("email").addEventListener("keyup", habilitar);
document.getElementById("num").addEventListener("keyup", habilitar);
document.getElementById("btn").addEventListener("click", () =>{
    
});
