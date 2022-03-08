## Project setup

`npm install -g @vue/cli`

### Creating Project

`vue create project-name`

### Compile and run

`cd project-name`
`npm run serve`

The SB Admin 2 blank page design has been disassembled using vue js. Head part is embedded in index.html. The components in the body were grouped and added to the vue files.

### File Structure
```
src
├── assets
|   └── img
├── components
|   ├── SideBar.vue
|   |   ├── SidebarBrand.vue
|   |   └── SidebarMenu.vue
|   |       ├── UtilitiesItem.vue
|   |       └── PagesItem.vue
|   └── ContentArea.vue
|       ├── MainContent.vue
|       |   ├── TopBar.vue
|       |   |   ├── SearchArea.vue
|       |   |   └── TopbarNavbar.vue
|       |   |       ├── AlertsVue.vue
|       |   |       ├── MessagesVue.vue
|       |   |       └── UserInfo.vue
|       |   └── DefaultVue.vue
|       └── FooterArea.vue
├── styles
|   └── css
├── App.vue
└── main.js

```


![image](https://user-images.githubusercontent.com/45533057/156596854-351118e2-d2e8-4aa0-98a9-679218c91fb5.png)
