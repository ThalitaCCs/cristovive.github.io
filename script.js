// Usuário admin
const adminUser = { username: "admin", password: "1234" };

// Login
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if(form){
    form.addEventListener("submit", function(e){
      e.preventDefault();
      let user = document.getElementById("username").value;
      let pass = document.getElementById("password").value;

      if(user === adminUser.username && pass === adminUser.password){
        alert("Bem-vindo, Admin!");
        window.location.href = "produtos.html";
      } else {
        alert("Usuário comum logado!");
        window.location.href = "evangelismo.html";
      }
    });
  }
});

// CRUD simples (simulação local)
let produtos = [
  { nome: "Camiseta Fé", preco: "R$ 49,90" },
  { nome: "Camiseta Jesus", preco: "R$ 59,90" }
];

function listarProdutos(){
  const lista = document.getElementById("listaProdutos");
  if(lista){
    lista.innerHTML = "";
    produtos.forEach((p, i) => {
      lista.innerHTML += `
        <div class="produto">
          <h3>${p.nome}</h3>
          <p>${p.preco}</p>
          <button onclick="editarProduto(${i})">Editar</button>
          <button onclick="deletarProduto(${i})">Excluir</button>
        </div>
      `;
    });
  }
}

function adicionarProduto(){
  let nome = prompt("Nome da camiseta:");
  let preco = prompt("Preço:");
  produtos.push({ nome, preco });
  listarProdutos();
}

function editarProduto(i){
  let nome = prompt("Novo nome:", produtos[i].nome);
  let preco = prompt("Novo preço:", produtos[i].preco);
  produtos[i] = { nome, preco };
  listarProdutos();
}

function deletarProduto(i){
  produtos.splice(i, 1);
  listarProdutos();
}

// Inicializar lista
document.addEventListener("DOMContentLoaded", listarProdutos);
