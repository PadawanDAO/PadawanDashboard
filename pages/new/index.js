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

    setOrganization = (e) => this.setState({organization: e.target.value})

    setAbout = (e) => this.setState({about: e.target.value})

    setEvent = (e) => this.setState({event: e.target.value})

    setTwitter = (e) => this.setState({twitter: e.target.value})

    setGithub = (e) => this.setState({github: e.target.value})


    render() {
        return (
        <React.Fragment>
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
        </React.Fragment>
        )
    }
}

export default PadawanForm