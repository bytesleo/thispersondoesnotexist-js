import ThisPersonDoesNotExist from './dist/index';

const dnte = new ThisPersonDoesNotExist();

dnte
	.getImage({
		width: 256, // Width (default 128)
		height: 256, // Height (default 128)
		type: 'file' // file, Base64 (default file)
		//path: 'avatars' // (default ./)
	})
	.then(res => {
		console.log('result->', res);
	})
	.catch(err => {
		console.log('error->', err);
	})

// dnte
// 	.on('created', (info) => {
// 		console.log('cron->', info);
// 	}).cron({
// 		time: '*/10 * * * * *', // 10 seconds
// 	});