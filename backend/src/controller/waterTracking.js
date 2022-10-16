const Water = require("../models/waterTrackerModal");

exports.add = (req, res) => {
    const { howMuch, when, userId } = req.body;

    if (!howMuch || !when || !userId)
        return res.status(400).json({ err: "enter all the required feilds" });

    const _water = new Water({ howMuch, when, userId });
    _water
        .save()
        .then(() => res.status(200).json({ msg: "Saved" }))
        .catch((err) => res.status(400).json({ err: err.message }));
};

exports.get = (req, res) => {
    const { id } = req.params;

    Water.find({ userId: id })
        .then((records) => {
            return res.status(200).json({ rec: records });
        })
        .catch((err) => res.status(400).json({ err: err.message }));
};
