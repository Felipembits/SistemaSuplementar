const listaProdutos = document.querySelector(".containerProdutos");
const barraPesquisa = document.querySelector(".searchBar");
const botaoPesquisa = document.querySelector(".searchButton");
const botaoProdutos = document.querySelector(".btnProdutos");
const botaoContatos = document.querySelector(".btnContatos");
const botaoVerMais = document.querySelector("#verMais");
const botaoLogin = document.querySelector(".ph-user");
const closeDialog = document.querySelector(".close");
let modalLogin = document.querySelector("#loginDialog");
let cliquesVerMais = 0;
let contador = 0;

class MobileNavBar {
  constructor() {
    this.mobileMenu = document.querySelector(".mobile-menu");
    this.navList = document.querySelector(".nav-list");
    this.navLinks = document.querySelectorAll("navLinks");
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
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
  ".nav-list",
  ".nav-list li"
);

mobileNavBar.init();

let itensList = [
  {
    nome: "Creatina Black Skull",
    preco: "R$ 100,00",
    imagem: "./assets/creatinaBlack.svg",
  },
  {
    nome: "Creatina IntegralMedica",
    preco: "R$ 100,00",
    imagem: "./assets/creatinaIntegral.svg",
  },
  {
    nome: "Pré-treino Hórus Max Titanium",
    preco: "R$ 100,00",
    imagem: "./assets/horus.svg",
  },
  {
    nome: "Whey Concentrado Nutrata",
    preco: "R$ 100,00",
    imagem: "./assets/wheyNutrata.svg",
  },
  {
    nome: "Whey 100% Pro Max Titanium",
    preco: "R$ 100,00",
    imagem: "./assets/maxWhey.svg",
  },
  {
    nome: "Whey 100% Pure IntegralMedica Refil",
    preco: "R$ 100,00",
    imagem: "./assets/integralMedicaRefil.svg",
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

    let ilustracao = document.createElement("div");
    ilustracao.className = "ilustracao";

    let imgAddToCart = document.createElement("img");
    imgAddToCart.src = "./assets/addToCart.svg";
    imgAddToCart.className = "addToCart";

    let imgProduto = document.createElement("img");
    imgProduto.src = item.imagem;
    imgProduto.className = "imgProduto";

    ilustracao.appendChild(imgAddToCart);
    ilustracao.appendChild(imgProduto);

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

botaoProdutos.addEventListener("click", function () {
  let posicaoProdutos = document.querySelector(".titleProdutos").offsetTop;
  window.scrollTo({
    top: posicaoProdutos - 25,
    behavior: "smooth",
  });
});

botaoContatos.addEventListener("click", function () {
  let posicaoContatos = document.querySelector(".encomendasTitulo").offsetTop;
  window.scrollTo({
    top: posicaoContatos - 25,
    behavior: "smooth",
  });
});

botaoVerMais.addEventListener("click", function () {
  cliquesVerMais++;
  barraPesquisa.value = "";
  renderizarProdutos(itensList);
});

botaoLogin.addEventListener("click", function () {
  modalLogin.showModal();
});

closeDialog.addEventListener("click", function () {
  modalLogin.close();
});

renderizarProdutos(itensList);
