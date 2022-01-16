import React, {Component} from 'react'
import { uploadFile, AddPadawan } from '../../FirebaseUtils'
import { input, Button } from "@mui/material"
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { toast } from "react-toastify"
import { ConnectWallet } from "@3rdweb/react";
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

class PadawanForm extends Component {

    state = {
        name: "",
        birthday: null,
        timezone: "",
        organization: "",
        about: "",
        twitter: "",
        file: null,
    }   

    setName = (e) => this.setState({name: e.target.value})

    setTimezone = (e) => this.setState({timezone: e.target.value})

    setOrganization = (e) => this.setState({organization: e.target.value})

    setAbout = (e) => this.setState({about: e.target.value})


    setTwitter = (e) => this.setState({twitter: e.target.value})


    setFile = (e) => this.setState({file: e.target.files[0]})

    SubmitForm = async () => {
        const {
            name, 
            birthday, 
            timezone, 
            organization, 
            about, 
            twitter,
         } = this.state

        if (!name) return toast.error("Please enter a name")
        // if (!timezone) return toast.error("Please enter your timezone")
        if (!about) return toast.error("Please enter an about profile")
        if (!this.state.file) return toast.error("Please upload a profile picture")
        if (twitter.includes("@")) return toast.error('Dont add in "@"!')
        toast.success("Submitting...")

        const URL = await uploadFile(this.state.file)

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

    render() {

        return (
        <React.Fragment>
            
            <div className="form-wrapper">
            
                <div>
                    <ConnectWallet />
                    <div className="input-wrapper">
                        <label>Name</label>
                        <input variant ="standard" onChange = {this.setName} placeholder='Your Name' />
                    </div>
                    <div className="input-wrapper">
                        <label>Organization</label>
                        <input variant ="standard" onChange = {this.setOrganization} placeholder='Organization' />
                    </div>

                    <div className="input-wrapper">
                        <label>About</label>
                        <input multiline inputProps={{maxLength:200}} rows="5" variant ="standard" onChange = {this.setAbout} placeholder='Tell us about yourself' />
                    </div>


                    <div className="input-wrapper">
                        <label>Twitter (no @)</label>
                        <input variant ="standard" onChange = {this.setTwitter} placeholder='aleemrehmtulla' />
                    </div>
                    <div className="input-wrapper">
                        <label className='pb-2'>Upload Profile Picture</label>
                        <input className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-2
      file:border-black file:duration-500 file:cursor-pointer
      file:text-sm file:font-semibold
      file:bg-black file:text-white
      hover:file:bg-white hover:file:text-black " onChange={this.setFile} type = "file" accept="image/png, image/jpeg, image/jpg" />
                    </div>

                    <button className='bg-black duration-500 border-2 rounded-full border-black text-white px-8 py-1.5 hover:text-black hover:bg-white'  onClick = {this.SubmitForm}>Submit</button>
                    
                </div>
            </div>
        </React.Fragment>
        )
    }
}

export default PadawanForm