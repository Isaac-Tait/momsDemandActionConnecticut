import Link from 'next/link';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function targetShooting() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='max-w-6xl mx-auto bg-slate-50 p-1 opacity-90 my-2'>
        <p className='pl-1'>
          Currently there are two laws that pertain to target shooting
          in the State of Connecticut
        </p>
        <div className='flex flex-col'>
          <Link
            href='https://law.justia.com/codes/connecticut/2022/title-53/chapter-943/section-53-203/'
            className='text-blue-500 underline p-1 hover:text-red-500 hover:bg-blue-300 hover:rounded-md font-medium w-fit'
          >
            Title 53 Section 203
          </Link>
          <Link
            href='https://eregulations.ct.gov/eRegsPortal/Browse/RCSA/Title_26Subtitle_26-66_HTML/#_26-66-1'
            className='text-blue-500 underline p-1 hover:text-red-500 hover:bg-blue-300 hover:rounded-md font-medium w-fit'
          >
            26-66 Hunting
          </Link>
          <p className='pl-1'>
            However those laws are woefully ambiguous and open to a
            wide range of interpretations.
          </p>
          <Link
            href='Unregulated backyard gun ranges across rural Connecticut leave some neighbors on edge'
            className='text-blue-500 underline p-1 hover:text-red-500 hover:bg-blue-300 hover:rounded-md font-medium w-fit'
          >
            Unregulated backyard gun ranges across rural Connecticut
            leave some neighbors on edge
          </Link>
          <p className='pl-1'>
            Hunters tend to discharge a few rounds versus target
            shooters who often discharge a much larger amount of
            rounds.
          </p>
          <p className='pl-1'>
            There are no regulations pertaining to range construction
            on private property.
          </p>
          <p className='pl-1 mb-4'>
            Often times shooters fire the weapons into the surrounding
            landscape. This can and often does lead to bullets
            traveling a great distance endangering people on abutting
            properties.
          </p>
          <hr />
          <h3 className='font-semibold text-xl text-blue-500 text-center mt-4'>
            What you can do?
          </h3>
          <p className='pl-1'>
            Senators Herron Gaston and Catherine Osten are the chairs
            for the{' '}
            <Link
              href='https://www.cga.ct.gov/ps/'
              className='text-blue-500 underline p-1 hover:text-red-500 hover:bg-blue-300 hover:rounded-md font-medium w-fit'
            >
              Connecticut Public Safety and Security Commission
            </Link>
            Representatives Patrick Boyd and Michael DiGiovancarlo are
            the Vice Chairs.
          </p>
          <p className='pl-1 mt-2'>
            The legislative cycle for 2024 starts on February 7 and
            goes until June. Now is a great time to reach out to the
            committee and make them aware of this public safety
            concern.
          </p>
          <div className='flex flex-col'>
            <p className='mt-2 pl-1'>
              Contact information for the Senators and
              Representatives:
            </p>
            <Link
              href='https://www.senatedems.ct.gov/senator/herron-keyon-gaston/email-contact'
              className='text-blue-500 underline p-1 hover:text-red-500 hover:bg-blue-300 hover:rounded-md font-medium w-fit mx-auto'
            >
              Senator Herron Gaston
            </Link>
            <Link
              href='https://www.cga.ct.gov/asp/CGABillStatus/CGAMemberBills.asp?dist_code=%27S19%27'
              className='text-blue-500 underline p-1 hover:text-red-500 hover:bg-blue-300 hover:rounded-md font-medium w-fit mx-auto'
            >
              Senator Catherine Osten
            </Link>
            <Link
              href='https://www.housedems.ct.gov/Boyd'
              className='text-blue-500 underline p-1 hover:text-red-500 hover:bg-blue-300 hover:rounded-md font-medium w-fit mx-auto'
            >
              Representative Patrick Boyd
            </Link>
            <Link
              href='https://www.housedems.ct.gov/digiovancarlo'
              className='text-blue-500 underline p-1 hover:text-red-500 hover:bg-blue-300 hover:rounded-md font-medium w-fit mx-auto'
            >
              Representative Michael DiGiovancarlo
            </Link>
          </div>
          <hr />
          <p className='pl-1 mt-4'>
            To make this process as smooth as possible here is a
            sample letter that you can copy, paste, add in your name
            and city, and send to the committee{' '}
            <span className='italic text-sm'>
              (be sure to contact your State&#39;s representatives too
              - the more representatives who are aware of this issue
              the more likely something will be done about it)
            </span>
          </p>
          <Link
            href='https://docs.google.com/document/d/1oO990psLgb-pYI8J1420YlS_3WCMmUirCTp7wMXKWfQ/edit?usp=sharing'
            className='text-blue-500 underline p-1 hover:text-red-500 hover:bg-blue-300 hover:rounded-md font-medium text-center w-fit'
          >
            Sample Letter
          </Link>
        </div>
      </div>
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
}
