const QUIZ_URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'

export const fetchQuestions = async () => {
  try {
    const response = await fetch(QUIZ_URL)
    if (!response.ok) {
      throw new Error('URL not found')
    }
    const data = await response.json()
    console.log(data.results)
    return data.results
  } catch (error) {
    console.error(error)
    // return[]
  }
}

export default fetchQuestions
