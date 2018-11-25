const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.csvJsonReport = functions.https.onRequest((request, response) => {
    const db = admin.firestore()
    var ordersRef = db.collection('deliveredOrders')
    var orderObserve = ordersRef.get() 
    .then(querySnapshot => {
       const orders = []
       querySnapshot.forEach(doc => {
           orders.push( doc.data() )
       });
     //response.status(200).json(orders);


    const json2csv = require("json2csv").parse;
    const csv = json2csv(orders)
    response.setHeader(
        "Content-disposition",
        "attachment; filename=EmployeeReport.csv"
    )
    response.set("Content-Type", "text/csv")
    response.status(200).send(csv)

 })}); 

 exports.csvStaffJsonReport = functions.https.onRequest((request, response) => {
    const db = admin.firestore()
    var ordersRef = db.collection('closedTables')
    var orderObserve = ordersRef.get() 
    .then(querySnapshot => {
       const orders = []
       querySnapshot.forEach(doc => {
           orders.push( doc.data() )
       });
     //response.status(200).json(orders);


    const json2csv = require("json2csv").parse;
    const csv = json2csv(orders)
    response.setHeader(
        "Content-disposition",
        "attachment; filename=SalesReport.csv"
    )
    response.set("Content-Type", "text/csv")
    response.status(200).send(csv)

 })}); 