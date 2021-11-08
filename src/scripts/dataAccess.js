const applicationState = {
    authors: [],
    topics: [],
    letters: []
}

const API = "http://localhost:8088"

export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (penAuthors) => {
                applicationState.authors = penAuthors
            }
        )
}

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (penTopics) => {
                applicationState.topics = penTopics
            }
        )
}

export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            (penLetters) => {
                applicationState.letters = penLetters
            }
        )
}


export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}

export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter}))
}

const mainContainer = document.querySelector("#container")

export const sendLetters = (userLetterSubmit) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userLetterSubmit)
    }


    return fetch(`${API}/letters`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}