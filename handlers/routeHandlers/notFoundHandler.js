
// module scaffolding
const handler = {};

handler.notFoundHandler = () => {
    console.log('Not found')
};
handler.notFoundHandler = (requestProperties, callBack) => {
    callBack(404, {
        message: 'Your requested url not found'
    });
};


module.exports = handler;