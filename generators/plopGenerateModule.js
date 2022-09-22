module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Criação de componente',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'adicione nome do componente'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/modules/{{lowerCase name}}/routes.js',
        templateFile: './templates/routes.js.hbs'
      },
      {
        type: 'add',
        path: '../src/modules/{{lowerCase name}}/controllers/{{lowerCase name}}.js',
        templateFile: './templates/controllers.js.hbs'
      },
      {
        type: 'add',
        path: '../src/modules/{{lowerCase name}}/models/.gitkeep'
      }
    ]
  })
}
