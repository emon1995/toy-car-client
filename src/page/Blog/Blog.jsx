import { useLocation } from "react-router-dom";

const Blog = () => {
  const location = useLocation();

  if (location.pathname === `/blog`) {
    document.title = "RaceToyZone | Blog";
  }

  return (
    <div className="my-20 mx-4">
      <div className="mb-2">
        <h1 className="font-bold text-lg">
          Q: What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h1>
        <p>
          A: An access token and a refresh token are both types of tokens used
          in OAuth 2.0 authorization. An access token is a short lived token
          that is used to access protected resources. A refresh token is a long
          lived token that can be used to request a new access token when the
          old one expires.
          <br />
          Store access token and refresh tokens securely. use a secure storage
          mechanism, such as browser local storage or a web application
          database. Encrypt access token and refresh token before storing them.
        </p>
      </div>
      <div className="mb-2">
        <h1 className="font-bold text-lg">
          Q: Compare SQL and NoSQL databases?
        </h1>
        <p>
          A: SQL and NoSQL are two different types of databases. SQL database
          are relational database. while NoSQL database are non-relational
          database.
          <br />
          SQL database:
          <br />
          1. Use Structured Query Language(SQL) to store and retrieve data.
          <br />
          2. Are typically organized in tables, with each table containing rows
          and columns.
          <br />
          3. Are good for storing and retrieving structured data, such as
          customer information or product inventory.
          <br />
          NoSQL database:
          <br />
          1. Can be organized in a variety of ways, such as document, key-value,
          or graph database.
          <br />
          2. NoSQL database are flexible schema.
          <br />
          3. They can store unstructured, semi structured data.
        </p>
      </div>
      <div className="mb-2">
        <h1 className="font-bold text-lg">
          Q: What is express js? What is Nest JS?
        </h1>
        <p>
          A: Express Js is a minimalist and flexible framework that is easy to
          use and has a large community of developers. NestJS is a newer
          framework that provides additional features such as dependency
          injection, a modular architecture, and an intuitive cli.
        </p>
      </div>
      <div className="mb-2">
        <h1 className="font-bold text-lg">
          Q: What is MongoDB aggregate and how does it work?
        </h1>
        <p>
          A: MongoDB aggregation is a powerful feature that allows you to
          perform advanced data analysis and transformation operations on
          MongoDB collections. It provides a set of operators to manipulate data
          and perform operations like filtering, grouping, sorting, joining and
          computing aggregations.
        </p>
      </div>
    </div>
  );
};

export default Blog;
