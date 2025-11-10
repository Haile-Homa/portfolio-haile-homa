import Hero from '../components/Hero';

const Home = () => {

  return (
    <>
      {/* i set instead of min-h-screen to  mb-50 md:mb-50  */}
      <div className='flex flex-col   mb-20 md:mb-50  relative '  >


        <div className="flex flex-col space-y-4 ">
          <div>
            <Hero />
          </div>
        </div>

      </div>


    </>
  )
}

export default Home



// className="
//                 absolute top-0  w-full   h-screen    border border-amber-500 z-50 "


// style={{
//           backgroundImage: `url(${profihail})`,
//           backgroundSize: 'contain',          // fills the container
//           backgroundRepeat: 'no-repeat',
//           backgroundPosition: 'right top',  // anchors top-right
//         }}










