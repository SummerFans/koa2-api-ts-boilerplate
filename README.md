# koa2-api-ts-boilerplate

project based on KOA2 framework to develop API services

## include
- [x] Koa2
- [x] Typescript
- [x] Postgresql
- [ ] Redis
- [x] Doc (apidoc)
- [ ] Testing

## Structure
```
├── src
│   ├── config                  # config
│   │   ├── env                 # environment
│   │   │   ├── development.ts
│   │   │   └── production.ts
│   │   ├── common.ts
│   │   ├── index.ts
│   ├── modules
│   │   ├── init
│   │   │   ├── controller.ts   # controller
│   │   │   └── router.ts       # router
│   │   └── article             # article example
│   │       ├── controller.ts
│   │       └── router.ts
│   ├── models                  # data model
│   │   └── article.ts          # article model
│   ├── middleware
│   │   └── auth.ts             # auth
│   │   └── error.ts            # error
│   └── utils
│       └── db.ts               # database config
│       └── index.ts            # util
└── tsconfig.json               # tsc configure
```

### Command
```
npm run start              //run service
npm run build              //build js
npm run watch              //watch service
npm run docs               //build the document
```