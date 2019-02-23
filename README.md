
# thispersondoesnotexist-js

[![NPM version](https://badge.fury.io/js/thispersondoesnotexist-js.svg)](https://npmjs.org/package/thispersondoesnotexist-js) [![Build Status](https://travis-ci.org/kevoj/thispersondoesnotexist-js.svg?branch=master)](https://travis-ci.org/kevoj/thispersondoesnotexist-js) [![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](https://raw.githubusercontent.com/kevoj/thispersondoesnotexist-js/master/LICENSE)

> Api for thispersondoesnotexist.com

StyleGAN is a groundbreaking paper that not only produces high-quality and realistic images but also allows for superior control and understanding of generated images, making it even easier than before to generate believable fake images. The techniques presented in StyleGAN, especially the Mapping Network and the Adaptive Normalization (AdaIN), will likely be the basis for many future innovations in GANs.

## Installation

Npm

```bash
npm install thispersondoesnotexist-js --save
```

Yarn

```bash
yarn add thispersondoesnotexist-js
```

## Usage

```javascript

import  ThisPersonDoesNotExist  from  './dist/index';

const dnte = new ThisPersonDoesNotExist();

// GET IMAGE

dnte.getImage({
	width: 256, // Width (default 128)
	height: 256, // Height (default 128)
	type: 'file'  // file or Base64 (default file)
	path: 'avatars' // (default ./)
}).then(res  => {
	console.log('result->', res);
}).catch(err  => {
	console.log('error->', err);
});
  
// CRON JOB

dnte.on('created', (info) => {
	console.log('file created->', info);
}).cron({
	time: '*/10 * * * * *', // every 10 seconds
	width: 256, // Width (default 128)
	height: 256, // Height (default 128)
	type: 'file',  // file or Base64 (default file)
	path: 'avatars' // (default ./)
});

```
## Results

![Imgur](https://i.imgur.com/9BZcepd.jpg)
![Imgur](https://i.imgur.com/6Mik0NN.jpg)
![Imgur](https://i.imgur.com/c4sMVAI.jpg)
![Imgur](https://i.imgur.com/2iP68s6.jpg)


## Development

### Start

`npm start`

### Compile

`npm run compile`

### Test

`npm test`

## License

MIT © [Leonardo Rico](https://github.com/kevoj/thispersondoesnotexist-js/blob/master/LICENSE)