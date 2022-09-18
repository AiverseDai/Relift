import {ethers} from 'ethers';
import abi from '../middleware/abi.json';


async function fetchToppool(){

    if (typeof window.ethereum !== "undefined") {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		console.log({ provider });
		console.log(process.env.REACT_APP_TEST_USDCTOKEN);
		const signer = provider.getSigner();
		const Contract = new ethers.Contract(
			"0xb1A043e7CB9cdd1114e4F07EA9BF2Ae87643Cb89",
			abi,
			signer
		);
		const data = await Contract.fetch();
		console.log(data);
		console.log("///////////////////");
	}




}

export default fetchToppool;