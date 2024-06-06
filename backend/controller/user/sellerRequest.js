const requestmodel= require('../../models/requestModel')

async function createRoleRequest(req, res) {
    try {
        const { userId, requestedRole } = req.body

        // Check if the user has already made a request
        const existingRequest = await roleRequestModel.findOne({ userId })

        if (existingRequest) {
            return res.status(400).json({
                message: 'You have already made a request',
                error: true,
                success: false
            })
        }

        const newRoleRequest = new requestmodel({
            userId,
            requestedRole
        })

        const savedRoleRequest = await newRoleRequest.save()

        res.json({
            data: savedRoleRequest,
            message: 'Role request submitted',
            success: true,
            error: false
        })
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

module.exports = createRoleRequest