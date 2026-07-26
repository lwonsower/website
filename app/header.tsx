import Link from 'next/link'
const sections = ['about', 'resume', 'other', 'contact']

export default function Header() {
    const LinkButton = ({ page }: { page: string }) => {
        return <Link href={page === 'about' ? '/' : `/${page}`} className='hover:text-gray-500 cursor-pointer'>{page}</Link>
    }

  return (
    <div className="flex flex-1 justify-around h-[25%]">
      {sections.map(section => <LinkButton key={section} page={section} />)}
    </div>
  );
}
