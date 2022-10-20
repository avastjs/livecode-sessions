import { useRouter } from "next/router";
import { useState } from "react";

function ShareButton() {
  const router = useRouter()
  const [message, setMessage] = useState('Share');

  function shareLink(){
    navigator.clipboard.writeText(window.location.href)
    setMessage('Copied to clipboard..')
    setTimeout(() => setMessage('Share'), 3000)
  }

  return (
    <button type="button" onClick={shareLink} className="absolute bottom-1 left-1 opacity-50 shadow bg-pink-500 hover:bg-pink-400 focus:shadow-outline focus:outline-none text-white py-1 px-2 rounded">
      {message} 
    </button>
  )
}

export default ShareButton