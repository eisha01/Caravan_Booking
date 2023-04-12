$(document).ready(function () {
  // INSERT data into Caravans table
  $('#insert-caravan').click(function () {
    $.ajax({
      url: '/insert-caravan',
      type: 'POST',
      data: {
        Name: $('#Name').val(),
        Description: $('#Description').val(),
        Type: $('#Type').val(),
        Manager: $('#Manager').val(),
        AccommodationCount: $('#AccommodationCount').val(),
        AdditionalExtension: $('#AdditionalExtension').val(),
      },
      success: function (res) {
        res.alert('Data inserted into Caravans table successfully');
      },
      error: function (error) {
        console.log(error);
      },
    });
  });
});
