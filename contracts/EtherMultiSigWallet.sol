// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract EtherMultiSigWallet {

    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function deposit() external payable {

    }

    function withdraw(address payable reciever, uint256 amount) external {
       if(msg.sender == owner){
           reciever.transfer(amount);
           return;
       } else {
           revert("ONLY_OWNER_ALLOWED");
       }
    }

    function balanceOf() public view returns(uint256){
        return address(this).balance;
    }
}
