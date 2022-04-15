
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { fetchQuestions, randomQuestions} from './redux/reducers/counter'

function App() {

  const questions = useSelector(({counter}) => counter.questions);
  const activeQuestions = useSelector(({counter}) => counter.activeQuestions);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchQuestions());
  },[])

  const newQuestion = () => {
   
    dispatch(randomQuestions())
  }
  console.log(questions);

  return (
    <div className='wrapper'>
      <h1 className='number'>{activeQuestions.name}</h1>
      <button className='button' onClick={newQuestion}>+</button>
        <div className='conteiner'>
        <div className='main__items'>
      {activeQuestions.name &&
       <div>
         <div><h1 className='item__header'>{activeQuestions.question}</h1></div>
       <div className='item__text'>{activeQuestions.answer}</div>
         </div>
         }
       
          
    </div> 
    
       
        </div>
   
    </div>
  )
}

export default App;
