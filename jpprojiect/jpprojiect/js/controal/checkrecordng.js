
            
function getUrlParam(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		var r = window.location.search.substr(1).match(reg); //匹配目标参数
		if(r != null) return unescape(r[2]);
		return null; //返回参数值
}
			
var app=angular.module('mynew',['ng']);
app.controller('controall',['$scope','$http',function($scope,$http){
	var swiperurl=window.location.href;
	var id=getUrlParam('openid');
	var ket=getUrlParam('ticket');
	var postCfg = {headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}};
	
	$http.post("http://192.168.1.155:5544/GetPatientStudys.aspx",$.param({openid:id,ticket:ket}),postCfg).success(function(res){
			$scope.checkrecordlist=res;	
			console.log(JSON.stringify(res));
			console.log(res);
			var str=JSON.stringify($scope.checkrecordlist[0].Films); 
			$scope.recordnum=res.length;
			console.log(res.length);
	});
	$scope.swipershow=false;
	$scope.imgonclick=function(index,n){
		$scope.swipershow=false;
		var imglist=null;
		switch(n){
			case 0:imglist=JSON.stringify($scope.checkrecordlist[index].Reports);		
			break;
			case 1:imglist=JSON.stringify($scope.checkrecordlist[index].Films);
			break;
		}
		sessionStorage.setItem("imglist", imglist);
		location.href="swiper.html";
	}
	
	
	
	$scope.closeswiper=function(){
		$scope.swipershow=true;
	}
	
}]);
