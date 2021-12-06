const {Restaurant} = require('./restaurant');
const {sequelizedb } = require('./db.js'); // no association is used

// this file is used to seed the restaurants in the db

// create the restaurant objects and place it in the array
// make sure it match the model, since you will be inserting it

const restaurantSeedArray = [
    {
    name: "Panera Bread",
    address: "1219 Colleyville Blvd, Colleyville, TX, 76039"
    },
    {
        name: "Panda Express",
        address: "1217 Dallas Blvd, Dallas, TX, 76065"
    },
    
    {
        name: "Nanglo Indian Restaurant",
        address: "1220 Euless Blvd, Euless, TX, 76021"
    },

    {
        name: "Wild Wings",
        address: "1232 Southlake, Southlake, TX, 76092"
    },

    {
        name: "Chart House",
        address: "1000 PCH, Santa Monica, CA, 76039"
    },



]


const seed = async () => {
    try {
      console.log('Seeding Start')
      await sequelizedb.sync({force: true})
      await Restaurant.bulkCreate(restaurantSeedArray, {validate: true})
     
    } catch (error) {
      console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
    }finally {
      sequelizedb.close()
    }
  }
  
 
  seed()
      .then(() => {
        console.log('Seeding Complete - Success')
      })
      .catch(err => {
        console.error('Oh noes! Something went wrong!')
        console.error(err)
      })



