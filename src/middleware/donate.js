import { ethers } from "ethers";
import abi from "../middleware/abi.json";

async function donate(id, amount) {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log({ provider }, "hgdsbkjcnakj,");
    // console.log(process.env.REACT_APP_TEST_USDCTOKEN);
    const signer = provider.getSigner();
    const Contract = new ethers.Contract(
      "0x498B1A27089572389aF6225FBC85C2c4aaA33E3f",
      abi,
      signer
    );
    //   signer
    const data = await Contract.donate(id, { value: (amount * 10) ^ 18 });
    console.log(data, "fetch to pool");
    console.log("///////////////////");
    return data;
  }
}

export default donate;
