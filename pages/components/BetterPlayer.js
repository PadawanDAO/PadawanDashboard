import React from 'react';
import Image from 'next/image';
// prop schema 
/*

    {
        name: string;
        URL: string;
        address:stirng;
        about:string;
        skills: string[]
        timezone: string;
        twitter: string 

    }





*/

function CalcAge(birthday) {
    const dob = new Date(birthday);  
    //calculate month difference from current date in time  
    const month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    const age_dt = new Date(month_diff);   
      
    //extract year from date      
    const year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    const age = Math.abs(year - 1970);  
    return age 
}

const BetterPlayer = (props) => {
    let {name, birthday, URL, address, about, skills, timezone, twitter} = props
    // about = about.replace(/\n+/g, " ")
    about = about.replace(/(\r\n|\r|\n){2}/g, '$1').replace(/(\r\n|\r|\n){3,}/g, '$1\n');

    CalcAge(birthday)
    return (
        <div className='better-player-wrapper'>
            <div className='better-player-header'>
                <Image src = "/banner.png" height={100} width={500}/>
            </div>
            <div className='better-player-pfp-wrapper'>
                <Image src = {URL || "/banner.png"} height="96px" width="96px" />
            </div>
            <div className='better-player-name-wrapper'>
                <h3>{name} | {`${CalcAge(birthday)}y/o`} | {timezone}</h3>
            </div>
            <TextBlocks texts={skills} />
            <div className='better-player-bio'>
                <h3>Bio</h3>
                <p >{about}</p>
            </div>
        </div>
    )

}



const TextBlocks = ({texts}) => {
    return (
        <div className='text-block-wrapper'>
            {texts.map(s => <div>{s}</div>)}
        </div>
    )
}

export default BetterPlayer 