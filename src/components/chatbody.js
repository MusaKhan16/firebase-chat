import { useContext } from 'react'
import { Authorization } from '../authprovider'
import { DB } from '../appconfig'
import {
    collection,
    addDoc,
    query,
    orderBy,
    limitToLast,
    serverTimestamp
} from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useState, useRef, useEffect } from 'react'
import Message from './message'



function Chat() {
    const dummy = useRef(null)
    const messageCollection = collection(DB, 'messages')
    const messagesQuery = query(
        messageCollection,
        orderBy('timestamp'),
        limitToLast(25)
    )

    const { user } = useContext(Authorization)
    const [messages] = useCollection(messagesQuery, { idField: 'id' })
    const [currentMessage, setCurrentMessage] = useState("")

    const scrollDown = () => {
        dummy.current.scrollIntoView(true)
    }

    const handleText = ({ target }) => {
        setCurrentMessage(target.value)
    }

    const makeMessage = (event) => {
        event.preventDefault()
        addDoc(messageCollection, {
            userPfp: user.photoURL,
            message: currentMessage,
            timestamp: serverTimestamp(),
            uid: user.uid
        })
        setCurrentMessage("")
        scrollDown()
    }

    useEffect(scrollDown, [])

    return (
        <div className='w-full h-[80vh] grid grid-rows-chat'>
            <div className="flex flex-col p-4 overflow-y-scroll">
                {messages && messages.docs.map((doc, idx) => <Message key={idx} user_id={user.uid} {...doc.data()} />)}
                <span ref={dummy}></span>
            </div>
            <form className='h-16 w-full' onSubmit={makeMessage}>
                <input
                    type='text'
                    value={currentMessage}
                    className='h-full w-5/6 text-black px-4 outline-none'
                    placeholder='Write Something!'
                    required
                    onChange={handleText} />
                <button
                    type='submit'
                    className='bg-blue-500 h-full w-1/6 hover:bg-blue-700'
                    disabled={!currentMessage}>
                    Send
                </button>
            </form>
        </div >
    )
}

export default Chat