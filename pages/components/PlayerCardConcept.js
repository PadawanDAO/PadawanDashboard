import React from 'react'
import styles from "../../styles/Player.module.css"
import Banner from "../../public/banner.png";




// PROPTYPES
// name: string
// timezone : string 
// pfpURL : string 
// skills : string[]
// totalxp : number



const PlayerCard = ({name, timeZone, pfpURL, skills, totalXP}) => {
    console.log("Timezone: ", timeZone)

    return (
        <div className={styles.wrapper}>
            <div className={styles.CardHeaderWrapper}>
                <img className = {styles.banner} src = {Banner.src}/>
                <div className={styles.pfpWrapper}>
                    <img className = {styles.pfp} src = {pfpURL} />   
                </div>
            </div>
            <div className={styles.CardBody}>
                <span>
                    <h3 className = {styles.CardName}>{name}  {timeZone && "- " + timeZone}</h3>
                </span>
                <PadawanSkills />
                <PadawanContact />
            </div>
        </div>

    )
}


const PadawanContact = () => {
    const Contacts = ["GitHub", "Ethereum", "Twitter", "Discord"]
    return (
        <div className={styles.contactsWrapper}>
            {Contacts.map(c => <div className={styles.contactBlob}>{c}</div>)}
        </div>
    )
}

const PadawanSkills = () => {
    const Skills = ["Project Management", "Backend Development", "Blockchain", "Frontend Development"]

    return (
        <div className={styles.skillsWrapper}>
            {Skills.map(s => <div className={styles.skillBlob}>{s}</div>)}
        </div>
    )
}

export default PlayerCard