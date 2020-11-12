// use d3 library to read in samples

// ------------------------ //
// HORIZONTAL BAR CHART //
// ------------------------ //

console.log('is this working');

d3.json('data/samples.json').then((data) => {
    console.log(data);
    })

// function getData(id){
//     console.log('This is not working')

//     d3.json('data/samples.json').then((data) => {
//         // use the map function to pull the info from the metadata
//         console.log('IS THIS WORKING')
//         var subjectID = data.metadata.map(row => row[0]);

//         console.log(subjectID)
//         // var ethnicity = data.metadata.map(row => row[1]);
//         // var gender = data.metadata.map(row => row[2]);
//         // var age = data.metadata.map(row => row[3]);
//         // var location = data.metadata.map(row => row[4]);
//         // var bbType = data.metadata.map(row => row[5]);
//         // var wfreq = data.metadata.map(row => row[6]);