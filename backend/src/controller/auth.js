const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password)
        return res.status(400).json({ err: "enter all the required feilds" });

    User.findOne({ username }).then((user) => {
        if (user) return res.status(400).json({ err: "User already exsist" });

        const hash_password = bcrypt.hashSync(password, 5);
        const _user = new User({ username, hash_password });
        _user
            .save()
            .then(() => res.status(200).json({ msg: "User saved" }))
            .catch((err) => res.status(400).json({ err: err.message }));
    });
};

exports.signin = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password)
        return res.status(400).json({ err: "enter all the required feilds" });

    User.findOne({ username })
        .then((user) => {
            if (!user)
                return res.status(400).json({ err: "User dose not exist" });

            bcrypt.compare(password, user.hash_password).then((result) => {
                if (result) {
                    const token = jwt.sign(
                        { _id: user._id },
                        process.env.JWT_SECRET
                    );
                    return res.status(201).json({ token });
                } else return res.status(400).json({ err: "Invelid Input" });
            });
        })
        .catch((err) => console.log(err.message));
};
