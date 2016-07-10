


//cache all jquery objects in variables
var $button = $('.button');
var $wrapper = $('.wrapper');
var $bones = $('.bones');
var block = $("<td class='block'></td>");
var reset = $('.reset');


var click = function() {

  $bones.empty();

  //prompt user for input on table size
  var inp = prompt("Enter a number");

  if (inp < 101) {

    // iterate through user input creating row for each number
    for (var i = 0; i < inp; i++) {

      var $rows = $("<tr class='rows'></tr");

      //for each row, loop through input again appending a column
      for (var x = 0; x < inp; x++) {

        var block = $("<td class='block'></td>");

        $rows.append(block);

        block.mouseenter(function() {

          //block turns black when mouse enters
          $(this).css('background-color', '#0099e6');

        });

      };
      //append the rows with columns to the table
      $bones.append($rows);

    };

  } else {

    window.alert("Please choose a number between 1 and 100");

  };

};


$button.click(click);
