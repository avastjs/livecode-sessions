import { useAtom } from 'jotai'
import { collection, addDoc } from "firebase/firestore";
import { useMutation } from '@tanstack/react-query'
import { codeAtom, SessionEvent, sessionFormAtom } from '../../lib/store';
import { database } from '../../lib/firebase';

import Link from 'next/link';
import TitleField from '../molecules/TitleField';
import AudioChatField from '../molecules/AudioChatField';
import LiveCodeField from '../molecules/LiveCodeField';
import LiveDrawField from '../molecules/LiveDrawField';

function SessionForm() {
  const [sessionForm] = useAtom(sessionFormAtom)
  const [code, setCode] = useAtom(codeAtom)

  const mutation = useMutation((sessionEvent: SessionEvent) => {
    return addDoc(collection(database, "livecode_sessions"), sessionEvent)
  }, {
    onSuccess: (docRef) => {
      setCode(docRef.id)
    }
  })

  async function generateRoom() {
    mutation.mutate(sessionForm)
  }

  // TODO add validation
  return (
    <div className="w-full max-w-xl">
      <form className="relative p-14 opacity-90 rounded-md border-8 border-rose-500 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
        <h1 className='text-2xl text-center mb-14'>Generate your livecode room</h1>
        <TitleField />
        <AudioChatField />
        <LiveCodeField />
        <LiveDrawField />
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3 flex gap-5">
            <button
              disabled={mutation.isLoading || !sessionForm.title}
              onClick={generateRoom}
              type="button"
              className={`shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-2 rounded ${mutation.isLoading ? "opacity-50" : ""}`}>
              Generate Room
            </button>
            {code && <div>
              <Link href={`/sessions/details?code=${code}`} >
                <button type="button" className="shadow bg-pink-500 hover:bg-pink-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                  Go to session
                </button>
              </Link>
            </div>}
          </div>
        </div>
      </form>
    </div>
  )
}

export default SessionForm