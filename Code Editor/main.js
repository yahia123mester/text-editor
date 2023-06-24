let codes = document.getElementById("codes");
let play = document.getElementById("RUN");
let remove = document.getElementById("DELETE");
let result  = document.getElementById("result");
play.onclick = ()=>{
    result.innerHTML = codes.value;
};
remove.onclick = ()=>{
    result.innerHTML = "";
    codes.value = "";
};

