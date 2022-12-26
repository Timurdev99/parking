const park = (req, res) => {
    const new_car = req.body.car;
    if (parking_lot.find(({car}) => car === new_car) === undefined) {
        let empty = parking_lot.find(({car}) => car === '');
        if (empty === undefined) {
            const result = {
                success: false,
                msg: 'Parking lot is full',
            }
            res.json(result);
        }
        else {
            empty.car = new_car;
            const result = {
                success: true,
                slot: empty.slot,
            }
            res.json(result);
        }
    }
    else {
        const result = {
            success: false,
            msg: 'The car is already booked',
        }
        res.json(result);
    }
};

module.exports = park;