import React, {Component} from 'react'
import { uploadFile } from '../../FirebaseUtils'

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
        birhday: null,
        PFP: null,
        timezone: "",
        organization: "",
        about: "",
        event: "",
        twitter: "",
        github: "",
        file: null,
    }   

    setName = (e) => this.setState({name: e.target.value})

    setTimezone = (e) => this.setState({timezone: e.target.value})

<<<<<<< HEAD
    setFile = (e) => this.setState({file: e.target.files[0]}) 
=======
    setOrganization = (e) => this.setState({organization: e.target.value})

    setAbout = (e) => this.setState({about: e.target.value})

    setEvent = (e) => this.setState({event: e.target.value})

    setTwitter = (e) => this.setState({twitter: e.target.value})

    setGithub = (e) => this.setState({github: e.target.value})
>>>>>>> 09b11232b71a6f2113ca002483a39bb8c95f2688

    render() {
        return (
        <React.Fragment>
            <div className="input-wrapper">
                <label>Name</label>
                <input onChange = {this.setName} placeholder='name' />
            </div>

            <div className="input-wrapper">
                <label>Timezone</label>
                <input onChange = {this.setTimezone} placeholder='EST' />
            </div>
<<<<<<< HEAD
            <button onClick = {() => uploadFile(this.state.file)}>Upload</button>
            <input type = "file" onChange = {this.setFile} />
            
=======

            <div className="input-wrapper">
                <label>Organization</label>
                <input onChange = {this.setOrganization} placeholder='organization' />
            </div>

            <div className="input-wrapper">
                <label>About</label>
                <input onChange = {this.setAbout} placeholder='tell us about yourself' />
            </div>

            <div className="input-wrapper">
                <label>Event</label>
                <input onChange = {this.setEvent} placeholder='event' />
            </div>

            <div className="input-wrapper">
                <label>Twitter</label>
                <input onChange = {this.setTwitter} placeholder='Twitter @' />
            </div>

            <div className="input-wrapper">
                <label>Github</label>
                <input onChange = {this.setGithub} placeholder='Github' />
            </div>
>>>>>>> 09b11232b71a6f2113ca002483a39bb8c95f2688
        </React.Fragment>
        )
    }
}

export default PadawanForm