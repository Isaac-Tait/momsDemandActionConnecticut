import Image from 'next/image';

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
  return (
    <div>
      <Image src={photoURL} alt={photoOfSenator`${lastName}`} />
      <h3>
        {firstName} {lastName}
      </h3>
      <p>{district}</p>
      <p>{yearElected}</p>
      <p>{party}</p>
      <p>
        Supports Governor Lamont&#39;s Commonsense Gun Bill HB 6667
      </p>
      <p>{supportHB6667} ? &#128077; : &#128078;</p>
      <p>Gun Sense Candidate</p>
      <p>{gunSenseCandidate} ? &#128077; : &#128078;</p>
    </div>
  );
}
