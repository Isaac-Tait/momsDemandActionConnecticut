import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import senatorList from '../../../util/senator.js';
import SenatorCard from '../../../components/SenatorCard.js';

export default function Senator() {
  return (
    <>
      <Header />
      <h1 className='font-cursive text-2xl pb-6 text-center text-red-500'>
        Senators for{' '}
        <span className='text-blue-500'>the great state</span> of
        Connecticut!
      </h1>
      <div className='max-w-7xl mx-auto overflow-scroll-y z-10 pb-4 flex flex-wrap justify-center'>
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
      <div >
        <Footer />
      </div>
    </>
  );
}
