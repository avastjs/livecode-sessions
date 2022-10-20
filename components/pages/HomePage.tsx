import { DefaultTemplate } from '../templates/DefaultTemplate';
import SessionForm from '../organisms/SessionForm';
import Link from 'next/link';



export default function HomePage() {

  return (
    <DefaultTemplate>
      <SessionForm />
    </DefaultTemplate>
  );
}
