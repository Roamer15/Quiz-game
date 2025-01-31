import ResultCard from "../components/ResultCard";
import { QuizContext } from "../context/QuizContext";
import { useContext, useMemo } from "react";
import {useNavigate} from 'react-router'

function ResultPage() {
    const {  answers, setAnswers } = useContext(QuizContext);
    const navigate = useNavigate()
  
    const score = useMemo(()=>answers.filter(item =>item.correct_answer===item.userAnswer).length
     , [answers])
  
    const handleReturnToHome =()=>{
        setAnswers([])
      navigate("/")
    }
  
    return (
      <>
        <ResultCard answers={answers} score={score} home={handleReturnToHome}/>
      </>
    );
}

export default ResultPage