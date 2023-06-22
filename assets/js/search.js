/* filtrar pela barra de pesquisa*/
    
const Search = document.getElementById('search');
const ITENS_TABLE = document.getElementById('Itens');


Search.addEventListener('keyup', () => {
  let expressao = Search.value.toLowerCase();

  if (expressao.length === 1) {
    return;
}

  let linhas = ITENS_TABLE.getElementsByTagName('tr');
  
  for(let position in linhas){
    if(true === isNaN(position)){
      continue;
    }

    let conteudoDaLinha = linhas[position].innerHTML.toLowerCase();

    if(true === conteudoDaLinha.includes(expressao)){
      linhas[position].style.display= '';
    }else{
      linhas[position].style.display= 'none';
    }
  }
});