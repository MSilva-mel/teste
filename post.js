function user() {
    var username = document.getElementById("username").value;
    var passw = document.getElementById("passw").value;
  
      if (username === 'admin' && passw === 'asdf') {
      window.location.href = "pagini.html";
      alert("Seja bem vindo!");
    }else {
      alert("Usuário ou senha incorretos.");
    }
  
  }