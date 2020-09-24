import 'antd/dist/antd.css';
// import "../styles.css";
// import 'antd/es/button/style/index.css';

// 

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    // check user is LOGIN at here
    // ex: my_name
    return <Component {...pageProps}  my_name="DAT_DAO"/>
}