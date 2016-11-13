"use strict";
const request = require( "request" );
const Xml = require( "xml2json" );

module.exports = exports = class Cats {
    constructor() {

    }

    getMultipleCats( numberOfCats ) {
        return new Promise( ( resolve, reject ) => {
            request( `http://thecatapi.com/api/images/get?format=xml&results_per_page=${numberOfCats}&size=500`, ( err, response ) => {
                if ( err ) {
                    reject( err );
                } else {
                    const cats = JSON.parse( Xml.toJson( response.body ) );
                    resolve( cats.response.data.images.image );
                }
            } );
        } );

    }

    getACat() {
        return new Promise( ( resolve, reject ) => {
            request( "http://thecatapi.com/api/images/get", ( err, response ) => {
                if ( err ) {
                    resolve();
                } else {
                    resolve( response.request.uri.href );
                }
            } );
        } );
    }
};