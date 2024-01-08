// fetch("url to data source")
// .then(function())
// .then(function())
// .catch(function(err))

// Get data
fetch("http://localhost:3000/news")
.then((response) => {
    return response.json();
})
.then((data)=>{
    console.log(data)
})


// post/create data

fetch("http://localhost:3000/news", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        "id":6,
        "title":"North Korea's Kim Jong Un Turns 40. Maybe.",
        "category":"Politics",
        "content":"The birth dates of Kim's father and grandfather, who preceded him as rulers, are national holidays in the authoritarian state"
    })
})
.then(response => {
    console.log(response.status)
    return response.json()
})
.then(data => {
    console.log(data)
})


// Patch (Update a small part of existing data in db)

fetch("http://localhost:3000/news/5", {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        "category":"General"
    })
})
.then(response => {
    console.log(response.status)
    return response.json()
})
.then(data => {
    console.log(data)
})


// delete data

fetch("http://localhost:3000/news/2", {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})
.then(response => {
    console.log(response.status)
    return response.json()
})
.then(data => {
    console.log(data)
})