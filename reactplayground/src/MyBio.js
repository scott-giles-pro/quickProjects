import React, { useEffect, useState } from "react";


function MyBio() {
    let dob = new Date("04/25/1977");
    let month_diff = Date.now() - dob.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    let age = Math.abs(year - 1970);
    console.log("month_diff: " + month_diff);
    console.log("age_dt: " + age_dt);
    console.log("age: " + age);

    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };
    
    return (
        <div>
            <h1>This is Scott</h1>
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