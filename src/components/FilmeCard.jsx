import React from 'react';
function FilmeCard({ filme, favorito, favoritar, detalhes }) {
  return (
    <article className="cartao-filme">
      <button className="cartao-imagem" onClick={() => detalhes(filme)} aria-label={'Ver detalhes de ' + filme.titulo}>
        <img src={filme.poster} alt={'Pôster de ' + filme.titulo} />
        <span className="nota">★ {filme.nota}</span>
      </button>
      <button className={'coracao ' + (favorito ? 'selecionado' : '')} onClick={() => favoritar(filme.id)} aria-label={favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}>{favorito ? '♥' : '♡'}</button>
      <button className="titulo-filme" onClick={() => detalhes(filme)}>{filme.titulo}</button>
      <p className="dados-filme">{filme.ano} <span>•</span> {filme.genero}</p>
      <p className="sinopse-filme">{filme.descricao}</p>
      <button className="ver-sinopse" onClick={() => detalhes(filme)}>Ver descrição completa →</button>
    </article>
  );
}

export default FilmeCard;
