var firebaseConfig = {
      apiKey: "AIzaSyBEo4RZDvT_ORHzkbo9uE2mVTpj7K2UYds",
      authDomain: "kwitter-efe4a.firebaseapp.com",
      databaseURL: "https://kwitter-efe4a-default-rtdb.firebaseio.com",
      projectId: "kwitter-efe4a",
      storageBucket: "kwitter-efe4a.appspot.com",
      messagingSenderId: "888861290179",
      appId: "1:888861290179:web:8d95e234ffa397c287bc76"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room_names"+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML +=row;
      });
  });
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}