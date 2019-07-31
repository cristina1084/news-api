$(document).ready(function(){             //jQuery
    $("#load").hide();
    $("#tp1,#cat li").click(function(){  
        var val = $(this).text();
        console.log(val);
        
        if (val == 'Technology') u = '&category=technology&';
        else if (val == 'Business') u = '&category=business&';
        else if (val == 'Sports') u = '&category=sports&';
        else if (val == 'Entertainment') u = '&category=entertainment&';
        else if (val == 'Top News') u ='&';

        $.ajax({                        //AJAX format
            type:"GET",                 //type mentions the method to be used 
            url :"https://newsapi.org/v2/top-headlines?country=in"+u+"apiKey=51b74dfd67a842cea5653055d883f63c",         //can provide API link
            beforeSend : function(){
                $("#load").show();
            },
            success : function(data){
                $("#load").hide();
                //console.log(data);
                var articles = data['articles'];
                console.log(articles);
                var j = 1;
                var table = "<table class='table table-bordered'> <thead class='thead-dark'> <tr> <th> Sl.No. </th> <th> Title </th> <th> Description </th> <th> Image </th> <th> URL </th> </thead>";
                for (var i in articles){  //Array traversal
                    table+= "<tr> <td>" + j + "</td>";
                    table+= "<td>" + articles[i].title + "</td>";
                    table+= "<td>" + articles[i].description + "</td>";
                    table+= "<td> <img src=" + articles[i].urlToImage + " style='width:200px;height:200px;'> </td>";
                    table+= "<td> <a href=" + articles[i].url + "> Read More </a></td> </tr>";
                    j++;
                }
                table+="</table>";
                $(".results").html(table);   
            }         
        });
        
    });
});