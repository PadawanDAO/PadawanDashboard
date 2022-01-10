import axios from "axios";
import { getStaticProps } from ".";
import Image from "next/image";



function Home(props) {
  const PFPP = 'https://staging-dashboard.padawandao.com/banner.png';
  const PFP = 'https://staging-dashboard.padawandao.com/img/pfp/aleem.png';
  return (
    <div className="flex justify-center p-20">
    
    <div className="border-4 border-black rounded-2xl w-fit ">
    

    {/* header and pfp */}
    <div className="relative pb-16">
    <div className="">
    <Image src={PFPP} width={500} height={100} alt="logo" className="w-full rounded-t-xl"/>
    </div>
    <div className="flex justify-center  ">
    <div className=" md:w-24 absolute top-8 ">
    <Image src={PFP} alt="pfp" width={100} height={100} className="rounded-full"  />
    </div>
    </div>
    </div>


    <div className="text-center font-semibold text-xl pb-2">

      <h1>
        Aleem Rehmtulla | 16y/o | EST
      </h1>

    </div>

    <div className="flex space-x-16 justify-center pb-4">

      <Tag value="Denver Padawan"/>
      <Tag value="Balance.io"/>

    </div>

    <div className="pl-8 pr-8">



    <div className="pb-4">
    <h1 className="text-3xl font-semibold">About Me</h1>
    <p> Hey! I contribute @ project and am super stoked for future of protocol. This is some more description on me, as aleem refused to grab some lorem ipsum thinking hed do a legit desc, but didnt </p>
    </div>

    <div className="">
    <h1 className="text-3xl font-semibold">Skills</h1>

    <div className="flex space-x-4 pt-4">
    <Tag value="Denver Padawan"/>
      <Tag value="Balance.io"/>
      <Tag value="Figma"/>
      <Tag value="Next.js"/>
      </div>
    </div>


    </div>
    <div className="pb-40"></div>





      </div>
      


    </div>
  );
}

export default Home;


function Tag(props) {
  return (
    <div className="bg-black p-2 w-fit rounded-xl">
      <p className="text-white">{props.value}</p>
    </div>
  );
}
