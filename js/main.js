
var trainLines = {
 lineN: ['Times Square', '34th', '28thOnN', '23rdOnN', 'Union SquareOnN', '8thOnN'],          // 6 stops, intersect at index[4]
 lineL: ['8thOnL', '6th', 'Union SquareOnL', '3rd', '1st'],                                   // 5 stops, intersect at index[2]
 line6: ['Grand Central', '33rd', '28thOn6', '23rdOn6', 'Union SquareOn6', 'Astor Place']     // 6 stops, intersect at index[4]
};

  var start = document.getElementById('start');
  var end = document.getElementById('end');

  end.addEventListener('change', function(e) {
    e.preventDefault;
    start = trainLines.lineN.indexOf(start.value);
    end = trainLines.lineN.indexOf(end.value);
    console.log('value gathered due to eventListener');
  });

  var stops = function(){
  start = trainLines.lineN.indexOf(start.value);
  end = trainLines.lineN.indexOf(end.value);
  stops = end - start;
  console.log('stops funtion')
  //result = Math.abs(result);
  document.getElementById(‘result’).innerHTML = tripLength;

  // var stops = end - start;
  // result = Math.abs(result);
  // document.getElementById(‘result’).innerHTML = tripLength;

  //var changes = ;// 0 or 1

  tripLength function(){
  return ('Your journey will include ' + stops + 'stops and ' + changes 'changes.')
  console.log('result')
  };
 
};

//if //selection includes the Interchange, so [lineN,4],[lineL,2], [lineN,4] //syntax?!//, then change lines - return value of stop and new line chosen - will always be 1 or 0 if they don't change.