export default function StyleJsxOne(props) {
    return (
        <div>
            <p>test style-jsx</p>
            <style jsx>{`
p {
    color: red;
}
`}</style>
            <style jsx global>{`
      body {
        background: red
      }
    `}</style>
        </div>
    );
}