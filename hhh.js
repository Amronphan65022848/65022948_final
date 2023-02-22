function FocusBox(NameTxt){
    NameTxt.style.background ="white" ;

}
function BlurBox(NameTxt){
    NameTxt.style.background = "white";
}
function FocusBoxs(NameTxt){
    NameTxt.style.background ="pink" ;

}
function BlurBoxs(NameTxt){
    NameTxt.style.background = "white";
}
function SelectedMenu(){
    const selected =  document.getElementById('menu');
    const selectedTxt =  document.getElementById('Selceted');

    choose = selected.Value;
    selectedTxt.innerText = " You chosse :" + choose;

}