const info = (req, res) => {
    const type = req.params.type;
    const number = req.params.number;

    if (type === 'slot') {
        const slot = parking_lot.find(({slot}) => slot === number);
        if (slot === undefined) {
            const result = {
                success: false,
                msg: 'The slot number does not exist',
            }
            res.json(result);
        }
        else {
            const result = {
                success: true,
                info: slot,
            }
            res.json(result);
        }
    }
    else if (type === 'car') {
        const car = parking_lot.find(({car}) => car === number);
        if (car === undefined) {
            const result = {
                success: false,
                msg: 'The car is not booked',
            }
            res.json(result);
        }
        else {
            const result = {
                success: true,
                info: car,
            }
            res.json(result);
        }
    }
    else {
        const result = {
            success: false,
            msg: 'Invalid type',
        }
        res.json(result);
    }
}

module.exports = info;