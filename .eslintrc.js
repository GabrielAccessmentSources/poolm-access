// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    overrides: [
        {
            files: ["*.js", "*.jsx"],
            rules: {
                "react/prop-types": "off",
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        semi: [2, "always"],
        quotes: [2, "double", { avoidEscape: true }],
        "object-curly-spacing": ["error", "always"],
        "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
