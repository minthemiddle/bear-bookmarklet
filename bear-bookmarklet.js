javascript:
var title = encodeURI(document.title);
var url = document.location.href;
var tag = encodeURI(window.prompt('Tags (comma separated'));
var note_source = encodeURI(`- Source: ${url}`);
window.open(`bear://x-callback-url/create?title=${title}&tags=${tag}&text=${note_source}`);
