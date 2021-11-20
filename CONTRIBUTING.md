# Contributing

- [Developing](#developing)
  - [IDE](#ide)
    - [Visual Studio Code](#visual-studio-code)

## Developing

### IDE

#### Visual Studio Code

Recommended settings (`.vscode/settings.json`):

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "eslint.codeActionsOnSave.mode": "all",
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.formatOnSave": true,
  "eslint.format.enable": true,
  "eslint.packageManager": "yarn",
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
