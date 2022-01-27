import React, {Component} from 'react'
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

        toast.success("Submitting...")

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

    


        return (
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
        )
}


export default PadawanForm