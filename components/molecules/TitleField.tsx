import { useAtom } from 'jotai'
import { sessionFormAtom } from '../../lib/store'
import Field from '../atoms/Field'

function TitleField() {

  const [sessionForm, setSessionForm] = useAtom(sessionFormAtom)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => 
    setSessionForm({ ...sessionForm, title: e.target.value })

  return (
    <Field title="Title" value={sessionForm.title} handleChange={handleChange} />
  )
}

export default TitleField