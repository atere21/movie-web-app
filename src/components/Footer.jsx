import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full h-full flex justify-center m-8'>
    <div className='relative flex-col justify-start items-center gap-9 inline-flex mx-auto'>
        <div className='justify-start items-center gap-12 inline-flex mx-auto'>
         <FaFacebook className='w-6 h-[27.43px] relative'/>
         <FaInstagram className='w-6 h-[27.43px] relative'/>
         <FaTwitter className='w-6 h-[27.43px] relative'/>
         <FaYoutube className='w-6 h-[27.43px] relative'/>
        </div>

        <div className='justify-start items-start gap-12 inline-flex'>
          <p className='text-gray-900 text-lg font-bold'>Conditions of Use</p>
          <p className='text-gray-900 text-lg font-bold'>Privacy & Policy</p>
          <p className='text-gray-900 text-lg font-bold'>Press Room</p>
        
        </div>
        
            <p className=" text-gray-500 text-lg font-bold">© 2021 MovieBox by Adriana Eka Prayudha</p>
    
        </div>
    </div>
  )
}

export default Footer
{/* <div className="Footer w-[492px] h-[145.43px] flex-col justify-start items-center gap-9 inline-flex">
  <div className="Social justify-start items-center gap-12 inline-flex">
    <div className="FaBrandsFacebookSquare w-6 h-[27.43px] relative" />
    <div className="FaBrandsInstagram w-6 h-[27.43px] relative" />
    <div className="FaBrandsTwitter w-6 h-6 relative" />
    <div className="FaBrandsYoutube w-6 h-[21.33px] relative" />
  </div>
  <div className="Links justify-start items-start gap-12 inline-flex">
    <div className="ConditionsOfUse text-gray-900 text-lg font-bold">Conditions of Use</div>
    <div className="PrivacyPolicy text-gray-900 text-lg font-bold">Privacy & Policy</div>
    <div className="PressRoom text-gray-900 text-lg font-bold">Press Room</div>
  </div>
  <div className="2021MovieboxByAdrianaEkaPrayudha text-gray-500 text-lg font-bold">© 2021 MovieBox by Adriana Eka Prayudha  </div>
</div> */}