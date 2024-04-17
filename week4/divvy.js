// API Endpoints: https://gbfs.divvybikes.com/gbfs/gbfs.json
// Stations: https://gbfs.divvybikes.com/gbfs/en/station_information.json
// Real-time status: https://gbfs.divvybikes.com/gbfs/en/station_status.json

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("h1").addEventListener("click", loadStations )
})

function emit_station(s) {
  console.log(s.name, s.capacity)
}
async function loadStations() {
  let http_response = await fetch("https://gbfs.divvybikes.com/gbfs/en/station_information.json")
  let station_data = await http_response.json()
  
  // console.log(station_data)

  let stations = station_data.data.stations

  stations.filter((s) => s.name.substr("Ellis"))
  stations.forEach((s) => {
    return console.log(s.name, s.capacity)
  })
  // stations.forEach(function(s) {
  //   console.log(s.name, s.capacity)
  // })
  // for (let i = 0; i < stations.length; ++i) {
  //   let station = stations[i]
  //   console.log(station.name, station.capacity)
  // }

}
