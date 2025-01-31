const QUIZ_URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'

export const fetchQuestions = async () => {
    try {
        const response = await (QUIZ_URL)
        if (!response.ok){
            throw new Error('URL not found')
        }
        const data = await response.json()
        return data.results
    }
    catch(error) {
        console.error(error)
    }
}

export default fetchQuestions