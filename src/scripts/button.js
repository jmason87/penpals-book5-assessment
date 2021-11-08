import { sendLetters } from "./dataAccess.js"


export const sendButton = () => {
    return `
    <button class="button" id="sendLetter">Send Letter</button>
    `
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        const sentLetter = document.querySelector("textarea[name='textarea']").value
        const chosenAuthor = document.querySelector("select[id='authors']").value
        const chosenTopic = document.querySelector("input[id='topic']").value
        const chosenRecipient = document.querySelector("select[id='recipients']").value
        
        const letterToAPI = {
            message: sentLetter,
            sender: chosenAuthor,
            topic: chosenTopic,
            recipient: chosenRecipient
        }
        sendLetters(letterToAPI)
    }
})