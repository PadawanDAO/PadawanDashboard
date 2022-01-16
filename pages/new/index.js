import React, {Component} from 'react'
import { uploadFile } from '../../FirebaseUtils'
import { TextField, Button } from "@mui/material"
import { toast } from "react-toastify"
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
        ETHaddress: "",
        twitter: "",
        github: "",
        file: null,
    }   

    setName = (e) => this.setState({name: e.target.value})

    setTimezone = (e) => this.setState({timezone: e.target.value})

    setOrganization = (e) => this.setState({organization: e.target.value})

    setAbout = (e) => this.setState({about: e.target.value})

    setEthaddress = (e) => this.setState({ETHaddress: e.target.value})

    setTwitter = (e) => this.setState({twitter: e.target.value})

    setGithub = (e) => this.setState({github: e.target.value})

    setFile = (e) => this.setState({file: e.target.files[0]})

    SubmitForm = async () => {
        const {
            name, 
            birthday, 
            timezone, 
            organization, 
            about, 
            ETHaddress,
            twitter,
            github,
         } = this.state

        if (!name) return toast.error("Please enter a name")
        // if (!timezone) return toast.error("Please enter your timezone")
        if (!about) return toast.error("Please enter an about profile")
        if (!this.state.file) return toast.error("Please upload a profile picture")

        const URL = await uploadFile(this.state.file)

        console.log({
            name, 
            birthday, 
            timezone, 
            organization, 
            about, 
            ETHaddress,
            twitter,
            github,
            URL,
         }
        )
    }

    render() {

        return (
        <React.Fragment>
            <div className="form-wrapper">
                <div>
                    <div className="input-wrapper">
                        <label>Name</label>
                        <TextField variant ="standard" onChange = {this.setName} placeholder='Your Name' />
                    </div>
                    <div className="input-wrapper">
                        <label>Organization</label>
                        <TextField variant ="standard" onChange = {this.setOrganization} placeholder='organization' />
                    </div>

                    <div className="input-wrapper">
                        <label>About</label>
                        <TextField variant ="standard" onChange = {this.setAbout} placeholder='tell us about yourself' />
                    </div>

                    <div className="input-wrapper">
                        <label>ETHaddress</label>
                        <TextField variant ="standard" onChange = {this.setEthaddress} placeholder='event' />
                    </div>

                    <div className="input-wrapper">
                        <label>Twitter</label>
                        <TextField variant ="standard" onChange = {this.setTwitter} placeholder='Twitter @' />
                    </div>

                    <div className="input-wrapper">
                        <label>Github</label>
                        <TextField variant ="standard" onChange = {this.setGithub} placeholder='Github' />
                    </div>
                    <div className="input-wrapper">
                        <label>Upload Profile Picture</label>
                        <input variant ="standard" onChange = {this.setFile} type = "file" accept="image/" />
                    </div>
                    <Button variant='contained' className="padawan-form-submit-btn" onClick = {this.SubmitForm}>Submit</Button>
                </div>
            </div>
        </React.Fragment>
        )
    }
}

export default PadawanForm