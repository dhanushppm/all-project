function displayval(val){
    document.getElementById('display').value= document.getElementById('display').value+val;
}
function clearval(){
    document.getElementById('display').value="";
}
function calculate(){
    var user=document.getElementById('display').value;
    var result=eval(user);
    document.getElementById('display').value=result;
}