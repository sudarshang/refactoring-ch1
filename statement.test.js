const statement = require("./statement").default;


it('returns statement', () => {
    expect(statement()).toMatchSnapshot();
})