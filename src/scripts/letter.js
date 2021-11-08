import { getLetters } from "./dataAccess.js"

export const letters = () => {
    return `
    <textarea name="textarea" rows="10" cols="50"></textarea
    <br>
    `
}

export const displaySentLetters = () => {
    const letters = getLetters()

    return `
       
    ${
        letters.map(
            (letterObj) => {
                return `<ul>
                    
                        <li id="topic" value="${letterObj.id}" />Dear ${letterObj.recipient},<br><br>${letterObj.message}<br><br>Sincerely,<br>${letterObj.sender}<br><br>${letterObj.topic}</li>

                        </ul>
                    
                `
            }).join("")
    }

    `
}


