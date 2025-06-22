import { app } from "./app";
import { env } from "./env/env-config";

app.listen({ 
    port: env.PORT, 
    host: '0.0.0.0',
}).then(() => {
    console.log(`🚀 Server is working at port ${env.PORT}`)
})