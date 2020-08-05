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
        "@typescript-eslint/ban-types": "off",
        "react/react-in-jsx-scope": "off",
        "arrow-body-style": "off",
        "react/destructuring-assignment": "off",
        "no-plusplus": "off",
        "max-len": ["error", {"code": 150}]
    }
};
