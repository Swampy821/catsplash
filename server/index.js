"use strict";
const url = process.env.MONGODB || "mongodb://localhost:32768/cats";
const Database = require( `${__dirname}/src/Database` );
const Cats = require( `${__dirname}/src/Cats` );
const Server = require( `${__dirname}/src/Server` );

const db = new Database( {
    connectionUrl: url
} );
const cats = new Cats();

const server = new Server( {
    db
} );


db.connect().then( () => {
    return server.start();
} )
.then( () => {
    
} );




// db.connect().then( () => {
//     let promiseArray = [];
//     for( var i=0; i< 15; i++ ) {
//         promiseArray.push( cats.getMultipleCats( 250 ) );
//     }
//     return Promise.all( promiseArray );
// } )
// .then( ( cats ) => {
//     let catArray = [];
//     cats.forEach( ( subCats ) => {
//         catArray.push( db.saveCats( subCats ) );
//     } );
//     return Promise.all( catArray );
// } )
// .then( () => {
//     let promiseArray = [];
//     for( var i=0; i< 15; i++ ) {
//         promiseArray.push( cats.getMultipleCats( 250 ) );
//     }
//     return Promise.all( promiseArray );
// } )
// .then( ( cats ) => {
//     let catArray = [];
//     cats.forEach( ( subCats ) => {
//         catArray.push( db.saveCats( subCats ) );
//     } );
//     return Promise.all( catArray );
// } )
// .then( ( results ) => {
//     console.log( `Saved ${30*250} cats!` );
//     process.exit();
// } )
// .catch( ( err ) => {
//     console.error( err );
// } );













