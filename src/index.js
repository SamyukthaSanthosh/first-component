import React from 'react';
import ReactDom from 'react-dom';
import './book.css'; 


const firstBook={
  img:'https://images-eu.ssl-images-amazon.com/images/I/61ck5XWxB3L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
  title:'Grandmas Bag of Stories',
  author:'Sudha Murty',
} 

const secondBook={
  img:'https://images-na.ssl-images-amazon.com/images/I/510vx4eIUoL._SX391_BO1,204,203,200_.jpg',
  title:'Quantitative Aptitude for Competitive Examinations',
  author:'R S Agarwal',
} 


function BookList(){
return(
  <section className='booklist'>
    <Book 
    img={firstBook.img}
    title={firstBook.title} 
    author={firstBook.author} >
      <p>lorem ipsum dolor sit amet consectetur adipisicing 
      elit. Dolore cum
      animi voluptas temporibus quo dlectus pariatur,hic
      voluptatum
      accusantium illo.
      </p>
      </Book>
    <Book
    img={secondBook.img}
    title={secondBook.title} 
    author={secondBook.author}/>
  </section>
)
}
const Book=(props) =>{
  const {img, title, author, children}=props;
  return (
  <article className='book'>
    <img src={img} alt=""/>
    <h1>{title}</h1>
    <h4>{author}</h4>
    {children}
  </article>
  )
}


ReactDom.render(<BookList/>,document.getElementById('root'))