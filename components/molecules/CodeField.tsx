import { useAtom } from 'jotai'
import { codeAtom } from '../../lib/store'
import Field from '../atoms/Field'

function CodeField() {

  const [, setCode] = useAtom(codeAtom)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => 
  setCode(e.target.value)

  return (
    <>
      <Field title="Session code" handleChange={handleChange}
        placeholder="x0abfc5c4672..." />
    </>
  )
}

export default CodeField