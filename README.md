This is a starter template for [Learn Next.js](https://nextjs.org/learn).
- https://www.freecodecamp.org/news/an-introduction-to-next-js-for-everyone-507d2d90ab54/#:~:text=Next.,building%20your%20next%20web%20application.
- https://github.com/datagit/nextjs-intro-example
- https://github.com/datagit/styled-jsx


- Noted
```
    nextjs best practices
        https://github.com/datagit/nextjs-best-practices
    Server side rerendeing: Fetch data from external API
        getServerSideProps
    Client side rerendeing: React Hooks library for data fetching
        https://swr.vercel.app/
        condition data fetching
            conditional: https://swr.vercel.app/docs/conditional-fetching#conditional
            dependent: https://swr.vercel.app/docs/conditional-fetching#dependent
    debug javascript with PHPStrom
        client: https://www.evernote.com/shard/s436/client/snv?noteGuid=7dd35fba-f6ea-4495-85f1-d18214fc784f&noteKey=ab549296f7a0d104&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs436%2Fsh%2F7dd35fba-f6ea-4495-85f1-d18214fc784f%2Fab549296f7a0d104&title=Run%252FDebug%2BConfigurations%2Band%2Bnextjs-tutorial%2B%25E2%2580%2593%2Bpackage.json
        server: https://www.evernote.com/shard/s436/client/snv?noteGuid=9e2163e0-1568-480f-b8ed-fc6e51f4ccd2&noteKey=d25aa38c4c3b7987&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs436%2Fsh%2F9e2163e0-1568-480f-b8ed-fc6e51f4ccd2%2Fd25aa38c4c3b7987&title=Run%252FDebug%2BConfigurations%2Band%2Bnextjs-tutorial%2B%25E2%2580%2593%2Bpackage.json
    debug with VS code: https://dev.to/vvo/5-steps-to-debugging-next-js-node-js-from-vscode-or-chrome-devtools-497o
        .vscode/launch.json
            "configurations": [
            
                {
                    "type": "node",
                    "request": "attach",
                    "name": "Launch Program",
                    "skipFiles": [
                        "<node_internals>/**"
                    ],
                    "protocol": "inspector",
                    "port": 9229
                }
            ]
```
```js config env: https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser

```
```js 
// https://swr.vercel.app/docs/with-nextjs#client-side-data-fetching
export async function getStaticProps() {
  // `getStaticProps` is invoked on the server-side,
  // so this `fetcher` function will be executed on the server-side.
  const posts = await fetcher('/api/posts')
  return { props: { posts } }
}
function Props (props) {
  // Here the `fetcher` function will be executed on the client-side.
  const { data } = useSWR('/api/posts', fetcher, { initialData: props.posts })
  // ...
}
```
``` testing: guide >> https://medium.com/frontend-digest/setting-up-testing-library-with-nextjs-a9702cbde32d
    npm install jest jest-dom @testing-library/react @testing-library/jest-dom @testing-library/dom babel-jest
   .babelrc
   	components/Title.js
   	jest.config.js
    tests/
    ������ components
    ��        ������ title.test.js
    ������ setup.js
```
``` styled-jsx: https://github.com/datagit/styled-jsx

```
#### packages
- https://underscorejs.org/#isEmpty
- https://react-hook-form.com/get-started
- https://github.com/amarofashion/react-credit-cards

- Technical team
```
api
	https://www.npmjs.com/package/parse-server
frontend web
	https://nextjs.org/learn/basics/create-nextjs-app => common
	https://react-hook-form.com/  => validation
	https://www.npmjs.com/package/yup => validation
	https://react-redux.js.org/api/hooks
admin web
	https://ant.design/
design from PSD
	https://app.zeplin.io/
```


```
https://operator.tanomel.scrum-dev.com/
    chicuong.au@grevo.net/Aa123456@
https://tanomel.scrum-dev.com/signin
    chicuong.au@gree.net/Aa123456@
```