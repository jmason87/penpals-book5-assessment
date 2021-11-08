import { fetchAuthors, fetchLetters, fetchTopics } from "./dataAccess.js"
import { penpal } from "./penpal.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchAuthors()
    .then(() => fetchTopics())
    .then(() => fetchLetters())
    .then(() => {
            mainContainer.innerHTML = penpal()

        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
