let currentURL = '';

document.getElementById('urlInput').addEventListener('input', function () {
  const url = this.value.trim();
  const ref = 'ref=refboyonchained.eth';

  if (!url) {
    document.getElementById('output').innerText = '';
    document.getElementById('copyButton').style.display = 'none';
    return;
  }

  if (url.includes('?')) {
    currentURL = url + '&' + ref;
  } else {
    currentURL = url + '?' + ref;
  }

  document.getElementById('output').innerText = 'URL modifiée : ' + currentURL;
  document.getElementById('copyButton').style.display = 'inline-block';
});

function copyToClipboard() {
  navigator.clipboard.writeText(currentURL).then(() => {
    const btn = document.getElementById('copyButton');
    btn.innerText = '✅ Copié !';
    setTimeout(() => {
      btn.innerText = '📋 Copier le lien';
    }, 2000);
  });
}
