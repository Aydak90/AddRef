let currentURL = '';

function generateModifiedURL() {
  const url = document.getElementById('urlInput').value.trim();
  const selectedRef = document.getElementById('refChoice').value;

  if (!url) {
    document.getElementById('output').innerText = 'Merci d’entrer une URL.';
    document.getElementById('copyButton').style.display = 'none';
    return;
  }

  if (url.includes('?')) {
    currentURL = url + '&' + selectedRef;
  } else {
    currentURL = url + '?' + selectedRef;
  }

  document.getElementById('output').innerText = '✅ URL modifiée : ' + currentURL;
  document.getElementById('copyButton').style.display = 'inline-block';
}

function copyToClipboard() {
  navigator.clipboard.writeText(currentURL).then(() => {
    const btn = document.getElementById('copyButton');
    btn.innerText = '✅ Copié !';
    setTimeout(() => {
      btn.innerText = '📋 Copier le lien';
    }, 2000);
  });
}
