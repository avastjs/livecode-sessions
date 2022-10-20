
type SLinkProps = {
  title: string;
  href: string;
};

function SLink({ title, href }: SLinkProps) {

  return (
    <a className='hover:opacity-50' href={href} target="_blank">{title}</a>
  )
}

export default SLink