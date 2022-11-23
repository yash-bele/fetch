import Head from 'next/head';

const Loading = () => {
  return (
    <>
      <Head>
        <title>Fetch</title>
        <meta name='description' content='Website' />
        <link
          rel='icon'
          href='https://developer.apple.com/design/human-interface-guidelines/images/intro/foundations/foundations-icons-intro_2x.png'
        />
      </Head>
      <main className='bg-gradient-to-b from-slate-900 to-slate-800 absolute w-full h-full flex items-center justify-center'>
        <main className='text-white -mt-10'>
          <section className='flex flex-col items-center'>
            <button className='w-24 text-sm py-2 bg-white/20 rounded-3xl mb-10'>
              Get User
            </button>
            <div className='bg-gradient-to-r from-[#fc00ff] to-[#00dbde] w-24 h-24 rounded-3xl flex justify-center items-center'>
              <div className='bg-slate-900 w-[90px] h-[90px] rounded-3xl flex justify-center items-center'>
                <img src='' alt='' className='rounded-3xl w-[87%]' />
              </div>
            </div>
            <div className='mt-2'>
              <h1 className='font-bold tracking-wide'>..........</h1>
            </div>
            <div className='flex space-x-3 mt-7 mb-12'>
              <button className='w-24 text-sm py-1 bg-white/10 rounded-3xl'>
                Age
              </button>
              <button className='w-24 text-sm py-1 bg-white/10 rounded-3xl'>
                Email
              </button>
              <button className='w-24 text-sm py-2 bg-white/10 rounded-3xl'>
                Phone
              </button>
            </div>
          </section>
          <section className='w-80 h-32 bg-gradient-to-r from-[#fc00ff]/30 to-[#00dbde]/30 backdrop-opacity-5 rounded-xl p-2 backdrop-sm'>
            <h1 className='text-center font-semibold tracking-wide'>
              Additional Info!
            </h1>
          </section>
        </main>
      </main>
    </>
  );
};

export default Loading;
