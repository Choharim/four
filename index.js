const selectContainer = document.querySelector("select");

const COUNTRY = "country";

function save(value){
  localStorage.setItem(COUNTRY,value);
}

function show(selectedValue){
  selectContainer.value = selectedValue;
}

function check(){
  const selectValue = selectContainer.value;

  if(selectValue !== "none"){
    save(selectValue);
  }else{
    localStorage.removeItem(COUNTRY);
  }
 
}

function init(){
  const loadedLS = localStorage.getItem(COUNTRY);
  if(loadedLS !== null){
    show(loadedLS);
  }
  selectContainer.addEventListener("click",check);
}
init();