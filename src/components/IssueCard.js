import Link from 'next/link';

export default function FormCard({ id, issueURL, issue, summary }) {
  return (
    <div
      className='border-solid border-2 mx-2 bg-slate-100 p-1 rounded-lg flex flex-col mb-4 text-center'
      key={id}
    >
      <Link href={issueURL} legacyBehavior passHref>
        <a
          target='_blank'
          className='text-blue-500 underline p-1 hover:text-red-500 hover:bg-blue-300 hover:rounded-md text-sm md:text-lg'
        >
          {issue}
        </a>
      </Link>
      <p className='text-xs md:text-sm italic'>{summary}</p>
    </div>
  );
}
