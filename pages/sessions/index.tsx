import { useAtom } from 'jotai';
import { useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import CodeField from '../../components/molecules/CodeField';
import EnterButton from '../../components/molecules/EnterButton';
import { codeAtom, isElectronAtom, SessionEvent } from '../../lib/store';
import { database } from '../../lib/firebase';
import { DefaultTemplate } from '../../components/templates/DefaultTemplate';


function Live() {
  const [error, setError] = useState('');
  const [, setIsElectron] = useAtom(isElectronAtom)
  const [code,] = useAtom(codeAtom)

  async function session(){
    const docRef = doc(database, "livecode_sessions", code);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as SessionEvent
    } {
      setError('Room does not exist')
    }
  } 

  async function enterRoom() {
    setError('')
    const sessionData = await session()

    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('electron/') > -1 && sessionData) {
      const electronAPI = (window as any).electronAPI
      electronAPI.executeApp(sessionData)
      setIsElectron(true)
    } else {
      setError('You need to be under our desktop APP')
    }
  }

  return (
    <DefaultTemplate>
      <div className='flex flex-col relative p-10 opacity-90 rounded-md border-8 border-rose-500 bg-gradient-to-r from-green-400 to-blue-500'>
        <CodeField />
        <EnterButton handleClick={enterRoom} />
        <div className='py-4 text-red-500'>
          {error}
        </div>
      </div>
    </DefaultTemplate>
  )
}

export default Live