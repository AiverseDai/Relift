import {ethers} from 'ethers';
import abi from '../middleware/abi.json';


async function store(){

    if (typeof window.ethereum !== "undefined") {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		console.log({ provider });
		console.log(process.env.REACT_APP_TEST_USDCTOKEN);
		const signer = provider.getSigner();
		const Contract = new ethers.Contract(
			"0x498B1A27089572389aF6225FBC85C2c4aaA33E3f",
			abi,
			signer
		);
        // arg: uint amt,string memory ilink,string memory vlink,string memory name,string memory phone,string memory smy,string memory poolname
		const tx = await Contract.createPool(amount,imageLink,videoLink,name,phone,summary,poolName);
        tx.wait();
		console.log("///////////////////");
	}




}

export default store;