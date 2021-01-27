const admin = require('./node_modules/firebase-admin');
const serviceAccount = require("./serviceAccountKey.json");
const data = require("./Animals.json");
const collectionKey = "animals"; //name of the collection

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
<<<<<<< HEAD
  databaseURL: "driver-alert-d439a.firebaseio.com"
=======
  databaseURL: "YOUR_DATABASE_URL"
>>>>>>> 6125b0cf499e34e1caa422cab8e021bc4d05bb91
});

const firestore = admin.firestore();
const settings = {timestampsInSnapshots: true};

firestore.settings(settings);

if (data && (typeof data === "object")) {
Object.keys(data).forEach(docKey => {
 firestore.collection(collectionKey).doc(docKey).set(data[docKey]).then((res) => {
    console.log("Document " + docKey + " successfully written!");
}).catch((error) => {
   console.error("Error writing document: ", error);
});
});
}
