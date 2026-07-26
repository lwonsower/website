export default function Home() {
  const date1 = new Date('2017-10-01');
  const date2 = new Date();
  const yearsExperience = date2.getFullYear() - date1.getFullYear();


  return (
    <section className='flex flex-col justify-center mt-8'>
      <h1 className='text-5xl animate-fade-left'>
        Welcome
      </h1>
      <p>
        I&apos;m Lucy Wonsower, a software engineer and multidisciplinary artist living in San Francisco.
        I initially studied fine art at university, and bring a unique, creative eye to my software development practice.
        Specializing in product and growth engineering, with {yearsExperience} years of experience, I love solving problems, experimenting, and trying new things.
      </p>
    </section>
  );
}
