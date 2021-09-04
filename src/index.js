import { config } from "dotenv";
config();
import Fastify from "fastify";
import "./config/db"
import routes from "./routes";
const app = Fastify({
    logger: {
        prettyPrint: true
    }
});

app.register(require('fastify-cors'));
app.register(routes, { prefix: '/api/v1' });

// Declare a route
app.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
});

app.listen(process.env.PORT, function (err, address) {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
    app.log.info(`server listening on ${address}`)
})