import { useAtom } from 'jotai';
import { codeAtom, SessionEvent } from '../../lib/store';
import SLink from '../atoms/SLink';

type SessionStudioProps = {
  sessionData: SessionEvent;
};

function SessionStudio({ sessionData }: SessionStudioProps) {
  const [code] = useAtom(codeAtom)

  return (
    <div className="grid place-items-center h-screen">
      {
        <div className='flex flex-col relative p-14 opacity-90 rounded-md border-8 border-rose-500 bg-gradient-to-r from-green-400 to-blue-500'>
          <h1 className='text-center text-xl'>
            {sessionData.title}
          </h1>
          <div className='flex flex-col mt-14 gap-2 p-14 text-center'>
            <SLink href={sessionData.live_draw_url} title="Live Draw" />
            <SLink href={sessionData.audio_chat} title="Live Chat & Audio" />
            <SLink href={sessionData.live_url} title="Live Code" />
          </div>
          <div className='rounded-md p-4 border-2 border-rose-500 bg-black opacity-75'>
            Share code: <b>{code}</b>
          </div>
        </div>
      }
    </div>
  )
}

export default SessionStudio