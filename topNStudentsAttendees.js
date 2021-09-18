// get N keys with highest values
function getKeysWithHighestValue(o, n){
  var keys = Object.keys(o);
  keys.sort(function(a,b){
    return o[b] - o[a];
  })
  return keys.slice(0,n);
}

// remove duplicates of students names
function getUniqueNames(a) {
    return Array.from(new Set(a));
  }

  // start a dictionary with 0 attendance for each student
function initAttendanceMap(students) {
    var attendance_map = {};

    // init map of attendance
    for (const stu of students) {
    attendance_map[stu] = 0;
    }
    return attendance_map;
  }

  // Count attendance for students
  function fillAttendance(attendance_map, attendees){
    for(var i = 0; i < attendees.length; i++){
        unique_class = getUniqueNames(attendees[i])
     
          for(var j = 0; j < unique_class.length; j++){
              if(unique_class[j] in attendance_map){
                attendance_map[unique_class[j]] += 1
              }
        }	
     }
  }
  

  const topNStudentsAttendees = (students, attendees, N) => {
    // init attendance counter
     var attendance_map = initAttendanceMap(students);
     //count attendance
     fillAttendance(attendance_map, attendees);
    // get top N names
     var names = getKeysWithHighestValue(attendance_map, N)
  
   return names;
  }
  
  
  const students = ["Eden", "Refael", "Yoni", "Nitzan", "Hadas"];
  const attendees = [["Eden", "Refael", "Yoni", "Nitzan", "Hadas", "Ortal"], 
  ["Berry", "Nitzan", "Yoni", "Eden", "Hadas", "Ortal"], 
  ["Maxim", "Ortal", "Yoni", "Refael", "Nitzan", "Alex"], 
  ["Eden", "Andrew", "Yoni", "Nitzan", "Ortal","Nitzan"]];
  N = 3;
  
  var names = topNStudentsAttendees(students, attendees, N)
  console.log(names)
