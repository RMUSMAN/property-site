$(document).ready(function () {
      
                  $("#rentcity").change(function () {
             
                       $.ajax({
                    type: "POST",
                    url: "/getLocation/" + $("#rentcity").val(),
                    data: "{}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {

                        var options = "";
                      
                        for (var i = 0; i < data.length; i++) {
                            options += "<option>" + data[i].LOCATION + "</option>";
                        }
                        $("#rentloc").html(options);
                    }


                });

                });
             

                  $("#scity").change(function () {
             
                       $.ajax({
                    type: "POST",
                    url: "/getLocation/" + $("#scity").val(),
                    data: "{}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {

                        var options = "";
                      
                        for (var i = 0; i < data.length; i++) {
                            options += "<option>" + data[i].LOCATION + "</option>";
                        }
                        $("#sloc").html(options);
                    }


                });

                });


     

                  $("#commcity").change(function () {
             
                       $.ajax({
                    type: "POST",
                    url: "/getLocation/" + $("#commcity").val(),
                    data: "{}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {

                        var options = "";
                      
                        for (var i = 0; i < data.length; i++) {
                            options += "<option>" + data[i].LOCATION + "</option>";
                        }
                        $("#commloc").html(options);
                    }


                });

                });


            });
        
      