import Link from 'next/link';

export default function FormCard({ id, formURL, formName, notes }) {
  return (
    <div
      className='border-solid border-2 mx-2 bg-slate-100 p-1 rounded-lg min-w-60 mb-4'
      key={id}
    >
      <Link href={formURL} legacyBehavior passHref>
        <a
          target='_blank'
          className='text-blue-500 underline p-1 hover:text-red-500 hover:bg-blue-300 hover:rounded-md font-medium'
        >
          {formName}
        </a>
      </Link>
      <p className='max-w-48 text-sm'>{notes}</p>
    </div>
  );
}
