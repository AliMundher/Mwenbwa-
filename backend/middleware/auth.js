const jwt = require('jsonwebtoken');


const auth = (req, res, next) => {
    try {
        // const token = req.cookies.token;
        const token = req.header('x-auth-token');
        if (!token)
            return res.status(401).json({ mesEr: "No unauthorized" })

        const verified = jwt.verify(token, process.env.JWT_SECRET);

        if (!verified)
            return res.status(401).json({ mesEr: "token verification faille" })

        req.user = verified.id;

        next();
    }
    catch (er) {
        console.log(er)
        res.status(401).json({ mesEr: "unauthorized" })
    }
}


module.exports = auth;