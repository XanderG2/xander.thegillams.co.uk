function compile() {
  const markdown = document.getElementById("markdown");
  const code = document.getElementById("code").contentWindow.document;

  document.body.onkeyup = function() {
    code.open();
    code.writeln(marked(markdown.value));
    code.close();
  };
}

compile();
