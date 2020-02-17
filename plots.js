function buildMetadata(sample) {
  d3.json('samples.json').then(data => {
    const metadata = data.metadata;
    const resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    const result = resultArray[0];
    const PANEL = d3.select('#sample-metadata');

    PANEL.html('');
    for (let [key, value] of Object.entries(result)) {
      console.log(key, value);
      PANEL.append('h6').text(`${key.toUpperCase()}: ${value}`);
    }
  });
}

function optionChanged(newSample) {
  buildMetadata(newSample);
  // buildCharts(newSample);
}

function init() {
  const selector = d3.select('#selDataset');

  d3.json('samples.json').then(data => {
    console.log(data);
    const sampleNames = data.names;
    sampleNames.forEach(sample => {
      selector
        .append('option')
        .text(sample)
        .property('value', sample);
    });
  });
}

init();
