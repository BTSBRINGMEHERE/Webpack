# webpack

프론트엔드 기본 설정을 위한 웹팩 공부

## 서론

프로젝트하거나 개인적으로 테스트를 진행함에 있어서 CRA, VITE, NEXTJS 등을 사용하면서 webpack이 무엇인지는 대충 알고있었지만 왜 사용하는지에 있어서는 생각을 안했습니다.
그래서 유튜브 코딩앙마라는 분의 webpack 기본설정을 따라하면서 왜 웹팩이 사용되고 그동안 CRA와 같은 라이브러리의 소중함을 알고자 만들어봤습니다.
https://youtu.be/zal9HVgrMaQ << 해당링크

## webpack에 필요한 설치파일

```
npm i webpack webpack-cli —save-dev
npm i html-webpack-plugin
npm i webpack-dev-server -D
npm i -D style-loader css-loader
npm i -D mini-css-extract-plugin
npm i -D clean-webpack-plugin
npm i lodash
npm i lodash-es
```

## webpack?

webpack 이란? 프론트엔드 프레임워크에서 가장 많이 사용되는 모듈 번들러입니다.
모듈 번들러란 웹 애플리케이션을 구성하는 자원(HTML, CSS, JavaScript, Image 파일 등)을 각각의 모듈로 보고 이를 조합해서 하나의 결과물로 만드는 도구를 의미합니다.
![웹팩 모듈 번들링](https://user-images.githubusercontent.com/97148877/218391003-169a4e27-f84b-41fe-8eb5-e4bdbfd0a376.png)

## webpack concept

webpack의 핵심개념입니다. webpack.config.js에서 관리하며 html, css, js, iamge 파일등을 웹 애플리케이션에서 식별가능하게 할 수 있습니다.

- entry: 엔트리 포인트는 webpack이 내부의 디펜던시 그래프 를 생성하기 위해 사용해야 하는 모듈입니다. Webpack은 엔트리 포인트가 (직간접적으로) 의존하는 다른 모듈과 라이브러리를 찾아냅니다.
- output: output 속성은 생성된 번들을 내보낼 위치와 이 파일의 이름을 지정하는 방법을 webpack에 알려주는 역할을 합니다.
- loaders: webpack이 다른 유형의 파일을 처리하거나, 그들을 유효한 모듈로 변환 하여 애플리케이션에서 사용하거나 디펜던시 그래프에 추가합니다.
- plugins: 로더는 특정 유형의 모듈을 변환하는 데 사용되지만, 플러그인을 활용하여 번들을 최적화하거나, 애셋을 관리하고, 또 환경 변수 주입등과 같은 광범위한 작업을 수행 할 수 있습니다.
- mode: mode 파라미터를 development, production 또는 none으로 설정하면 webpack에 내장된 환경별 최적화를 활성화 할 수 있습니다. 기본값은 production 입니다.
- devServer: dev 환경에서 직접 실행가능하며 일반적으로 dist폴더에 해당 모듈을 합쳐서 만들어진 파일을 실행가능합니다. 포트설정도 가능합니다.

## 추가적인 Tips

lodash 란? native 자바스크립트에서 지원하지 않는 성능이 보장된 다양한 메소드르 가지고 있는 라이브러리. 다만, 빌드를 하면 번들러 파일이 매우 무거워져 성능이 안좋아집니다.
우리가 사용하는 웹팩은 Tree Shaking을 지원하기 때문에 사용하지 않는 함수를 없애고 빌드가 가능합니다.
하지만 lodash는 CommonJS를 사용하기 때문에 불필요한 함수까지 사용하기 때문에 번들러 파일이 매우 무거워집니다.
이러한 문제점을 해결하기 위해 "lodash-es"라는 라이브러리를 설치를 하여 CommonJS -> ES Module로 바꿔줄 필요성이 있습니다. ES Module은 Tree Shaking이 되어서 번들러 파일이 10분의 1로 줄어드는 것을 볼 수 있습니다.

## 결론

webpack을 직접실행하면서 모듈, 모듈 번들링에 대해서 자세하게 알수 있었습니다. 이런 설정은 뭐고 저런 설정을 뭐고 개념을 알게 되어서 편하게 공부를 할 수 있었습니다.
맨땅에 헤딩으로 프로젝트를 만든다면 어마어마하게 복잡하고 번들링 관리를 해야하는데 우리에게는 라이브러리가 있었기에 그동안 편하게 코딩을 공부할 수 있었습니다.
