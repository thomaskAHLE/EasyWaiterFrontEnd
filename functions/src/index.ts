import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
//import { UserRecord } from 'firebase-functions/lib/providers/auth';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

admin.initializeApp();
const json2csv = require("json2csv").parse;

exports.csvJsonReport = functions.https.onRequest((request, response) => {
    const reference = admin.firestore().collection("deliveredOrders"); 
    reference.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            //response.status(200).json(doc.data()); 
        });
    }).catch(function(error) {
        console.log("Error getting documents: ", error);});
    
    //var order = {'a': 0, 'b': 1};
    //response.status(200).json(orders); 
   
    /*const csv = json2csv(orders)
    response.setHeader(
        "Content-disposition",
        "attachment; filename=report.csv"
    )
    response.set("Content-Type", "text/csv")
    response.status(200).send(csv)*/

    //var report = {'a': 0, 'b': 1}; // your object
 })


