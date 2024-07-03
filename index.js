const users = [
    { name: 'Reuben',
      username: '@blood_pressure_killa',
      followers: 1,
      verified: false,
      bio: "It's an honor and a privilege."
    },
    { name: 'Laisha',
      username: '@passaic_papi',
      followers: 700,
      verified: true,
      bio: "My commute is longer than yours."
    },
    { name: 'Anne',
      username: '@i_love_bambas',
      followers: 12,
      verified: false,
      bio: "@mayabee is my best friend"
    },
    { name: 'Steph',
      username: '@queen_of_the_kew',
      followers: 1200,
      verified: false,
      bio: "✌🏼"
    },
    { name: 'Carmen',
      username: '@omar_apollo_fanclub',
      followers: 1200000,
      verified: true,
      bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
    }
  ]

//Q1
const logAllNames = (users) => {
    users.forEach(user => console.log(user.name));
};

logAllNames(users)
/////////////////////////////

//Q2
const getAllTags = () => {
    users.forEach(user => {
        const tag = `${user.name} (${user.username})`;
        console.log(tag);
      });
    };
    
    getAllTags(users);
    


//////////////////////////////

//Q3
const SumAllFollowers = (users) => {
return users.reduce((total, currentUser) => total + currentUser.followers, 0)

(SumAllFollowers(users))
}

console.log(SumAllFollowers(users))

const searchUserName = (users,searchTerm) => {
return users.filter((users) =>{
    if (users.username === searchTerm){
    return users 
    }
})

}

