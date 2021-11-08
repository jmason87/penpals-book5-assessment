import { getTopics } from "./dataAccess.js"


export const topicHTML = () => {
    const topics = getTopics()
    
    return `
       
        ${
            topics.map(
                (topicObj) => {
                    return `
                        
                            <input type="checkbox" name="topic" id="topic" value="${topicObj.id}" />${topicObj.topic}
                        
                    `
                }).join("")
        }
    `
}