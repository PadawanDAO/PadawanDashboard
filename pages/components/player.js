import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import Image from "next/image";
import Banner from "../../public/banner.png";
import PFP from '../../public/pfp.png';
import { InferGetStaticPropsType } from 'next'


export default function Card() {
  return (
    <div className="flex p-12 w-full  justify-center ">
        
        <div className="bg-black w-full" >

        <div className="">
        <Image src={Banner} alt="logo" className="w-fit"/>

        <div className="flex justify-center -m-16 ">
        <div className="w-24  ">
        <Image src={PFP} alt="pfp" className="rounded-full"  />
        </div>
        </div>
        </div>
        
        <div className="p-8">

    
    
        

        <div className="">
        <h1 className="text-white pt-8 text-3xl text-center">
            Aleem
        </h1>
        </div>

        <div className="flex pt-4  place-content-center gap-2  ">
        <Tags name="Settler"/>
        <Tags name="Diamond"/>
        <Tags name="Total XP: 3186"/>
        </div>


        <div className="flex space-x-4 pt-4 justify-center " >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>

        <p className="text-white font-bold">MST</p>

        <p className="text-white">GMT -7:00</p>
        </div>

        <div className="pt-4">
        <p className="text-white pb-2">
            Skills
        </p>
        <div className="grid grid-cols-2 gap-2">
        <Skills name="Project Managment"/>
        <Skills name="Backend Development"/>
        <Skills name="Frontend Development"/>
        <Skills name="Blockchain"/>
        </div>
        </div>

        <div className="pt-4">
        <p className="text-white">Contact</p>
        <div className="grid grid-cols-2 gap-2 pt-2 w-full">
        <Contact name="Github"/>
        <Contact name="Ethereum"/>
        <Contact name="Twitter"/>
        <Contact name="Discord"/>
        </div>
            </div>


        



        </div>


</div>

    </div>
    
    );
    return {
        props: { data, tag1:"true" }, 
      }
}
  function Tags(props) {
    return(

        
            <div className="bg-emerald-500 rounded-md  w-fit p-2">
                <h1 className="text-white text-sm text-center">
                {props.name}
                </h1>
                </div>
   

    );
}

function Skills(props) {
    return(

        <div>
            <div className="bg-blue-500 rounded-md  h-full text-center p-2">
                <h1 className="text-white text-sm text-center">
                {props.name}
                </h1>
                </div>
        </div>

    );
}

function Contact(props) {
    return(

        <div>
            <div className="bg-red-800 rounded-md  w-full p-2">
                <h1 className="text-white text-sm text-center">
                {props.name}
                </h1>
                </div>
        </div>

    );
}

