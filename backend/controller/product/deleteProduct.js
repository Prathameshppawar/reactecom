const productModel = require('../../models/productModel')
const uploadProductPermission = require('../../helpers/permission')

async function deleteProductController(req, res) {
    // console.log(req.userId)
    try {
        if (!uploadProductPermission(req.userId)) {
            throw new Error("Permission denied")
        }

        const { _id } = req.body

        const deletedProduct = await productModel.findByIdAndDelete(_id)

        if (!deletedProduct) {
            res.status(404).json({
                message: "Product not found",
                success: false,
                error: true
            })
        } else {
            res.json({
                message: "Product deleted successfully",
                data: deletedProduct,
                success: true,
                error: false
            })
        }
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

module.exports = deleteProductController
