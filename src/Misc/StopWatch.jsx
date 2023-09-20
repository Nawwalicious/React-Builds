import React from "react";
import { useState } from "react";

function StopWatch()
{

    const[Seconds,SetSeconds]=useState(55);
    const[Minutes,SetMinutes]=useState(59);
    const[Hours,SetHours]=useState(1);

    function HandleSeconds(){
        SetSeconds(Seconds+1);
    }

    function HandleMinutes(){
        SetMinutes(Minutes+1);
    }

    function HandleHours(){
        SetHours(Hours+1);
    }

    setTimeout(() => {
        
        HandleSeconds();
        
        if(Seconds>=59)
        {
            HandleMinutes();
            SetSeconds(0);
        }

        if(Minutes>=59 && Seconds>=59)
        {
            HandleHours();
            SetMinutes(0);
            SetSeconds(0);
        }

    }, 1000);
    
    return(
        <div>
            <span>{Hours}:{Minutes}:{Seconds}</span>
        </div>
    );
}

export default StopWatch;