var firebaseConfig = {
    apiKey: "AIzaSyDIF-mYsnu6npME1WvqpjOSqlFT6eWrkqA",
    authDomain: "myproject-9b09c.firebaseapp.com",
    projectId: "myproject-9b09c",
    storageBucket: "myproject-9b09c.appspot.com",
    messagingSenderId: "1093334306640",
    appId: "1:1093334306640:web:977d2ec33b2a9eb30ea655",
    measurementId: "G-8MHN79KQG4"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var dbref=firebase.database().ref().child("students")
  function insertion()
  {
      var sname=document.getElementById("sname").value
        var rollno=document.getElementById("rollno").value
        console.log(rollno);
        dbref.child(rollno).set({
            sname:sname,
            rollno:rollno
        })
        console.log("Inserted");
 }
 function deletion(){
     var id=window.prompt("Enter the roll no to be deleted");
     dbref.child(id).remove()
     console.log(id);
     console.log("Deletion successful");
 }
 function update()
 {
     var id=document.getElementById("rollno").value
     var newname=document.getElementById("sname").value
     dbref.child(id).update({sname:newname})
     console.log("Data updated succesfully");
 }
 function display()
 {
     console.log("Dispalying...");
     dbref.on("value",(snap)=>
     {
        
        table=document.createElement("TABLE");
        table.border="1"
row=table.insertRow(-1)
cellH1=row.insertCell(-1)
cellH2=row.insertCell(-1)
cellH1.innerHTML="NAME"
cellH2.innerHTML="ROLLNO"
        snap.forEach((data)=>
        {
    
      row1=table.insertRow(-1);
      cell1=row1.insertCell(-1)
      cell2=row1.insertCell(-1)
     cell1.innerHTML=data.val().sname
      cell2.innerHTML=data.val().rollno
    })
    var divtab=document.getElementById("div");
    divtab.append(table);
    console.log(data);
})
    
 }

    

   