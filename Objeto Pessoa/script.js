//Criar um documento html com um formulário, com os campos: nome, idade e data de nascimento.

function GetFormDate(){
document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault()
})

var Name = document.getElementById('Name').value;
var Age = document.getElementById('Age').value;
var Birthdate = document.getElementById('Birthdate').value;

var Person = 
{Name: Name, 
    Age: Age, 
    Birthdate: Birthdate};

console.log(Person)

}

