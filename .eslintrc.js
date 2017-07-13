module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "parser": "babel-eslint",
    "rules": {
        "strict": 0,
        "no-plusplus": [
            "error",
            {
                "allowForLoopAfterthoughts": true
            }
        ],
        "indent": 0,
        "import/extensions": [1, {".js": "always", ".jsx": "always"}],
        "import/no-unresolved": [0, {commonjs: true, amd: true}],
        "camelcase": [1],
        "react/forbid-prop-types": 0,
        "react/jsx-filename-extension": 0,
        "import/no-extraneous-dependencies": 0,
        "no-unused-vars": 1,
        "no-underscore-dangle": 0,
        "no-console": 0,
        "brace-style": [1, "stroustrup", { "allowSingleLine": true }],
        "react/prop-types": [2, { ignore: ["children"] }]
    }
};