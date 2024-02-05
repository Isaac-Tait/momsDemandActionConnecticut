import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import issuesData from '@/util/issues';
import IssueCard from '@/components/IssueCard';

export default function Issues() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='max-w-6xl mx-auto w-full'>
        <h1 className='text-center font-cursive text-2xl text-red-500'>
          Issues that the Connecticut Chapter is focused on
        </h1>
        {issuesData.map((d) => (
          <IssueCard
            key={d.id}
            issue={d.issue}
            summary={d.summary}
            issueURL={d.issueURL}
          />
        ))}
      </div>
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
}
