let messerr=document.querySelector('#messerr');
var user = firebase.auth().currentUser;
let lawer=document.querySelector('#lawer');
let immig=document.querySelector('#immig'); 
let userName=document.querySelector('#userName'); 
let chat=document.querySelector('#chat');
const db=firebase.firestore();

//create email method
function createEmail(){
  let email=document.querySelector('#email').value;
  let password=document.querySelector('#password').value;  
  if(immig.checked || lawer.checked && userName !=""){
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function myerr(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  messerr.textContent=errorMessage;
// ...
});
}else{
  messerr.textContent="Please Fill all Fields!";
}

//inside create user method i check if user lawer or immigrator
//and give the user name
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    if(lawer.checked){
      user.updateProfile({
        displayName: lawer.value+": "+userName.value})
    }else if(immig.checked){
      user.updateProfile({
        displayName: immig.value+": "+userName.value})
    }  
    messerr.textContent='Acoount Already Created ! :)';
    // User is signed in.
  } else {
    // No user is signed in.
  }
});
}

//this method for sign in
 function authEmail(){
  let emailvalue=document.querySelector('#email').value;
  let passwordvalue=document.querySelector('#password').value;
  
  //here i set values of email and pass to make user always sign in
if(emailvalue != "" && passwordvalue !=""){
  window.localStorage.setItem('x',emailvalue); 
  window.localStorage.setItem('y',passwordvalue);
} 
  var email=window.localStorage.getItem('x');
  var password=window.localStorage.getItem('y');
 
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    messerr.textContent=errorMessage;

    // ...
  })
  messerr.textContent='waiting...'
}

//this method to save the auth page in localstorage
function savepage(){
  var mylog=window.localStorage.getItem('z')
return mylog;
}

try{
authEmail();
}catch(err){console.log(err.message)}


// setTimeout(function (){
// if (user) {
//   if(window.location.href == savepage()){
//   window.open('./index.html','_self');
//   }
//   // User is signed in.
// } else {
//   console.log('not signed');
//     if(window.location.href != savepage()){
//       window.open('./firebase.html','_self');
//       }    


  // No user is signed in.
// }
//   },2000);
let forbidden=window.localStorage.getItem('prevent');

//here i check if user in auth page and signed in make him enter to app
if(forbidden==1 && window.location.href == savepage()){
  window.open('./index.html','_self');
}
//if user not signed in get him to auth page
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      if(window.location.href == savepage()){
  window.open('./index.html','_self');
  window.localStorage.setItem('prevent',1);


  }
    // User is signed in.
  } else {
    if(window.location.href != savepage()){
      window.open(savepage(),'_self');
      }
      window.localStorage.setItem('prevent',0);  
    // No user is signed in.
  }
});
//sign out method
function signOut(){
  firebase.auth().signOut().then(function() {
    window.localStorage.setItem('prevent',0);  
    window.localStorage.setItem('x','');
    window.localStorage.setItem('y','');
    window.open(savepage(),'_self');
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
}



function getUserName(){
  return firebase.auth().currentUser.displayName;
}
// Saves a new message to your Cloud Firestore database.
function saveMessage() {
  var messageText=document.querySelector('#messages').value;
  // Add a new message entry to the database.
  return firebase.firestore().collection('messages').add({
    name: getUserName(),
    text: messageText,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).catch(function(error) {
    console.error('Error writing new message to database', error);
  });
}


function cleartext(){
  document.querySelector('#messages').value=null;
}
// let msbutton=document.querySelector('#msbutton');


// Loads chat messages history and listens for upcoming ones.
function loadMessages() {
  // Create the query to load the last 12 messages and listen for new ones.
  var query = firebase.firestore()
                  .collection('messages')
                  .orderBy('timestamp','asc')
                  .limitToLast(200); //last 200 messgae of orderby 
  
  // Start listening to the query.
  query.onSnapshot(function(snapshot) {
    snapshot.docChanges().forEach(function(change) {
      if (change.type === 'removed') {
        // deleteMessage(change.doc.id);
      } else {
        var message = change.doc.data();
        // displayMessage(message.text);
        render(message);
      }
    });
  });
}

loadMessages();




//this function to make scroll always down in chat
function updateScroll(){
  chat.scrollTop = chat.scrollHeight;
}
//this render to put the values inside elements from then it works when message send or save
function render(doc){
  setTimeout(updateScroll,1000);
  let li = document.createElement('ul');
  let txt = document.createElement('span');
  let time = document.createElement('span');
  let name = document.createElement('span');
  time.setAttribute('class','timestamp');
  name.setAttribute('class','username');
  txt.setAttribute('class','txtchat');

  li.setAttribute('data-id', doc.id);
  txt.textContent = doc.text;
  name.textContent = doc.name;
  time.textContent = "("+doc.timestamp.toDate().toDateString()+")";

  li.appendChild(name);
  li.appendChild(txt);
  li.appendChild(time);
  chat.appendChild(li);
}

//here i make enter key send messgae
var snd=document.querySelector('#messages');
snd.addEventListener('keyup',function pressEnter(event){
  if(event.keyCode ===13){
    saveMessage();
    cleartext();
    updateScroll();
    event.preventDefault();
  }
  });






