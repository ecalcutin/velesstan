module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    env: {
        node: true,
        jest: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier",
    ],
    rules: {
        "no-console": "warn",
        "import/no-named-as-default": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "import/order": [
            2,
            {
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    ["parent", "sibling", "index"],
                ],
                "newlines-between": "always",
            },
        ],
    },
    settings: {
        "import/resolver": {
            typescript: {},
        },
    },
};
