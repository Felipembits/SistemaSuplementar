const listaProdutos = document.querySelector(".containerProdutos");
const barraPesquisa = document.querySelector(".searchBar");
const botaoPesquisa = document.querySelector(".searchButton");
const botaoProdutos = document.querySelectorAll(".btnProdutos");
const botaoContatos = document.querySelectorAll(".btnContatos");
const botaoVerMais = document.querySelector("#verMais");
const botaoInscricao = document.querySelectorAll(".ph-user");
const closeDialog = document.querySelector(".close");
const closeAddToCart = document.querySelector(".closeAddToCart");
const modalCarrinho = document.querySelector("#addToCartDialog");
const botaoHome = document.querySelectorAll(".btnHome");

let modalLogin = document.querySelector("#loginDialog");
let cliquesVerMais = 0;
let contador = 0;
class MobileNavBar {
  constructor() {
    this.mobileMenu = document.querySelector(".mobile-menu");
    this.menu = document.querySelector(".menu");
    this.closeMenu = document.querySelector(".closeMenu");
    this.handleClick = this.handleClick.bind(this);
    this.addCloseEvent = this.addCloseEvent.bind(this);
  }

  handleClick() {
    this.menu.showModal();
   }
   
   addCloseEvent() {
      this.menu.close();
    
   }
   
  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
    this.closeMenu.addEventListener("click", this.addCloseEvent);
  }



  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavBar = new MobileNavBar(
  ".mobile-menu",
  ".menu",
  ".closeMenu",
);

mobileNavBar.init();

let itensList = [
  {
    nome: "Creatina Black Skull",
    preco: "R$ 100,00",
    imagem: "./assets/creatinaBlack.svg",
    id: 1,
  },
  {
    nome: "Creatina IntegralMedica",
    preco: "R$ 100,00",
    imagem: "./assets/creatinaIntegral.svg",
    id: 2,
  },
  {
    nome: "Pré-treino Hórus Max Titanium",
    preco: "R$ 100,00",
    imagem: "./assets/horus.svg",
    id: 3,
  },
  {
    nome: "Whey Concentrado Nutrata",
    preco: "R$ 100,00",
    imagem: "./assets/wheyNutrata.svg",
    id: 4,
  },
  {
    nome: "Whey 100% Pro Max Titanium",
    preco: "R$ 100,00",
    imagem: "./assets/maxWhey.svg",
    id: 5,
  },
  {
    nome: "Whey 100% Pure IntegralMedica Refil",
    preco: "R$ 100,00",
    imagem: "./assets/integralMedicaRefil.svg",
    id: 6,
  },
];

function renderizarProdutos(itens) {
  listaProdutos.innerHTML = "";

  if (cliquesVerMais === 0) {
    contador = 0;
  } else {
    contador = 6 * (cliquesVerMais + 1) * -1;
    if (contador > itens.length) {
      contador = itens.length * -1;
    }
  }

  for (let item of itens) {
    if (contador > 5) {
      break;
    }
    contador++;

    let div = document.createElement("div");
    div.className = "cardProduto";
    div.id = "cardProduto" + item.id;
    let ilustracao = document.createElement("div");

    ilustracao.className = "ilustracao";
    ilustracao.id = "ilustracao" + item.id;


    let imgAddToCart = document.createElement("img");
    imgAddToCart.src = "./assets/addToCart.svg";
    imgAddToCart.className = "addToCart";
    imgAddToCart.id = "addToCart" + item.id;

    let imgProduto = document.createElement("img");
    imgProduto.src = item.imagem;
    imgProduto.className = "imgProduto";
    imgProduto.id = "imgProduto" + item.id;
    
    
    ilustracao.appendChild(imgAddToCart);
    ilustracao.appendChild(imgProduto);

    ilustracao.addEventListener("click", function () {
      abrirModal(item.nome, item.imagem, item.preco);
    });
    div.appendChild(ilustracao);

    let nome = document.createElement("h4");
    nome.textContent = item.nome;

    div.appendChild(nome);

    let preco = document.createElement("p");
    preco.textContent = item.preco;

    div.appendChild(preco);

    listaProdutos.appendChild(div);
  }
  let displayedProducts = listaProdutos.childElementCount;
  let totalProducts = itensList.length;

  if (
    displayedProducts === totalProducts &&
    botaoVerMais.classList.contains("active")
  ) {
    botaoVerMais.classList.remove("active");
  } else if (displayedProducts === totalProducts) {
    return;
  } else {
    botaoVerMais.classList.add("active");
  }
}

function abrirModal(nome, imagem, preco) {
  let nomeProduto = document.querySelector(".nomeProduto");
  nomeProduto.textContent = nome;

  let imagemProdutoModal = document.getElementById("imagemProdutoModal");
  imagemProdutoModal.src = imagem;

  let precoProduto = document.querySelector(".precoProduto");
  precoProduto.textContent = preco;

  modalCarrinho.showModal();
}


function pesquisarProdutos(criterio, produtos) {
  if (criterio === "") {
    return produtos;
  }
  let resultados = [];
  for (let produto of produtos) {
    if (produto.nome.toLowerCase().includes(criterio.toLowerCase())) {
      resultados.push(produto);
    }
  }
  return resultados;
}

barraPesquisa.addEventListener("input", (event) => {
  const valorPesquisa = event.target.value;
  resultados = pesquisarProdutos(valorPesquisa, itensList);
  renderizarProdutos(resultados);
});

botaoPesquisa.addEventListener("click", function () {
  if (barraPesquisa.value !== "") {
    window.scrollTo({
      top: 1200,
      behavior: "smooth",
    });
  }
});


botaoHome.forEach(botao => {
  botao.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  });

botaoProdutos.forEach(botao => {
 botao.addEventListener("click", function () {
   let posicaoProdutos = document.querySelector(".titleProdutos").offsetTop;
   window.scrollTo({
     top: posicaoProdutos - 25,
     behavior: "smooth",
   });
 });
});


botaoContatos.forEach(botao => {
 botao.addEventListener("click", function () {
   let posicaoContatos = document.querySelector(".encomendas").offsetTop;
   window.scrollTo({
     top: posicaoContatos - 25,
     behavior: "smooth",
   });
 });
});



botaoVerMais.addEventListener("click", function () {
  cliquesVerMais++;
  barraPesquisa.value = "";
  renderizarProdutos(itensList);
});

botaoInscricao.forEach(botao => {
  botao.addEventListener("click", function () {
    modalLogin.showModal();
  });
  });

closeDialog.addEventListener("click", function () {
  modalLogin.close();
});

closeAddToCart.addEventListener("click", function () {
  modalCarrinho.close();
})

// Definindo a altura inicial da div e a cor inicial
var header = document.getElementById('header');
header.style.backgroundColor = 'transparent'; // Cor inicial

// Obtendo a altura do elemento que você deseja monitorar
var targetElement = document.querySelector('.mainHome');
var targetHeight = targetElement.offsetHeight;

// Monitorando a altura do elemento
window.onscroll = function() {
  var rect = targetElement.getBoundingClientRect();
  if(rect.top < 90) {
      // Alterando a cor da header quando o elemento está na parte superior da janela de visualização
      header.style.backgroundColor = '#000';
  } else {
      // Alterando a cor da header para transparente quando o elemento está na parte inferior da janela de visualização
      header.style.backgroundColor = 'transparent';
  }
 };
 




renderizarProdutos(itensList);
