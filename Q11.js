//Calculate the average of the numbers in an array of numbers
arr = [1, 2, 3, 4, 5];
      
      function avg(arr) {
         var sum = 0;
    
         arr.forEach(function (item, idx) {
            
            sum += item;
         });
    
         return sum / arr.length;
      }
      console.log("Average of all the numbers is: "+avg(arr));