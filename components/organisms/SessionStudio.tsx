import { useAtom } from 'jotai'
import { SessionEvent, sessionUrlAtom } from '../../lib/store';
import { database } from '../../lib/firebase';
import { useQuery } from '@tanstack/react-query';
import { doc, getDoc } from 'firebase/firestore';

function SessionStudio() {
  const [sessionUrl] = useAtom(sessionUrlAtom)

  const { data, isLoading } = useQuery(['sessionData'], async () => {
    const docRef = doc(database, "livecode_sessions", sessionUrl);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data() as SessionEvent
    } 
    return null
  })


  return (
    <div className="grid grid-cols-3 h-screen w-screen">
      {
        isLoading || !data ? 'Loading...' : <>
          <iframe className="h-full col-span-2 w-full" src={data.live_draw_url} sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts" />
          <iframe className="h-full w-full" src={data.audio_chat} sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts" />
          <iframe className="h-full w-full col-span-3" src={data.live_url} sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts" />
        </>
      }
    </div>
  )
}

export default SessionStudio