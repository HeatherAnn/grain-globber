var $grains = $('grains');
var $ul = $('ul');
var $li = $('li');
var $h2 = $('h2');
var $p = $('p');

$('grains').forEach(function (grain) {

  $li.append('<img>');
  $li.append('<h2>');
  $li.append('<p>');
  $ul.append('<li>');

  $img.attr('src', 'images/' + grain.img);
  $h2.html(grain.name);
  $p.html(grain.desc);

});
