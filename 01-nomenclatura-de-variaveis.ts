// Nomenclatura de variáveis

const  githubCustomerClass = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getCustomerClass(req, res) {
  const githubUsername = String(req.query.username)

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const getGithubUsers = await fetch(`https://api.github.com/users/${githubUsername}`);

  if (getGithubUsers.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsername}" not found`
    })
  }

  const githubUser = await getGithubUsers.json()

  const orderList = githubCustomerClass.sort((firstUser, secondUser) =>  secondUser.followers - firstUser.followers); 

  const category = orderList.find((user) => githubUser.followers > user.followers)

  const result = {
    githubUsername,
    category: category?.title
  }

  return result
}

getCustomerClass({ query: {
  username: 'josepholiveira'
}}, {})