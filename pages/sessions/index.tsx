import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import CodeField from '../../components/molecules/CodeField';
import EnterButton from '../../components/molecules/EnterButton';
import SessionStudio from '../../components/organisms/SessionStudio';
import { codeAtom, isElectronAtom, SessionEvent } from '../../lib/store';
import { database } from '../../lib/firebase';


function Live() {
  const [sessionData, setSessionData] = useState<SessionEvent | null>(null);
  const [error, setError] = useState('');
  const [isElectron, setIsElectron] = useAtom(isElectronAtom)
  const [code] = useAtom(codeAtom)

  useEffect(() =>{
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('electron/') > -1 && sessionData) {
      const electronAPI = (window as any).electronAPI
      electronAPI.executeApp(sessionData)
      setIsElectron(true)
    }
  }, [sessionData])

  async function enterRoom() {
    setError('')
    const docRef = doc(database, "livecode_sessions", code);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data() as SessionEvent
      setSessionData(data)
    } {
      setError('Room does not exist')
    }
  }

  if (isElectron && sessionData) {
    return <>Loading...</>
  }

  return (
    <>
      {sessionData
        ? <SessionStudio sessionData={sessionData} />
        : <div className="grid place-items-center h-screen">
          <div className='flex flex-col relative p-10 opacity-90 rounded-md border-8 border-rose-500 bg-gradient-to-r from-green-400 to-blue-500'>
            <CodeField />
            <EnterButton handleClick={enterRoom} />
            <div className='py-4 text-red-500'>
              {error}
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Live