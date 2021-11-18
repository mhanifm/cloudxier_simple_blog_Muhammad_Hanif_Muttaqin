const errorHandler = (err, req, res, next) => {
    let code = 500;
    let message = ['Internal server error', err.message]

    switch (err.name) {
        case 'SequelizeValidationError':
            code = 400
            message = err.errors.map((err) => {
                return err.message
            })
            break;
        case 'notFound':
            code = 404
            message = ['Product not found']
            break;
        default:
            break;
    }

    res.status(code).json({ message })
}

module.exports = errorHandler