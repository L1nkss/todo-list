module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
    },
    plugins: ['@typescript-eslint'],
    extends: [
        "airbnb-typescript",
        "plugin:@typescript-eslint/recommended"
    ],
    rules: {
        "@typescript-eslint/quotes": ["error", "double"],
        "arrow-body-style": "off"
    }
};
