import Link from 'next/link';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function Statistics() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div>
        <h1 className='font-bold text-3xl text-center text-blue-500 p-2 font-cursive'>
          Statistics (as of October 2024)
        </h1>
        <div className='max-w-4xl mx-auto bg-slate-100 rounded-lg opacity-75'>
          <ul className='list-disc mb-4 ml-10 text-lg'>
            <li>
              Twenty three (23) children and teens are shot every day
              in the US
            </li>
            <li>
              Access to a firearm in a domestic dispute increases the
              risk of homicide by 500%
            </li>
            <li>
              76% of school shooters get the gun from a family member
              or loved one
            </li>
            <li>
              Gun deaths are the number one killer of children in the
              US (car accidents and poisonings come in second and
              third)
            </li>
          </ul>
        </div>
        <h1 className='font-bold text-3xl text-center text-blue-500 p-2 font-cursive'>
          Script
        </h1>
        <div className='max-w-4xl mx-auto bg-slate-100 rounded-lg opacity-75'>
          <h4 className='text-xl text-red-500 text-center'>
            Voicemail
          </h4>
          <ul className='list-disc mb-4 ml-10 text-lg'>
            <li>
              Hello my name is ___ and I am a volunteer with Moms
              Demand Action. The election on November 5th is an
              important opportunity for us to elect candidates who
              will protect our communities from gun violence and every
              vote will make a difference. To get ready for the
              election, we&#39;re asking everyone to make a plan to
              vote by texting the word PLAN to the number 6-4-4-3-3.
            </li>
            <li>
              Thank you for your time and for being a voter. Have a
              wonderful day.
            </li>
          </ul>
        </div>
        <div className='max-w-4xl mx-auto bg-slate-100 rounded-lg opacity-75'>
          <h4 className='text-xl text-red-500 text-center'>
            Live call
          </h4>
          <ul className='list-disc mb-4 ml-10 text-lg'>
            <li>
              Hello ____{' '}
              <span className='italic text-xs'>
                person you are calling
              </span>
            </li>
            <li>
              My name is ____ and I am volunteer with Moms Demand
              Action. As I am sure you are aware we are having an
              election on November 5th. So, I was reaching out to you
              today to see if you had already voted or if you are
              planning on voting?&nbsp;
            </li>
            <p className='italic text-xs mt-2'>
              Response to callers reply to your question
            </p>
            <li className='my-2'>
              Oh you have already voted!? Wonderful. Well thanks for
              your vote. Have a wonderful day.
            </li>

            <li className='my-2'>
              Gotcha, well Everytown for Gun Safety Victory Fund has a
              tool to help you make a plan to vote. If you are
              interested all you have to do is text the word PLAN to
              the number 6-4-4-3-3.
            </li>
            <li>
              Guns are the leading cause of death for kids and teens
              in our country. There&#39;s nothing more urgent to us
              than electing leaders like Vice President Kamala (SAY:
              Comma-la) Harris, who will work to end{' '}
              <span className='underline'>the</span> gun violence
              that&#39;s tearing our communities apart.
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
}
