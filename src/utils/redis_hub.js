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
}
