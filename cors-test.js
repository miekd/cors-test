function main() {
  console.log('main function');
  console.log('ajax request to the resource which will require cors enabled');
  $.ajax({
    dataType: 'json',
    url: 'http://localhost:3001/api/photos/album/portraits',
    success: function (data) {
      console.log('log response on success');
      console.log(data);
    },
  });
}
