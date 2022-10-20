import { useRouter } from 'next/router';
import ShareButton from '../../components/molecules/ShareButton';
import SessionStudio from '../../components/organisms/SessionStudio';

function Live() {
  const router = useRouter()
  
  const liveCode = router.query?.code as string

  return (
    <>
      { liveCode && <SessionStudio code={liveCode} /> }
      <ShareButton />
    </>
  )
}

export default Live