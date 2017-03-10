$(document).ready(function(){
  $('#search-results').hide();
});

$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
  console.log(getRequest);
});

function getRequest(searchTerm){
  var params = {
    query: searchTerm,
    type: 'track',
    market: 'US',
    offset: '0',
    limit: '10'
  };
  url = 'https://api.spotify.com/v1/search?';

  $.getJSON(url, params, function(data){
    console.log(data);
    showResults(data.tracks.items);
  });
}

function showResults(results){
  var html = "";
  //console(html);
  $.each(results, function(index,value){
    html += '<li class="result-item">'
    +'<a href="' + value.external_urls.spotify + '" class="artwork">'
    + '<img class="artwork" src="'+ value.album.images[1].url + '"> </a>'
    + '<h5>' + value.name + '</h5>'
    + '<h5>' + value.artists[0].name + '</h5>'
    + '<li/>';
    console.log(value.name);
  });
  $('#search-results').show();
  $('#search-results ul').html(html);
}
