
import Image from "next/image";
import Link from "next/link";


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
    <Image src={props.pfp} alt="pfp" width={100} height={100} className="rounded-full"  />
    </div>
    </div>
    </div>


    <div className="text-center font-semibold text-xl pb-2">

      <h1>
        {props.name} | 16y/o | EST
      </h1>

    </div>
    <div className="pl-8 pr-8">
    <div className="flex  space-x-2 justify-center pb-4">

      <Tag value="Denver Padawan"/>
      <Tag value="Balance.io"/>
    <Social />


    </div>

    



    <div className="pb-4">
    <h1 className="text-3xl font-semibold pb-1">About Me</h1>
    <p> Hey! I contribute @ project and am super stoked for future of protocol. This is some more description on me, as aleem refused to grab some lorem ipsum thinking hed do a legit desc, but didnt </p>
    </div>

    <div className="">
    <h1 className="text-3xl font-semibold">Skills</h1>

    <div className="flex space-x-4 pt-2">
    <Tag value="GMing"/>
      <Tag value="Balance.io"/>
      <Tag value="Figma"/>
      <Tag value="Next.js"/>
      </div>
    </div>



    </div>




    
    <div className="pb-12"></div>





      </div>
      


    </div>
  );
}




function Tag(props) {
  return (
    <div className="bg-black p-2 w-fit rounded-xl">
      <p className="text-white">{props.value}</p>
    </div>
  );
}

function Social(props) {
  return (
    <div className="hover:cursor-pointer">

      <Link href={"https://twitter.com/"+"aleemrehmtulla"} passHref>
      <svg
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="40px"
        height="40px"
      >
        <path d="M50.061,10.438c-1.846,0.818-3.826,1.369-5.908,1.62c2.125-1.273,3.757-3.29,4.523-5.688c-1.986,1.177-4.19,2.033-6.531,2.493c-1.874-2-4.547-3.247-7.504-3.247c-5.68,0-10.284,4.604-10.284,10.282c0,0.805,0.092,1.589,0.269,2.343C16.08,17.812,8.502,13.718,3.429,7.497c-0.885,1.522-1.391,3.289-1.391,5.172c0,3.567,1.812,6.713,4.574,8.56c-1.688-0.054-3.271-0.517-4.657-1.288c0,0.044,0,0.086,0,0.131c0,4.984,3.544,9.134,8.245,10.084c-0.86,0.236-1.769,0.36-2.707,0.36c-0.664,0-1.309-0.064-1.938-0.186c1.313,4.081,5.108,7.06,9.607,7.143c-3.517,2.757-7.951,4.399-12.77,4.399c-0.833,0-1.649-0.048-2.452-0.144c4.548,2.919,9.956,4.619,15.762,4.619c18.915,0,29.26-15.668,29.26-29.252c0-0.448-0.011-0.894-0.03-1.332C46.94,14.313,48.684,12.5,50.061,10.438z" />
      </svg>
      </Link>


    </div>
  );
}
export default Home;