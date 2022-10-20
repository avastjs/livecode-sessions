import { useRouter } from 'next/router';
import SessionStudio from '../../components/organisms/SessionStudio';

function Live() {
  const router = useRouter()
  
  const liveCode = router.query?.live as string

  return (
    <>
      { liveCode && <SessionStudio code={liveCode} /> }
    </>
  )
}

export default Live