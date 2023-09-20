import axios from "axios";
import React from "react"
import { useState } from "react"
import './UserList.css'
import LoaderGif from '../../Loading.gif';
import UserListError from "./UserListError";

function UserList()
{

    const[fetchedData,setfetchedData]=useState([]); // Step #1 Make a state to store information
    const[loading,setloading]=useState(false);
    const[failed,setfailed]=useState(false);

    function getData() // Step #2 Make a function to capture data from a source
    {   // Data is captured when the function getData() is executed
        setloading(true);
        setTimeout(() => {
            axios
                .get("https://api.github.com/users") // Data Source
                .then(function catching(response) // then takes a callback function
                    {
                        setfetchedData(response.data)
                        console.log(response)
                    })
                .catch(function throwing(err)
                        {
                            console.log(err);
                            setfailed(true);
                        })
                .finally(function finalCatch()
                        {
                            setloading(false);
                        });
        }, 200);
    }

    function resetData()
    {
        setfetchedData([]);
        setloading(false);
        setfailed(false);
    }

    return(
        <div>

            <div className="buttons">
                <p>Click below to retreive data...</p>
                <button onClick={()=>{getData()}}>Display Data</button>
                <button onClick={()=>{resetData()}}>Reset</button>
            </div>

            <div className="loader">
            {loading&&<img src={LoaderGif}/>}
            </div>

            <div className="userlist">
                {/* Two ways to print data*/}
                {/* First render it by looping through the state*/}

                {
                    fetchedData.map((capturedData)=>                 // The following is printing of data from the state
                    <div key={capturedData.id} className="beautify"> {/* A callback function loops over the state data */}
                        <img src={capturedData.avatar_url}></img>    {/* And Prints the Data */}
                        <h3>Username:{capturedData.login}</h3>
                        <a href={capturedData.html_url}>Visit Me</a>
                    </div>)
                }

                {/* Second way to pass state data as a prop and then render it*/}
                {/* <UserListProp passedProp={fetchedData}/> */}
            </div>

            <div className="failedMessage">
                {
                    failed&&<UserListError/>
                }
            </div>
            
        </div>
    );
}

export default UserList