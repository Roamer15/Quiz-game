import { useEffect,useContext,useState } from "react"
import { QuizContext } from "../context/QuizContext"
import { useNavigate } from "react-router"
import { fetchQuestions } from '../services/quizApi'
import HomeCard from '../components/HomeCard'

function LandingPage() {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleQuizPageNavigation = () => {
        navigate('/quizpage/1')
    }
    
    const {setQuestions} = useContext(QuizContext)

    useEffect(() => {
      getQuestions()
    },[])

    const getQuestions = async () => {
        const loadedQuestions = await fetchQuestions()
        if(loadedQuestions){
            setQuestions(loadedQuestions)
            setLoading(true)
        }
       
    }


    return (
        <HomeCard  isLoading={loading} handleQuizPage = {handleQuizPageNavigation}/>
    )
}

export default LandingPage