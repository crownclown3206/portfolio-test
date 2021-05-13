
var headerhtml = '../shared/header.html';
function headerInclude(directory){
  $.ajax({
  type: 'get',
  url: directory + headerhtml,
  dataType: 'html',
  success: function(data) {
    data = data.replace(/\{\$root\}/g, directory);
      $("#header").append(data);
      console.log(data)
    }
  });
}

var footerhtml = '../shared/footer.html';
function footerInclude(directory){
  $.ajax({
  type: 'get',
  url: directory + footerhtml,
  dataType: 'html',
  success: function(data) {
    console.log(data)
      data = data.replace(/\{\$root\}/g, directory);
      $("#footer").append(data);
    }
  });
}

// $(function() {
//   $("#header").load("../shared/header.html");
//   $("#footer").load("../shared/footer.html");
// });

objectFitImages('.obj-fit-img');
