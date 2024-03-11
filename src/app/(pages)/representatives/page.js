import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

/* import {
  withPageAuthRequired,
  getSession,
} from '@auth0/nextjs-auth0'; */

import representativeList from '../../../util/representative.js';
import RepresentativeCard from '../../../components/RepresentativeCard.js';

/* export default withPageAuthRequired(
  async function Senators() {
    const { user } = await getSession(); */

export default function RepresentativePage() {
  return (
    <>
      <Header />
      {/* <div>Hello {user.name}</div> */}
      <h1 className='font-cursive text-2xl pb-6 text-center text-red-500'>
        Senators for{' '}
        <span className='text-blue-500'>the great state</span> of
        Connecticut!
      </h1>
      <div className='max-w-7xl mx-auto overflow-scroll-y z-10 pb-4 flex flex-wrap justify-center'>
        {representativeList.map((d) => (
          <RepresentativeCard
            key={d.id}
            firstName={d.firstName}
            lastName={d.lastName}
            district={d.district}
            party={d.party}
            yearElected={d.yearElected}
            photoURL={d.photoURL}
            gunSenseCandidate={d.gunSenseCandidate}
            supportHB6667={d.supportHB6667}
            repDistrict={d.senateDistrict}
          />
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
  /* },
 { returnTo: '/senators' }
); */
}
