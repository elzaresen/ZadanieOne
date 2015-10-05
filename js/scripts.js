(function() {
	var path = '//easy.myfonts.net/v2/js?sid=253178(font-family=Glober+Bold)&sid=253183(font-family=Glober+Light)&sid=253186(font-family=Glober+Regular)&sid=253189(font-family=Glober+Thin)&key=xjqDqLW90V',
	protocol = ('https:' == document.location.protocol ? 'https:' : 'http:'),
	trial = document.createElement('script');
	trial.type = 'text/javascript';
	trial.async = true;
	trial.src = protocol + path;
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(trial);
})();