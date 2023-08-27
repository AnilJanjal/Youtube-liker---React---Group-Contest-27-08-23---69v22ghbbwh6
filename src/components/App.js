import React from 'react'
import '../styles/App.css';
import like from '../like.svg';

const App = () => {
  const [count,setCount] = React.useState(0);
  
   const [bgColorAlpha, setBgColorAlpha] = useState(0);

  const handleLikeClick = () => {
    setCount(count + 1);
    setBgColorAlpha(bgColorAlpha + 0.1);
   };

  const bgColor = `rgba(255, 0, 0, ${bgColorAlpha})`;
  
  return (
    <div id="main">
      <img id="like-btn-img" style={{fill:'white',width:'100px',backgroundColor:'rgba(255,0,0,0)'}} />
      <h3>Likes: <span id="like-counter">0</span></h3>
    </div>
  )
}


export default App;
