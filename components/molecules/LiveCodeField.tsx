import { useAtom } from 'jotai'
import { sessionFormAtom } from '../../lib/store'
import Field from '../atoms/Field'

function LiveCodeField() {

  const [sessionForm, setSessionForm] = useAtom(sessionFormAtom)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => 
    setSessionForm({ ...sessionForm, live_url: e.target.value })

  return (
    <Field title="Sandbox Live Url" value={sessionForm.live_url} handleChange={handleChange} 
      placeholder="https://codesandbox.io/live/0abfc5c4672..." />
  )
}

export default LiveCodeField