---
layout: post
title: "Gulp com ES6"
date: 2015-09-25 19:04:23
image: '/assets/img/'
description:
tags:
categories:
twitter_text:
---
Há algum tempo estava lendo sobre as novas features do ECMAScript, e uma delas é a utilização de arrow functions, que é uma nova forma de escrever as funções anônimas.

Segue um exemplo:

{% highlight js %}
// como escrevemos atualmente
setTimeout(function() {
	alert("Hello");
}, 3000);

// com arrow function
setTimeout( () => {
	alert("Hello");
}, 3000);
{% endhighlight %}

## No arquivo gulp

Sabendo disso, e sabendo também que as instruções do gulp utilizam funções anônimas, fiquei curioso de saber se tinha como escrever essas funções com arrow functions e fui atrás. E descobri que na atual versão(3.9), já podemos usufruir dessa feature.

## Mostre-me como

É mais fácil do que imaginamos, só devemos ter instalados o gulp, é claro, e o Babel no seu projeto.

Verificando se temos o gulp instalado

{% highlight bash %}
gulp -v
{% endhighlight %}

Nos retornando:

{% highlight bash %}
CLI version 3.9.0
Local version 3.9.0
{% endhighlight %}

Caso não tenha instalado, é só rodar os seguintes comandos

{% highlight bash %}
npm install gulp
npm install gulp -g
{% endhighlight %}

E por último instalando o Babel

{% highlight bash %}
npm install babel-core --save-dev
{% endhighlight %}

Depois falamos pro gulp entrar em 'modo ES6', basta só rodar isso

{% highlight bash %}
mv "gulpfile.js" "gulpfile.babel.js"
{% endhighlight %}

Agora você pode aproveitar e usar as arrow functions do ES6 no seu arquivo gulp,
segue um pequeno exemplo

{% highlight js %}
import 'gulp' from 'gulp';
import 'jeet' from 'jeet';
import 'stylus' from 'gulp-stylus';
import 'rupture' from 'rupture';
import 'prefixer' from 'autoprefixer-stylus';
import 'koutoSwiss' from 'kouto-swiss';

gulp.task( 'stylus', () => {
  gulp.src( 'files/styl/main.styl' )
    .pipe( stylus({
      use: [ koutoSwiss(), jeet(), prefixer(), rupture() ],
        compress: true
    }))
    .pipe( gulp.dest( '_site/assets/css' ) )
    .pipe( gulp.dest( 'assets/css' ) )
    .pipe( browserSync.reload( { stream: true } ) );
});
{% endhighlight js %}

## Conclusão

Além de usar as arrow functions e import, poderiamos usar também as constantes. E tudo isso graças ao babel \o/.