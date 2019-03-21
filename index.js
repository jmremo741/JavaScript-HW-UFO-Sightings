// Get references to the tbody, input field and button
var $tbody = document.querySelector('tbody');
var $dateInput = document.querySelector('#date');
var $searchBtn = document.querySelector('#search');

// Add event listener to the searchButton and call handleSearchButtonClick when clicked
$searchBtn.addEventListener('click', handleSearchButtonClick);

// Set filteredReports to data 
var filteredReports = data;

// Render filteredReports to tbody using renderTable
function renderTable() {
  $tbody.innerHTML = '';
  for (var i = 0; i < filteredReports.length; i++) {
    // Get the current report object and its fields
    var report = filteredReports[i];
    var fields = Object.keys(report);
    // Create a new row in the tbody and set the index to i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the report object, create a new cell at
      // its inner text to be the current value at the current report's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = report[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the search by removing leading and trailing whitespace, lowercase the string
  var filterState = $dateInput.value.trim().toLowerCase();

  // Set filteredReports to an array of all addresses where "State" matches the filter
  filteredReports = data.filter(function(report) {
    var addressState = report.datetime;

    // If true, add report to filteredReports, otherwise do not add to filteredReports
    return addressState === filterState;
  });
  renderTable();
}

// Render table for first time on page load
renderTable();