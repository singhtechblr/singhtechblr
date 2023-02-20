import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ankit Singh</title>
        <meta name="description" content="Ankit Singh Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 pb-20">
        <div className="sm:text-center lg:text-center ">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">HEY, I&apos;M ANKIT SINGH</span>{' '}
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5">
            I am a skilled and experienced website and mobile developer,
            dedicated to providing top-quality services to my clients. In
            today's digital age, having a strong online presence is essential
            for businesses of all sizes. Whether you need a custom website or a
            mobile application, I am here to help you take your online presence
            to the next level. I pride myself on delivering exceptional results,
            and I work closely with my clients to ensure that their needs are
            met every step of the way. From the initial planning stages to the
            final product launch, I am committed to providing timely, reliable,
            and cost-effective solutions. Whether you are looking to create a
            simple website or a complex mobile application, I have the expertise
            and experience to help you achieve your goals. So if you're ready to
            take your online presence to the next level, don't hesitate to
            contact me today!
          </p>
        </div>
        email me
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
          <div className="rounded-md shadow">
            <a
              href="mailto:singhtechblr@gmail.com" // mailto: is important
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 md:py-4 md:text-lg md:px-10"
              target="_blank"
              rel="noreferrer"
            >
              Connect with me!
            </a>
          </div>
        </div>
        {/* <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
          <div className="rounded-md shadow">
            <a
              href="https://www.linkedin.com/in/ankit-singh-922079256/"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 md:py-4 md:text-lg md:px-10"
              target="_blank"
              rel="noreferrer"
            >
              Connect with me!
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="https://drive.google.com/file/d/1A6vs_HcR65y1M7CJfOEVzH00PyYvTUjx/view?usp=sharing"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-500 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              target="_blank"
              rel="noreferrer"
            >
              My Resume
            </a>
          </div>
        </div> */}
      </main>
    </div>
  );
}
