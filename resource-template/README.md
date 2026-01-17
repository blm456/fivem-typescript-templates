# NUI Resource Template

## Using NPM

In creation of this I used `pnpm`. If you wish to use `npm` (the default with NodeJs) then follow these steps:

- Delete `pnpm-lock.yaml` and the `node_modules` folder (`node_modules` may not exist if just created)
- Run `npm install`

## Using the resource

To start using this resource, first run `pnpm install`

### Development

For development run `pnpm run watch` which will rebuild the files as you edit.

### Deployment

When ready to deploy, run `pnpm run build` and `pnpm run ui:build` for the final files that will be used in game.
