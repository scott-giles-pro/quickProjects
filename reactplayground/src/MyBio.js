import React, { useEffect, useState } from "react";


function MyBio() {
    //date functions to compute age
    let dob = new Date("04/25/1977");
    let month_diff = Date.now() - dob.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    let age = Math.abs(year - 1970);
    console.log("month_diff: " + month_diff);
    console.log("age_dt: " + age_dt);
    console.log("age: " + age);
    
    //time functions for greeting of good morning/afternoon/evening
    const greetingDate = new Date();
    const greetingHours = greetingDate.getHours;
    let timeOfDay;
    if (greetingHours < 12) {
        timeOfDay = "morning"
    } else if (greetingHours >= 12 && greetingHours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "evening"
    }
    
    //state and change handler for checkbox    
    const [isChecked, setIsChecked] = useState(false);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };
    
    return (
        <div>
            <h1 className="testHeader">Good {timeOfDay}, Scott</h1>
            <ul>
                <li>Blonde har (shaved)</li>
                <li>Blue eyes</li>
                <li>Loves to code</li>
                <li>JS computes that I am {age} years old!</li>
            </ul>
            <h2>My Favorite Pizza Toppings Are</h2>
            <div className="topping">
                <input type="checkbox" id="topping" value="Paneer" checked={isChecked} onChange={handleOnChange} />
            </div>
            <div className="result">
                Above checkbox is {isChecked ? "checked" : "un-checked"}.
            </div>
        </div>
    )
}


export default MyBio;