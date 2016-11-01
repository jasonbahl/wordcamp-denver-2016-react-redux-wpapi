import axios from 'axios';

import * as siteActions from '../sites';

import {
    ARTICLE_SET_ACTIVE,
    ARTICLES_REQUEST,
    ARTICLES_RECEIVE,
    ARTICLES_REQUEST_FAILURE
} from '../../action-types';

function requestArticles() {
    return {
        type: ARTICLES_REQUEST
    }
}

function receiveArticles( articles ) {
    return {
        type: ARTICLES_RECEIVE,
        articles
    }
}

function requestArticlesFailure( error ){
    return {
        type: ARTICLES_REQUEST_FAILURE,
        error
    }
}

export function setActiveArticle( uniqueId ) {
    return {
        type: ARTICLE_SET_ACTIVE,
        activeArticle: ( false !== uniqueId ) ? uniqueId : false
    }
}

export function articlesFetch( sites ) {

    return function( dispatch ) {

        if ( sites ) {

            sites.items.map( ( site, i ) => {

                if ( 0 === i ) {
                    dispatch( siteActions.setActive( site ) );
                }

                dispatch( requestArticles( site ) );

                let endpoint = ( site.url ) ? site.url : false;

                if ( false !== endpoint ) {

                    return axios.get(endpoint + '/wp-json/wp/v2/posts?per_page=20')

                        .then(function (response) {

                            if ( response.data ) {

                                let articles = [];
                                let uniqueId = false;

                                // Map over the data
                                response.data.map( ( article, i ) => {

                                    // add the site data to the article for filter sake
                                    article.site = site;
                                    article.uniqueIndex = site.id + '-' + article.id;
                                    article.index = i;
                                    article.timezone = site.timezone;

                                    if ( 0 === i && site.id === 3 ) {
                                        uniqueId = article.uniqueIndex;
                                    }

                                    // Add the article to the articles array
                                    articles.push( article );
                                    return false;

                                });

                                // dispatch that the articles are received
                                dispatch(receiveArticles( articles ));

                                // dispatch the initial activeArticle
                                if ( false !== uniqueId ) {
                                    dispatch(setActiveArticle(uniqueId));
                                }
                                return false;

                            } else {

                                console.log('there was a problem fetching articles...');
                                return false;

                            }

                        })
                        .catch(function ( error ) {

                            console.log( error );
                            dispatch( requestArticlesFailure( error ) )

                        })

                } else {

                    console.log( 'endpoint is not valid ' + endpoint );
                    return false;

                }

            })


        } else {

            console.log( 'no sites exist, cannot fetch articles' );

        }


    }


}