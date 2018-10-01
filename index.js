const displayEntry = (entry) => {
  document.title = `${entry.word} (${entry.type})`;
  $('#word').html(entry.tr);
  $('#type').html(`${entry.type}: `)
  $('#translation').html(entry.word);
  $('#example').html(entry.ex);
  $('#example-translation').html(entry.ex_t);
  $('#p1').html(entry.pr_1);
  $('#p2').html(entry.pr_2);
  $('#p3').html(entry.pr_3);
  $('#p4').html(entry.pr_4);
  $('#p5').html(entry.pr_5);
  $('#p6').html(entry.pr_6);
  $('#present').show();
}
$.getJSON("words.json").then(function (data) {
  let entry = data[Math.floor(Math.random() * data.length)];
  displayEntry(entry);
});