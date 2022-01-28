import React, {Component, useEffect} from 'react'
import { uploadFile, AddPadawan } from '../../FirebaseUtils'
import Select from 'react-select'
import { toast } from "react-toastify"
import { ConnectWallet } from "@3rdweb/react";
import { useWeb3 } from "@3rdweb/hooks";
import { useState } from "react";
import ReactTagInput  from "@pathofdev/react-tag-input"
import formatGroupLabel from "./formatGroupLabel"

toast.configure()


function PadawanForm() {
    const DaoEvents = ["NFT.NYC", "ETHLisbon", "ETHDenver", "DeCental Miami"]
    const PDAOEvents = DaoEvents.map(e => {
        return {value: e, label: e}
    })
    const [status, setStatus] = useState("ready")
    const [doing, setDoing] = useState("Talking to yoda...")
    const [redirect , setRedirect] = useState("6")
    const [redirectThem , setRedirectThem] = useState(false)

    const [name, SetName] = useState("jdj");
    const [birthday, SetBirthday] = useState("jdj");
    const [timezone, SetTimezone] = useState("jdj");
    const [organization, SetOrganization] = useState("jdj");
    const [about, SetAbout] = useState("jdj");
    const [twitter, SetTwitter] = useState("jdj");
    const [file, SetFile] = useState();
    const [skills, SetSkills] = useState([]);
    const [tags, SetTags] = useState([]);
    const [events, SetEvents] = useState([])
    const { address, chainId, provider } = useWeb3();



    const setName = (e) => {SetName(e.target.value)}
    const setBirthday = (e) => {SetBirthday(e.target.value)}
    const setTimezone = (e) => {SetTimezone(e.target.value)}
    const setOrganization = (e) => {SetOrganization(e.target.value)}
    const setAbout = (e) => {
        if (e.target.value.length >= 250) return
        SetAbout(e.target.value)
    }

    const setTwitter = (e) => {SetTwitter(e.target.value)}
    const setFile = (e) => {SetFile(e.target.files[0])}
    
    const SubmitForm = async () => {

        if (name=="jdj") return toast.error("Please enter a name")
        if (birthday=="jdj") return toast.error("Please enter your birthday")
        if (timezone=="jdj") return toast.error("Please enter your timezone")
        // if (organization=="jdj") return toast.error("Please enter your organization")
        if (about=="jdj") return toast.error("Please enter your about section")
        if (twitter=="jdj") return toast.error("Please enter your twitter")
        // if (!address) return toast.error("Please connect to a wallet")
        address = Math.floor(Math.random() * 1000000000) 


        if (twitter.includes("@")) return toast.error('Dont add in "@"!')
        if (twitter.includes("https://")) return toast.error("Don't use a URL!")
        if (skills.includes(",,,,,")) return toast.error("Don't use a URL!")
        
        setStatus("submitting")
        

        const URL = await uploadFile(file)
        events = events.map(({ value }) => value)

        const padawanInfo = {
            name, 
            birthday, 
            timezone, 
            organization, 
            address,
            skills,
            about, 
            twitter,
            events,
            URL,
         }

        AddPadawan(padawanInfo)
    }


    if (status=="submitting") {
        if(doing=="Talking to yoda...") {
            setTimeout(function() {
                setDoing("Creating the force...");
              },1300);
            }
            if(doing=="Creating the force...") {
                setTimeout(function() {
                    setDoing("Preparring your lightsaber...");
                  },1300);
                }
                if(doing=="Preparring your lightsaber...") {
                    setTimeout(function() {
                        setStatus("submitted");
                      },1300);
                    }
        }

        if (status == "submitted") {
            if (redirect == "6") {
                setTimeout(function () {
                  setRedirect("5");
                }, 1000);}
            if (redirect == "5") {
                setTimeout(function () {
                  setRedirect("4");
                }, 1000);
              }
          if (redirect == "4") {
            setTimeout(function () {
              setRedirect("3");
            }, 1000);
          }
          if (redirect == "3") {
            setTimeout(function () {
              setRedirect("2");
            }, 1000);
          }
          if (redirect == "2") {
            setTimeout(function () {
              setRedirect("1");
            }, 1000);
          }
          if (redirect == "1") {
            setTimeout(function () {
              setRedirect("0");
            }, 1000);
          }
          if (redirect == "0") {
            setRedirectThem(true)
          }
           
        }
   
   



    const Array = [
        "79568777",
      ]
        let cards = []

        if (status == "submitting") {
           
            let PadawanKeys = Array
            cards = PadawanKeys.map(index => {
            return (
                <span key={index}>
                  
                    <div className="w-screen h-screen opacity-75 delay-150 duration-600	top-0 bg-slate-500">
        <div className="flex pt-48 justify-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
        </div>
        <h1 className="flex pt-8 text-white justify-center">
          Allow us a couple seconds to upload your data!
        </h1>
  
        <p className="flex pt-8 text-white justify-center">
          Currently: {doing}
        </p>
      </div>
                 
                </span>
            )
            })
        }
        if (status=="submitted") {
            let PadawanKeys = Array
                cards = PadawanKeys.map(index => {
                    return (
                        <span key={index}>
                      
                        <div className="w-screen h-screen opacity-75 delay-250 duration-500	top-0 bg-slate-200">
            <div className="flex pt-20 justify-center">
           
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>

            </div>
            <h1 className="flex pt-2 text-black justify-center">
              Congratulations Padawan! &nbsp; <a href='https://dashboard.padawandao.com' className='text-blue-500 underline'> You&apos;re all set!</a>
            </h1>
      
            <p className="flex pt-8 text-slate-700 justify-center">
              Redirecting you in {redirect} seconds...
            </p>
          </div>
                     
                    </span>
                    )
                })
        }

        if (redirectThem==true) {
            let PadawanKeys = Array
                cards = PadawanKeys.map(index => {
                    return (
                        <span key={index}>
                      
                       <h1>you shouldnt be here.. hop over <a href='https://dashboard.padawandao.com'>here</a></h1>
                     
                    </span>
                    )
                })
        }

        if(redirectThem==true){
            window.open("https://dashboard.padawandao.com", "_self")
        }
     
        if ( status=="ready") {
            let PadawanKeys = Array
            cards = PadawanKeys.map(index => {
            
            return (
              
            <span key={index}>
            
            <React.Fragment>
            <div className="">
            <div className='  flex justify-end m-5 '>
                
            </div>
            <div className="-mt-20">
            <div className="form-wrapper">
            
                <div>
                    
                    <div className="input-wrapper">
                        <label>Full Name (anon is okay)</label>
                        <input variant ="standard" onChange = {setName} placeholder='Your Name' />
                    </div>
                    <div className="input-wrapper">
                        <label>Birthday</label>
                        <input type="date" onChange = {setBirthday} placeholder='Organization' />
                    </div>

                    

                    <div className="input-wrapper">
                        <label>Skills (3)</label>
                            <ReactTagInput 
                                tags={skills} 
                                placeholder="Type and press enter"
                                maxTags={5}
                                editable={true}
                                removeOnBackspace={true}
                                readOnly={false}
                                onChange={SetSkills} />
                    </div>

                   

                    <div className="input-wrapper">
                        <label>Timezone (3 letters)</label>
                        <input variant ="standard" onChange = {setTimezone} placeholder='EST' />
                    </div>

                    <div className="input-wrapper">
                        <label>About (250 character max)</label>
                        <textarea value = {about} onChange = {setAbout} placeholder='Tell us about yourself' />
                    </div>


                    <div className="input-wrapper">
                        <label>Events</label>
                        <Select
                            isMulti
                            defaultValue={events}
                            options={PDAOEvents}
                            formatGroupLabel={formatGroupLabel}
                            onChange = {SetEvents}
                            />
                    </div>
                    <div className="input-wrapper">
                        <label>Org (school, company, anything)</label>
                        <input variant ="standard" onChange = {setOrganization} placeholder='VitaDAO' />
                    </div>

                    <div className="input-wrapper">
                        <label>Twitter (no @)</label>
                        <input variant ="standard" onChange = {setTwitter} placeholder='aleemrehmtulla' />
                    </div>
                    <div className="input-wrapper">
                        <label className='pb-2'>Upload Profile Picture</label>
                        <input className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-2
      file:border-black file:duration-500 file:cursor-pointer
      file:text-sm file:font-semibold
      file:bg-black file:text-white
      hover:file:bg-white hover:file:text-black " onChange={setFile} type = "file" accept="image/png, image/jpeg, image/jpg" />
                    </div>

                    <button className='bg-black duration-500 border-2 rounded-full border-black text-white px-8 py-1.5 hover:text-black hover:bg-white'  onClick = {SubmitForm}>Submit</button>
                    
                </div>
            </div>
            </div>
        </div>
       

        </React.Fragment>
            
            </span>
            )
            })
          
          }




        return cards
}


export default PadawanForm