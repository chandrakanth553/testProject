var app = angular.module("testApp",[]);
app.controller("myController",function($scope, $http){
$scope.products = {};
$scope.item = {};
    $scope.condition = false;
    $http({
        method:"GET",
        url: 'https://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=20&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1'
    }).then(function(data){
        $scope.products = data.data.productList;
        console.log(data.data.productList[0]);},function(err){
            console.log("Chandra");
            console.log(err);})
        
    $scope.hoverIn = function(value){
        $scope.condition = true;
        $scope.item = value;
        console.log($scope.item);
    };
    
    $scope.onclick = function(value){
        alert(value.networkPrice);
    }
});