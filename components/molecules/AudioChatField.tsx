import { useAtom } from 'jotai'
import { sessionFormAtom } from '../../lib/store'
import Field from '../atoms/Field'

function AudioChatField() {

  const [sessionForm, setSessionForm] = useAtom(sessionFormAtom)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => 
    setSessionForm({ ...sessionForm, audio_chat: e.target.value })

  return (
    <>
      <div className='text-right opacity-50'> e.g. spoon live </div>
      <Field title="Audio Streaming Url" value={sessionForm.audio_chat} handleChange={handleChange}
        placeholder="https://spooncast.net/us/live/@w08kqj8k?utm_source=spoonshare..." />
    </>
  )
}

export default AudioChatField