function controleNome(nome){
    if(!isNaN(nome) || nome == ""){
        document.getElementById("nome").style.border="red solid";
    }else{
        document.getElementById("nome").style.border="blue solid";
        return true;
    }
};

function controleTitulo(titulo){
    if(!isNaN(titulo) || titulo == ""){
        document.getElementById("titulo").style.border="red solid";
    }else{
        document.getElementById("titulo").style.border="blue solid";
        return true;
    }
};

function controleAutor(autor){
    if(!isNaN(autor) || autor == ""){
        document.getElementById("autor").style.border="red solid";
    }else{
        document.getElementById("autor").style.border="blue solid";
        return true;
    }
};

function controleGenero(genero){
    if(!isNaN(genero) || genero == ""){
        document.getElementById("genero").style.border="red solid";
    }else{
        document.getElementById("genero").style.border="blue solid";
        return true;
    }
};

// function controleAno(ano){
//     if(ano == "" || ano <=0 || ano === 1111 || ano === 2222){
//         document.getElementById("ano").style.border="red solid";
//     }else{
//         document.getElementById("ano").style.border="blue solid";
//         return true;
//     }
// };


function confirmarApagar(event){
    event.preventDefault// impedi que haja
     var decison = confirm("Deseja Apagar?")
    if(decison){
        console.log("sim, desejo apagar")
    }else
   console.log("não,foi um engano");
}   