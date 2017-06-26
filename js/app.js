var app = angular.module('todo', []);
/*
    a função recebe um parâmetro chamado $scope. O angular
    preenche o valor dessa variável de acordo com o seu nome (é o que
    chamamos de injeção de dependências).
*/
app.controller('TodoController', function($scope){
    //declaração de variáveis
    $scope.dados = {};
    $scope.tarefas = [];

    //atribuição de funções ao $scope
    $scope.inserirTarefa = function()
    {
      var tarefa = {
          nome: $scope.dados.nome,
          feita: false
      };

      $scope.tarefas.push(tarefa);
    };

    $scope.fazerTarefa = function(tarefa)
    {
      tarefa.feita = true;
    };

    $scope.limparTarefas = function()
    {
      //Remove todas as tarefas
      $scope.tarefas = [];
    };

    $scope.apagar = function(tarefa)
    {
      //pega o index da tarefa
      var index = $scope.tarefas.indexOf(tarefa);
       //Remove a tarefa selecionada
      $scope.tarefas.splice(index, 1 );
    };

});
