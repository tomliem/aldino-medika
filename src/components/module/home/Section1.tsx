import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Section1 = () => {
  return (
    <section className="relative flex py-36 md:h-screen h-auto  items-center bg-[url('/images/banner-main.jpg')] md:bg-[url('/images/banner-main-desktop.jpg')] bg-center bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-gray-900/60"></div>
      <div className="container z-1">
        <div className="grid grid-cols-1 mx-10 mt-10 relative">
          <h4 className="flex flex-col text-left lg:leading-normal leading-normal text-2xl lg:text-5xl font-bold text-white"><span>Your Partner in Employee</span><span>Wellbeing and Occupational Health</span></h4>
          <p className="text-white text-sm lg:text-lg">
            <span className="text-primary-lightGreen font-bold" style={{
              // background: 'linear-gradient(180deg, rgba(112,187,173,1) 0%, rgba(138,194,157,1) 48%, rgba(50,114,129,0.9641106442577031) 100%)',
              // WebkitBackgroundClip: 'text',
              // WebkitTextFillColor: 'transparent'
            }}>
              ALDINO MEDIKA
            </span>, we're committed to keeping your workforce healthy and safe.
          </p>
          <p className="text-white text-sm lg:text-lg">From check-ups to safety measures, we ensure your workplace promotes wellness and prevents injuries.</p>
          <a className="mt-8 lg:mt-4 px-2 py-1 bg-white rounded-lg cursor-pointer w-fit flex items-center font-semibold"><WhatsAppIcon className="mr-1 text-[#25D366]" /> Click  here for more info</a>
        </div>
      </div>
    </section>
  );
};
