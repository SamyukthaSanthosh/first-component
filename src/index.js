import React from 'react';
import ReactDom from 'react-dom';
import './book.css';

function BookList(){
return(
  <section className='booklist'>
    <Book/>
  </section>
)
}
const author='Sudha Murty'
const Book=() =>{
  const title='Grandmas Bag of Stories'
  return (
  <article className='book'>
    <img src="https://images-eu.ssl-images-amazon.com/images/I/61ck5XWxB3L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" alt=""/>
    <h1>{title}</h1>
    <h4>{author.toUpperCase()}</h4>
    <p>{6+6}</p>
  </article>
  )
}



ReactDom.render(<BookList/>,document.getElementById('root'))