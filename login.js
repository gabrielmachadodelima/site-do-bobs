function loginHQ(){
	var done=0;
	var username=document.getElementById('username').value;
	var password=document.getElementById('password').value;

	username=username.toLowerCase(); 
	password=password.toLowerCase();

	if (username=="gabriel" && password=="gabriel2222") {
		window.location="../index.html/site.html"; done=1; 
	}
	if (username=="" || password==""){
		alert("Um ou mais campos estão em branco!");
	}
	if ( done==0){
		alert("Usuário ou senha inválida!");
	}
}