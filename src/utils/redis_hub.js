import Redis from 'ioredis';

export default class RedisHub {
  constructor(options) {
    this.connection = new Redis(options);
  }

  async get(key) {
    const val = await this.connection.get(key);
    return val;
  }

  async set(key, value) {
    const val = await this.connection.set(key, value);
    return val;
  }

  async del(key) {
    const val = await this.connection.del(key);
    return val;
  }

  static checkConnection(options) {
    return new Promise((resolve, reject) => {
      const conn = new Redis({
        ...options,
        retryStrategy: () => {},
      });

      conn.once('ready', () => {
        resolve();
        conn.disconnect();
      });

      conn.once('error', () => {
        reject(new Error('Can\'t connect to Redis Server'));
      });
    });
  }
}
