const mongoose = require('mongoose')

const roleRequestSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
        unique: true
    },
    requestedRole: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    }
}, {
    timestamps: true
})

const roleRequestModel = mongoose.model('RoleRequest', roleRequestSchema)

module.exports = roleRequestModel
