import HelloWorld from '../src/index';

describe('given an HelloWorld class', () => {
  describe('when a name is NOT passed', () => {
    let hw;

    beforeEach(() => {
      hw = new HelloWorld();
    });

    it('should say the default sentence', () => {
      expect(hw.get()).to.equal('Hello World !');
    });
  });

  describe('when a name is passed', () => {
    let hw;

    beforeEach(() => {
      hw = new HelloWorld('Blue');
    });

    it('should add the name to the default sentence', () => {
      expect(hw.get()).to.equal('Hello World Blue!');
    });
  });
});
