import React, { useState } from 'react';
import FilmeCard from '../components/FilmeCard';

function Filmes({ filmes, favoritos, favoritar, detalhes }) {
  const [busca, setBusca] = useState('');
  const [genero, setGenero] = useState('Todos');
  const generos = ['Todos', ...new Set(filmes.map(filme => filme.genero))];
  const encontrados = filmes.filter(filme => filme.titulo.toLowerCase().includes(busca.toLowerCase()) && (genero === 'Todos' || filme.genero === genero));

  return (
    <main className="largura pagina conteudo">
      <span className="sobretitulo">EXPLORE NOSSO UNIVERSO</span>
      <h1 className="titulo-pagina">Catálogo de <span>filmes.</span></h1>
      <p className="descricao-pagina">Encontre sua próxima história favorita.</p>
      <div className="ferramentas">
        <label className="campo-busca"><span>⌕</span><input value={busca} onChange={evento => setBusca(evento.target.value)} placeholder="Pesquisar pelo nome do filme..." /></label>
      </div>
      <div className="filtros">{generos.map(item => <button key={item} className={genero === item ? 'selecionado' : ''} onClick={() => setGenero(item)}>{item}</button>)}</div>
      <div className="resultado">{encontrados.length} {encontrados.length === 1 ? 'filme encontrado' : 'filmes encontrados'}</div>
      {encontrados.length > 0 ? <div className="grade-filmes">{encontrados.map(filme => <FilmeCard key={filme.id} filme={filme} favorito={favoritos.includes(filme.id)} favoritar={favoritar} detalhes={detalhes} />)}</div> : <div className="vazio"><span>⌕</span><h2>Nenhum filme encontrado</h2><p>Tente buscar outro nome ou escolher outro gênero.</p><button className="botao-primario" onClick={() => { setBusca(''); setGenero('Todos'); }}>Limpar filtros</button></div>}
    </main>
  );
}

export default Filmes;
