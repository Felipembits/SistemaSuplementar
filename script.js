class MobileNavBar {
  constructor () {
    this.mobileMenu = document.querySelector('.mobile-menu');
    this.navList = document.querySelector('.nav-list');
    this.navLinks = document.querySelectorAll('navLinks');
    this.activeClass = 'active';
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link) => {
      link.style.animation
      ? (link.style.animation = "")
      : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
    })
  
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.animateLinks()
  }


  addClickEvent() {
    this.mobileMenu.addEventListener('click', this.handleClick);
  }

  init(){
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  
  }
}

const mobileNavBar = new MobileNavBar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
)

mobileNavBar.init()

listaProdutos = document.querySelector('.containerProdutos');
barraPesquisa = document.querySelector('.searchBar');
botaoPesquisa = document.querySelector('.searchButton')


let itens = [
    {nome: 'Creatina Black Skull',
    preco: 'R$ 100,00',
    imagem: './assets/creatinaBlack.svg'
    },
    {nome: 'Creatina IntegralMedica',
    preco: 'R$ 100,00',
    imagem: './assets/creatinaIntegral.svg'
    },
    {nome: 'Pré-treino Hórus Max Titanium',
    preco: 'R$ 100,00',
    imagem: './assets/horus.svg'
    },
    {nome: 'Whey Concentrado Nutrata',
    preco: 'R$ 100,00',
    imagem: './assets/wheyNutrata.svg'
    },
    {nome: 'Whey 100% Pro Max Titanium',
    preco: 'R$ 100,00',
    imagem: './assets/maxWhey.svg'
    },
    {nome: 'Whey 100% Pure IntegralMedica Refil',
    preco: 'R$ 100,00',
    imagem: './assets/integralMedicaRefil.svg'
    }
]

function renderizarProdutos(itens) {
    listaProdutos.innerHTML = '';
    for (let item of itens) {

      let div = document.createElement('div');
        div.className = 'cardProduto';
        
        let ilustracao = document.createElement('div');
        ilustracao.className = 'ilustracao';
  
        let imgAddToCart = document.createElement('img');
        imgAddToCart.src = './assets/addToCart.svg';
        imgAddToCart.className = 'addToCart';

        let imgProduto = document.createElement('img');
        imgProduto.src = item.imagem;
        imgProduto.className = 'imgProduto';
        
        ilustracao.appendChild(imgAddToCart);
        ilustracao.appendChild(imgProduto);

        div.appendChild(ilustracao);
  
        let nome = document.createElement('h4');
        nome.textContent = item.nome;
  
        div.appendChild(nome);
  
        let preco = document.createElement('p');
        preco.textContent = item.preco;
  
        div.appendChild(preco);
  
        listaProdutos.appendChild(div);
    }
 }


 function pesquisarProdutos(criterio, produtos) {
  if (criterio === '') {
    return produtos;
  }
  let resultados = [];
  for (let produto of produtos) {
    if (produto.nome.includes(criterio)) {
      resultados.push(produto);
    }
  }
  return resultados;
 }
 

 barraPesquisa.addEventListener('input', (event) => {
  const valorPesquisa = event.target.value;
  resultados = pesquisarProdutos(valorPesquisa, itens);
  renderizarProdutos(resultados);
 });
 

renderizarProdutos(itens);