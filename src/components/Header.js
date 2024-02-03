export default function Header() {
  return (
    <div className='bg-slate-500'>
      <h1 className='flex justify-center font-bold text-4xl text-red-500 p-2'>
        Moms Demand Action&nbsp;
        <span className='text-blue-500'>Connecticut Chapter</span>
      </h1>
      <div className='flex justify-between bg-red-200'>
        <ul>
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
          <li>List Item 4</li>
        </ul>
      </div>
    </div>
  );
}
