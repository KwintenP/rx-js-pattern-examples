module.exports = function (w) {

    return {
        files: [
            {pattern: 'src/**/*.ts', load: false},
            {pattern: 'node_modules/**/*.js', ignore: true, instrument: false}
            { pattern: 'src/**/*spec.ts', ignore: true }
        ],

        tests: [
            'src/**/*spec.ts'
        ]
    };
};