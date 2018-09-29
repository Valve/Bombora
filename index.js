/// <reference path="jquery.d.ts" />
const displayEntry = (entry) => {
  $('#word').html(entry.word);
  $('#translation').html('To ' + entry.translation);
}
$.getJSON("words.json").then(function (data) {
  let entry = data[Math.floor(Math.random() * data.length)];
  displayEntry(entry);
});