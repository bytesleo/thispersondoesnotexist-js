import ThisPersonDoesNotExist from './dist/index';

const dnte = new ThisPersonDoesNotExist();

dnte
	.getImage({
		width: 256,
		height: 256,
		type: 'file'
	})
	.then(res => {
		console.log('result->', res);
	})
	.catch(err => {
		console.log('error->', err);
	});