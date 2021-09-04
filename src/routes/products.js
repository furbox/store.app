import productCtrl from '../modules/product/product.ctrl';

async function productsRoute(fastify, options) {

    fastify.get('/', productCtrl.getProducts);

}

module.exports = productsRoute;