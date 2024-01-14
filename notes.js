document.addEventListener("DOMContentLoaded", function () {
    // Initialize Firebase with your configuration
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID",
    };
  
    firebase.initializeApp(firebaseConfig);
  
    // Load existing notes when the page loads
    loadNotes();
  });
  
  function loadNotes() {
    const notesContainer = document.getElementById("notes-container");
    notesContainer.innerHTML = "";
  
    // Reference to the "notes" collection in Firebase
    const notesCollection = firebase.firestore().collection("notes");
  
    // Retrieve notes from Firebase
    notesCollection.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const noteElement = document.createElement("div");
        noteElement.textContent = doc.data().text;
        notesContainer.appendChild(noteElement);
      });
    });
  }
  
  function addNote() {
    const noteInput = document.getElementById("note-input");
    const noteText = noteInput.value.trim();
  
    if (noteText !== "") {
      // Reference to the "notes" collection in Firebase
      const notesCollection = firebase.firestore().collection("notes");
  
      // Add the new note to Firebase
      notesCollection.add({
        text: noteText,
      })
      .then(() => {
        // Reload and display notes
        loadNotes();
  
        // Clear the input field
        noteInput.value = "";
      })
      .catch(error => console.error("Error adding note:", error));
    }
  }
  