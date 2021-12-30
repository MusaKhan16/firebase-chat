
function Message({ userPfp, message, uid, user_id }) {
    return (
        <div className={uid === user_id ? "flex justify-end" : "flex justify-start"}>
            <div className={"flex justify-end text-center max-w-[80%] " + (uid !== user_id && "flex-row-reverse")}>
                <p className='break-words font-bold bg-blue-600 p-4 my-4 rounded-2xl text-sm'>{message}</p>
                <img src={userPfp} alt='img' className='w-8 rounded-full self-end m-2' />
            </div>
        </div>
    )
}

export default Message