"use strict";
const Express = require( "express" );
const PORT = process.env.PORT || 8080;
module.exports = exports = class Server {
    constructor( options ) {
        this.app = Express();
        this.db = options.db;
        
    }


    start() {
        return new Promise( ( resolve, reject ) => {
            this.app.get( "/cats", ( req, res ) => {
                this.db.getRandomCat().then( ( kitty ) => {
                    res.send( kitty );
                } );
            } );

            this.app.get( "/cats/:catNumber", ( req, res ) => {
                const cats = req.params.catNumber
                let catPromiseArray = [];

                for( let i=0; i<cats; i++ ) {
                    catPromiseArray.push( this.db.getRandomCat() );
                }
                Promise.all( catPromiseArray ).then( ( allTheCats ) => {
                    res.send( allTheCats );
                } );
            } );

            this.app.listen( PORT, () => {
                console.log( `Server started on port ${PORT}` );
                resolve( PORT );
            } );
        } );
    }
};