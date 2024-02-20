


function MyBio() {
    let dob = new Date("04/25/1977");
    let month_diff = Date.now() - dob.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    let age = Math.abs(year - 1970);
    console.log("month_diff: " + month_diff);
    console.log("age_dt: " + age_dt);
    console.log("age: " + age);
    
    return (
        <div>
            <h1>This is Scott</h1>
            <ul>
                <li>Blonde har (shaved)</li>
                <li>Blue eyes</li>
                <li>Athletic</li>
                <li>Loves to code</li>
                <li>JS computes that I am {age} years old!</li>
            </ul>
        </div>
    )
}


export default MyBio;