let datasourceLength = 0

// fetch data from db.json and display results
fetch("http://localhost:3000/cars")
.then((response)=>{
    return response.json()
})
.then((data)=>{

    // update datasourceLength
    datasourceLength = data.length;

    // get the container displayCars
    let displayCarsContainer = document.getElementById("displayCars")

    // Create HTML to display data
    for (let i=0; i<data.length; i++){
        let htmldata = `
            <p> ${data[i].model} </p>
            <ul>
                <li>Company: ${data[i].company} </li>
                <li>Engine: ${data[i].engine}</li>
                <li>Year: ${data[i].year}</li>
            </ul>
        `
        displayCarsContainer.innerHTML += htmldata
    }

})
.catch((err)=>{
    console.error(err)
})



// get form from html by id
let form = document.getElementById("formAddCars")

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    // get form data

    let model = document.getElementById("model").value;
    let company = document.getElementById("company").value
    let engine = document.getElementById("engine").value
    let year = document.getElementById("year").value


    // create the data in db.json

    fetch("http://localhost:3000/cars", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "id": datasourceLength + 1,
            "engine": engine,
            "model": model,
            "company": company,
            "year": year
        })
    })
})