import Head from 'next/head';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [info, setInfo] = useState([]);
  const [show, setShow] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const req = await fetch('https://randomuser.me/api/');
      const res = await req.json();
      setData(res);
      setLoading(false);
      setShow(null);
      setInfo([]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleClick = (index) => {
    if (index === 0) {
      setInfo(['Age', ':', dob.age]);
      setShow(0);
    }
    if (index === 1) {
      setInfo(['Email', ':', email]);
      setShow(1);
    }
    if (index === 2) {
      setInfo(['Phone', ':', phone]);
      setShow(2);
    }
  };

  if (loading) {
    return <Loading />;
  }

  const { picture, name, dob, email, phone } = data.results[0];
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
            <button
              onClick={() => getData()}
              className='w-24 text-sm py-2 bg-white/10 hover:bg-white/20 duration-200 rounded-xl mb-10 text-sm'
            >
              Get User
            </button>
            <div className='bg-gradient-to-r from-[#fc00ff] to-[#00dbde] w-24 h-24 rounded-3xl grid place-items-center'>
              <div className='bg-slate-900 w-[90px] h-[90px] rounded-3xl grid place-items-center'>
                <img
                  src={picture.large}
                  alt={name.first}
                  className='rounded-3xl w-[80px]'
                />
              </div>
            </div>
            <div className='mt-2'>
              <h1 className='font-bold tracking-wide'>{`${name.first} ${name.last}`}</h1>
            </div>
            <div className='flex space-x-3 mt-7 mb-12'>
              <button
                onClick={() => handleClick(0)}
                className={`w-24 text-sm py-1 bg-white/10 rounded-xl hover:bg-white/20 duration-200 ${
                  show === 0 && 'bg-gradient-to-r from-[#fc00ff] to-[#00dbde]'
                }`}
              >
                Age
              </button>
              <button
                onClick={() => handleClick(1)}
                className={`w-24 text-sm py-1 bg-white/10 rounded-xl hover:bg-white/20 duration-200 ${
                  show === 1 && 'bg-gradient-to-r from-[#fc00ff] to-[#00dbde]'
                }`}
              >
                Email
              </button>
              <button
                onClick={() => handleClick(2)}
                className={`w-24 text-sm py-2 bg-white/10 rounded-xl hover:bg-white/20 duration-200 ${
                  show === 2 && 'bg-gradient-to-r from-[#fc00ff] to-[#00dbde]'
                }`}
              >
                Phone
              </button>
            </div>
          </section>
          <section className='w-80 h-32 bg-gradient-to-r from-[#fc00ff]/10 to-[#00dbde]/10 backdrop-opacity-5 rounded-xl p-2 backdrop-sm'>
            <h1 className='text-center font-semibold tracking-wide'>
              Additional Info!
            </h1>
            <p className='text-center text-sm mt-3.5'>
              {info[0]}
              <span className='font-bold'>{info[1]}</span>
            </p>
            <p className='text-center text-sm'>{info[2]}</p>
          </section>
        </main>
      </main>
    </>
  );
};

export default Home;
