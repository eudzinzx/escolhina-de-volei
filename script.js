function toggleMenu() {
    const nav = document.querySelector('#navbar ul');
    nav.classList.toggle('show');
  }
  
  // Espera o DOM carregar
  document.addEventListener('DOMContentLoaded', () => {
    const btnEntrar = document.getElementById('btnEntrar');
    const entrada = document.getElementById('entrada');
    const conteudoPrincipal = document.getElementById('conteudoPrincipal');
  
    btnEntrar.addEventListener('click', () => {
      // Esconde a tela de entrada
      entrada.style.display = 'none';
      // Mostra o conteúdo principal
      conteudoPrincipal.style.display = 'block';
    });
  
    // Cadastro de aluno
    document.getElementById('formCadastro').addEventListener('submit', function (e) {
      e.preventDefault();
      const form = e.target;
      const nome = form.nome.value;
      const idade = form.idade.value;
      const altura = form.altura.value;
      const peso = form.peso.value;
      const posicao = form.posicao.value;
  
      const tabela = document.querySelector('#tabelaAlunos tbody');
      const linha = document.createElement('tr');
      linha.innerHTML = `
        <td>${nome}</td>
        <td>${idade}</td>
        <td>${altura}</td>
        <td>${peso}</td>
        <td>${posicao}</td>
      `;
      tabela.appendChild(linha);
  
      form.reset();
    });
  });
  