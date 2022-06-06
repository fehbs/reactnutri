import React, { useEffect, useState} from 'react';
import './style.css';
////https://sujeitoprogramador.com/rn-api/?api=posts

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(()=> {

    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      fetch(url)
      .then((r)=> r.json())
      .then((json)=> {
        console.log(json);
        setNutri(json);
      })
    }
    loadApi();
  }, []);

  return (
    <div className='container'>
      <header>
      <img src="logo.png" alt="LogoIcon" width='5%' />
        <strong>React Nutri</strong>
        <img src="logo.png" alt="LogoIcon" width='5%' />
      </header>

      {nutri.map((item)=>{
        return(
          <article key={item.id} className="post">
           <strong className='titulo'>{item.titulo}</strong>

           <img src={item.capa} alt={item.titulo} className="capa"/>
           <p className='subtitulo'>
             {item.subtitulo}
           </p>
           <a className='botao'>Acessar</a>
          </article>
        )
      })}

      <footer>
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      <img src="logo.png" alt="LogoIcon" width='3%' />
      </footer>
    </div>
  );
}

export default App;
