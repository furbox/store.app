import productSchema from "./product.schema";

const productCtrl = {};

productCtrl.getProducts = async (_req, _rep) => {
    try {
        const products = await productSchema.find({});
        _rep.code(200).send({ products });
    } catch (error) {
        console.log(error)
        return _rep.send({error});        
    }
}

productCtrl.getProduct = async (_req, _rep) => {
    _rep.send({ msg: 'One products' })
}

productCtrl.addProduct = async (_req, _rep) => {
    _rep.send({ msg: 'Add product' })
}

productCtrl.updateProduct = async (_req, _rep) => {
    _rep.send({ msg: 'Update product' })
}

productCtrl.deleteProduct = async (_req, _rep) => {
    _rep.send({ msg: 'Delete product' })
}

export default productCtrl;