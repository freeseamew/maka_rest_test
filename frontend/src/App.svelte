<script>
	import axios from 'axios';

	const url = 'http://localhost:3000/api/links';

	const send = async (method) => {
		const options = {
			url,
			method
		}

		try {
			const response = await axios(options);
			return response;
		}
		catch(error) {
			console.log(error);
		}
	}

	const onGet = () => {
		send('GET');
	}

	const onPost = () => {
		send('POST');
	}

	const onPut = () => {
		send('PUT');
	}

	const onDelete = () => {
		send('DELETE');
	}			

</script>

<main>
	
	<button on:click={onGet} >Get</button>
	<button on:click={onPost}>Post</button>
	<button on:click={onPut}>Put</button>
	<button on:click={onDelete}>Delete</button>
</main>
