import { useAtom } from 'jotai';
import { useRouter } from 'next/router'
import SessionStudio from '../../components/organisms/SessionStudio';
import { sessionUrlAtom } from '../../lib/store';

function Live() {
  const router = useRouter()
  const [, setSessionUrl] = useAtom(sessionUrlAtom)

  console.log('sessionUrl', router)

  if (router.query?.live && router.query.live) {
    setSessionUrl(router.query.live as string)
  }

  return (
    <SessionStudio />
  )
}

export default Live