// scripts/deploy.js

// Import required Hardhat tools
const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Deploy Security contract
    console.log("Deploying Security contract...");
    const Security = await ethers.getContractFactory("Security_MetaTasker");
    const security = await Security.deploy();
    await security.deployed();
    console.log("Security contract deployed to:", security.address);


    // Deploy WorkerInfo contract
    console.log("Deploying WorkerInfo contract...");
    const WorkerInfo = await ethers.getContractFactory("WorkerInfo_MetaTasker");
    const workerInfo = await WorkerInfo.deploy("0xb923DcE82100aBF8181354e9572ed6C61De8C52B");
    await workerInfo.deployed();
    console.log("WorkerInfo contract deployed to:", workerInfo.address);

    // Deploy BiometricStorage contract
    console.log("Deploying BiometricStorage contract...");
    const BiometricStorage = await ethers.getContractFactory("BiometricStorage_MetaTasker");
    const biometricStorage = await BiometricStorage.deploy();
    await biometricStorage.deployed();
    console.log("BiometricStorage contract deployed to:", biometricStorage.address);

   
}

// Execute the main function and handle errors
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Error during deployment:", error);
        process.exit(1);
    });
