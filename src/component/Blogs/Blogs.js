import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div >
            <h1 className='mt-5 ml-5' >MY Blogs</h1>
            <div className='blogs'>
                <h5 >1. Difference between Nodejs and JavaScript : </h5>
                <p >Javascript : Javascript is a programming language that is used for writing scripts on the website. </p>
                <p >NodeJS : NodeJS is a Javascript runtime environment. </p>
                <p >Javascript : Javascript is used in frontend development. </p>
                <p >NodeJS : Nodejs is used in server-side development. </p>
            </div>

            <div className='blogs'>
                <h5 >2. Differences between SQL and NoSQL : </h5>
                <p >SQL : Tables with fixed rows and columns </p>
                <p >NoSQL : Document: JSON documents, Key-value: key-value pairs, Wide-column: tables with rows and dynamic columns, Graph: nodes and edges </p>
                <p >SQL : Oracle, MySQL, Microsoft SQL Server, and PostgreSQL </p>
                <p >NoSQL : Document: MongoDB and CouchDB, Key-value: Redis and DynamoDB, Wide-column: Cassandra and HBase, Graph: Neo4j and Amazon Neptune </p>

            </div>

            <div className='blogs'>
                <h5 >3. JWT (JSON Web Token) : </h5>
                <p >JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it’s an encoded JSON containing a set of claims and a signature. </p>
                <p >Header :  The header consists of two parts:
                    The signing algorithm being used
                    The type of token, which is in this case mostly “JWT”
                    Payload : The payload usually contains the claims (user attributes) and additional data like issuer, expiration time, and audience.

                    Signature : This is typically a hash of the header and payload sections of the JWT. The algorithm which is used to create the signature is the same algorithm mentioned in the header section of the JWT.</p>




            </div>

        </div >
    );
};

export default Blogs;