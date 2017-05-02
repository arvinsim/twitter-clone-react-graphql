module.exports = {
    "extends": "standard",
    "env": {
      "jest": true
    },
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    },
    "plugins": [
      "standard",
      "promise",
      "jest",
      "react"
    ],
    "rules": {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error"
    }
};