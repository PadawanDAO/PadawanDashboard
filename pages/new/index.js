import React, {Component} from 'react'
import { uploadFile, AddPadawan } from '../../FirebaseUtils'
import { input, Button } from "@mui/material"
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { toast } from "react-toastify"
import { ConnectWallet } from "@3rdweb/react";
import { useWeb3 } from "@3rdweb/hooks";
import { useState } from "react";
toast.configure()

// Name 
// Age
// Profile Picture
// Timezone
// Organization 
// About me section
// Which event they went to
// Twitter 
// Github 

function hi() {


}

function PadawanForm() {


    const [name, SetName] = useState();
    const [birthday, SetBirthday] = useState();
    const [timezone, SetTimezone] = useState();
    const [organization, SetOrganization] = useState();
    const [about, SetAbout] = useState();
    const [twitter, SetTwitter] = useState();
    const [file, SetFile] = useState();


    const setName = (e) => {SetName(e.target.value)}

    const setBirthday = (e) => {SetBirthday(e.target.value)}

    const setTimezone = (e) => {SetTimezone(e.target.value)}

    const setOrganization = (e) => {SetOrganization(e.target.value)}

    const setAbout = (e) => {SetAbout(e.target.value)}

    const setTwitter = (e) => {SetTwitter(e.target.value)}

    const setFile = (e) => {SetFile(e.target.files[0])}


    const SubmitForm = async () => {

         

        if (!name) return toast.error("Please enter a name")
        // if (!timezone) return toast.error("Please enter your timezone")
        if (!about) return toast.error("Please enter an about profile")
        if (!file) return toast.error("Please upload a profile picture")
        if (twitter.includes("@")) return toast.error('Dont add in "@"!')
        toast.success("Submitting...")

        const URL = await uploadFile(file)

        const padawanInfo = {
            name, 
            birthday, 
            timezone, 
            organization, 
            about, 
            twitter,
            URL,
         }

        AddPadawan(padawanInfo)
    }


        return (
        <React.Fragment>
            <div className="">
            <div className='  flex justify-end m-3 '>
                <ConnectWallet />
            </div>
            <div className="-mt-20">
            <div className="form-wrapper">
            
                <div>
                    
                    <div className="input-wrapper">
                        <label>h</label>
                        <input variant ="standard" onChange = {setName} placeholder='Your Name' />
                    </div>
                    <div className="input-wrapper">
                        <label>Organization</label>
                        <input variant ="standard" onChange = {setOrganization} placeholder='Organization' />
                    </div>

                    <div className="input-wrapper">
                        <label>About</label>
                        <input multiline inputProps={{maxLength:200}} rows="5" variant ="standard" onChange = {setAbout} placeholder='Tell us about yourself' />
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