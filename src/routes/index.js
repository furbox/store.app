import productsRoute from "./products";

async function routes(fastify, options) {
    fastify.register(productsRoute, { prefix: '/products' });
};
module.exports = routes