listaProdutos = document.querySelector('.containerProdutos');
barraPesquisa = document.querySelector('.searchBar');

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
    for (let item of itens) {
        // Cria um novo elemento div
        let div = document.createElement('div');
        div.className = 'cardProduto';
        
        // Cria um novo elemento div para a ilustração
        let ilustracao = document.createElement('div');
        ilustracao.className = 'ilustracao';
  
        // Cria um novo elemento img para o botão adicionar ao carrinho
        let imgAddToCart = document.createElement('img');
        imgAddToCart.src = './assets/addToCart.svg';
        imgAddToCart.className = 'addToCart';

        let imgProduto = document.createElement('img');
        imgProduto.src = item.imagem;
        imgProduto.className = 'imgProduto';
        
  
        // Anexa o botão adicionar ao carrinho à div de ilustração
        ilustracao.appendChild(imgAddToCart);
        ilustracao.appendChild(imgProduto);

        // Anexa a div de ilustração à div do produto
        div.appendChild(ilustracao);
  
        // Cria um novo elemento h4 para o nome do produto
        let nome = document.createElement('h4');
        nome.textContent = item.nome;
  
        // Anexa o nome do produto à div do produto
        div.appendChild(nome);
  
        // Cria um novo elemento p para o preço do produto
        let preco = document.createElement('p');
        preco.textContent = item.preco;
  
        // Anexa o preço do produto à div do produto
        div.appendChild(preco);
  
        // Anexa a div do produto à lista de produtos
        listaProdutos.appendChild(div);
    }
 }
 
 
 


function pesquisarProdutos(criterio) {
    let resultados = [];
    for (let produto of produtos) {
      if (produto.nome.includes(criterio) || produto.descricao.includes(criterio)) {
        resultados.push(produto);
      }
    }
    return resultados;
   }

renderizarProdutos(itens);