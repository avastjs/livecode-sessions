import { useQuery } from '@tanstack/react-query';
import { doc, getDoc } from 'firebase/firestore';
import { database } from '../../lib/firebase';
import { SessionEvent } from '../../lib/store';
import SLink from '../atoms/SLink';

type SessionStudioProps = {
  code: string;
};

function SessionStudio({ code }: SessionStudioProps) {

  const { data, isLoading } = useQuery(['sessionData'], async () => {
    const docRef = doc(database, "livecode_sessions", code as string);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as SessionEvent
    }
    return null
  })


  return (
    <div className="grid place-items-center h-screen">
      {
        isLoading || !data ? 'Loading...' : <div className='flex flex-col relative p-14 opacity-90 rounded-md border-8 border-rose-500 bg-gradient-to-r from-green-400 to-blue-500'>
          <h1 className='text-center text-xl'>
            {data.title}
          </h1>
          <div className='flex flex-col mt-14 gap-2 p-14 text-center'>
            <SLink href={data.live_draw_url} title="Live Draw" />
            <SLink href={data.audio_chat} title="Live Chat & Audio" />
            <SLink href={data.live_url} title="Live Code" />
          </div>
        </div>
      }
    </div>
  )
}

export default SessionStudio