import React from 'react';
import FilmeCard from '../components/FilmeCard';

function Favoritos({ filmes, favoritos, favoritar, detalhes, mudarPagina }) {
  const lista = filmes.filter(filme => favoritos.includes(filme.id));
  return (
    <main className="largura pagina conteudo">
      <span className="sobretitulo">SUA LISTA PESSOAL</span>
      <h1 className="titulo-pagina">Meus <span>favoritos.</span></h1>
      <p className="descricao-pagina">Seus filmes preferidos em um só lugar.</p>
      {lista.length > 0 ? <><div className="resultado">{lista.length} {lista.length === 1 ? 'filme salvo' : 'filmes salvos'}</div><div className="grade-filmes">{lista.map(filme => <FilmeCard key={filme.id} filme={filme} favorito={true} favoritar={favoritar} detalhes={detalhes} />)}</div></> : <div className="vazio"><span>♡</span><h2>Sua lista está vazia</h2><p>Explore nosso catálogo e clique no coração para salvar seus filmes favoritos.</p><button className="botao-primario" onClick={() => mudarPagina('filmes')}>Explorar filmes ↗</button></div>}
    </main>
  );
}

export default Favoritos;
