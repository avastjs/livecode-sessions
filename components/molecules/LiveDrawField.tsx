import { useAtom } from 'jotai'
import { sessionFormAtom } from '../../lib/store'
import Field from '../atoms/Field'

function LiveDrawField() {

  const [sessionForm, setSessionForm] = useAtom(sessionFormAtom)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => 
    setSessionForm({ ...sessionForm, live_draw_url: e.target.value })

  return (
    <Field title="Excalidraw Live Url" value={sessionForm.live_draw_url} handleChange={handleChange} 
      placeholder="https://excalidraw.com/#room=5c33d96491b75a68e34..."/>
  )
}

export default LiveDrawField