import Link from 'next/link';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function targetShooting() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='max-w-6xl mx-auto'>
        <p>
          Currently there are two laws that pertain to target shooting
          in the State of Connecticut
        </p>
        <div className='flex flex-col'>
          <Link
            href='https://law.justia.com/codes/connecticut/2022/title-53/chapter-943/section-53-203/'
            className='text-blue-500 underline p-1 hover:text-red-500 hover:bg-blue-300 hover:rounded-md font-medium'
          >
            Title 53 Section 203
          </Link>
          <Link
            href='https://eregulations.ct.gov/eRegsPortal/Browse/RCSA/Title_26Subtitle_26-66_HTML/#_26-66-1'
            className='text-blue-500 underline p-1 hover:text-red-500 hover:bg-blue-300 hover:rounded-md font-medium'
          >
            26-66 Hunting
          </Link>
          <p>
            However those laws are woefully ambiguous and open to a
            wide range of interpretations.
          </p>
          <Link
            href='Unregulated backyard gun ranges across rural Connecticut leave some neighbors on edge'
            className='text-blue-500 underline p-1 hover:text-red-500 hover:bg-blue-300 hover:rounded-md font-medium'
          >
            Unregulated backyard gun ranges across rural Connecticut
            leave some neighbors on edge
          </Link>
          <p>
            Hunters tend to discharge a few rounds versus target
            shooters who often discharge a much larger amount of
            rounds.
          </p>
          <p>
            There are no regulations pertaining to range construction
            on private property. Often times shooters fire the weapons
            into the surrounding landscape. This can and often does
            lead to bullets traveling a great distance endangering
            people in abutting properties.
          </p>
        </div>
      </div>
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
}
