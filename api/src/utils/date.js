const { Kind } = require('graphql/language');

module.exports = {
    Date: {
        __parseValue: value => new Date(value),
        __serialize: date => date.toISOString(),
        __parseLiteral: ast => {
            if(ast.kind === Kind.OBJECT) {
                return new Date(ast.value);
            }

            return null;
        }
    }
}
