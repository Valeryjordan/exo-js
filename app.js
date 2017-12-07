$(".ok").click(function(){

var prenom = $('#first_name').val(); 
var nom = $('#last_name').val();
var ville = $('#city').val();

console.log("bonjour cher " + prenom +" "+ nom +" de "+ ville );
$('#username').text(prenom + " " + nom + " de " + ville);


});