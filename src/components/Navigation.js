'use client';
import { Disclosure } from '@headlessui/react';

const navigation = [
  { name: 'About', href: '/about', current: false },
  { name: 'Forms', href: '/forms', current: false },
  { name: 'Calendar', href: '/calendar-24', current: false },
  { name: 'GOTV', href: '/statistics', current: false },
  { name: 'Issues', href: '/issues', current: false },
  { name: 'Senator List', href: '/senators', current: false },
  {
    name: 'Representative List',
    href: '/representatives',
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navigation = () => {
  return (
    <div>
      <Disclosure as='nav'>
        {({ open }) => (
          <>
            <div className='max-w-7xl mx-auto px-2 lg:px-8'>
              <div className='relative flex items-center justify-between h-16'>
                <div className='w-full flex justify-center items-center sm:hidden'>
                  {/* Mobile menu */}
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-500 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    <p className='underline underline-offset-2 font-cursive text-lg font-medium tracking-wide'>
                      Menu
                    </p>
                  </Disclosure.Button>
                </div>
                {/* Desktop menu */}
                <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                  <div className='hidden sm:block sm:ml-6 w-full'>
                    <div className='flex space-x-2 justify-center'>
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-800 hover:bg-blue-300 hover:text-red-500',
                            'px-3 py-2 rounded-md text-base font-semibold'
                          )}
                          aria-current={
                            item.current ? 'page' : undefined
                          }
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className='sm:hidden'>
              <div className='px-2 pt-2 pb-3 space-y-1'>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-800 hover:bg-blue-300 hover:text-red-500',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navigation;
