const unpark = (req, res) => {
    const remove_slot = req.body.slot;
    let booking = parking_lot.find(({slot}) => slot === remove_slot);
    if (booking === undefined) {
        const result = {
            success: false,
            msg: 'The slot number does not exist',
        }
        res.json(result);
    }
    else {
        booking.car = '';
        const result = {
            success: true,
        }
        res.json(result);
    }
}

module.exports = unpark;