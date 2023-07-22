['input', 'change'].forEach(evt =>
  document.getElementById('imageUpload').addEventListener(evt, function (e) {
    var reader = new FileReader();

    reader.onload = function (event) {
      document.getElementById('backgroundImage').src = event.target.result;
    };

    reader.readAsDataURL(e.target.files[0]);
  })
);

['title', 'description', 'health', 'aggro', 'shield', 'cardTypeInput'].forEach(
  id =>
    document.getElementById(id).addEventListener('input', function () {
      var value = document.getElementById(id).value;
      var elementId = 'card' + id.charAt(0).toUpperCase() + id.slice(1);
      if (elementId === 'cardCardTypeInput') elementId = 'cardType';
      document.getElementById(elementId).innerText = value;
    })
);

document.getElementById('resetButton').addEventListener('click', function () {
  [
    'imageUpload',
    'title',
    'description',
    'health',
    'aggro',
    'shield',
    'cardTypeInput'
  ].forEach(id => (document.getElementById(id).value = ''));
  [
    'cardTitle',
    'cardDescription',
    'cardHealth',
    'cardAggro',
    'cardShield',
    'cardType'
  ].forEach(id => (document.getElementById(id).innerText = ''));
  document.getElementById('backgroundImage').src = '';
});

document
  .getElementById('downloadButton')
  .addEventListener('click', function () {
    html2canvas(document.getElementById('card'), { scale: 2 }).then(function (
      canvas
    ) {
      var link = document.createElement('a');
      link.download = 'card.jpeg';
      link.href = canvas.toDataURL();
      link.click();
    });
  });
