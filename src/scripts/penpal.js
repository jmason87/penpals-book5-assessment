import { authorHTML } from "./authors.js"
import { sendButton } from "./button.js"
import { displaySentLetters, letters } from "./letter.js"
import { recipientHTML } from "./recipient.js"
import { topicHTML } from "./topics.js"

export const penpal = () => {
    let html = `
        <h1>Pen Pals</h1>

        
        <h3>Author</h3>
        ${authorHTML()}

        <h4>Letter</h4>
        ${letters()}

        <h3>Topics</h3>
        ${topicHTML()}

        <h3>Recipient</h3>
        ${recipientHTML()}

        <div>
        ${sendButton()}
        </div>
        
        ${displaySentLetters()}
    `

    return html
}