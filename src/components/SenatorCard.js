export default function SenatorCard({
  firstName,
  lastName,
  district,
  party,
  yearElected,
  photoURL,
  gunSenseCandidate,
  supportHB6667,
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
      <h3 className='text-xl font-medium'>
        {firstName} {lastName}
      </h3>
      <p>District: {district}</p>
      <p>Years in position: {years}</p>
      <p>Party: {party}</p>
      <div className='flex flex-row'>
        <p>Supports Gun Bill HB 6667:&nbsp;</p>
        <p>{supportHB6667 ? <p>&#128077;</p> : <p>&#128078;</p>}</p>
      </div>
      <div className='flex flex-row'>
        <p>Gun Sense Candidate:&nbsp;</p>
        <p>
          {gunSenseCandidate ? <p>&#128077;</p> : <p>&#128078;</p>}
        </p>
      </div>
    </div>
  );
}
