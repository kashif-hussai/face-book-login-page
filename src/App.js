import './App.css';
import FaceBook from './componant/SignUp';

function App() {
  const para = document.createElement('p');
  para.textContent = 'new element was ctreated';
  document.getElementById('root').append(para);
  return (
    <div>
     
     <FaceBook/>

    </div>





  );
}

export default App;
