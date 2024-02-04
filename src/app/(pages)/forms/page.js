import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import formList from '../../../util/forms';
import FormCard from '@/components/FormCard';

export default function Forms() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='max-w-7xl mx-auto overflow-scroll-y z-10 pb-4 flex flex-wrap justify-center mt-6'>
        {formList.map((d) => (
          <FormCard
            key={d.id}
            formName={d.formName}
            formURL={d.formURL}
            notes={d.notes}
          />
        ))}
      </div>
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
}
