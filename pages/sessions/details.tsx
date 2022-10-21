import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import CodeField from '../../components/molecules/CodeField';
import EnterButton from '../../components/molecules/EnterButton';
import SessionStudio from '../../components/organisms/SessionStudio';
import { SessionEvent } from '../../lib/store';
import { database } from '../../lib/firebase';
import { DefaultTemplate } from '../../components/templates/DefaultTemplate';
import { useQuery } from '@tanstack/react-query';


function Details() {
  const { query } = useRouter();

  const { data: sessionData, refetch } = useQuery(['data'], async () => {
    if (query.code) {
      const docRef = doc(database, "livecode_sessions", query.code as string);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data() as SessionEvent
      } 
    }
    return null
  })

  useEffect(() => {
    refetch()
  }, [query.code])

  return (
    <DefaultTemplate>
      { sessionData
        && <SessionStudio sessionData={sessionData} code={query.code as string} />
      }
    </DefaultTemplate>
  )
}

export default Details