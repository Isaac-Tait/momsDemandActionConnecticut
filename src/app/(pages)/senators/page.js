import { senatorList } from '../../../../(util)/senator.js';

import SenatorCard from '../../../../(components)/SenatorCard.js';

export default async function Senator() {
  const senator = await senatorList();
  return (
    <>
      <h1>
        This is a list of Senators for the great state of Connecticut!
      </h1>
      {senator.map((d) => (
        <SenatorCard
          key={d.id}
          firstName={d.firstName}
          lastName={d.lastName}
          district={d.district}
          party={d.party}
          yearElected={d.yearElected}
          photoURL={d.photoURL}
          gunSenseCandidate={d.gunSenseCandidate}
          supportHB6667={d.supportHB6667}
        />
      ))}
    </>
  );
}
