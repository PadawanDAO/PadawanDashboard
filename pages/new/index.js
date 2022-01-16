import React, {Component} from 'react'

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
        github: ""    
    }   

    setName = (e) => this.setState({name: e.target.value})

    setTimezone = (e) => this.setState({timezone: e.target.value})

    render() {
        return (
        <React.Fragment>
            <div className="input-wrapper">
                <label>name</label>
                <input onChange = {this.setName} placeholder='name' />
            </div>

            <div className="input-wrapper">
                <label>Timezone</label>
                <input onChange = {this.setTimezone} placeholder='EST' />
            </div>
        </React.Fragment>
        )
    }
}

export default PadawanForm