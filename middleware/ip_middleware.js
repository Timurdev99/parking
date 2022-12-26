const requestIp = require('request-ip');

const ipMiddleware = (req, res, next) => {
    const clientIp = requestIp.getClientIp(req);
    const now = Date.now();
    const one_log = user_log.filter(({ip}) => ip === clientIp);
    console.log(one_log);
    if (one_log.length >= process.env.LIMIT_REQUEST - 1) {
        console.log((now - one_log[0].createdAt));
        if ((now - one_log[0].createdAt) < process.env.LIMIT_DURATION) {
            const result = {
                success: false,
                msg: 'You made too many requests in short duration',
            }
            res.json(result);
            user_log.splice(user_log.indexOf(one_log[0]), 1);
            user_log.push({ip: clientIp, createdAt: now});
            return;
        }
        user_log.splice(user_log.indexOf(one_log[0]), 1);
    }
    user_log.push({ip: clientIp, createdAt: now});

    next();
}

module.exports = ipMiddleware;