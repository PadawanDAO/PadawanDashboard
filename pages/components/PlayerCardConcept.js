import React from 'react'
import styles from "../../styles/Player.module.css"
import Banner from "../../public/banner.png";
import Image from "next/image"



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
                <div className={styles.banner}>
                    <Image alt =""  src = {Banner.src} layout='fill'/>
                </div>
                <div className={styles.pfpWrapper}>
                    <div className = {styles.pfp}>
                        <Image alt = "" src = {pfpURL} width={128} height={128}/>   
                    </div>
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
        <div className={styles.infoWrapper}>
            <p>Contact</p>
            <div className={styles.contactsWrapper}>
            {Contacts.map(c => <div key={c} className={styles.contactBlob}>{c}</div>)}
            </div>
        </div>
    )
}

const PadawanSkills = () => {
    const Skills = ["Project Management", "Backend Development", "Blockchain", "Frontend Development"]

    return (
        <div className={styles.infoWrapper}>
            <p>Skills</p>
            <div className={styles.skillsWrapper}>
            {Skills.map(s => <div key ={s} className={styles.skillBlob}>{s}</div>)}
            </div>
        </div>
    )
}

export default PlayerCard