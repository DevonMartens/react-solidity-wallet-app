const { expect } = require('chai')
const { ethers } =  require('hardhat')
//can use load fixture to set up the same set up in each test

const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers')

//describe and it group our tests and declare them

describe('EtherWallet', function() {

    describe("deployment", function() {

        async function deployFixture(){
            //gets accounts
            const [owners, OtherAccount] = await ethers.getSigners()
            //gets contract 
            const EtherWallet = await ethers.getContractFactory('EtherMultiSigWallet')
            const etherWallet = await EtherWallet.deploy()
        }

        it("should deploy and set owner to be the address of the wallet that deployed", async function(){
            const { etherWallet, owner } = await loadFixture(deployFixture)
        })
    })
    describe("Deposit", function() {

    })
    describe("Withdrawl", function() {

    })


  
})