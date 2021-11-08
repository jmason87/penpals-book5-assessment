import { getAuthors } from "./dataAccess.js"


export const recipientHTML = () => {
    const recipients = getAuthors()
    return `
    <select class="recipients" id="recipients">
        <option value="">Choose</option>
            ${
                recipients.map(
                    recipientObj => {
                        return `<option>${recipientObj.name}</option>`
                    }
                )
            }
    </select>
    `
}