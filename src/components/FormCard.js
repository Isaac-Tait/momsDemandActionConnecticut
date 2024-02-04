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
          className='text-red-500 underline hover:text-blue-500'
        >
          {formName}
        </a>
      </Link>
      <p className='max-w-48'>{notes}</p>
    </div>
  );
}
