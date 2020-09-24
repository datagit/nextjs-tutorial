const common = require ('../utility/common');

const Button = (props) => (
    <button className={'large' in props && 'large'}>
        {props.children}
        <style jsx>{`
            button {
                padding: 20px;
                background: #eee;
                color: #999;
            }
            .large {
                padding: 50px;
            }
        `}</style>
    </button>
);
export default function StyleJsxOne(props) {

    console.log('sum1');
    console.log(common.sum1(10,20));
    common.consoleLogHelper("string")
    //console.log(common.sum1(2,3));
    let isLoading = true;
    let error = undefined;
    let data = ['finish doc', 'submit pr', 'nag dan to review'].map(item => {
        let alt = `item index ${item}`;
        return (
            <>
                <img src='https://dummyimage.com/100x80/000/fff' id={item} alt={alt} />
                <br />
            </>
        )
    });
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
        background: none;
      }
    `}</style>
            <Button>Hi</Button>
            <Button large>Big</Button>
            {isLoading && 'Loading...'}
            <br />
            {error || data}
            <div>
                <div />

                <div></div>

                <div>{false}</div>

                <div>{null}</div>

                <div>{undefined}</div>

                <div>{true}</div>

            </div>
        </div>
    );
}