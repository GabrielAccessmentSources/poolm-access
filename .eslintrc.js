module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    overrides: [
        {
            files: ["*.js"],
            rules: {
                "react/prop-types": "off",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        semi: [2, "always"],
        quotes: [2, "double", { avoidEscape: true }],
        "object-curly-spacing": ["error", "always"],
        "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
    },
};
