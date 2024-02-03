import senatorList from '../../../util/senator.js';

import SenatorCard from '../../../components/SenatorCard.js';

export default function Senator() {
  return (
    <>
      <h1>
        This is a list of Senators for the great state of Connecticut!
      </h1>
      <div>
        {senatorList.map((d) => (
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
      </div>
    </>
  );
}
