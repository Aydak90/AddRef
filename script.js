function modifyURL() {
  const url = document.getElementById('urlInput').value.trim();
  const text = document.getElementById('textToAdd').value.trim();

  if (!url || !text) {
    alert("Merci de remplir l'URL et le texte à ajouter.");
    return;
  }

  let modifiedURL;
  if (url.includes('?')) {
    modifiedURL = url + '&' + text.replace(/^\?/, '');
  } else {
    modifiedURL = url + '?' + text.replace(/^\?/, '');
  }

  document.getElementById('output').innerText = "URL modifiée : " + modifiedURL;
}
