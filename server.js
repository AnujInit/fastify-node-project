const PORT = process.env.PORT || 5000;

const server = require('./src/app')({
  logger: {
    level: 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        levelFirst: true,
        translateTime: true,
        colorize: true,
      },
    },
  },
});

const start = async () => {
  try {
    await server.listen({ port: PORT });
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
