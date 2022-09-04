// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const database = await ethers.getContractFactory('Database');
    console.log('Deploying database...');
    const Database = await database.deploy();
    await Database.deployed();
    console.log('Database deployed to:', Database.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });