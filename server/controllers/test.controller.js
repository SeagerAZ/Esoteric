import jwt from 'jsonwebtoken';

export const shouldBeLoggedIn = async (req, res) => {
    console.log(req.userId);

    res.status(200).json({ message: 'Authenticated! You are logged in' });
}

export const shouldBeAdmin = async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Not Authenticated! You are not logged in' });
    };

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token! You are not logged in' });
        }
        if (!payload.isAdmin) {
            return res.status(403).json({ message: 'You are not an admin!' });
        }
    });

    res.status(200).json({ message: 'Authenticated! You are logged in' });
    console.log('You are an admin');

}