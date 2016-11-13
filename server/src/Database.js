"use strict";
const MongoClient = require("mongodb").MongoClient;


module.exports = exports = class Database {
    constructor( options ) {
        this.connectionUrl = options.connectionUrl;
    }


    connect() {
        return new Promise( ( resolve, reject ) => {
            MongoClient.connect( this.connectionUrl, ( err, db ) => {
                if ( err ) {
                    reject( err );
                } else {
                    this.db = db;
                    resolve();
                }
            } );
        } );
    }


    getRandomCat() {
        return new Promise( ( resolve, reject ) => {
            const collection = this.db.collection( "cats" );
            const randomNumber = Math.floor( Math.random() * 100 );
            collection.find().limit(-1).skip(randomNumber).next().then( ( data ) => {
                resolve( data );
            } );
            
        } )
    }


    saveCats( cats ) {
        return new Promise( ( resolve, reject ) => {
            const collection = this.db.collection( "cats" );
            collection.insertMany( cats, ( err, results ) => {
                if ( err ) {
                    reject( err );
                } else {
                    resolve( results )
                }
            } );
        } );
    }






    


};