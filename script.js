var cartas = [
    {
      nome: "pedra",
      url: "https://imsammylee.github.io/rock-paper-scissors/rock_image.png"
    },
    {
      nome: "papel",
      url: "https://imsammylee.github.io/rock-paper-scissors/paper_image.png"
    },
    {
      nome: "tesoura",
      url: "https://imsammylee.github.io/rock-paper-scissors/scissors_image.png"
    }
  ];
  
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    // var numeroCartaJogador = parseInt(Math.random() * 3);
    // cartaJogador = cartas[numeroCartaJogador];
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    mostraCartaJogador();
    console.log(cartaMaquina);
  }
  
  function mostraCartaJogador() {
    var opcoes = document.getElementById("opcoes");
    var elemento = "";
    for (var radio of cartas) {
      elemento += "<img class='cartaSorteada' src='" + radio.url + "'/>";
      elemento +=
        "<input type='radio' name='radio' value='" +
        radio.nome +
        "'>" +
        radio.nome;
    }
    opcoes.innerHTML = elemento;
  }
  
  function obtemCartaSelecionada() {
    var radioSelecionado = document.getElementsByName("radio");
    for (var i = 0; i < radioSelecionado.length; i++) {
      if (radioSelecionado[i].checked == true) {
        cartaJogador = radioSelecionado[i].value;
        console.log(cartaJogador);
      }
    }
  }
  
  function mostraCartaMaquina() {
    var divCartaMaquina = document.getElementById("cartaMaquina");
    var elemento = "<img class='cartaSorteada' src='" + cartaMaquina.url + "'/>";
    divCartaMaquina.innerHTML = elemento;
  }
  
  function jogar() {
    obtemCartaSelecionada();
    var resultado = document.getElementById("resultado");
    if (cartaJogador == cartaMaquina.nome) {
      resultado.innerHTML = "Empate! A carta escolhida pela máquina foi: ";
      mostraCartaMaquina();
    } else if (cartaJogador == "papel" && cartaMaquina.nome == "pedra") {
      resultado.innerHTML = "Você venceu! A carta escolhida pela máquina foi: ";
      mostraCartaMaquina();
    } else if (cartaJogador == "tesoura" && cartaMaquina.nome == "papel") {
      resultado.innerHTML = "Você venceu! A carta escolhida pela máquina foi: ";
      mostraCartaMaquina();
    } else if (cartaJogador == "pedra" && cartaMaquina.nome == "tesoura") {
      resultado.innerHTML = "Você venceu! A carta escolhida pela máquina foi: ";
      mostraCartaMaquina();
    } else {
      resultado.innerHTML = "Você perdeu...A carta escolhida pela máquina foi: ";
      mostraCartaMaquina();
    }
    document.getElementById("again").disabled = false;
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("again").setAttribute("style", "display:inline");
  }
  
  function jogarNovamente() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("cartaMaquina").innerHTML = "";
    document.getElementById("opcoes").innerHTML = "";
    document.getElementById("again").disabled = true;
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnSortear").disabled = false;
    document.getElementById("again").setAttribute("style", "display:none");
  }
  