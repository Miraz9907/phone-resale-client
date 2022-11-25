import React from 'react';

const Blog = () => {
    return (
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 ">
                        Blog
                    </h2>
                    <p className="font-normal text-gray-500 sm:text-xl dark:text-gray-700">
                        A few Basic Question about Backend and Server. 
                    </p>
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                    <article className="p-6 rounded-lg border shadow-md ">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-black">
                        What are the different ways to manage a state in a React application?
                        </h2>
                        <p className="mb-5 font-normal text-black">
                            <strong>SQL</strong> These are RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). These databases have fixed or static or predefined schema. SQL database are Vertically Scalable and Its follows ACID property. The SQL databases are best suited for complex queries. <br /> <strong>Example</strong> MySQL, PostgreSQL, Oracle, MS-SQL Server etc. <br />
                            <strong>NoSQL</strong> These are Non-relational or distributed database system. NoSQL have dynamic schema. NoSQL databases are Horizontally scalable. 	Follows CAP(consistency, availability, partition tolerance. These databases are not so good for complex queries <br /> <strong>Example</strong> MongoDB, GraphQL, HBase, Neo4j, Cassandra etc. <br />
                        </p>
                    </article>
                    <article className="p-6 rounded-lg border shadow-md ">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-black">
                        How does prototypical inheritance work?
                        </h2>
                        <p className="mb-5 font-normal text-black">
                            <strong>JWT</strong> stands for JSON Wed Token. It is An open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provide. WTs are a good way of securely transmitting information between parties because they can be signed, which means you can be sure that the senders are who they say they are
                        </p>
                    </article>
                    <article className="p-6 rounded-lg border shadow-md ">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-black">
                        What is a unit test? Why should we write unit tests?
                        </h2>
                        <p className="mb-5 font-normal text-black">
                            <strong>javascript</strong> Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance <br />
                            <strong>NodeJs</strong> NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. <br />
                        </p>
                    </article>
                    <article className="p-6 rounded-lg border shadow-md ">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-black">
                        React vs. Angular vs. Vue?
                        </h2>
                        <p className="mb-5 font-normal text-black">
                        As is, node. js can process upwards of 1000 requests per second and speed limited only to the speed of your network card. Note that it's 1000 requests per second not clients connected simultaneously. It can handle the 10000 simultaneous clients without issue.
                        They handle 40K requests per second having Node.
                        </p>
                    </article>
                </div>
            </div>
    );
};

export default Blog;