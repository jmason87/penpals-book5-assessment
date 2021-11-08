import { getAuthors } from "./dataAccess.js"


export const authorHTML = () => {
    const authors = getAuthors()
    return `
    <select class="authors" id="authors">
        <option value="">Choose</option>
            ${
                authors.map(
                    authorObj => {
                        return `<option>${authorObj.name}</option>`
                    }
                )
            }
    </select>
    `
}