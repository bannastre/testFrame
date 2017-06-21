function Project() {
  this.one = 123
  this.another = 123
}


$('#home-button').click( function(){
  window.location.replace("away.html");
});

$('#away-button').click( function(){
  window.location.replace("home.html");
});
