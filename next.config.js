module.exports = {
    env: {
        // can get from server side and client side
        CIRCLE_NODE_TOTAL: 100,
        WRONG2: process.env.WRONG,
        ENV_NAME: process.env.ENV_NAME,
    },
}