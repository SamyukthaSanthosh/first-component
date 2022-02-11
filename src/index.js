import React from 'react';
import ReactDom from 'react-dom';
import './book.css'; 

const books=[
{
  img:'https://images-eu.ssl-images-amazon.com/images/I/61ck5XWxB3L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
  title:'Grandmas Bag of Stories',
  author:'Sudha Murty',
},

{
  img:'https://images-na.ssl-images-amazon.com/images/I/510vx4eIUoL._SX391_BO1,204,203,200_.jpg',
  title:'Quantitative Aptitude for Competitive Examinations',
  author:'R S Agarwal',
} ,

];

const names=['john', 'peter', 'susan'];
const newNames= names.map((name)=>{
  return <h1>{name}</h1>;
});
console.log(newNames);

function BookList(){
return(
  <section className='booklist'>
    {newNames}
  </section>
)
}
const Book=(props) =>{
  const {img, title, author, }=props;
  return (
  <article className='book'>
    <img src={img} alt=""/>
    <h1>{title}</h1>
    <h4>{author}</h4>

  </article>
  )
}


ReactDom.render(<BookList/>,document.getElementById('root'))