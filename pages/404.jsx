import Link from 'next/link';
import {useEffect} from 'react';
import {useRouter} from 'next/router';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    console.log('Use effect ran');
    setTimeout(() => {
      //* router.go(-1)
      console.log('Returned to homepage');
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div className='not-found'>
      <h1>Ooops.....</h1>
      <h2>Page not found</h2>
      <p>
        Back to{' '}
        <Link href='/'>
          <a>Home Page</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
