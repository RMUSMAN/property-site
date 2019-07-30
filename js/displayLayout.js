
          
            $(document).ready(function(){

                

            $("#set li").click(function () {
                var sellId = $("#search-type").val($(this).attr("value"));
              //  alert($("#search-type").val());
                // $("#show").submit();
                $.ajax({
                    type: "POST",
                    url: "/getDetail/" + $("#search-type").val(),
                    data: "{}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        var row = data;
                      $('#dislike').hide();
                      $('#like').show();
                      $("#DetailP").show();
                      $('#name').empty();
                      $('#price').empty();
                      $('#area').empty();
                      $('#bedroom').empty();
                      $('#bathroom').empty();
                      $('#address').empty();
                      $('#description').empty();
                      $('#storeroom').empty();
                      $('#kitchen').empty();
                      $('#carparking').empty();
                      $('#khaaliId').empty();
                      $('#construction').empty();
                      $('#owner').empty();
                      $('#contact').empty();
                      $('#email').empty();
                      $('#purpose').empty();
                      $('#type').empty();
                      $('#city').empty();
                      $('#countlike').empty();
                      $('#Pid').attr('value', row.ID);
                      $('#purpose').append(row.PURPOSE);
                      $('#type').append(row.TYPE);
                      $('#city').append(row.CITY);
                      $('#name').append(row.NAME);
                      $('#picture').attr('src', row.MIMG);
                      $('#address').append(row.LOCATION);
                      $('#price').append(row.PRICE);
                      $('#description').append(row.DESCRIPTION);
                      $('#area').append(row.AREA);
                      $('#bedroom').append(row.BEDROOMS);
                      $('#bathroom').append(row.BATHROOMS);
                      $('#storeroom').append(row.STOREROOMS);
                      $('#kitchen').append(row.KITCHENS);
                      $('#carparking').append(row.CARPARKING);
                      $('#khaaliId').append(row.KHAALI_ID);
                      $('#construction').append(row.YEAR);
                      $('#owner').append(row.OWNER);
                      $('#contact').append(row.CONTACT);
                      $('#email').append(row.EMAIL);
                      $('#countlike').append(row.LIKES); 
                      $('#m1').attr('src', row.IMG1);
                      $('#m2').attr('src', row.IMG2);
                      $('#m3').attr('src', row.IMG3);
                      $('#m4').attr('src', row.IMG4);
                      $('#m5').attr('src', row.IMG5); 
                      $('#m6').attr('src', row.IMG6);
                      $('#m7').attr('src', row.IMG7);
                      $('#m8').attr('src', row.IMG8);
                      $('#m9').attr('src', row.IMG9);
                      $('#m10').attr('src', row.IMG10);
                      $('#m11').attr('src', row.IMG11);
                      $('#m12').attr('src', row.IMG12);
                    }
                });

              });


    $("#like").click(function () {

           $.ajax({
            type: "POST",
            url: "/feedback/likePage/" + $("#Pid").val(),
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data)
             {
               var row = data;
                $('#countlike').empty();
                $('#countlike').append(row.LIKES);
                 $('#like').hide();
                $('#dislike').show();

            }
        });
    });

    $("#dislike").click(function () {

       $.ajax({
            type: "POST",
            url: "/feedback/dislikePage/" + $("#Pid").val(),
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                 var row = data;
                $('#countlike').empty();
                $('#countlike').append(row.LIKES);
                 $('#dislike').hide();
                $('#like').show();
            }
        });
    });

 $('img.view').click(function(){
    $('.largeImage').attr('src',$(this).attr('src').replace('thumb','large'));
    $('#description').html($(this).attr('alt'));
});

  $(".arrow-left").click(function(){
        $(".scroll").animate({scrollLeft: "-="+850});
    });
    $(".arrow-right").click(function(){
        $(".scroll").animate({scrollLeft: "+="+850});
    });

//////////////end jquery/////////
   });


  