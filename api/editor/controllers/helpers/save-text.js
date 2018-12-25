function saveText(docName, text, username, textModel) {
  const newText = new textModel({ docName, text, username });
  return newText.save();
}

module.exports = saveText;
