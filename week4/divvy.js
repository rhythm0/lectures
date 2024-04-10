// API Endpoints: https://gbfs.divvybikes.com/gbfs/gbfs.json
// Stations: https://gbfs.divvybikes.com/gbfs/en/station_information.json
// Real-time status: https://gbfs.divvybikes.com/gbfs/en/station_status.json

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("h1").addEventListener("click", loadStations )
})
// 法2
// function emit_station(s) {
//     console.log(s.name, s.capacity)
// }
async function loadStations() {
    let http_response = await fetch("https://gbfs.divvybikes.com/gbfs/en/station_information.json")
    let station_data = await http_response.json()
  
    console.log(station_data)

    let stations = station_data.data.stations
    // 法4
    stations.forEach((s) => console.log(s.name, s.capacity))
    
//   // 法3
//   stations.forEach((s) => {
//     return console.log(s.name, s.capacity)
//   })

//   法2: anonymous function
//   stations.forEach(function (s) {
//     console.log(s.name, s.capacity)
//   })


//   法1：
//   for (let i = 0; i < stations.length; ++i) {
//     let station = stations[i]
//     console.log(station.name, station.capacity)
//   }


}
