const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    
    fetch('/weather?address=' + location)
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
})

// fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/boston.json?access_token=pk.eyJ1IjoiYWxhc2thbmluamEiLCJhIjoiY21qcWJkbHpxMnE2MTNqb2p0bmZjaXFibSJ9.o5JR4wmK_adkOiV2ZYP2HQ')
//     .then((response) => response.json())
//     .then((data) => {
//         if(data.error){
//             return console.log(error)
//         }else if(data.features.length === 0){
//             return console.log("No location selected")
//         }else {
//             const ob = {
//                 latitude: data.features[0].center[1],
//                 longitude: data.features[0].center[0],
//                 location: data.features[0].place_name
//             }
//             return ob
//         }
//     })
//     .then(({latitude:lat, longitude:long, location}) => {
//         return fetch('https://api.weatherstack.com/current?access_key=a9c40262124c10c2a08e78a0490c3ebd&query='
//         + lat + ',' + long + '&units=f')
//     })
//     .then((response) => response.json())
//     .then((data) => {
//         if(data.error){
//             return console.log(error)
//         }else {
//             console.log('Location: ' + data.location.name + ',' + data.location.region + '\n' + 
//                 data.current.weather_descriptions[0] + '. It is currently ' + data.current.temperature
//                 + ' degrees out. It feels like ' + data.current.feelslike + ' degrees out.')
//         }
//     })
