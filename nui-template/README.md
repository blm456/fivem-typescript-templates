# NUI Resource Template

## Using NPM

In creation of this I used `pnpm`. If you wish to use `npm` (the default with NodeJs) then follow these steps:

- Delete `pnpm-lock.yaml` and the `node_modules` folder (`node_modules` may not exist if just created)
- Run `npm install`

#### For NUI Scripts

- Open `package.json` and replace these lines in `scripts`:

```json
"ui:dev": "pnpm --prefix ui run dev",
"ui:preview": "pnpm --prefix ui run preview",
"ui:build": "pnpm --prefix ui run build"
```

To

```json
"ui:dev": "npm --prefix ui run dev",
"ui:preview": "npm --prefix ui run preview",
"ui:build": "npm --prefix ui run build"
```

- Remove `pnpm-lock.yaml` from the `ui/` folder
- Remove `node_modules` from the `ui/` folder (if it exists)
- Run `npm --prefix ui install` while in the resource root (same as where this file is)

## Using the resource

To start using this resource, first run `pnpm install` and `pnpm --prefix ui install`

### Development

For development run `pnpm run watch` which will rebuild the files as you edit.

For NUI development, run `pnpm run ui:dev` and open the link supplied in your browser. You can run `SendNUIMessage(...)` from the debug console to simulate game events.

### Deployment

When ready to deploy, run `pnpm run build` and `pnpm run ui:build` for the final files that will be used in game.

### NUI Notes

Place any needed NUI assets into `ui/public` to be built with everything else.

For example, an image placed at `ui/public/images/logo.png` can be accessed like so:

```html
<img src="/images/logo.png" alt="Logo" />
```
