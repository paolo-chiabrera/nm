import chai from 'chai';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

global.expect = chai.expect;

process.env.NODE_ENV = 'test';
