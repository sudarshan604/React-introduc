import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState(["a"])
    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there are > 0 unread messages, display "You have <n> unread
     *   message(s)"
     *      - If there's exactly 1 unread message, it should read "message"
     *        (singular)
     */
    const messag= messages.length===1?"message":"messages"
    
    return (
        <div>
            {messages.length>0?`you have ${messages.length} unread ${messag}`:"you're all caught up"}
        </div>
    )
}
