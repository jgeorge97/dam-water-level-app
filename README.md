# Dam Water Level App
[![Gitter](https://badges.gitter.im/dam-water-level-app/community.svg)](https://gitter.im/dam-water-level-app/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Web App to display the status of various dams in Kerala. Data sourced from [KSDMA Site](https://sdma.kerala.gov.in/dam-water-level/). Since the data is from a pdf uploaded in the site, some error's in the text can be seen.

[Live Preview](https://dam-level.netlify.app)

[Backend Source Code](https://github.com/jgeorge97/dam-water-level-app-backend)

## Enviroment Variables
`VUE_APP_API_URL=<API URL of backend server>`

## To-do
- [ ] A dropdown to filter dams based on district
- [ ] Alert level based color coded dam cards
## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Compiles and minifies for production
```
pnpm run build
```

### Lints and fixes files
```
pnpm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
