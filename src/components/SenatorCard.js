import Link from 'next/link';

export default function SenatorCard({
  firstName,
  lastName,
  district,
  party,
  yearElected,
  photoURL,
  gunSenseCandidate,
  supportHB6667,
  senateDistrict,
}) {
  const currentYear = new Date().getFullYear();
  const years = currentYear - yearElected;
  return (
    <div className='border-solid border-2 mx-2 bg-slate-100 p-1 rounded-lg min-w-60 mb-4'>
      <div className='flex justify-center'>
        <img
          src={photoURL}
          alt={lastName}
          className='rounded-xl shadow-xl object-cover h-48 w-32'
        />
      </div>
      <h3 className='text-xl font-medium text-center'>
        {firstName} {lastName}
      </h3>
      <Link href={senateDistrict} legacyBehavior>
        <a
          target='_blank'
          className='text-blue-500 underline hover:bg-blue-300 hover:text-red-500 p-1 hover:rounded-md flex justify-center'
        >
          District: {district}
        </a>
      </Link>
      <p>Years in position: {years}</p>
      <p>Party: {party}</p>
      <div className='flex flex-row'>
        <p>Supports Gun Bill HB 6667:&nbsp;</p>
        <p>{supportHB6667 ? <p>&#129505;</p> : <p>&#9940;</p>}</p>
      </div>
      <div className='flex flex-row'>
        <p>Gun Sense Candidate:&nbsp;</p>
        <p>{gunSenseCandidate ? <p>&#129505;</p> : <p>&#9940;</p>}</p>
      </div>
    </div>
  );
}
