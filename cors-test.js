function main() {
  const domain = 'http://localhost:3001';

  $.ajax({
    dataType: 'json',
    url: domain + '/api/photos/album/portraits',
    success: function (data) {
      console.log(data);
    },
  });
}
