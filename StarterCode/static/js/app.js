console.log('is this working ')

// build the metadata panel first 
function buildMetadata(){
    d3.json('/data/samples.json').then(function(data){
        // print out the meta data to make sure this is working
        var metaData = data.metadata
        console.log(metaData)
        // select from the index the metadata, under the class "sample metadata"
        var metaPanel = d3.select('#sample-metadata');
        // clear the html 
        metaPanel.html('');
        // build a table with the values needed
        Object.entries(data).forEach(([key, value]) => {
            metaPanel.append('p').text(`${key}: ${value}`)
        })

    })
}

buildMetadata();

// grab values from response json to build the plots
function buildPlot(){
    d3.json('/data/samples.json').then(function(data){
        // console.log(data)
        
        // print out id names for each person
        var name = data.names;
        // console.log(name)

        // print out the metadata information 
        var metaData = data.metadata;
        // console.log(metaData)

        // print out the sample information 
        var sampleID = data.samples.otu_ids;
        console.log(sampleID)
        var sampleValues = data.samples[0].sample_values.sort((a,b) => b.sample_values - a.sample_values).slice(0,10)
        // console.log(sampleValues)
        var otuLabels = data.samples[0].otu_ids.slice(0,10).map(row => 'OTU'+ row)
        console.log(otuLabels)
        
        var trace1 = {
            x: sampleValues.reverse(),
            y: otuLabels,
            type: "bar",
            orientation: 'h'
        }

        var data = [trace1]

        var layout = {
            title: `Sample Data of ${sampleID}`
        }

        Plotly.newPlot('bar', data, layout);

        var trace2 = {
            x: otuLabels,
            y: sampleValues
        }
    });
}
buildPlot()
// d3.json('/data/samples.json').then((data) => {
//     var trace1 = {
//         x: data.samples.otu_ids
//         y: data.samples.sample_values.slice(0,10).reverse
//     }
// })
// function buildMetadata(sample) {
//     d3.json('/metadata' + sample)
//     console.log()
// }

// buildMetadata('940');

// function buildMetadata(sample) {
//     d3.json('/metadata/' + sample).then(function(sample){
//         var metapanel = d3.select('#sample-metadata');
//         metapanel.html('');
//         Object.defineProperties(sampleData).forEach(([key, value]) => {
//             console.log([key, value])
//             metapanel.append('p').text(`${key}: ${value}`)
//         })
//     })
// };

// function build


// function getmetaData() {
//     d3.json('/data/samples.json').then(function(sampleData){
//         var names = sampleData.metadata.id.map(row => row[0])
//         console.log(names)
//     })
// }

// var metaData = d3.select('#sample-metadata');
// metaData.html('');
// Object.entries(sightings).forEach(function([key, value]) {
//     console.log(key,value);
//     var item = row.append('p');
//     item.text(`${key}: ${value});




// // get the event listener to listen the data and filter out the results
// var drawChart = function(x_data, y_data, hoverText, metadata) {


//     var metadata_panel = d3.select("#sample-metadata");
//     metadata_panel.html("");
//     Object.entries(metadata).forEach(([key, value]) => {
//         metadata_panel.append("p").text(`${key}: ${value}`);
//     });
  
//         x: x_data,
//         y: y_data,
//         text: hoverText,
//         type: 'bar',
//         orientation: 'h'
//     };
  
//     var data = [trace];
  
//     Plotly.newPlot('bar', data);
  
//     var trace2 = {
//         x: x_data,
//         y: y_data,
//         text: hoverText,
//         mode: 'markers',
//         marker: {
//             size: y_data,
//             color: x_data
//         }
//     };
  
//     var data2 = [trace2];
  
//     Plotly.newPlot('bubble', data2);
  
  
//   };
  
//   var populateDropdown = function(names) {
  
//     var selectTag = d3.select("#selDataset");
//     var options = selectTag.selectAll('option').data(names);
  
//     options.enter()
//         .append('option')
//         .attr('value', function(d) {
//             return d;
//         })
//         .text(function(d) {
//             return d;
//         });
  
//   };
  
//   var optionChanged = function(newValue) {
  
//     d3.json("../data/samples.json").then(function(data) {
  
//     sample_new = data["samples"].filter(function(sample) {
  
//         return sample.id == newValue;
  
//     });
    
//     metadata_new = data["metadata"].filter(function(metadata) {
  
//         return metadata.id == newValue;
  
//     });
    
    
//     x_data = sample_new[0]["otu_ids"];
//     y_data = sample_new[0]["sample_values"];
//     hoverText = sample_new[0]["otu_labels"];
    
//     console.log(x_data);
//     console.log(y_data);
//     console.log(hoverText);
    
//     drawChart(x_data, y_data, hoverText, metadata_new[0]);
//     });
//   };
  
//   d3.json("../data/samples.json").then(function(data) {
  
//     //Populate dropdown with names
//     populateDropdown(data["names"]);
  
//     //Populate the page with the first value
//     x_data = data["samples"][0]["otu_ids"];
//     y_data = data["samples"][0]["sample_values"].slice(0,10).reverse();
//     hoverText = data["samples"][0]["otu_labels"];
//     metadata = data["metadata"][0];
  
//     //Draw the chart on load
//     drawChart(x_data, y_data, hoverText, metadata);
  
  
//   });





// use d3 library to read in samples

// ------------------------ //
// HORIZONTAL BAR CHART //
// ------------------------ //

// function getData(id){
//     d3.json('data/samples.json'). then((data) => {
//         console.log(data)
//         var IDs = data.samples[0].otu_ids;
//         console.log(IDs)
//         var top10Values = data.samples[0].sample_values.slice(0,10).reverse();
//         console.log(top10Values)
//         var top10otus = data.samples[0].sample_values.slice(0,10).reverse()
//         console.log(top10otus)
//         var OTU_id = OTU_top.map(d => "OTU " + d);
//         console.log(`OTU IDS: ${OTU_id}`)
//      // get the top 10 labels for the plot
//         var labels =  data.samples[0].otu_labels.slice(0,10);
//         console.log(`OTU_labels: ${labels}`)
//         var trace = {
//             x: sampleValues,
//             y: OTU_id,
//             text: labels,
//             marker: {
//             color: 'blue'},
//             type:"bar",
//             orientation: "h",
//         };

//         var data =[trace];

//         var layout = {
//             title: 'Top 10 OTU'
//         };

//         Plotly.newPlot('bar', data, layout)
//     });


// };

// function getData(id){
//     d3.json('../data/samples.json').then((data) => {
//         console.log(data);
        // var subjectID = data.names
        // console.log(subjectID)
        // var samples = data.samples.filter(s => s.id.toString() === id)[0];
        // console.log(samples)
   
    // console.log(data)

// function getData(){
//     console.log('This is not working')

//     d3.json('../data/samples.json').then((data) => {
//         // use the map function to pull the info from the metadata
//         console.log('IS THIS WORKING')
//         var subjectID = data.metadata.map(row => row[0]);

//         console.log(subjectID)
//         var ethnicity = data.metadata.map(row => row[1]);
//         var gender = data.metadata.map(row => row[2]);
//         var age = data.metadata.map(row => row[3]);
//         var location = data.metadata.map(row => row[4]);
//         var bbType = data.metadata.map(row => row[5]);
//         var wfreq = data.metadata.map(row => row[6]);
//     })
// };