//Criar um documento html com um formulário, com os campos: nome, idade e data de nascimento.

function GetFormDate(){
document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault()
})

var Name = document.getElementsById('Name').value;
var Age = document.getElementsById('Age').value;
var Birthdate = document.getElementsById('Birthdate').value;

var Person = 
{Name: Name, 
    Age: Age, 
    Birthdate: Birthdate};

console.log(Person)
}

