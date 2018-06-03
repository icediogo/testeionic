angular.module("sistema", []);
angular.module('sistema').controller('SistemaCtrl', function ($scope, $http, $log) {
    //cria objetos  
    $scope.verifica = [];

    //-- Função Carregamento inicial --//
    $scope.FnInit = function () {

    };
    var ambiente = "http://127.0.0.1:8080/Ionic";
    //Funções
    //-- Função carrega modal cadastro/login --//
    $scope.Getverificaacesso = function (cpf) {
        fnfncarregaGetverificaacesso(cpf);
    };
    var fnfncarregaGetverificaacesso = function (cpf) {
        var request = $http({
            method: "get",
            url: ambiente + "/controller/InsLoginverificaracesso.php?cpf=" + cpf,
            timeout: '10000',
            cache: false,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        request.success(function (data) {
            if (data != 0) {
                $scope.verifica = data;
                $scope.verifica.id = $scope.verifica[0].id;
                console.log($scope.verifica[0].id);
                window.alert("CPF já cadastrado.");
            }
            else {
                $scope.verifica = "";
                $("#labelsenha").show();
            }
        });
    }


});
//Função animate.js Menu - rolagem suave //
function rolar_para(elemento) {
    $('html, body').animate({
        scrollTop: $(elemento).offset().top
    }, 1000);
}

