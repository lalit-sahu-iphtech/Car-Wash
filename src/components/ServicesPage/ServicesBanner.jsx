import heroImg from '../../assets/services/service-banner.jpg';

export default function ServiceBanner() {
  return (
    <section className='relative overflow-hidden'>
      {/* HERO IMAGE */}
      <div className="relative h-[650px] sm:h-[750px] lg:h-[900px]">
        {/* Dark gradient overlay */}
        <div
          className='absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent z-10'
        />

        {/* Hero image */}
        <img
          src={heroImg}
          alt='Service Banner'
          className='w-full h-full object-cover'
        />

        {/* Light overlay */}
        <div className='absolute inset-0 bg-white/10 z-20' />
      </div>
    </section>
  );
}