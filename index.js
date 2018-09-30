const displayEntry = (entry) => {
  document.title = `${entry.word} (${entry.type})`;
  $('#word').html(entry.word);
  $('#type').html(`${entry.type}: `)
  $('#translation').html(entry.translation);
  $('#example').html(entry.example);
  $('#example-translation').html(entry.example_translation);
  $('#p1').html(entry.present_1);
  $('#p2').html(entry.present_2);
  $('#p3').html(entry.present_3);
  $('#p4').html(entry.present_4);
  $('#p5').html(entry.present_5);
  $('#p6').html(entry.present_6);
  $('#present').show();
}
$.getJSON("words.json").then(function (data) {
  let entry = data[Math.floor(Math.random() * data.length)];
  displayEntry(entry);
});