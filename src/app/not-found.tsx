import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='text-center'>
        <h1 className='mb-4 text-4xl font-bold'>404</h1>
        <p className='mb-4 text-xl text-gray-600'>Page not found</p>
        <Link href='/' className='text-gray-300 underline hover:text-white'>
          Return to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
