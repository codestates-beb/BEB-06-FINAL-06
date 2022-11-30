const STAKING = {
  "contractName": "Staking",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "contract Jet2Token",
          "name": "_tokenAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Claimed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Staked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "unStakedTime",
          "type": "uint256"
        }
      ],
      "name": "UnStaked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "unStakedTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "UnStakedClaimed",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "APR",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "Deploytime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "addressStaked",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "stakeInfos",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "startTS",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "claimedTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "unStakingTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalClaimed",
          "type": "uint256"
        },
        {
          "internalType": "uint32",
          "name": "state",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract JetToken",
          "name": "_jt",
          "type": "address"
        }
      ],
      "name": "setJetTokenAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "setStakeInfo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "stakeAmount",
          "type": "uint256"
        }
      ],
      "name": "stakeToken",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unStakingToken",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unStakingClaime",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "claimReward",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "claimableReward",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.17+commit.8df45f5f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"contract Jet2Token\",\"name\":\"_tokenAddress\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Claimed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Staked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"unStakedTime\",\"type\":\"uint256\"}],\"name\":\"UnStaked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"unStakedTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"UnStakedClaimed\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"APR\",\"outputs\":[{\"internalType\":\"uint32\",\"name\":\"\",\"type\":\"uint32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"Deploytime\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"addressStaked\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"claimReward\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"claimableReward\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract JetToken\",\"name\":\"_jt\",\"type\":\"address\"}],\"name\":\"setJetTokenAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"setStakeInfo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"stakeInfos\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"startTS\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"claimedTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"unStakingTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalClaimed\",\"type\":\"uint256\"},{\"internalType\":\"uint32\",\"name\":\"state\",\"type\":\"uint32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"stakeAmount\",\"type\":\"uint256\"}],\"name\":\"stakeToken\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unStakingClaime\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unStakingToken\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/Staking.sol\":\"Staking\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/security/Pausable.sol\":{\"keccak256\":\"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004\",\"dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B\"]},\"@openzeppelin/contracts/security/ReentrancyGuard.sol\":{\"keccak256\":\"0x190dd6f8d592b7e4e930feb7f4313aeb8e1c4ad3154c27ce1cf6a512fc30d8cc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ce8dfb62d0c4fa260d6eec8f1cd47f5f2a044e11bde5b31d18072fa6e7d9010\",\"dweb:/ipfs/QmTyFztU3tLEcEDnqqiaW4UJetqsU77LXc6pjc9oTXCK5u\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x4ffc0547c02ad22925310c585c0f166f8759e2648a09e9b489100c42f15dd98d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://15f52f51413a9de1ff191e2f6367c62178e1df7806d7880fe857a98b0b66253d\",\"dweb:/ipfs/QmaQG1fwfgUt5E9nu2cccFiV47B2V78MM1tCy1qB7n4MsH\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34\",\"dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xa4d1d62251f8574deb032a35fc948386a9b4de74b812d4f545a1ac120486b48a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8c969013129ba9e651a20735ef659fef6d8a1139ea3607bd4b26ddea2d645634\",\"dweb:/ipfs/QmVhVa6LGuzAcB8qgDtVHRkucn4ihj5UZr8xBLcJkP6ucb\"]},\"@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xa1e8e83cd0087785df04ac79fb395d9f3684caeaf973d9e2c71caef723a3a5d6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://33bbf48cc069be677705037ba7520c22b1b622c23b33e1a71495f2d36549d40b\",\"dweb:/ipfs/Qmct36zWXv3j7LZB83uwbg7TXwnZSN1fqHNDZ93GG98bGz\"]},\"@uniswap/lib/contracts/libraries/Babylonian.sol\":{\"keccak256\":\"0xe20fc48e3575b4a2932e5d2dd53b6742e1ca96f652bd41038cb89d7f5d49a096\",\"urls\":[\"bzz-raw://6ba298d8e592d39960eabc2328b7d4a01ad6cf8b06366adc3ef0133d3b196a9f\",\"dweb:/ipfs/QmQgrNaHssJ8XVsPUCMHpyYRFLbBqNrumaoFgXHWdDiTyy\"]},\"project:/contracts/Jet2Token.sol\":{\"keccak256\":\"0x096e3b882b8e7937da0aaceac97b46cb323b5ea4afd51964f3a7554987f3d6ad\",\"license\":\"GPL-3.0-only\",\"urls\":[\"bzz-raw://a89f62ba22d7889200ffc06372874fa91e99913745f7ed120065df6815c3b1ea\",\"dweb:/ipfs/Qmean2SEtji3m6gWPEUPy7K5NdPigCXYkAjvycymP9htti\"]},\"project:/contracts/JetToken.sol\":{\"keccak256\":\"0x4702e50cf8503cc1120618e2333c1cf842c842cbf53ca25fb7a9fbb4e8f051ce\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://80ee0620b1f13a524f85482182c7e714b8edbfea964af077097c4d9634a09cfc\",\"dweb:/ipfs/Qmb91iASuLSuqZTotGfFA3EQkbNnRQ6yCbqcPpABRtdmk6\"]},\"project:/contracts/LPT.sol\":{\"keccak256\":\"0xed736abaceb3ae48c617e3f658e9b025d5b61ef8df551970899895432b0ec7b6\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://ad6919c26ab33a0f95936b6de5c1267e1a4ce2d41ef609c72be2ea63e39cf275\",\"dweb:/ipfs/QmVMZpeSSxWUxc9SME2pgQ3xwazzvdjRYGxF7sfMWGspwn\"]},\"project:/contracts/LiquidityPool.sol\":{\"keccak256\":\"0xfd66d7c0944de79c5c033775f51c15e42e4b46f9cf57be7ef0e4696432143382\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://307600d2025ef8566b2389a199fb50ccafbcdb35813a1deda78c0edac7d31592\",\"dweb:/ipfs/QmbFZWqDo9nyam9m8ms9WXaEbRqnW9ZrhATkRzUHTJfS3T\"]},\"project:/contracts/Staking.sol\":{\"keccak256\":\"0x2accdf8a8c734e42559285831dfac29b54f33f8a33a6a3209ded07e465f394b2\",\"license\":\"GPL-3.0-only\",\"urls\":[\"bzz-raw://f050dc487c355eb98a5c79e81f88c647f8d12e6751af702c5e57cb45e65c9d1d\",\"dweb:/ipfs/QmPtNraZSXE4DXoKdg3U8DJcBaYuKvevBimjSQqLUaxdKD\"]}},\"version\":1}",
  "bytecode": "0x6080604052670de0b6b3a76400006002556096600360006101000a81548163ffffffff021916908363ffffffff1602179055506301e13380600360046101000a81548163ffffffff021916908363ffffffff16021790555062015180600360086101000a81548163ffffffff021916908363ffffffff16021790555060038060089054906101000a900463ffffffff166200009b9190620002c3565b63ffffffff16600455348015620000b157600080fd5b50604051620025cb380380620025cb8339818101604052810190620000d7919062000387565b620000f7620000eb620001b860201b60201c565b620001c060201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362000169576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001609062000440565b60405180910390fd5b80600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550426001819055505062000462565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600063ffffffff82169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620002d08262000284565b9150620002dd8362000284565b9250828202620002ed8162000284565b915080821462000302576200030162000294565b5b5092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200033b826200030e565b9050919050565b60006200034f826200032e565b9050919050565b620003618162000342565b81146200036d57600080fd5b50565b600081519050620003818162000356565b92915050565b600060208284031215620003a0576200039f62000309565b5b6000620003b08482850162000370565b91505092915050565b600082825260208201905092915050565b7f546f6b656e20416464726573732063616e6e6f7420626520616464726573732060008201527f3000000000000000000000000000000000000000000000000000000000000000602082015250565b600062000428602183620003b9565b91506200043582620003ca565b604082019050919050565b600060208201905081810360008301526200045b8162000419565b9050919050565b61215980620004726000396000f3fe6080604052600436106100e85760003560e01c8063b29600191161008a578063dfbf9def11610059578063dfbf9def14610274578063e7181edc146102b6578063e74d059f146102e1578063f2fde38b1461031e576100e8565b8063b2960019146101c5578063b88a802f146101ee578063bd30558e14610219578063cda6b84714610244576100e8565b8063715018a6116100c6578063715018a61461014d5780637b9ba7fd1461016457806389fb2e46146101835780638da5cb5b1461019a576100e8565b8063313ce567146100ed5780633595bf7a14610118578063397eee8014610122575b600080fd5b3480156100f957600080fd5b50610102610347565b60405161010f919061180a565b60405180910390f35b61012061034d565b005b34801561012e57600080fd5b5061013761074d565b604051610144919061180a565b60405180910390f35b34801561015957600080fd5b50610162610753565b005b61016c610767565b60405161017a929190611840565b60405180910390f35b34801561018f57600080fd5b50610198610add565b005b3480156101a657600080fd5b506101af610b26565b6040516101bc91906118aa565b60405180910390f35b3480156101d157600080fd5b506101ec60048036038101906101e79190611908565b610b4f565b005b3480156101fa57600080fd5b50610203610c2c565b6040516102109190611935565b60405180910390f35b34801561022557600080fd5b5061022e610eec565b60405161023b919061196f565b60405180910390f35b61025e600480360381019061025991906119b6565b610f02565b60405161026b9190611935565b60405180910390f35b34801561028057600080fd5b5061029b60048036038101906102969190611a0f565b61142d565b6040516102ad96959493929190611a3c565b60405180910390f35b3480156102c257600080fd5b506102cb611479565b6040516102d8919061180a565b60405180910390f35b3480156102ed57600080fd5b5061030860048036038101906103039190611a0f565b611604565b6040516103159190611935565b60405180910390f35b34801561032a57600080fd5b5061034560048036038101906103409190611a0f565b611624565b005b60025481565b60011515600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146103e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d790611afa565b60405180910390fd5b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154426104309190611b49565b90506000600360089054906101000a900463ffffffff1663ffffffff16600360049054906101000a900463ffffffff1663ffffffff166064600360009054906101000a900463ffffffff1663ffffffff16600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301546104ce9190611b7d565b6104d89190611bee565b6104e29190611bee565b6104ec9190611bee565b9050600082826104fc9190611b7d565b9050600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33600a8461054a9190611bee565b6040518363ffffffff1660e01b8152600401610567929190611c1f565b6020604051808303816000875af1158015610586573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105aa9190611c74565b5042600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201819055506000600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506002600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050160006101000a81548163ffffffff021916908363ffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff167f79d3df6837cc49ff0e09fd3258e6e45594e0703445bb06825e9d75156eaee8f0426040516106f2919061180a565b60405180910390a23373ffffffffffffffffffffffffffffffffffffffff167fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a82604051610740919061180a565b60405180910390a2505050565b60015481565b61075b6116a7565b6107656000611725565b565b6000806002600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050160009054906101000a900463ffffffff1663ffffffff1614610805576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107fc90611d13565b60405180910390fd5b42600454600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201546108569190611d33565b1015610a71576000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301549050600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610900929190611c1f565b6020604051808303816000875af115801561091f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109439190611c74565b50600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008082016000905560018201600090556002820160009055600382016000905560048201600090556005820160006101000a81549063ffffffff02191690555050600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff02191690553373ffffffffffffffffffffffffffffffffffffffff167fec4c5e119b3c2211affd553a6167326af1472cb3b7966b96b0f84a56d8d5317c4283604051610a5c929190611d67565b60405180910390a26001429250925050610ad9565b600042600454600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154610ac49190611d33565b610ace9190611b49565b905060008192509250505b9091565b42600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610b576116a7565b600073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610be8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bdf90611ddc565b60405180910390fd5b80600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600060011515600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610cc1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cb890611e48565b60405180910390fd5b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015442610d119190611b49565b90506000600360089054906101000a900463ffffffff1663ffffffff16600360049054906101000a900463ffffffff1663ffffffff166064600360009054906101000a900463ffffffff1663ffffffff16600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030154610daf9190611b7d565b610db99190611bee565b610dc39190611bee565b610dcd9190611bee565b905060008282610ddd9190611b7d565b9050600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33600a84610e2b9190611bee565b6040518363ffffffff1660e01b8152600401610e48929190611c1f565b6020604051808303816000875af1158015610e67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8b9190611c74565b50610e94610add565b3373ffffffffffffffffffffffffffffffffffffffff167fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a82604051610eda919061180a565b60405180910390a26001935050505090565b600360009054906101000a900463ffffffff1681565b60008180600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610f6191906118aa565b602060405180830381865afa158015610f7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fa29190611e7d565b11610fe2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd990611ef6565b60405180910390fd5b60008311611025576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161101c90611f62565b60405180910390fd5b60001515600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146110b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110af90611afa565b60405180910390fd5b6002600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050160009054906101000a900463ffffffff1663ffffffff16036111215760009150611427565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d83a2bf33330876040518463ffffffff1660e01b815260040161118293929190611f82565b6020604051808303816000875af11580156111a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111c59190611c74565b905080611207576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111fe90612005565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330876040518463ffffffff1660e01b815260040161126693929190611f82565b6020604051808303816000875af1158015611285573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112a99190611c74565b506001600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506040518060c001604052804281526020014281526020016000815260200185815260200160008152602001600163ffffffff16815250600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001556020820151816001015560408201518160020155606082015181600301556080820151816004015560a08201518160050160006101000a81548163ffffffff021916908363ffffffff1602179055509050503373ffffffffffffffffffffffffffffffffffffffff167f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d85604051611419919061180a565b60405180910390a260019250505b50919050565b60076020528060005260406000206000915090508060000154908060010154908060020154908060030154908060040154908060050160009054906101000a900463ffffffff16905086565b600060011515600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515036115fc576000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154426115239190611b49565b90506000600360089054906101000a900463ffffffff1663ffffffff16600360049054906101000a900463ffffffff1663ffffffff166064600360009054906101000a900463ffffffff1663ffffffff16600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301546115c19190611b7d565b6115cb9190611bee565b6115d59190611bee565b6115df9190611bee565b9050600082826115ef9190611b7d565b9050809350505050611601565b600090505b90565b60086020528060005260406000206000915054906101000a900460ff1681565b61162c6116a7565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361169b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161169290612097565b60405180910390fd5b6116a481611725565b50565b6116af6117e9565b73ffffffffffffffffffffffffffffffffffffffff166116cd610b26565b73ffffffffffffffffffffffffffffffffffffffff1614611723576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161171a90612103565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000819050919050565b611804816117f1565b82525050565b600060208201905061181f60008301846117fb565b92915050565b60008115159050919050565b61183a81611825565b82525050565b60006040820190506118556000830185611831565b61186260208301846117fb565b9392505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061189482611869565b9050919050565b6118a481611889565b82525050565b60006020820190506118bf600083018461189b565b92915050565b600080fd5b60006118d582611889565b9050919050565b6118e5816118ca565b81146118f057600080fd5b50565b600081359050611902816118dc565b92915050565b60006020828403121561191e5761191d6118c5565b5b600061192c848285016118f3565b91505092915050565b600060208201905061194a6000830184611831565b92915050565b600063ffffffff82169050919050565b61196981611950565b82525050565b60006020820190506119846000830184611960565b92915050565b611993816117f1565b811461199e57600080fd5b50565b6000813590506119b08161198a565b92915050565b6000602082840312156119cc576119cb6118c5565b5b60006119da848285016119a1565b91505092915050565b6119ec81611889565b81146119f757600080fd5b50565b600081359050611a09816119e3565b92915050565b600060208284031215611a2557611a246118c5565b5b6000611a33848285016119fa565b91505092915050565b600060c082019050611a5160008301896117fb565b611a5e60208301886117fb565b611a6b60408301876117fb565b611a7860608301866117fb565b611a8560808301856117fb565b611a9260a0830184611960565b979650505050505050565b600082825260208201905092915050565b7f596f7520616c7265616479207061727469636970617465640000000000000000600082015250565b6000611ae4601883611a9d565b9150611aef82611aae565b602082019050919050565b60006020820190508181036000830152611b1381611ad7565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611b54826117f1565b9150611b5f836117f1565b9250828203905081811115611b7757611b76611b1a565b5b92915050565b6000611b88826117f1565b9150611b93836117f1565b9250828202611ba1816117f1565b91508282048414831517611bb857611bb7611b1a565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611bf9826117f1565b9150611c04836117f1565b925082611c1457611c13611bbf565b5b828204905092915050565b6000604082019050611c34600083018561189b565b611c4160208301846117fb565b9392505050565b611c5181611825565b8114611c5c57600080fd5b50565b600081519050611c6e81611c48565b92915050565b600060208284031215611c8a57611c896118c5565b5b6000611c9884828501611c5f565b91505092915050565b7f6e6f77205374617465206973205374616b696e672c20506c6561736520556e5360008201527f74616b696e672121000000000000000000000000000000000000000000000000602082015250565b6000611cfd602883611a9d565b9150611d0882611ca1565b604082019050919050565b60006020820190508181036000830152611d2c81611cf0565b9050919050565b6000611d3e826117f1565b9150611d49836117f1565b9250828201905080821115611d6157611d60611b1a565b5b92915050565b6000604082019050611d7c60008301856117fb565b611d8960208301846117fb565b9392505050565b7f41444452455353204953204e4f54205a65726f20416464726573730000000000600082015250565b6000611dc6601b83611a9d565b9150611dd182611d90565b602082019050919050565b60006020820190508181036000830152611df581611db9565b9050919050565b7f596f7520617265206e6f74207061727469636970617465640000000000000000600082015250565b6000611e32601883611a9d565b9150611e3d82611dfc565b602082019050919050565b60006020820190508181036000830152611e6181611e25565b9050919050565b600081519050611e778161198a565b92915050565b600060208284031215611e9357611e926118c5565b5b6000611ea184828501611e68565b91505092915050565b7f544f4b454e5f4c41434b00000000000000000000000000000000000000000000600082015250565b6000611ee0600a83611a9d565b9150611eeb82611eaa565b602082019050919050565b60006020820190508181036000830152611f0f81611ed3565b9050919050565b7f5374616b6520616d6f756e742073686f756c6420626520636f72726563740000600082015250565b6000611f4c601e83611a9d565b9150611f5782611f16565b602082019050919050565b60006020820190508181036000830152611f7b81611f3f565b9050919050565b6000606082019050611f97600083018661189b565b611fa4602083018561189b565b611fb160408301846117fb565b949350505050565b7f496e637265617365436f6e7472616374204661696c0000000000000000000000600082015250565b6000611fef601583611a9d565b9150611ffa82611fb9565b602082019050919050565b6000602082019050818103600083015261201e81611fe2565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612081602683611a9d565b915061208c82612025565b604082019050919050565b600060208201905081810360008301526120b081612074565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006120ed602083611a9d565b91506120f8826120b7565b602082019050919050565b6000602082019050818103600083015261211c816120e0565b905091905056fea26469706673582212205e10c1109c495548ffa999f1f4eee4db9291a0aa44ed8e7654942edd6268934464736f6c63430008110033",
  "deployedBytecode": "0x6080604052600436106100e85760003560e01c8063b29600191161008a578063dfbf9def11610059578063dfbf9def14610274578063e7181edc146102b6578063e74d059f146102e1578063f2fde38b1461031e576100e8565b8063b2960019146101c5578063b88a802f146101ee578063bd30558e14610219578063cda6b84714610244576100e8565b8063715018a6116100c6578063715018a61461014d5780637b9ba7fd1461016457806389fb2e46146101835780638da5cb5b1461019a576100e8565b8063313ce567146100ed5780633595bf7a14610118578063397eee8014610122575b600080fd5b3480156100f957600080fd5b50610102610347565b60405161010f919061180a565b60405180910390f35b61012061034d565b005b34801561012e57600080fd5b5061013761074d565b604051610144919061180a565b60405180910390f35b34801561015957600080fd5b50610162610753565b005b61016c610767565b60405161017a929190611840565b60405180910390f35b34801561018f57600080fd5b50610198610add565b005b3480156101a657600080fd5b506101af610b26565b6040516101bc91906118aa565b60405180910390f35b3480156101d157600080fd5b506101ec60048036038101906101e79190611908565b610b4f565b005b3480156101fa57600080fd5b50610203610c2c565b6040516102109190611935565b60405180910390f35b34801561022557600080fd5b5061022e610eec565b60405161023b919061196f565b60405180910390f35b61025e600480360381019061025991906119b6565b610f02565b60405161026b9190611935565b60405180910390f35b34801561028057600080fd5b5061029b60048036038101906102969190611a0f565b61142d565b6040516102ad96959493929190611a3c565b60405180910390f35b3480156102c257600080fd5b506102cb611479565b6040516102d8919061180a565b60405180910390f35b3480156102ed57600080fd5b5061030860048036038101906103039190611a0f565b611604565b6040516103159190611935565b60405180910390f35b34801561032a57600080fd5b5061034560048036038101906103409190611a0f565b611624565b005b60025481565b60011515600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146103e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d790611afa565b60405180910390fd5b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154426104309190611b49565b90506000600360089054906101000a900463ffffffff1663ffffffff16600360049054906101000a900463ffffffff1663ffffffff166064600360009054906101000a900463ffffffff1663ffffffff16600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301546104ce9190611b7d565b6104d89190611bee565b6104e29190611bee565b6104ec9190611bee565b9050600082826104fc9190611b7d565b9050600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33600a8461054a9190611bee565b6040518363ffffffff1660e01b8152600401610567929190611c1f565b6020604051808303816000875af1158015610586573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105aa9190611c74565b5042600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201819055506000600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506002600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050160006101000a81548163ffffffff021916908363ffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff167f79d3df6837cc49ff0e09fd3258e6e45594e0703445bb06825e9d75156eaee8f0426040516106f2919061180a565b60405180910390a23373ffffffffffffffffffffffffffffffffffffffff167fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a82604051610740919061180a565b60405180910390a2505050565b60015481565b61075b6116a7565b6107656000611725565b565b6000806002600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050160009054906101000a900463ffffffff1663ffffffff1614610805576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107fc90611d13565b60405180910390fd5b42600454600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201546108569190611d33565b1015610a71576000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301549050600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610900929190611c1f565b6020604051808303816000875af115801561091f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109439190611c74565b50600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008082016000905560018201600090556002820160009055600382016000905560048201600090556005820160006101000a81549063ffffffff02191690555050600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff02191690553373ffffffffffffffffffffffffffffffffffffffff167fec4c5e119b3c2211affd553a6167326af1472cb3b7966b96b0f84a56d8d5317c4283604051610a5c929190611d67565b60405180910390a26001429250925050610ad9565b600042600454600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154610ac49190611d33565b610ace9190611b49565b905060008192509250505b9091565b42600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610b576116a7565b600073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610be8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bdf90611ddc565b60405180910390fd5b80600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600060011515600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610cc1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cb890611e48565b60405180910390fd5b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015442610d119190611b49565b90506000600360089054906101000a900463ffffffff1663ffffffff16600360049054906101000a900463ffffffff1663ffffffff166064600360009054906101000a900463ffffffff1663ffffffff16600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030154610daf9190611b7d565b610db99190611bee565b610dc39190611bee565b610dcd9190611bee565b905060008282610ddd9190611b7d565b9050600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33600a84610e2b9190611bee565b6040518363ffffffff1660e01b8152600401610e48929190611c1f565b6020604051808303816000875af1158015610e67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8b9190611c74565b50610e94610add565b3373ffffffffffffffffffffffffffffffffffffffff167fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a82604051610eda919061180a565b60405180910390a26001935050505090565b600360009054906101000a900463ffffffff1681565b60008180600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610f6191906118aa565b602060405180830381865afa158015610f7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fa29190611e7d565b11610fe2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd990611ef6565b60405180910390fd5b60008311611025576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161101c90611f62565b60405180910390fd5b60001515600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146110b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110af90611afa565b60405180910390fd5b6002600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050160009054906101000a900463ffffffff1663ffffffff16036111215760009150611427565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d83a2bf33330876040518463ffffffff1660e01b815260040161118293929190611f82565b6020604051808303816000875af11580156111a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111c59190611c74565b905080611207576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111fe90612005565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330876040518463ffffffff1660e01b815260040161126693929190611f82565b6020604051808303816000875af1158015611285573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112a99190611c74565b506001600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506040518060c001604052804281526020014281526020016000815260200185815260200160008152602001600163ffffffff16815250600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001556020820151816001015560408201518160020155606082015181600301556080820151816004015560a08201518160050160006101000a81548163ffffffff021916908363ffffffff1602179055509050503373ffffffffffffffffffffffffffffffffffffffff167f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d85604051611419919061180a565b60405180910390a260019250505b50919050565b60076020528060005260406000206000915090508060000154908060010154908060020154908060030154908060040154908060050160009054906101000a900463ffffffff16905086565b600060011515600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515036115fc576000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154426115239190611b49565b90506000600360089054906101000a900463ffffffff1663ffffffff16600360049054906101000a900463ffffffff1663ffffffff166064600360009054906101000a900463ffffffff1663ffffffff16600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301546115c19190611b7d565b6115cb9190611bee565b6115d59190611bee565b6115df9190611bee565b9050600082826115ef9190611b7d565b9050809350505050611601565b600090505b90565b60086020528060005260406000206000915054906101000a900460ff1681565b61162c6116a7565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361169b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161169290612097565b60405180910390fd5b6116a481611725565b50565b6116af6117e9565b73ffffffffffffffffffffffffffffffffffffffff166116cd610b26565b73ffffffffffffffffffffffffffffffffffffffff1614611723576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161171a90612103565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000819050919050565b611804816117f1565b82525050565b600060208201905061181f60008301846117fb565b92915050565b60008115159050919050565b61183a81611825565b82525050565b60006040820190506118556000830185611831565b61186260208301846117fb565b9392505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061189482611869565b9050919050565b6118a481611889565b82525050565b60006020820190506118bf600083018461189b565b92915050565b600080fd5b60006118d582611889565b9050919050565b6118e5816118ca565b81146118f057600080fd5b50565b600081359050611902816118dc565b92915050565b60006020828403121561191e5761191d6118c5565b5b600061192c848285016118f3565b91505092915050565b600060208201905061194a6000830184611831565b92915050565b600063ffffffff82169050919050565b61196981611950565b82525050565b60006020820190506119846000830184611960565b92915050565b611993816117f1565b811461199e57600080fd5b50565b6000813590506119b08161198a565b92915050565b6000602082840312156119cc576119cb6118c5565b5b60006119da848285016119a1565b91505092915050565b6119ec81611889565b81146119f757600080fd5b50565b600081359050611a09816119e3565b92915050565b600060208284031215611a2557611a246118c5565b5b6000611a33848285016119fa565b91505092915050565b600060c082019050611a5160008301896117fb565b611a5e60208301886117fb565b611a6b60408301876117fb565b611a7860608301866117fb565b611a8560808301856117fb565b611a9260a0830184611960565b979650505050505050565b600082825260208201905092915050565b7f596f7520616c7265616479207061727469636970617465640000000000000000600082015250565b6000611ae4601883611a9d565b9150611aef82611aae565b602082019050919050565b60006020820190508181036000830152611b1381611ad7565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611b54826117f1565b9150611b5f836117f1565b9250828203905081811115611b7757611b76611b1a565b5b92915050565b6000611b88826117f1565b9150611b93836117f1565b9250828202611ba1816117f1565b91508282048414831517611bb857611bb7611b1a565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611bf9826117f1565b9150611c04836117f1565b925082611c1457611c13611bbf565b5b828204905092915050565b6000604082019050611c34600083018561189b565b611c4160208301846117fb565b9392505050565b611c5181611825565b8114611c5c57600080fd5b50565b600081519050611c6e81611c48565b92915050565b600060208284031215611c8a57611c896118c5565b5b6000611c9884828501611c5f565b91505092915050565b7f6e6f77205374617465206973205374616b696e672c20506c6561736520556e5360008201527f74616b696e672121000000000000000000000000000000000000000000000000602082015250565b6000611cfd602883611a9d565b9150611d0882611ca1565b604082019050919050565b60006020820190508181036000830152611d2c81611cf0565b9050919050565b6000611d3e826117f1565b9150611d49836117f1565b9250828201905080821115611d6157611d60611b1a565b5b92915050565b6000604082019050611d7c60008301856117fb565b611d8960208301846117fb565b9392505050565b7f41444452455353204953204e4f54205a65726f20416464726573730000000000600082015250565b6000611dc6601b83611a9d565b9150611dd182611d90565b602082019050919050565b60006020820190508181036000830152611df581611db9565b9050919050565b7f596f7520617265206e6f74207061727469636970617465640000000000000000600082015250565b6000611e32601883611a9d565b9150611e3d82611dfc565b602082019050919050565b60006020820190508181036000830152611e6181611e25565b9050919050565b600081519050611e778161198a565b92915050565b600060208284031215611e9357611e926118c5565b5b6000611ea184828501611e68565b91505092915050565b7f544f4b454e5f4c41434b00000000000000000000000000000000000000000000600082015250565b6000611ee0600a83611a9d565b9150611eeb82611eaa565b602082019050919050565b60006020820190508181036000830152611f0f81611ed3565b9050919050565b7f5374616b6520616d6f756e742073686f756c6420626520636f72726563740000600082015250565b6000611f4c601e83611a9d565b9150611f5782611f16565b602082019050919050565b60006020820190508181036000830152611f7b81611f3f565b9050919050565b6000606082019050611f97600083018661189b565b611fa4602083018561189b565b611fb160408301846117fb565b949350505050565b7f496e637265617365436f6e7472616374204661696c0000000000000000000000600082015250565b6000611fef601583611a9d565b9150611ffa82611fb9565b602082019050919050565b6000602082019050818103600083015261201e81611fe2565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612081602683611a9d565b915061208c82612025565b604082019050919050565b600060208201905081810360008301526120b081612074565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006120ed602083611a9d565b91506120f8826120b7565b602082019050919050565b6000602082019050818103600083015261211c816120e0565b905091905056fea26469706673582212205e10c1109c495548ffa999f1f4eee4db9291a0aa44ed8e7654942edd6268934464736f6c63430008110033",
  "immutableReferences": {},
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:3191:37",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "51:49:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "61:33:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "76:5:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "83:10:37",
                        "type": "",
                        "value": "0xffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "72:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "72:22:37"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "61:7:37"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint32",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "33:5:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "43:7:37",
                "type": ""
              }
            ],
            "src": "7:93:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "134:152:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "151:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "154:77:37",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "144:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "144:88:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "144:88:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "248:1:37",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "251:4:37",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "241:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "241:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "241:15:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "272:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "275:4:37",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "265:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "265:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "265:15:37"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "106:180:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "339:228:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "349:24:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "371:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint32",
                      "nodeType": "YulIdentifier",
                      "src": "354:16:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "354:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "349:1:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "382:24:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "404:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint32",
                      "nodeType": "YulIdentifier",
                      "src": "387:16:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "387:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "382:1:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "415:28:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "438:1:37"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "441:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "434:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "434:9:37"
                  },
                  "variables": [
                    {
                      "name": "product_raw",
                      "nodeType": "YulTypedName",
                      "src": "419:11:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "452:40:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "product_raw",
                        "nodeType": "YulIdentifier",
                        "src": "480:11:37"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint32",
                      "nodeType": "YulIdentifier",
                      "src": "463:16:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "463:29:37"
                  },
                  "variableNames": [
                    {
                      "name": "product",
                      "nodeType": "YulIdentifier",
                      "src": "452:7:37"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "538:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "540:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "540:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "540:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "product",
                            "nodeType": "YulIdentifier",
                            "src": "515:7:37"
                          },
                          {
                            "name": "product_raw",
                            "nodeType": "YulIdentifier",
                            "src": "524:11:37"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "512:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "512:24:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "505:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "505:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "502:58:37"
                }
              ]
            },
            "name": "checked_mul_t_uint32",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "322:1:37",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "325:1:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "product",
                "nodeType": "YulTypedName",
                "src": "331:7:37",
                "type": ""
              }
            ],
            "src": "292:275:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "613:35:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "623:19:37",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "639:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "633:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "633:9:37"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "623:6:37"
                    }
                  ]
                }
              ]
            },
            "name": "allocate_unbounded",
            "nodeType": "YulFunctionDefinition",
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "606:6:37",
                "type": ""
              }
            ],
            "src": "573:75:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "743:28:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "760:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "763:1:37",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "753:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "753:12:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "753:12:37"
                }
              ]
            },
            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            "nodeType": "YulFunctionDefinition",
            "src": "654:117:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "866:28:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "883:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "886:1:37",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "876:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "876:12:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "876:12:37"
                }
              ]
            },
            "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            "nodeType": "YulFunctionDefinition",
            "src": "777:117:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "945:81:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "955:65:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "970:5:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "977:42:37",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "966:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "966:54:37"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "955:7:37"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint160",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "927:5:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "937:7:37",
                "type": ""
              }
            ],
            "src": "900:126:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1077:51:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1087:35:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1116:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "1098:17:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1098:24:37"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "1087:7:37"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1059:5:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "1069:7:37",
                "type": ""
              }
            ],
            "src": "1032:96:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1197:51:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1207:35:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1236:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_address",
                      "nodeType": "YulIdentifier",
                      "src": "1218:17:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1218:24:37"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "1207:7:37"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_contract$_Jet2Token_$5901",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1179:5:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "1189:7:37",
                "type": ""
              }
            ],
            "src": "1134:114:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1315:97:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1390:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1399:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1402:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1392:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1392:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1392:12:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1338:5:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "1381:5:37"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_contract$_Jet2Token_$5901",
                              "nodeType": "YulIdentifier",
                              "src": "1345:35:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1345:42:37"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "1335:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1335:53:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "1328:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1328:61:37"
                  },
                  "nodeType": "YulIf",
                  "src": "1325:81:37"
                }
              ]
            },
            "name": "validator_revert_t_contract$_Jet2Token_$5901",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1308:5:37",
                "type": ""
              }
            ],
            "src": "1254:158:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1499:98:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1509:22:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "1524:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "1518:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1518:13:37"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "1509:5:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1585:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_contract$_Jet2Token_$5901",
                      "nodeType": "YulIdentifier",
                      "src": "1540:44:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1540:51:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1540:51:37"
                }
              ]
            },
            "name": "abi_decode_t_contract$_Jet2Token_$5901_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "1477:6:37",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "1485:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1493:5:37",
                "type": ""
              }
            ],
            "src": "1418:179:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1698:292:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1744:83:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "1746:77:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1746:79:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1746:79:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1719:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1728:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1715:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1715:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1740:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1711:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1711:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "1708:119:37"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1837:146:37",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1852:15:37",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1866:1:37",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1856:6:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1881:92:37",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1945:9:37"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1956:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1941:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1941:22:37"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1965:7:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_contract$_Jet2Token_$5901_fromMemory",
                          "nodeType": "YulIdentifier",
                          "src": "1891:49:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1891:82:37"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1881:6:37"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_contract$_Jet2Token_$5901_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1668:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1679:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1691:6:37",
                "type": ""
              }
            ],
            "src": "1603:387:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2092:73:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2109:3:37"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2114:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2102:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2102:19:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2102:19:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2130:29:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2149:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2154:4:37",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2145:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2145:14:37"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "2130:11:37"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "2064:3:37",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "2069:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "2080:11:37",
                "type": ""
              }
            ],
            "src": "1996:169:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2277:114:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "2299:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2307:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2295:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2295:14:37"
                      },
                      {
                        "hexValue": "546f6b656e20416464726573732063616e6e6f74206265206164647265737320",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "2311:34:37",
                        "type": "",
                        "value": "Token Address cannot be address "
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2288:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2288:58:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2288:58:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "2367:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2375:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2363:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2363:15:37"
                      },
                      {
                        "hexValue": "30",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "2380:3:37",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2356:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2356:28:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2356:28:37"
                }
              ]
            },
            "name": "store_literal_in_memory_f2202c1f725dcbd51d00258bd50ca4766e24b49c836557e7bdc6a84c67402a7f",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "2269:6:37",
                "type": ""
              }
            ],
            "src": "2171:220:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2543:220:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2553:74:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2619:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2624:2:37",
                        "type": "",
                        "value": "33"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2560:58:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2560:67:37"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "2553:3:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2725:3:37"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_f2202c1f725dcbd51d00258bd50ca4766e24b49c836557e7bdc6a84c67402a7f",
                      "nodeType": "YulIdentifier",
                      "src": "2636:88:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2636:93:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2636:93:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2738:19:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2749:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2754:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2745:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2745:12:37"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "2738:3:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_f2202c1f725dcbd51d00258bd50ca4766e24b49c836557e7bdc6a84c67402a7f_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "2531:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "2539:3:37",
                "type": ""
              }
            ],
            "src": "2397:366:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2940:248:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2950:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2962:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2973:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2958:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2958:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2950:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2997:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3008:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2993:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2993:17:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "3016:4:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3022:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3012:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3012:20:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2986:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2986:47:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2986:47:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3042:139:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "3176:4:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_f2202c1f725dcbd51d00258bd50ca4766e24b49c836557e7bdc6a84c67402a7f_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "3050:124:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3050:131:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3042:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_f2202c1f725dcbd51d00258bd50ca4766e24b49c836557e7bdc6a84c67402a7f__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2920:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2935:4:37",
                "type": ""
              }
            ],
            "src": "2769:419:37"
          }
        ]
      },
      "contents": "{\n\n    function cleanup_t_uint32(value) -> cleaned {\n        cleaned := and(value, 0xffffffff)\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_mul_t_uint32(x, y) -> product {\n        x := cleanup_t_uint32(x)\n        y := cleanup_t_uint32(y)\n        let product_raw := mul(x, y)\n        product := cleanup_t_uint32(product_raw)\n\n        if iszero(eq(product, product_raw)) { panic_error_0x11() }\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_contract$_Jet2Token_$5901(value) -> cleaned {\n        cleaned := cleanup_t_address(value)\n    }\n\n    function validator_revert_t_contract$_Jet2Token_$5901(value) {\n        if iszero(eq(value, cleanup_t_contract$_Jet2Token_$5901(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_contract$_Jet2Token_$5901_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_contract$_Jet2Token_$5901(value)\n    }\n\n    function abi_decode_tuple_t_contract$_Jet2Token_$5901_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_contract$_Jet2Token_$5901_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_f2202c1f725dcbd51d00258bd50ca4766e24b49c836557e7bdc6a84c67402a7f(memPtr) {\n\n        mstore(add(memPtr, 0), \"Token Address cannot be address \")\n\n        mstore(add(memPtr, 32), \"0\")\n\n    }\n\n    function abi_encode_t_stringliteral_f2202c1f725dcbd51d00258bd50ca4766e24b49c836557e7bdc6a84c67402a7f_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 33)\n        store_literal_in_memory_f2202c1f725dcbd51d00258bd50ca4766e24b49c836557e7bdc6a84c67402a7f(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_f2202c1f725dcbd51d00258bd50ca4766e24b49c836557e7bdc6a84c67402a7f__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_f2202c1f725dcbd51d00258bd50ca4766e24b49c836557e7bdc6a84c67402a7f_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n}\n",
      "id": 37,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:18065:37",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "52:32:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "62:16:37",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "73:5:37"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "62:7:37"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "34:5:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "44:7:37",
                "type": ""
              }
            ],
            "src": "7:77:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "155:53:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "172:3:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "195:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "177:17:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "177:24:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "165:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "165:37:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "165:37:37"
                }
              ]
            },
            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "143:5:37",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "150:3:37",
                "type": ""
              }
            ],
            "src": "90:118:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "312:124:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "322:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "334:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "345:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "330:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "330:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "322:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "402:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "415:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "426:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "411:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "411:17:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "358:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "358:71:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "358:71:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "284:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "296:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "307:4:37",
                "type": ""
              }
            ],
            "src": "214:222:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "484:48:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "494:32:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "519:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "512:6:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "512:13:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "505:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "505:21:37"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "494:7:37"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "466:5:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "476:7:37",
                "type": ""
              }
            ],
            "src": "442:90:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "597:50:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "614:3:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "634:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_bool",
                          "nodeType": "YulIdentifier",
                          "src": "619:14:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "619:21:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "607:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "607:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "607:34:37"
                }
              ]
            },
            "name": "abi_encode_t_bool_to_t_bool_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "585:5:37",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "592:3:37",
                "type": ""
              }
            ],
            "src": "538:109:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "773:200:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "783:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "795:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "806:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "791:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "791:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "783:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "857:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "870:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "881:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "866:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "866:17:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_bool_to_t_bool_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "819:37:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "819:65:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "819:65:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "938:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "951:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "962:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "947:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "947:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "894:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "894:72:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "894:72:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bool_t_uint256__to_t_bool_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "737:9:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "749:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "757:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "768:4:37",
                "type": ""
              }
            ],
            "src": "653:320:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1024:81:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1034:65:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1049:5:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1056:42:37",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "1045:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1045:54:37"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "1034:7:37"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint160",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1006:5:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "1016:7:37",
                "type": ""
              }
            ],
            "src": "979:126:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1156:51:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1166:35:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1195:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "1177:17:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1177:24:37"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "1166:7:37"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1138:5:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "1148:7:37",
                "type": ""
              }
            ],
            "src": "1111:96:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1278:53:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1295:3:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1318:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "1300:17:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1300:24:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1288:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1288:37:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1288:37:37"
                }
              ]
            },
            "name": "abi_encode_t_address_to_t_address_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1266:5:37",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1273:3:37",
                "type": ""
              }
            ],
            "src": "1213:118:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1435:124:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1445:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1457:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1468:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1453:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1453:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1445:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "1525:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1538:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1549:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1534:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1534:17:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "1481:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1481:71:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1481:71:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1407:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1419:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1430:4:37",
                "type": ""
              }
            ],
            "src": "1337:222:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1605:35:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1615:19:37",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1631:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "1625:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1625:9:37"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "1615:6:37"
                    }
                  ]
                }
              ]
            },
            "name": "allocate_unbounded",
            "nodeType": "YulFunctionDefinition",
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "1598:6:37",
                "type": ""
              }
            ],
            "src": "1565:75:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1735:28:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1752:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1755:1:37",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "1745:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1745:12:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1745:12:37"
                }
              ]
            },
            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            "nodeType": "YulFunctionDefinition",
            "src": "1646:117:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1858:28:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1875:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1878:1:37",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "1868:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1868:12:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1868:12:37"
                }
              ]
            },
            "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            "nodeType": "YulFunctionDefinition",
            "src": "1769:117:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1954:51:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1964:35:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1993:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_address",
                      "nodeType": "YulIdentifier",
                      "src": "1975:17:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1975:24:37"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "1964:7:37"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_contract$_JetToken_$6888",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1936:5:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "1946:7:37",
                "type": ""
              }
            ],
            "src": "1892:113:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2071:96:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2145:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2154:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2157:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2147:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2147:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2147:12:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2094:5:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "2136:5:37"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_contract$_JetToken_$6888",
                              "nodeType": "YulIdentifier",
                              "src": "2101:34:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2101:41:37"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "2091:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2091:52:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "2084:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2084:60:37"
                  },
                  "nodeType": "YulIf",
                  "src": "2081:80:37"
                }
              ]
            },
            "name": "validator_revert_t_contract$_JetToken_$6888",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2064:5:37",
                "type": ""
              }
            ],
            "src": "2011:156:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2242:104:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2252:29:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "2274:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2261:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2261:20:37"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "2252:5:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2334:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_contract$_JetToken_$6888",
                      "nodeType": "YulIdentifier",
                      "src": "2290:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2290:50:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2290:50:37"
                }
              ]
            },
            "name": "abi_decode_t_contract$_JetToken_$6888",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "2220:6:37",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "2228:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2236:5:37",
                "type": ""
              }
            ],
            "src": "2173:173:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2435:280:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2481:83:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "2483:77:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2483:79:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2483:79:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2456:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2465:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2452:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2452:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2477:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2448:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2448:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "2445:119:37"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "2574:134:37",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "2589:15:37",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2603:1:37",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "2593:6:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2618:80:37",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2670:9:37"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2681:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2666:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2666:22:37"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2690:7:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_contract$_JetToken_$6888",
                          "nodeType": "YulIdentifier",
                          "src": "2628:37:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2628:70:37"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "2618:6:37"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_contract$_JetToken_$6888",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2405:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2416:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2428:6:37",
                "type": ""
              }
            ],
            "src": "2352:363:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2813:118:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2823:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2835:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2846:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2831:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2831:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2823:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2897:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2910:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2921:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2906:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2906:17:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_bool_to_t_bool_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2859:37:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2859:65:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2859:65:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2785:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2797:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2808:4:37",
                "type": ""
              }
            ],
            "src": "2721:210:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2981:49:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2991:33:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "3006:5:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3013:10:37",
                        "type": "",
                        "value": "0xffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "3002:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3002:22:37"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "2991:7:37"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint32",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2963:5:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "2973:7:37",
                "type": ""
              }
            ],
            "src": "2937:93:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3099:52:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3116:3:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "3138:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint32",
                          "nodeType": "YulIdentifier",
                          "src": "3121:16:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3121:23:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3109:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3109:36:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3109:36:37"
                }
              ]
            },
            "name": "abi_encode_t_uint32_to_t_uint32_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3087:5:37",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "3094:3:37",
                "type": ""
              }
            ],
            "src": "3036:115:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3253:122:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3263:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3275:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3286:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3271:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3271:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3263:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "3341:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3354:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3365:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3350:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3350:17:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint32_to_t_uint32_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "3299:41:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3299:69:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3299:69:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint32__to_t_uint32__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3225:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3237:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3248:4:37",
                "type": ""
              }
            ],
            "src": "3157:218:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3424:79:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3481:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3490:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3493:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3483:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3483:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3483:12:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "3447:5:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "3472:5:37"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "3454:17:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3454:24:37"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "3444:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3444:35:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "3437:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3437:43:37"
                  },
                  "nodeType": "YulIf",
                  "src": "3434:63:37"
                }
              ]
            },
            "name": "validator_revert_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3417:5:37",
                "type": ""
              }
            ],
            "src": "3381:122:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3561:87:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3571:29:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "3593:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "3580:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3580:20:37"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "3571:5:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "3636:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "3609:26:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3609:33:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3609:33:37"
                }
              ]
            },
            "name": "abi_decode_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "3539:6:37",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "3547:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3555:5:37",
                "type": ""
              }
            ],
            "src": "3509:139:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3720:263:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3766:83:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "3768:77:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3768:79:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3768:79:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3741:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3750:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3737:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3737:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3762:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "3733:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3733:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "3730:119:37"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3859:117:37",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "3874:15:37",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3888:1:37",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "3878:6:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3903:63:37",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3938:9:37"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3949:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3934:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3934:22:37"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3958:7:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "3913:20:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3913:53:37"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "3903:6:37"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3690:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "3701:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3713:6:37",
                "type": ""
              }
            ],
            "src": "3654:329:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4032:79:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4089:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4098:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4101:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4091:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4091:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4091:12:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "4055:5:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "4080:5:37"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address",
                              "nodeType": "YulIdentifier",
                              "src": "4062:17:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4062:24:37"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "4052:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4052:35:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "4045:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4045:43:37"
                  },
                  "nodeType": "YulIf",
                  "src": "4042:63:37"
                }
              ]
            },
            "name": "validator_revert_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4025:5:37",
                "type": ""
              }
            ],
            "src": "3989:122:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4169:87:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4179:29:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "4201:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4188:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4188:20:37"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "4179:5:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4244:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_address",
                      "nodeType": "YulIdentifier",
                      "src": "4217:26:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4217:33:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4217:33:37"
                }
              ]
            },
            "name": "abi_decode_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "4147:6:37",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "4155:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4163:5:37",
                "type": ""
              }
            ],
            "src": "4117:139:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4328:263:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4374:83:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "4376:77:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4376:79:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4376:79:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4349:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4358:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4345:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4345:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4370:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "4341:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4341:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "4338:119:37"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4467:117:37",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4482:15:37",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4496:1:37",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4486:6:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4511:63:37",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4546:9:37"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4557:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4542:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4542:22:37"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4566:7:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "4521:20:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4521:53:37"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4511:6:37"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4298:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "4309:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4321:6:37",
                "type": ""
              }
            ],
            "src": "4262:329:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4833:535:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4843:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4855:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4866:3:37",
                        "type": "",
                        "value": "192"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4851:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4851:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4843:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "4924:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4937:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4948:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4933:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4933:17:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "4880:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4880:71:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4880:71:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "5005:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5018:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5029:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5014:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5014:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "4961:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4961:72:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4961:72:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "5087:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5100:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5111:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5096:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5096:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "5043:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5043:72:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5043:72:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value3",
                        "nodeType": "YulIdentifier",
                        "src": "5169:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5182:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5193:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5178:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5178:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "5125:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5125:72:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5125:72:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value4",
                        "nodeType": "YulIdentifier",
                        "src": "5251:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5264:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5275:3:37",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5260:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5260:19:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "5207:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5207:73:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5207:73:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value5",
                        "nodeType": "YulIdentifier",
                        "src": "5332:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5345:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5356:3:37",
                            "type": "",
                            "value": "160"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5341:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5341:19:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint32_to_t_uint32_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "5290:41:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5290:71:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5290:71:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256_t_uint256_t_uint256_t_uint256_t_uint256_t_uint32__to_t_uint256_t_uint256_t_uint256_t_uint256_t_uint256_t_uint32__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4765:9:37",
                "type": ""
              },
              {
                "name": "value5",
                "nodeType": "YulTypedName",
                "src": "4777:6:37",
                "type": ""
              },
              {
                "name": "value4",
                "nodeType": "YulTypedName",
                "src": "4785:6:37",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "4793:6:37",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "4801:6:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "4809:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4817:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4828:4:37",
                "type": ""
              }
            ],
            "src": "4597:771:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5470:73:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5487:3:37"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "5492:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5480:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5480:19:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5480:19:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5508:29:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5527:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5532:4:37",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5523:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5523:14:37"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "5508:11:37"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "5442:3:37",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "5447:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "5458:11:37",
                "type": ""
              }
            ],
            "src": "5374:169:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5655:68:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "5677:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5685:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5673:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5673:14:37"
                      },
                      {
                        "hexValue": "596f7520616c726561647920706172746963697061746564",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "5689:26:37",
                        "type": "",
                        "value": "You already participated"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5666:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5666:50:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5666:50:37"
                }
              ]
            },
            "name": "store_literal_in_memory_0e75d8d12a7dbee9f06677c3321bb311b9f1e86b675875c5f6d32a870ba6ec0c",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "5647:6:37",
                "type": ""
              }
            ],
            "src": "5549:174:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5875:220:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5885:74:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5951:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5956:2:37",
                        "type": "",
                        "value": "24"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "5892:58:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5892:67:37"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "5885:3:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6057:3:37"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_0e75d8d12a7dbee9f06677c3321bb311b9f1e86b675875c5f6d32a870ba6ec0c",
                      "nodeType": "YulIdentifier",
                      "src": "5968:88:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5968:93:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5968:93:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6070:19:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6081:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6086:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6077:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6077:12:37"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "6070:3:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_0e75d8d12a7dbee9f06677c3321bb311b9f1e86b675875c5f6d32a870ba6ec0c_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "5863:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "5871:3:37",
                "type": ""
              }
            ],
            "src": "5729:366:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6272:248:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6282:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6294:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6305:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6290:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6290:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6282:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6329:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6340:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6325:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6325:17:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "6348:4:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6354:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "6344:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6344:20:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6318:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6318:47:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6318:47:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6374:139:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6508:4:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_0e75d8d12a7dbee9f06677c3321bb311b9f1e86b675875c5f6d32a870ba6ec0c_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "6382:124:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6382:131:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6374:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_0e75d8d12a7dbee9f06677c3321bb311b9f1e86b675875c5f6d32a870ba6ec0c__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6252:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "6267:4:37",
                "type": ""
              }
            ],
            "src": "6101:419:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6554:152:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6571:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6574:77:37",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6564:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6564:88:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6564:88:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6668:1:37",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6671:4:37",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6661:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6661:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6661:15:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6692:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6695:4:37",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "6685:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6685:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6685:15:37"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "6526:180:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6757:149:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6767:25:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "6790:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "6772:17:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6772:20:37"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "6767:1:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6801:25:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "6824:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "6806:17:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6806:20:37"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "6801:1:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6835:17:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "6847:1:37"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "6850:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "6843:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6843:9:37"
                  },
                  "variableNames": [
                    {
                      "name": "diff",
                      "nodeType": "YulIdentifier",
                      "src": "6835:4:37"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6877:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "6879:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6879:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6879:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "diff",
                        "nodeType": "YulIdentifier",
                        "src": "6868:4:37"
                      },
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "6874:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "6865:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6865:11:37"
                  },
                  "nodeType": "YulIf",
                  "src": "6862:37:37"
                }
              ]
            },
            "name": "checked_sub_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "6743:1:37",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "6746:1:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "diff",
                "nodeType": "YulTypedName",
                "src": "6752:4:37",
                "type": ""
              }
            ],
            "src": "6712:194:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6960:362:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6970:25:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "6993:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "6975:17:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6975:20:37"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "6970:1:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7004:25:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "7027:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "7009:17:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7009:20:37"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "7004:1:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7038:28:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "7061:1:37"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "7064:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "7057:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7057:9:37"
                  },
                  "variables": [
                    {
                      "name": "product_raw",
                      "nodeType": "YulTypedName",
                      "src": "7042:11:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7075:41:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "product_raw",
                        "nodeType": "YulIdentifier",
                        "src": "7104:11:37"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "7086:17:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7086:30:37"
                  },
                  "variableNames": [
                    {
                      "name": "product",
                      "nodeType": "YulIdentifier",
                      "src": "7075:7:37"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7293:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "7295:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7295:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7295:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "x",
                                "nodeType": "YulIdentifier",
                                "src": "7226:1:37"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "7219:6:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7219:9:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "y",
                                "nodeType": "YulIdentifier",
                                "src": "7249:1:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "product",
                                    "nodeType": "YulIdentifier",
                                    "src": "7256:7:37"
                                  },
                                  {
                                    "name": "x",
                                    "nodeType": "YulIdentifier",
                                    "src": "7265:1:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "div",
                                  "nodeType": "YulIdentifier",
                                  "src": "7252:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "7252:15:37"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nodeType": "YulIdentifier",
                              "src": "7246:2:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7246:22:37"
                          }
                        ],
                        "functionName": {
                          "name": "or",
                          "nodeType": "YulIdentifier",
                          "src": "7199:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7199:83:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "7179:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7179:113:37"
                  },
                  "nodeType": "YulIf",
                  "src": "7176:139:37"
                }
              ]
            },
            "name": "checked_mul_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "6943:1:37",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "6946:1:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "product",
                "nodeType": "YulTypedName",
                "src": "6952:7:37",
                "type": ""
              }
            ],
            "src": "6912:410:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7356:152:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7373:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7376:77:37",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7366:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7366:88:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7366:88:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7470:1:37",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7473:4:37",
                        "type": "",
                        "value": "0x12"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7463:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7463:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7463:15:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7494:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7497:4:37",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "7487:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7487:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7487:15:37"
                }
              ]
            },
            "name": "panic_error_0x12",
            "nodeType": "YulFunctionDefinition",
            "src": "7328:180:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7556:143:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7566:25:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "7589:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "7571:17:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7571:20:37"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "7566:1:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7600:25:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "7623:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "7605:17:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7605:20:37"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "7600:1:37"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7647:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x12",
                            "nodeType": "YulIdentifier",
                            "src": "7649:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7649:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7649:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "7644:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "7637:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7637:9:37"
                  },
                  "nodeType": "YulIf",
                  "src": "7634:35:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7679:14:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "7688:1:37"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "7691:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "7684:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7684:9:37"
                  },
                  "variableNames": [
                    {
                      "name": "r",
                      "nodeType": "YulIdentifier",
                      "src": "7679:1:37"
                    }
                  ]
                }
              ]
            },
            "name": "checked_div_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "7545:1:37",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "7548:1:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "r",
                "nodeType": "YulTypedName",
                "src": "7554:1:37",
                "type": ""
              }
            ],
            "src": "7514:185:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7831:206:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7841:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7853:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7864:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7849:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7849:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7841:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "7921:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7934:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7945:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7930:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7930:17:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "7877:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7877:71:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7877:71:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "8002:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8015:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8026:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8011:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8011:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "7958:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7958:72:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7958:72:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7795:9:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "7807:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "7815:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7826:4:37",
                "type": ""
              }
            ],
            "src": "7705:332:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8083:76:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8137:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8146:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8149:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "8139:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8139:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8139:12:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "8106:5:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "8128:5:37"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_bool",
                              "nodeType": "YulIdentifier",
                              "src": "8113:14:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8113:21:37"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "8103:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8103:32:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "8096:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8096:40:37"
                  },
                  "nodeType": "YulIf",
                  "src": "8093:60:37"
                }
              ]
            },
            "name": "validator_revert_t_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "8076:5:37",
                "type": ""
              }
            ],
            "src": "8043:116:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8225:77:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8235:22:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "8250:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "8244:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8244:13:37"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "8235:5:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "8290:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_bool",
                      "nodeType": "YulIdentifier",
                      "src": "8266:23:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8266:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8266:30:37"
                }
              ]
            },
            "name": "abi_decode_t_bool_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "8203:6:37",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "8211:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "8219:5:37",
                "type": ""
              }
            ],
            "src": "8165:137:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8382:271:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8428:83:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "8430:77:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8430:79:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8430:79:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "8403:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8412:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "8399:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8399:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8424:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "8395:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8395:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "8392:119:37"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "8521:125:37",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "8536:15:37",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8550:1:37",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "8540:6:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "8565:71:37",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "8608:9:37"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "8619:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "8604:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8604:22:37"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "8628:7:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_bool_fromMemory",
                          "nodeType": "YulIdentifier",
                          "src": "8575:28:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8575:61:37"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "8565:6:37"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_bool_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8352:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "8363:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "8375:6:37",
                "type": ""
              }
            ],
            "src": "8308:345:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8765:121:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "8787:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8795:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8783:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8783:14:37"
                      },
                      {
                        "hexValue": "6e6f77205374617465206973205374616b696e672c20506c6561736520556e53",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8799:34:37",
                        "type": "",
                        "value": "now State is Staking, Please UnS"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8776:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8776:58:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8776:58:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "8855:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8863:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8851:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8851:15:37"
                      },
                      {
                        "hexValue": "74616b696e672121",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8868:10:37",
                        "type": "",
                        "value": "taking!!"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8844:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8844:35:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8844:35:37"
                }
              ]
            },
            "name": "store_literal_in_memory_3fa08d1bdb203005192b699e199b03078e7204a335f58d9200658261ed42d204",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "8757:6:37",
                "type": ""
              }
            ],
            "src": "8659:227:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9038:220:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9048:74:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "9114:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9119:2:37",
                        "type": "",
                        "value": "40"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "9055:58:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9055:67:37"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "9048:3:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "9220:3:37"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_3fa08d1bdb203005192b699e199b03078e7204a335f58d9200658261ed42d204",
                      "nodeType": "YulIdentifier",
                      "src": "9131:88:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9131:93:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9131:93:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9233:19:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "9244:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9249:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9240:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9240:12:37"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "9233:3:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_3fa08d1bdb203005192b699e199b03078e7204a335f58d9200658261ed42d204_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "9026:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "9034:3:37",
                "type": ""
              }
            ],
            "src": "8892:366:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9435:248:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9445:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9457:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9468:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9453:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9453:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9445:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9492:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9503:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9488:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9488:17:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "9511:4:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9517:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "9507:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9507:20:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9481:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9481:47:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9481:47:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9537:139:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "9671:4:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_3fa08d1bdb203005192b699e199b03078e7204a335f58d9200658261ed42d204_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "9545:124:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9545:131:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9537:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_3fa08d1bdb203005192b699e199b03078e7204a335f58d9200658261ed42d204__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9415:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9430:4:37",
                "type": ""
              }
            ],
            "src": "9264:419:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9733:147:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9743:25:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "9766:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "9748:17:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9748:20:37"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "9743:1:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9777:25:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "9800:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "9782:17:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9782:20:37"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "9777:1:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9811:16:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "9822:1:37"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "9825:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9818:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9818:9:37"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "9811:3:37"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9851:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "9853:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9853:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9853:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "9843:1:37"
                      },
                      {
                        "name": "sum",
                        "nodeType": "YulIdentifier",
                        "src": "9846:3:37"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "9840:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9840:10:37"
                  },
                  "nodeType": "YulIf",
                  "src": "9837:36:37"
                }
              ]
            },
            "name": "checked_add_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "9720:1:37",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "9723:1:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "9729:3:37",
                "type": ""
              }
            ],
            "src": "9689:191:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10012:206:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10022:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10034:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10045:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10030:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10030:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10022:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "10102:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10115:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10126:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10111:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10111:17:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "10058:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10058:71:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10058:71:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "10183:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10196:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10207:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10192:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10192:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "10139:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10139:72:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10139:72:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256_t_uint256__to_t_uint256_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9976:9:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "9988:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "9996:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10007:4:37",
                "type": ""
              }
            ],
            "src": "9886:332:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10330:71:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "10352:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10360:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10348:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10348:14:37"
                      },
                      {
                        "hexValue": "41444452455353204953204e4f54205a65726f2041646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10364:29:37",
                        "type": "",
                        "value": "ADDRESS IS NOT Zero Address"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10341:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10341:53:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10341:53:37"
                }
              ]
            },
            "name": "store_literal_in_memory_5e968b1b9d679d611ccf949429dd4656124f3d05f600330c38eabd5c429f5b9e",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "10322:6:37",
                "type": ""
              }
            ],
            "src": "10224:177:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10553:220:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10563:74:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "10629:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10634:2:37",
                        "type": "",
                        "value": "27"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "10570:58:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10570:67:37"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "10563:3:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "10735:3:37"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_5e968b1b9d679d611ccf949429dd4656124f3d05f600330c38eabd5c429f5b9e",
                      "nodeType": "YulIdentifier",
                      "src": "10646:88:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10646:93:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10646:93:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10748:19:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "10759:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10764:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10755:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10755:12:37"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "10748:3:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_5e968b1b9d679d611ccf949429dd4656124f3d05f600330c38eabd5c429f5b9e_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "10541:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "10549:3:37",
                "type": ""
              }
            ],
            "src": "10407:366:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10950:248:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10960:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10972:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10983:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10968:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10968:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10960:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11007:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11018:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11003:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11003:17:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "11026:4:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11032:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "11022:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11022:20:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10996:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10996:47:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10996:47:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11052:139:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "11186:4:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_5e968b1b9d679d611ccf949429dd4656124f3d05f600330c38eabd5c429f5b9e_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "11060:124:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11060:131:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11052:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_5e968b1b9d679d611ccf949429dd4656124f3d05f600330c38eabd5c429f5b9e__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10930:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10945:4:37",
                "type": ""
              }
            ],
            "src": "10779:419:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11310:68:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "11332:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11340:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11328:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11328:14:37"
                      },
                      {
                        "hexValue": "596f7520617265206e6f7420706172746963697061746564",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11344:26:37",
                        "type": "",
                        "value": "You are not participated"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11321:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11321:50:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11321:50:37"
                }
              ]
            },
            "name": "store_literal_in_memory_14e119e374624bd5141fb3d3b6f1df053339f5b657ddfe13cf912bfd50e9b8af",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "11302:6:37",
                "type": ""
              }
            ],
            "src": "11204:174:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11530:220:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11540:74:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "11606:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11611:2:37",
                        "type": "",
                        "value": "24"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "11547:58:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11547:67:37"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "11540:3:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "11712:3:37"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_14e119e374624bd5141fb3d3b6f1df053339f5b657ddfe13cf912bfd50e9b8af",
                      "nodeType": "YulIdentifier",
                      "src": "11623:88:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11623:93:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11623:93:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11725:19:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "11736:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11741:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11732:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11732:12:37"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "11725:3:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_14e119e374624bd5141fb3d3b6f1df053339f5b657ddfe13cf912bfd50e9b8af_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "11518:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "11526:3:37",
                "type": ""
              }
            ],
            "src": "11384:366:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11927:248:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11937:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11949:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11960:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11945:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11945:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11937:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11984:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11995:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11980:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11980:17:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "12003:4:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12009:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "11999:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11999:20:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11973:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11973:47:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11973:47:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12029:139:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "12163:4:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_14e119e374624bd5141fb3d3b6f1df053339f5b657ddfe13cf912bfd50e9b8af_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "12037:124:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12037:131:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "12029:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_14e119e374624bd5141fb3d3b6f1df053339f5b657ddfe13cf912bfd50e9b8af__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11907:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "11922:4:37",
                "type": ""
              }
            ],
            "src": "11756:419:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12244:80:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "12254:22:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "12269:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "12263:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12263:13:37"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "12254:5:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "12312:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "12285:26:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12285:33:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12285:33:37"
                }
              ]
            },
            "name": "abi_decode_t_uint256_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "12222:6:37",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "12230:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "12238:5:37",
                "type": ""
              }
            ],
            "src": "12181:143:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12407:274:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "12453:83:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "12455:77:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12455:79:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "12455:79:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "12428:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12437:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "12424:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12424:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12449:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "12420:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12420:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "12417:119:37"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "12546:128:37",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "12561:15:37",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12575:1:37",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "12565:6:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "12590:74:37",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "12636:9:37"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "12647:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "12632:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "12632:22:37"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "12656:7:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256_fromMemory",
                          "nodeType": "YulIdentifier",
                          "src": "12600:31:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12600:64:37"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "12590:6:37"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "12377:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "12388:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "12400:6:37",
                "type": ""
              }
            ],
            "src": "12330:351:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12793:54:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "12815:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12823:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12811:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12811:14:37"
                      },
                      {
                        "hexValue": "544f4b454e5f4c41434b",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12827:12:37",
                        "type": "",
                        "value": "TOKEN_LACK"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12804:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12804:36:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12804:36:37"
                }
              ]
            },
            "name": "store_literal_in_memory_a753c832f5dff5664adf074d4ff580bea611cf44945f22ffe1b00a3d8df0bdb4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "12785:6:37",
                "type": ""
              }
            ],
            "src": "12687:160:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12999:220:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "13009:74:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13075:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13080:2:37",
                        "type": "",
                        "value": "10"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "13016:58:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13016:67:37"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "13009:3:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13181:3:37"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_a753c832f5dff5664adf074d4ff580bea611cf44945f22ffe1b00a3d8df0bdb4",
                      "nodeType": "YulIdentifier",
                      "src": "13092:88:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13092:93:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13092:93:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13194:19:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13205:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13210:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13201:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13201:12:37"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "13194:3:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_a753c832f5dff5664adf074d4ff580bea611cf44945f22ffe1b00a3d8df0bdb4_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "12987:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "12995:3:37",
                "type": ""
              }
            ],
            "src": "12853:366:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13396:248:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "13406:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13418:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13429:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13414:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13414:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13406:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13453:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13464:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13449:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13449:17:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "13472:4:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13478:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "13468:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13468:20:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13442:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13442:47:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13442:47:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13498:139:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "13632:4:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_a753c832f5dff5664adf074d4ff580bea611cf44945f22ffe1b00a3d8df0bdb4_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "13506:124:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13506:131:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13498:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_a753c832f5dff5664adf074d4ff580bea611cf44945f22ffe1b00a3d8df0bdb4__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "13376:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "13391:4:37",
                "type": ""
              }
            ],
            "src": "13225:419:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13756:74:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "13778:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13786:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13774:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13774:14:37"
                      },
                      {
                        "hexValue": "5374616b6520616d6f756e742073686f756c6420626520636f7272656374",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "13790:32:37",
                        "type": "",
                        "value": "Stake amount should be correct"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13767:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13767:56:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13767:56:37"
                }
              ]
            },
            "name": "store_literal_in_memory_0ab0414546a08082c35f8d614914f9a063567c270f996193e25fed9c5af250ba",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "13748:6:37",
                "type": ""
              }
            ],
            "src": "13650:180:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13982:220:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "13992:74:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "14058:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14063:2:37",
                        "type": "",
                        "value": "30"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "13999:58:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13999:67:37"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "13992:3:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "14164:3:37"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_0ab0414546a08082c35f8d614914f9a063567c270f996193e25fed9c5af250ba",
                      "nodeType": "YulIdentifier",
                      "src": "14075:88:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14075:93:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14075:93:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14177:19:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "14188:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14193:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14184:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14184:12:37"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "14177:3:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_0ab0414546a08082c35f8d614914f9a063567c270f996193e25fed9c5af250ba_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "13970:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "13978:3:37",
                "type": ""
              }
            ],
            "src": "13836:366:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14379:248:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "14389:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14401:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14412:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14397:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14397:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14389:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14436:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14447:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14432:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14432:17:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "14455:4:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14461:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "14451:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14451:20:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14425:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14425:47:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14425:47:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14481:139:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "14615:4:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_0ab0414546a08082c35f8d614914f9a063567c270f996193e25fed9c5af250ba_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "14489:124:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14489:131:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14481:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_0ab0414546a08082c35f8d614914f9a063567c270f996193e25fed9c5af250ba__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "14359:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "14374:4:37",
                "type": ""
              }
            ],
            "src": "14208:419:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14787:288:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "14797:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14809:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14820:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14805:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14805:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14797:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "14877:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14890:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14901:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14886:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14886:17:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "14833:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14833:71:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14833:71:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "14958:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14971:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14982:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14967:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14967:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "14914:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14914:72:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14914:72:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "15040:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15053:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15064:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15049:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15049:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "14996:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14996:72:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14996:72:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "14743:9:37",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "14755:6:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "14763:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "14771:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "14782:4:37",
                "type": ""
              }
            ],
            "src": "14633:442:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15187:65:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "15209:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15217:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15205:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15205:14:37"
                      },
                      {
                        "hexValue": "496e637265617365436f6e7472616374204661696c",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15221:23:37",
                        "type": "",
                        "value": "IncreaseContract Fail"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15198:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15198:47:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15198:47:37"
                }
              ]
            },
            "name": "store_literal_in_memory_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "15179:6:37",
                "type": ""
              }
            ],
            "src": "15081:171:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15404:220:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "15414:74:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "15480:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15485:2:37",
                        "type": "",
                        "value": "21"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "15421:58:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15421:67:37"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "15414:3:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "15586:3:37"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4",
                      "nodeType": "YulIdentifier",
                      "src": "15497:88:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15497:93:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15497:93:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "15599:19:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "15610:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15615:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "15606:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15606:12:37"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "15599:3:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "15392:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "15400:3:37",
                "type": ""
              }
            ],
            "src": "15258:366:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15801:248:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "15811:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15823:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15834:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "15819:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15819:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "15811:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15858:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15869:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15854:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15854:17:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "15877:4:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15883:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "15873:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15873:20:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15847:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15847:47:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15847:47:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "15903:139:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "16037:4:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "15911:124:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15911:131:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "15903:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "15781:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "15796:4:37",
                "type": ""
              }
            ],
            "src": "15630:419:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16161:119:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "16183:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16191:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16179:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16179:14:37"
                      },
                      {
                        "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "16195:34:37",
                        "type": "",
                        "value": "Ownable: new owner is the zero a"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16172:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16172:58:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16172:58:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "16251:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16259:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16247:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16247:15:37"
                      },
                      {
                        "hexValue": "646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "16264:8:37",
                        "type": "",
                        "value": "ddress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16240:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16240:33:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16240:33:37"
                }
              ]
            },
            "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "16153:6:37",
                "type": ""
              }
            ],
            "src": "16055:225:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16432:220:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "16442:74:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "16508:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16513:2:37",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "16449:58:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16449:67:37"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "16442:3:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "16614:3:37"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
                      "nodeType": "YulIdentifier",
                      "src": "16525:88:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16525:93:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16525:93:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "16627:19:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "16638:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16643:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "16634:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16634:12:37"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "16627:3:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "16420:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "16428:3:37",
                "type": ""
              }
            ],
            "src": "16286:366:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16829:248:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "16839:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "16851:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16862:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "16847:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16847:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "16839:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16886:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16897:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16882:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16882:17:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "16905:4:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16911:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "16901:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16901:20:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16875:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16875:47:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16875:47:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "16931:139:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "17065:4:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "16939:124:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16939:131:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "16931:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "16809:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "16824:4:37",
                "type": ""
              }
            ],
            "src": "16658:419:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17189:76:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "17211:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17219:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17207:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17207:14:37"
                      },
                      {
                        "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "17223:34:37",
                        "type": "",
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17200:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17200:58:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17200:58:37"
                }
              ]
            },
            "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "17181:6:37",
                "type": ""
              }
            ],
            "src": "17083:182:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17417:220:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "17427:74:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "17493:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17498:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "17434:58:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17434:67:37"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "17427:3:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "17599:3:37"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
                      "nodeType": "YulIdentifier",
                      "src": "17510:88:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17510:93:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17510:93:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "17612:19:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "17623:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17628:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "17619:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17619:12:37"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "17612:3:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "17405:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "17413:3:37",
                "type": ""
              }
            ],
            "src": "17271:366:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17814:248:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "17824:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "17836:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17847:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "17832:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17832:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "17824:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17871:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17882:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17867:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17867:17:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "17890:4:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17896:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "17886:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17886:20:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17860:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17860:47:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17860:47:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "17916:139:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "18050:4:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "17924:124:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17924:131:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "17916:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "17794:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "17809:4:37",
                "type": ""
              }
            ],
            "src": "17643:419:37"
          }
        ]
      },
      "contents": "{\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool_t_uint256__to_t_bool_t_uint256__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_contract$_JetToken_$6888(value) -> cleaned {\n        cleaned := cleanup_t_address(value)\n    }\n\n    function validator_revert_t_contract$_JetToken_$6888(value) {\n        if iszero(eq(value, cleanup_t_contract$_JetToken_$6888(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_contract$_JetToken_$6888(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_contract$_JetToken_$6888(value)\n    }\n\n    function abi_decode_tuple_t_contract$_JetToken_$6888(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_contract$_JetToken_$6888(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function cleanup_t_uint32(value) -> cleaned {\n        cleaned := and(value, 0xffffffff)\n    }\n\n    function abi_encode_t_uint32_to_t_uint32_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint32(value))\n    }\n\n    function abi_encode_tuple_t_uint32__to_t_uint32__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint32_to_t_uint32_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_tuple_t_uint256_t_uint256_t_uint256_t_uint256_t_uint256_t_uint32__to_t_uint256_t_uint256_t_uint256_t_uint256_t_uint256_t_uint32__fromStack_reversed(headStart , value5, value4, value3, value2, value1, value0) -> tail {\n        tail := add(headStart, 192)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value3,  add(headStart, 96))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value4,  add(headStart, 128))\n\n        abi_encode_t_uint32_to_t_uint32_fromStack(value5,  add(headStart, 160))\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_0e75d8d12a7dbee9f06677c3321bb311b9f1e86b675875c5f6d32a870ba6ec0c(memPtr) {\n\n        mstore(add(memPtr, 0), \"You already participated\")\n\n    }\n\n    function abi_encode_t_stringliteral_0e75d8d12a7dbee9f06677c3321bb311b9f1e86b675875c5f6d32a870ba6ec0c_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 24)\n        store_literal_in_memory_0e75d8d12a7dbee9f06677c3321bb311b9f1e86b675875c5f6d32a870ba6ec0c(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_0e75d8d12a7dbee9f06677c3321bb311b9f1e86b675875c5f6d32a870ba6ec0c__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_0e75d8d12a7dbee9f06677c3321bb311b9f1e86b675875c5f6d32a870ba6ec0c_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_sub_t_uint256(x, y) -> diff {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        diff := sub(x, y)\n\n        if gt(diff, x) { panic_error_0x11() }\n\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        let product_raw := mul(x, y)\n        product := cleanup_t_uint256(product_raw)\n\n        // overflow, if x != 0 and y != product/x\n        if iszero(\n            or(\n                iszero(x),\n                eq(y, div(product, x))\n            )\n        ) { panic_error_0x11() }\n\n    }\n\n    function panic_error_0x12() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n\n    function checked_div_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n\n        r := div(x, y)\n    }\n\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function validator_revert_t_bool(value) {\n        if iszero(eq(value, cleanup_t_bool(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bool_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_bool(value)\n    }\n\n    function abi_decode_tuple_t_bool_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bool_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function store_literal_in_memory_3fa08d1bdb203005192b699e199b03078e7204a335f58d9200658261ed42d204(memPtr) {\n\n        mstore(add(memPtr, 0), \"now State is Staking, Please UnS\")\n\n        mstore(add(memPtr, 32), \"taking!!\")\n\n    }\n\n    function abi_encode_t_stringliteral_3fa08d1bdb203005192b699e199b03078e7204a335f58d9200658261ed42d204_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 40)\n        store_literal_in_memory_3fa08d1bdb203005192b699e199b03078e7204a335f58d9200658261ed42d204(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_3fa08d1bdb203005192b699e199b03078e7204a335f58d9200658261ed42d204__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_3fa08d1bdb203005192b699e199b03078e7204a335f58d9200658261ed42d204_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        sum := add(x, y)\n\n        if gt(x, sum) { panic_error_0x11() }\n\n    }\n\n    function abi_encode_tuple_t_uint256_t_uint256__to_t_uint256_t_uint256__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function store_literal_in_memory_5e968b1b9d679d611ccf949429dd4656124f3d05f600330c38eabd5c429f5b9e(memPtr) {\n\n        mstore(add(memPtr, 0), \"ADDRESS IS NOT Zero Address\")\n\n    }\n\n    function abi_encode_t_stringliteral_5e968b1b9d679d611ccf949429dd4656124f3d05f600330c38eabd5c429f5b9e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 27)\n        store_literal_in_memory_5e968b1b9d679d611ccf949429dd4656124f3d05f600330c38eabd5c429f5b9e(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_5e968b1b9d679d611ccf949429dd4656124f3d05f600330c38eabd5c429f5b9e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_5e968b1b9d679d611ccf949429dd4656124f3d05f600330c38eabd5c429f5b9e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_14e119e374624bd5141fb3d3b6f1df053339f5b657ddfe13cf912bfd50e9b8af(memPtr) {\n\n        mstore(add(memPtr, 0), \"You are not participated\")\n\n    }\n\n    function abi_encode_t_stringliteral_14e119e374624bd5141fb3d3b6f1df053339f5b657ddfe13cf912bfd50e9b8af_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 24)\n        store_literal_in_memory_14e119e374624bd5141fb3d3b6f1df053339f5b657ddfe13cf912bfd50e9b8af(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_14e119e374624bd5141fb3d3b6f1df053339f5b657ddfe13cf912bfd50e9b8af__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_14e119e374624bd5141fb3d3b6f1df053339f5b657ddfe13cf912bfd50e9b8af_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function store_literal_in_memory_a753c832f5dff5664adf074d4ff580bea611cf44945f22ffe1b00a3d8df0bdb4(memPtr) {\n\n        mstore(add(memPtr, 0), \"TOKEN_LACK\")\n\n    }\n\n    function abi_encode_t_stringliteral_a753c832f5dff5664adf074d4ff580bea611cf44945f22ffe1b00a3d8df0bdb4_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 10)\n        store_literal_in_memory_a753c832f5dff5664adf074d4ff580bea611cf44945f22ffe1b00a3d8df0bdb4(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_a753c832f5dff5664adf074d4ff580bea611cf44945f22ffe1b00a3d8df0bdb4__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_a753c832f5dff5664adf074d4ff580bea611cf44945f22ffe1b00a3d8df0bdb4_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_0ab0414546a08082c35f8d614914f9a063567c270f996193e25fed9c5af250ba(memPtr) {\n\n        mstore(add(memPtr, 0), \"Stake amount should be correct\")\n\n    }\n\n    function abi_encode_t_stringliteral_0ab0414546a08082c35f8d614914f9a063567c270f996193e25fed9c5af250ba_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 30)\n        store_literal_in_memory_0ab0414546a08082c35f8d614914f9a063567c270f996193e25fed9c5af250ba(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_0ab0414546a08082c35f8d614914f9a063567c270f996193e25fed9c5af250ba__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_0ab0414546a08082c35f8d614914f9a063567c270f996193e25fed9c5af250ba_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed(headStart , value2, value1, value0) -> tail {\n        tail := add(headStart, 96)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n    }\n\n    function store_literal_in_memory_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4(memPtr) {\n\n        mstore(add(memPtr, 0), \"IncreaseContract Fail\")\n\n    }\n\n    function abi_encode_t_stringliteral_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 21)\n        store_literal_in_memory_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: new owner is the zero a\")\n\n        mstore(add(memPtr, 32), \"ddress\")\n\n    }\n\n    function abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: caller is not the owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n        store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n}\n",
      "id": 37,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "171:6586:35:-:0;;;556:6;530:32;;588:3;568:23;;;;;;;;;;;;;;;;;;;;641:8;610:39;;;;;;;;;;;;;;;;;;;;684:5;655:34;;;;;;;;;;;;;;;;;;;;741:1;727:11;;;;;;;;;;;:15;;;;:::i;:::-;695:47;;;;1494:255;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;936:32:0;955:12;:10;;;:12;;:::i;:::-;936:18;;;:32;;:::i;:::-;1619:1:35;1585:36;;1593:13;1585:36;;;1577:81;;;;;;;;;;;;:::i;:::-;;;;;;;;;1691:13;1684:4;;:20;;;;;;;;;;;;;;;;;;1727:15;1714:10;:28;;;;1494:255;171:6586;;640:96:19;693:7;719:10;712:17;;640:96;:::o;2433:187:0:-;2506:16;2525:6;;;;;;;;;;;2506:25;;2550:8;2541:6;;:17;;;;;;;;;;;;;;;;;;2604:8;2573:40;;2594:8;2573:40;;;;;;;;;;;;2496:124;2433:187;:::o;7:93:37:-;43:7;83:10;76:5;72:22;61:33;;7:93;;;:::o;106:180::-;154:77;151:1;144:88;251:4;248:1;241:15;275:4;272:1;265:15;292:275;331:7;354:19;371:1;354:19;:::i;:::-;349:24;;387:19;404:1;387:19;:::i;:::-;382:24;;441:1;438;434:9;463:29;480:11;463:29;:::i;:::-;452:40;;524:11;515:7;512:24;502:58;;540:18;;:::i;:::-;502:58;339:228;292:275;;;;:::o;654:117::-;763:1;760;753:12;900:126;937:7;977:42;970:5;966:54;955:65;;900:126;;;:::o;1032:96::-;1069:7;1098:24;1116:5;1098:24;:::i;:::-;1087:35;;1032:96;;;:::o;1134:114::-;1189:7;1218:24;1236:5;1218:24;:::i;:::-;1207:35;;1134:114;;;:::o;1254:158::-;1345:42;1381:5;1345:42;:::i;:::-;1338:5;1335:53;1325:81;;1402:1;1399;1392:12;1325:81;1254:158;:::o;1418:179::-;1493:5;1524:6;1518:13;1509:22;;1540:51;1585:5;1540:51;:::i;:::-;1418:179;;;;:::o;1603:387::-;1691:6;1740:2;1728:9;1719:7;1715:23;1711:32;1708:119;;;1746:79;;:::i;:::-;1708:119;1866:1;1891:82;1965:7;1956:6;1945:9;1941:22;1891:82;:::i;:::-;1881:92;;1837:146;1603:387;;;;:::o;1996:169::-;2080:11;2114:6;2109:3;2102:19;2154:4;2149:3;2145:14;2130:29;;1996:169;;;;:::o;2171:220::-;2311:34;2307:1;2299:6;2295:14;2288:58;2380:3;2375:2;2367:6;2363:15;2356:28;2171:220;:::o;2397:366::-;2539:3;2560:67;2624:2;2619:3;2560:67;:::i;:::-;2553:74;;2636:93;2725:3;2636:93;:::i;:::-;2754:2;2749:3;2745:12;2738:19;;2397:366;;;:::o;2769:419::-;2935:4;2973:2;2962:9;2958:18;2950:26;;3022:9;3016:4;3012:20;3008:1;2997:9;2993:17;2986:47;3050:131;3176:4;3050:131;:::i;:::-;3042:139;;2769:419;;;:::o;171:6586:35:-;;;;;;;",
  "deployedSourceMap": "171:6586:35:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;530:32;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3451:986;;;:::i;:::-;;473:25;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1831:101:0;;;;;;;;;;;;;:::i;:::-;;4483:929:35;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;2163:100;;;;;;;;;;;;;:::i;:::-;;1201:85:0;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1929:159:35;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;5440:715;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;568:23;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2296:1123;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1315:47;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;;:::i;:::-;;;;;;;;6193:562;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1408:45;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2081:198:0;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;530:32:35;;;;:::o;3451:986::-;3539:4;3510:33;;:13;:25;3524:10;3510:25;;;;;;;;;;;;;;;;;;;;;;;;;:33;;;3502:70;;;;;;;;;;;;:::i;:::-;;;;;;;;;3643:23;3687:10;:22;3698:10;3687:22;;;;;;;;;;;;;;;:34;;;3669:15;:52;;;;:::i;:::-;3643:78;;3784:23;3872:11;;;;;;;;;;;3810:73;;3856:13;;;;;;;;;;;3810:59;;3849:3;3843;;;;;;;;;;;3811:35;;:10;:22;3822:10;3811:22;;;;;;;;;;;;;;;:29;;;:35;;;;:::i;:::-;:41;;;;:::i;:::-;3810:59;;;;:::i;:::-;:73;;;;:::i;:::-;3784:99;;3914:23;3958:15;3940;:33;;;;:::i;:::-;3914:59;;4000:2;;;;;;;;;;;:11;;;4012:10;4042:2;4024:15;:20;;;;:::i;:::-;4000:45;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;4116:15;4077:10;:22;4088:10;4077:22;;;;;;;;;;;;;;;:36;;:54;;;;4199:5;4171:13;:25;4185:10;4171:25;;;;;;;;;;;;;;;;:33;;;;;;;;;;;;;;;;;;4269:1;4238:10;:22;4249:10;4238:22;;;;;;;;;;;;;;;:28;;;:32;;;;;;;;;;;;;;;;;;4338:10;4329:37;;;4350:15;4329:37;;;;;;:::i;:::-;;;;;;;;4395:10;4387:36;;;4407:15;4387:36;;;;;;:::i;:::-;;;;;;;;3492:945;;;3451:986::o;473:25::-;;;;:::o;1831:101:0:-;1094:13;:11;:13::i;:::-;1895:30:::1;1922:1;1895:18;:30::i;:::-;1831:101::o:0;4483:929:35:-;4533:4;4538:7;4596:1;4564:10;:22;4575:10;4564:22;;;;;;;;;;;;;;;:28;;;;;;;;;;;;:33;;;4556:86;;;;;;;;;;;;:::i;:::-;;;;;;;;;4710:15;4694:13;;4655:10;:22;4666:10;4655:22;;;;;;;;;;;;;;;:36;;;:52;;;;:::i;:::-;:70;4652:746;;;4760:14;4777:10;:22;4788:10;4777:22;;;;;;;;;;;;;;;:29;;;4760:46;;4847:4;;;;;;;;;;;:13;;;4861:10;4872:6;4847:32;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;4912:10;:22;4923:10;4912:22;;;;;;;;;;;;;;;;4905:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4986:13;:25;5000:10;4986:25;;;;;;;;;;;;;;;;4979:32;;;;;;;;;;;5084:10;5068:52;;;5096:15;5113:6;5068:52;;;;;;;:::i;:::-;;;;;;;;5141:4;5147:15;5134:29;;;;;;;4652:746;5213:21;5294:15;5277:13;;5238:10;:22;5249:10;5238:22;;;;;;;;;;;;;;;:36;;;:52;;;;:::i;:::-;5237:72;;;;:::i;:::-;5213:96;;5366:5;5373:13;5359:28;;;;;4483:929;;;:::o;2163:100::-;2241:15;2204:10;:22;2215:10;2204:22;;;;;;;;;;;;;;;:34;;:52;;;;2163:100::o;1201:85:0:-;1247:7;1273:6;;;;;;;;;;;1266:13;;1201:85;:::o;1929:159:35:-;1094:13:0;:11;:13::i;:::-;2030:1:35::1;2007:25;;2015:2;;;;;;;;;;;2007:25;;;1999:64;;;;;;;;;;;;:::i;:::-;;;;;;;;;2078:3;2073:2;;:8;;;;;;;;;;;;;;;;;;1929:159:::0;:::o;5440:715::-;5481:4;5533;5504:33;;:13;:25;5518:10;5504:25;;;;;;;;;;;;;;;;;;;;;;;;;:33;;;5496:70;;;;;;;;;;;;:::i;:::-;;;;;;;;;5577:23;5621:10;:22;5632:10;5621:22;;;;;;;;;;;;;;;:34;;;5603:15;:52;;;;:::i;:::-;5577:78;;5718:23;5806:11;;;;;;;;;;;5744:73;;5790:13;;;;;;;;;;;5744:59;;5783:3;5777;;;;;;;;;;;5745:35;;:10;:22;5756:10;5745:22;;;;;;;;;;;;;;;:29;;;:35;;;;:::i;:::-;:41;;;;:::i;:::-;5744:59;;;;:::i;:::-;:73;;;;:::i;:::-;5718:99;;5848:23;5892:15;5874;:33;;;;:::i;:::-;5848:59;;5935:2;;;;;;;;;;;:11;;;5947:10;5977:2;5959:15;:20;;;;:::i;:::-;5935:45;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6015:14;:12;:14::i;:::-;6098:10;6090:36;;;6110:15;6090:36;;;;;;:::i;:::-;;;;;;;;6144:4;6137:11;;;;;5440:715;:::o;568:23::-;;;;;;;;;;;;;:::o;2296:1123::-;2383:4;2362:11;1880:6;1850:2;;;;;;;;;;;:12;;;1871:4;1850:27;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:36;1842:59;;;;;;;;;;;;:::i;:::-;;;;;;;;;2420:1:::1;2406:11;:15;2398:58;;;;;;;;;;;;:::i;:::-;;;;;;;;;2517:5;2488:34;;:13;:25;2502:10;2488:25;;;;;;;;;;;;;;;;;;;;;;;;;:34;;;2480:71;;;;;;;;;;;;:::i;:::-;;;;;;;;;2671:1;2639:10;:22;2650:10;2639:22;;;;;;;;;;;;;;;:28;;;;;;;;;;;;:33;;::::0;2636:74:::1;;2694:5;2687:12;;;;2636:74;2720:12;2735:4;;;;;;;;;;;:30;;;2779:10;2812:4;2831:11;2735:117;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2720:132;;2870:7;2862:40;;;;;;;;;;;;:::i;:::-;;;;;;;;;2912:4;;;;;;;;;;;:17;;;2930:10;2950:4;2957:11;2912:57;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;3027:4;2999:13;:25;3013:10;2999:25;;;;;;;;;;;;;;;;:32;;;;;;;;;;;;;;;;;;3067:277;;;;;;;;3116:15;3067:277;;;;3158:15;3067:277;;;;3225:1;3067:277;;;;3248:11;3067:277;;;;3310:1;3067:277;;;;3332:1;3067:277;;;;::::0;3042:10:::1;:22;3053:10;3042:22;;;;;;;;;;;;;;;:302;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3367:10;3360:31;;;3379:11;3360:31;;;;;;:::i;:::-;;;;;;;;3408:4;3401:11;;;1911:1;2296:1123:::0;;;;:::o;1315:47::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;6193:562::-;6240:7;6291:4;6262:33;;:13;:25;6276:10;6262:25;;;;;;;;;;;;;;;;;;;;;;;;;:33;;;6259:490;;6310:23;6354:10;:22;6365:10;6354:22;;;;;;;;;;;;;;;:34;;;6336:15;:52;;;;:::i;:::-;6310:78;;6455:23;6543:11;;;;;;;;;;;6481:73;;6527:13;;;;;;;;;;;6481:59;;6520:3;6514;;;;;;;;;;;6482:35;;:10;:22;6493:10;6482:22;;;;;;;;;;;;;;;:29;;;:35;;;;:::i;:::-;:41;;;;:::i;:::-;6481:59;;;;:::i;:::-;:73;;;;:::i;:::-;6455:99;;6589:23;6633:15;6615;:33;;;;:::i;:::-;6589:59;;6686:15;6679:22;;;;;;;6259:490;6737:1;6730:8;;6193:562;;:::o;1408:45::-;;;;;;;;;;;;;;;;;;;;;;:::o;2081:198:0:-;1094:13;:11;:13::i;:::-;2189:1:::1;2169:22;;:8;:22;;::::0;2161:73:::1;;;;;;;;;;;;:::i;:::-;;;;;;;;;2244:28;2263:8;2244:18;:28::i;:::-;2081:198:::0;:::o;1359:130::-;1433:12;:10;:12::i;:::-;1422:23;;:7;:5;:7::i;:::-;:23;;;1414:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;1359:130::o;2433:187::-;2506:16;2525:6;;;;;;;;;;;2506:25;;2550:8;2541:6;;:17;;;;;;;;;;;;;;;;;;2604:8;2573:40;;2594:8;2573:40;;;;;;;;;;;;2496:124;2433:187;:::o;640:96:19:-;693:7;719:10;712:17;;640:96;:::o;7:77:37:-;44:7;73:5;62:16;;7:77;;;:::o;90:118::-;177:24;195:5;177:24;:::i;:::-;172:3;165:37;90:118;;:::o;214:222::-;307:4;345:2;334:9;330:18;322:26;;358:71;426:1;415:9;411:17;402:6;358:71;:::i;:::-;214:222;;;;:::o;442:90::-;476:7;519:5;512:13;505:21;494:32;;442:90;;;:::o;538:109::-;619:21;634:5;619:21;:::i;:::-;614:3;607:34;538:109;;:::o;653:320::-;768:4;806:2;795:9;791:18;783:26;;819:65;881:1;870:9;866:17;857:6;819:65;:::i;:::-;894:72;962:2;951:9;947:18;938:6;894:72;:::i;:::-;653:320;;;;;:::o;979:126::-;1016:7;1056:42;1049:5;1045:54;1034:65;;979:126;;;:::o;1111:96::-;1148:7;1177:24;1195:5;1177:24;:::i;:::-;1166:35;;1111:96;;;:::o;1213:118::-;1300:24;1318:5;1300:24;:::i;:::-;1295:3;1288:37;1213:118;;:::o;1337:222::-;1430:4;1468:2;1457:9;1453:18;1445:26;;1481:71;1549:1;1538:9;1534:17;1525:6;1481:71;:::i;:::-;1337:222;;;;:::o;1646:117::-;1755:1;1752;1745:12;1892:113;1946:7;1975:24;1993:5;1975:24;:::i;:::-;1964:35;;1892:113;;;:::o;2011:156::-;2101:41;2136:5;2101:41;:::i;:::-;2094:5;2091:52;2081:80;;2157:1;2154;2147:12;2081:80;2011:156;:::o;2173:173::-;2236:5;2274:6;2261:20;2252:29;;2290:50;2334:5;2290:50;:::i;:::-;2173:173;;;;:::o;2352:363::-;2428:6;2477:2;2465:9;2456:7;2452:23;2448:32;2445:119;;;2483:79;;:::i;:::-;2445:119;2603:1;2628:70;2690:7;2681:6;2670:9;2666:22;2628:70;:::i;:::-;2618:80;;2574:134;2352:363;;;;:::o;2721:210::-;2808:4;2846:2;2835:9;2831:18;2823:26;;2859:65;2921:1;2910:9;2906:17;2897:6;2859:65;:::i;:::-;2721:210;;;;:::o;2937:93::-;2973:7;3013:10;3006:5;3002:22;2991:33;;2937:93;;;:::o;3036:115::-;3121:23;3138:5;3121:23;:::i;:::-;3116:3;3109:36;3036:115;;:::o;3157:218::-;3248:4;3286:2;3275:9;3271:18;3263:26;;3299:69;3365:1;3354:9;3350:17;3341:6;3299:69;:::i;:::-;3157:218;;;;:::o;3381:122::-;3454:24;3472:5;3454:24;:::i;:::-;3447:5;3444:35;3434:63;;3493:1;3490;3483:12;3434:63;3381:122;:::o;3509:139::-;3555:5;3593:6;3580:20;3571:29;;3609:33;3636:5;3609:33;:::i;:::-;3509:139;;;;:::o;3654:329::-;3713:6;3762:2;3750:9;3741:7;3737:23;3733:32;3730:119;;;3768:79;;:::i;:::-;3730:119;3888:1;3913:53;3958:7;3949:6;3938:9;3934:22;3913:53;:::i;:::-;3903:63;;3859:117;3654:329;;;;:::o;3989:122::-;4062:24;4080:5;4062:24;:::i;:::-;4055:5;4052:35;4042:63;;4101:1;4098;4091:12;4042:63;3989:122;:::o;4117:139::-;4163:5;4201:6;4188:20;4179:29;;4217:33;4244:5;4217:33;:::i;:::-;4117:139;;;;:::o;4262:329::-;4321:6;4370:2;4358:9;4349:7;4345:23;4341:32;4338:119;;;4376:79;;:::i;:::-;4338:119;4496:1;4521:53;4566:7;4557:6;4546:9;4542:22;4521:53;:::i;:::-;4511:63;;4467:117;4262:329;;;;:::o;4597:771::-;4828:4;4866:3;4855:9;4851:19;4843:27;;4880:71;4948:1;4937:9;4933:17;4924:6;4880:71;:::i;:::-;4961:72;5029:2;5018:9;5014:18;5005:6;4961:72;:::i;:::-;5043;5111:2;5100:9;5096:18;5087:6;5043:72;:::i;:::-;5125;5193:2;5182:9;5178:18;5169:6;5125:72;:::i;:::-;5207:73;5275:3;5264:9;5260:19;5251:6;5207:73;:::i;:::-;5290:71;5356:3;5345:9;5341:19;5332:6;5290:71;:::i;:::-;4597:771;;;;;;;;;:::o;5374:169::-;5458:11;5492:6;5487:3;5480:19;5532:4;5527:3;5523:14;5508:29;;5374:169;;;;:::o;5549:174::-;5689:26;5685:1;5677:6;5673:14;5666:50;5549:174;:::o;5729:366::-;5871:3;5892:67;5956:2;5951:3;5892:67;:::i;:::-;5885:74;;5968:93;6057:3;5968:93;:::i;:::-;6086:2;6081:3;6077:12;6070:19;;5729:366;;;:::o;6101:419::-;6267:4;6305:2;6294:9;6290:18;6282:26;;6354:9;6348:4;6344:20;6340:1;6329:9;6325:17;6318:47;6382:131;6508:4;6382:131;:::i;:::-;6374:139;;6101:419;;;:::o;6526:180::-;6574:77;6571:1;6564:88;6671:4;6668:1;6661:15;6695:4;6692:1;6685:15;6712:194;6752:4;6772:20;6790:1;6772:20;:::i;:::-;6767:25;;6806:20;6824:1;6806:20;:::i;:::-;6801:25;;6850:1;6847;6843:9;6835:17;;6874:1;6868:4;6865:11;6862:37;;;6879:18;;:::i;:::-;6862:37;6712:194;;;;:::o;6912:410::-;6952:7;6975:20;6993:1;6975:20;:::i;:::-;6970:25;;7009:20;7027:1;7009:20;:::i;:::-;7004:25;;7064:1;7061;7057:9;7086:30;7104:11;7086:30;:::i;:::-;7075:41;;7265:1;7256:7;7252:15;7249:1;7246:22;7226:1;7219:9;7199:83;7176:139;;7295:18;;:::i;:::-;7176:139;6960:362;6912:410;;;;:::o;7328:180::-;7376:77;7373:1;7366:88;7473:4;7470:1;7463:15;7497:4;7494:1;7487:15;7514:185;7554:1;7571:20;7589:1;7571:20;:::i;:::-;7566:25;;7605:20;7623:1;7605:20;:::i;:::-;7600:25;;7644:1;7634:35;;7649:18;;:::i;:::-;7634:35;7691:1;7688;7684:9;7679:14;;7514:185;;;;:::o;7705:332::-;7826:4;7864:2;7853:9;7849:18;7841:26;;7877:71;7945:1;7934:9;7930:17;7921:6;7877:71;:::i;:::-;7958:72;8026:2;8015:9;8011:18;8002:6;7958:72;:::i;:::-;7705:332;;;;;:::o;8043:116::-;8113:21;8128:5;8113:21;:::i;:::-;8106:5;8103:32;8093:60;;8149:1;8146;8139:12;8093:60;8043:116;:::o;8165:137::-;8219:5;8250:6;8244:13;8235:22;;8266:30;8290:5;8266:30;:::i;:::-;8165:137;;;;:::o;8308:345::-;8375:6;8424:2;8412:9;8403:7;8399:23;8395:32;8392:119;;;8430:79;;:::i;:::-;8392:119;8550:1;8575:61;8628:7;8619:6;8608:9;8604:22;8575:61;:::i;:::-;8565:71;;8521:125;8308:345;;;;:::o;8659:227::-;8799:34;8795:1;8787:6;8783:14;8776:58;8868:10;8863:2;8855:6;8851:15;8844:35;8659:227;:::o;8892:366::-;9034:3;9055:67;9119:2;9114:3;9055:67;:::i;:::-;9048:74;;9131:93;9220:3;9131:93;:::i;:::-;9249:2;9244:3;9240:12;9233:19;;8892:366;;;:::o;9264:419::-;9430:4;9468:2;9457:9;9453:18;9445:26;;9517:9;9511:4;9507:20;9503:1;9492:9;9488:17;9481:47;9545:131;9671:4;9545:131;:::i;:::-;9537:139;;9264:419;;;:::o;9689:191::-;9729:3;9748:20;9766:1;9748:20;:::i;:::-;9743:25;;9782:20;9800:1;9782:20;:::i;:::-;9777:25;;9825:1;9822;9818:9;9811:16;;9846:3;9843:1;9840:10;9837:36;;;9853:18;;:::i;:::-;9837:36;9689:191;;;;:::o;9886:332::-;10007:4;10045:2;10034:9;10030:18;10022:26;;10058:71;10126:1;10115:9;10111:17;10102:6;10058:71;:::i;:::-;10139:72;10207:2;10196:9;10192:18;10183:6;10139:72;:::i;:::-;9886:332;;;;;:::o;10224:177::-;10364:29;10360:1;10352:6;10348:14;10341:53;10224:177;:::o;10407:366::-;10549:3;10570:67;10634:2;10629:3;10570:67;:::i;:::-;10563:74;;10646:93;10735:3;10646:93;:::i;:::-;10764:2;10759:3;10755:12;10748:19;;10407:366;;;:::o;10779:419::-;10945:4;10983:2;10972:9;10968:18;10960:26;;11032:9;11026:4;11022:20;11018:1;11007:9;11003:17;10996:47;11060:131;11186:4;11060:131;:::i;:::-;11052:139;;10779:419;;;:::o;11204:174::-;11344:26;11340:1;11332:6;11328:14;11321:50;11204:174;:::o;11384:366::-;11526:3;11547:67;11611:2;11606:3;11547:67;:::i;:::-;11540:74;;11623:93;11712:3;11623:93;:::i;:::-;11741:2;11736:3;11732:12;11725:19;;11384:366;;;:::o;11756:419::-;11922:4;11960:2;11949:9;11945:18;11937:26;;12009:9;12003:4;11999:20;11995:1;11984:9;11980:17;11973:47;12037:131;12163:4;12037:131;:::i;:::-;12029:139;;11756:419;;;:::o;12181:143::-;12238:5;12269:6;12263:13;12254:22;;12285:33;12312:5;12285:33;:::i;:::-;12181:143;;;;:::o;12330:351::-;12400:6;12449:2;12437:9;12428:7;12424:23;12420:32;12417:119;;;12455:79;;:::i;:::-;12417:119;12575:1;12600:64;12656:7;12647:6;12636:9;12632:22;12600:64;:::i;:::-;12590:74;;12546:128;12330:351;;;;:::o;12687:160::-;12827:12;12823:1;12815:6;12811:14;12804:36;12687:160;:::o;12853:366::-;12995:3;13016:67;13080:2;13075:3;13016:67;:::i;:::-;13009:74;;13092:93;13181:3;13092:93;:::i;:::-;13210:2;13205:3;13201:12;13194:19;;12853:366;;;:::o;13225:419::-;13391:4;13429:2;13418:9;13414:18;13406:26;;13478:9;13472:4;13468:20;13464:1;13453:9;13449:17;13442:47;13506:131;13632:4;13506:131;:::i;:::-;13498:139;;13225:419;;;:::o;13650:180::-;13790:32;13786:1;13778:6;13774:14;13767:56;13650:180;:::o;13836:366::-;13978:3;13999:67;14063:2;14058:3;13999:67;:::i;:::-;13992:74;;14075:93;14164:3;14075:93;:::i;:::-;14193:2;14188:3;14184:12;14177:19;;13836:366;;;:::o;14208:419::-;14374:4;14412:2;14401:9;14397:18;14389:26;;14461:9;14455:4;14451:20;14447:1;14436:9;14432:17;14425:47;14489:131;14615:4;14489:131;:::i;:::-;14481:139;;14208:419;;;:::o;14633:442::-;14782:4;14820:2;14809:9;14805:18;14797:26;;14833:71;14901:1;14890:9;14886:17;14877:6;14833:71;:::i;:::-;14914:72;14982:2;14971:9;14967:18;14958:6;14914:72;:::i;:::-;14996;15064:2;15053:9;15049:18;15040:6;14996:72;:::i;:::-;14633:442;;;;;;:::o;15081:171::-;15221:23;15217:1;15209:6;15205:14;15198:47;15081:171;:::o;15258:366::-;15400:3;15421:67;15485:2;15480:3;15421:67;:::i;:::-;15414:74;;15497:93;15586:3;15497:93;:::i;:::-;15615:2;15610:3;15606:12;15599:19;;15258:366;;;:::o;15630:419::-;15796:4;15834:2;15823:9;15819:18;15811:26;;15883:9;15877:4;15873:20;15869:1;15858:9;15854:17;15847:47;15911:131;16037:4;15911:131;:::i;:::-;15903:139;;15630:419;;;:::o;16055:225::-;16195:34;16191:1;16183:6;16179:14;16172:58;16264:8;16259:2;16251:6;16247:15;16240:33;16055:225;:::o;16286:366::-;16428:3;16449:67;16513:2;16508:3;16449:67;:::i;:::-;16442:74;;16525:93;16614:3;16525:93;:::i;:::-;16643:2;16638:3;16634:12;16627:19;;16286:366;;;:::o;16658:419::-;16824:4;16862:2;16851:9;16847:18;16839:26;;16911:9;16905:4;16901:20;16897:1;16886:9;16882:17;16875:47;16939:131;17065:4;16939:131;:::i;:::-;16931:139;;16658:419;;;:::o;17083:182::-;17223:34;17219:1;17211:6;17207:14;17200:58;17083:182;:::o;17271:366::-;17413:3;17434:67;17498:2;17493:3;17434:67;:::i;:::-;17427:74;;17510:93;17599:3;17510:93;:::i;:::-;17628:2;17623:3;17619:12;17612:19;;17271:366;;;:::o;17643:419::-;17809:4;17847:2;17836:9;17832:18;17824:26;;17896:9;17890:4;17886:20;17882:1;17871:9;17867:17;17860:47;17924:131;18050:4;17924:131;:::i;:::-;17916:139;;17643:419;;;:::o",
  "source": "// SPDX-License-Identifier: GPL-3.0-only\npragma solidity ^0.8.0;\n\nimport \"./Jet2Token.sol\";\nimport \"./JetToken.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\n\ncontract Staking is Ownable {\n    event Staked(address indexed from, uint256 amount);\n    event UnStaked(address indexed from, uint256 unStakedTime);\n    event UnStakedClaimed(address indexed from, uint256 unStakedTime, uint256 amount);\n    event Claimed(address indexed from, uint256 amount);\n   \n    uint256 public Deploytime; // 프로제트 시작일\n    uint256 public decimals = 10**18;\n    uint32 public APR = 150; // 이자율\n    uint32 private yearsDuration = 31536000;\n    uint32 private dayDuration = 86400;\n    uint256 private stakingExpire = dayDuration * 3; // 스테이킹 종료 3일  // test = 180 -> 3분\n    Jet2Token jet2;  // 스테이킹 할 토큰\n    JetToken jt; // 스테이킹 보상 토큰\n\n    struct StakeInfo {        \n        uint256 startTS; //스테이킹 시작 시간\n        uint256 claimedTime; // 마지막 으로클레임한 시간 \n        uint256 unStakingTime; // 언스테이킹한 시간\n        uint256 amount; // 스테이킹 양\n        uint256 totalClaimed; //클레임한 토큰 decimals적용하여 계산\n        uint32 state; // 스테이킹 상태 스테이킹==1, unstaking==2\n    }\n\n    mapping(address => StakeInfo) public stakeInfos; // 주소당 스테이킹 정보 저장\n    mapping(address => bool) public addressStaked;  // 주소당 스테이킹 상태\n\n    constructor(Jet2Token _tokenAddress) { // staking 할 erc20  토큰 정보\n        require(address(_tokenAddress) != address(0),\"Token Address cannot be address 0\");                \n        jet2 = _tokenAddress;\n        Deploytime = block.timestamp;\n    }\n\n    // 현재 토큰 분배 가능한지 \n    modifier Claimable(uint256 amount) {\n        require(jt.balanceOf(address(this)) > amount, \"TOKEN_LACK\");\n        _;\n    }\n    \n    function setJetTokenAddress(JetToken _jt) external onlyOwner{\n        require(address(jt) == address(0),\"ADDRESS IS NOT Zero Address\");\n        jt = _jt;\n    }\n\n    //set stakeInfoe startTime // get은 stakeinfos(address) 이용 \n    function setStakeInfo() public {\n        stakeInfos[msg.sender].claimedTime = block.timestamp;\n    }\n\n\n    //토큰 스테이킹\n    function stakeToken(uint256 stakeAmount) public payable Claimable(stakeAmount) returns(bool){\n        require(stakeAmount > 0, \"Stake amount should be correct\"); // 양 체크\n        require(addressStaked[msg.sender] == false, \"You already participated\"); // 스테이킹 여부\n        // 언스 상태에서 스테이킹 안댐 \n        if(stakeInfos[msg.sender].state == 2){\n            return false;\n        }\n\n        bool success = jet2.increaseContractAllowance(\n            msg.sender, \n            address(this),\n            stakeAmount\n        );\n        require(success,\"IncreaseContract Fail\");\n        jet2.transferFrom(msg.sender, address(this), stakeAmount); // jt2토큰 전송\n        addressStaked[msg.sender] = true;\n\n        stakeInfos[msg.sender] = StakeInfo({                \n            startTS: block.timestamp,\n            claimedTime: block.timestamp, //클레임한 시간 \n            unStakingTime: 0,\n            amount: stakeAmount, // 스테이킹한 양\n            totalClaimed: 0,\n            state: 1\n        });\n\n        emit Staked(msg.sender, stakeAmount);\n        return true;\n    }   \n\n    //언스테이킹 \n    function unStakingToken() public payable {\n        require(addressStaked[msg.sender] == true, \"You already participated\"); // 스테이킹 여부\n    \n        // staking 보상 수령\n        uint256 stakingDuration = block.timestamp - stakeInfos[msg.sender].claimedTime; // 마지막 클레임이후 스테이킹한 기간 \n        uint256 persecondAmount = (stakeInfos[msg.sender].amount * APR / 100) / yearsDuration / dayDuration; // 초당 리워드 \n        uint256 claimableAmount = persecondAmount * stakingDuration; // 최종 보상\n        jt.transfer(msg.sender, claimableAmount / 10); //jt2:jt1:10 비율 \n\n        stakeInfos[msg.sender].unStakingTime = block.timestamp; // 언스테이킹한 시점 \n        addressStaked[msg.sender] = false; // 스테이킹 종료 \n        stakeInfos[msg.sender].state = 2; // 언스테이킹 토큰 클레임 가능\n\n        emit UnStaked(msg.sender, block.timestamp); //jt \n        emit Claimed(msg.sender, claimableAmount); // jt2\n    }\n\n    //언스테이킹 토큰 클레임 \n    function unStakingClaime() public payable returns(bool,uint256){\n        require(stakeInfos[msg.sender].state == 2, \"now State is Staking, Please UnStaking!!\");\n        if(stakeInfos[msg.sender].unStakingTime + stakingExpire < block.timestamp){ //클레임 가능 \n            uint256 amount = stakeInfos[msg.sender].amount; // 스테이킹한 벨류 \n            jet2.transfer(msg.sender,amount); // 전송 \n\n            delete stakeInfos[msg.sender]; // 스테이킹 정보 제거 \n            delete addressStaked[msg.sender]; // 스테이킹 상태 주소 제거 \n            emit UnStakedClaimed(msg.sender, block.timestamp, amount);\n            return(true, block.timestamp);\n        }else{ // 클레임 불가 \n            uint256 remainingTime = (stakeInfos[msg.sender].unStakingTime + stakingExpire) - block.timestamp; // 보상가능까지 남은 시간\n            return(false, remainingTime);\n        }\n       \n    }\n\n\n    // 보상 수령\n    function claimReward() external returns (bool){\n        require(addressStaked[msg.sender] == true, \"You are not participated\");\n\n        uint256 stakingDuration = block.timestamp - stakeInfos[msg.sender].claimedTime; // 마지막 클레임이후 스테이킹한 기간 \n        uint256 persecondAmount = (stakeInfos[msg.sender].amount * APR / 100) / yearsDuration / dayDuration; // 초당 리워드 \n        uint256 claimableAmount = persecondAmount * stakingDuration; // 최종 보상\n\n        jt.transfer(msg.sender, claimableAmount / 10); //jt2:jt == 10:1 비율 \n        setStakeInfo(); // 클레임시간 현재 시간으로 수정\n        emit Claimed(msg.sender, claimableAmount);\n\n        return true;\n    }\n\n    // 보상 가능한 수량 \n    function claimableReward() public view returns(uint256) {\n        if(addressStaked[msg.sender] == true){\n            uint256 stakingDuration = block.timestamp - stakeInfos[msg.sender].claimedTime; // 마지막 클레임이후 스테이킹한 기간 \n            uint256 persecondAmount = (stakeInfos[msg.sender].amount * APR / 100) / yearsDuration / dayDuration; // 초당 리워드 \n            uint256 claimableAmount = persecondAmount * stakingDuration; // 최종 보상\n            return claimableAmount;\n        }else{\n            return 0;\n        }\n    }\n}",
  "sourcePath": "C:\\Users\\user\\Desktop\\project3\\BEB-06-FINAL-06\\contract\\contracts\\Staking.sol",
  "ast": {
    "absolutePath": "project:/contracts/Staking.sol",
    "exportedSymbols": {
      "Babylonian": [
        5641
      ],
      "Context": [
        4434
      ],
      "ERC20": [
        2488
      ],
      "IERC20": [
        2566
      ],
      "IERC20Metadata": [
        2591
      ],
      "Jet2Token": [
        5901
      ],
      "JetToken": [
        6888
      ],
      "LPT": [
        10492
      ],
      "LiquidityPool": [
        11307
      ],
      "Math": [
        5584
      ],
      "Ownable": [
        112
      ],
      "Pausable": [
        220
      ],
      "ReentrancyGuard": [
        274
      ],
      "Staking": [
        11887
      ],
      "Strings": [
        4683
      ]
    },
    "id": 11888,
    "license": "GPL-3.0-only",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 11309,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "41:23:35"
      },
      {
        "absolutePath": "project:/contracts/Jet2Token.sol",
        "file": "./Jet2Token.sol",
        "id": 11310,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 11888,
        "sourceUnit": 5902,
        "src": "66:25:35",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "project:/contracts/JetToken.sol",
        "file": "./JetToken.sol",
        "id": 11311,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 11888,
        "sourceUnit": 6889,
        "src": "92:24:35",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 11312,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 11888,
        "sourceUnit": 113,
        "src": "117:52:35",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 11313,
              "name": "Ownable",
              "nameLocations": [
                "191:7:35"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 112,
              "src": "191:7:35"
            },
            "id": 11314,
            "nodeType": "InheritanceSpecifier",
            "src": "191:7:35"
          }
        ],
        "canonicalName": "Staking",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 11887,
        "linearizedBaseContracts": [
          11887,
          112,
          4434
        ],
        "name": "Staking",
        "nameLocation": "180:7:35",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "eventSelector": "9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d",
            "id": 11320,
            "name": "Staked",
            "nameLocation": "211:6:35",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 11319,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11316,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "234:4:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 11320,
                  "src": "218:20:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11315,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "218:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11318,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "248:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 11320,
                  "src": "240:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11317,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "240:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "217:38:35"
            },
            "src": "205:51:35"
          },
          {
            "anonymous": false,
            "eventSelector": "79d3df6837cc49ff0e09fd3258e6e45594e0703445bb06825e9d75156eaee8f0",
            "id": 11326,
            "name": "UnStaked",
            "nameLocation": "267:8:35",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 11325,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11322,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "292:4:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 11326,
                  "src": "276:20:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11321,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "276:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11324,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "unStakedTime",
                  "nameLocation": "306:12:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 11326,
                  "src": "298:20:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11323,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "298:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "275:44:35"
            },
            "src": "261:59:35"
          },
          {
            "anonymous": false,
            "eventSelector": "ec4c5e119b3c2211affd553a6167326af1472cb3b7966b96b0f84a56d8d5317c",
            "id": 11334,
            "name": "UnStakedClaimed",
            "nameLocation": "331:15:35",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 11333,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11328,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "363:4:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 11334,
                  "src": "347:20:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11327,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "347:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11330,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "unStakedTime",
                  "nameLocation": "377:12:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 11334,
                  "src": "369:20:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11329,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "369:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11332,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "399:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 11334,
                  "src": "391:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11331,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "391:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "346:60:35"
            },
            "src": "325:82:35"
          },
          {
            "anonymous": false,
            "eventSelector": "d8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a",
            "id": 11340,
            "name": "Claimed",
            "nameLocation": "418:7:35",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 11339,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11336,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "442:4:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 11340,
                  "src": "426:20:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11335,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "426:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11338,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "456:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 11340,
                  "src": "448:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11337,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "448:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "425:38:35"
            },
            "src": "412:52:35"
          },
          {
            "constant": false,
            "functionSelector": "397eee80",
            "id": 11342,
            "mutability": "mutable",
            "name": "Deploytime",
            "nameLocation": "488:10:35",
            "nodeType": "VariableDeclaration",
            "scope": 11887,
            "src": "473:25:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 11341,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "473:7:35",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "313ce567",
            "id": 11347,
            "mutability": "mutable",
            "name": "decimals",
            "nameLocation": "545:8:35",
            "nodeType": "VariableDeclaration",
            "scope": 11887,
            "src": "530:32:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 11343,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "530:7:35",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                "typeString": "int_const 1000000000000000000"
              },
              "id": 11346,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "3130",
                "id": 11344,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "556:2:35",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_10_by_1",
                  "typeString": "int_const 10"
                },
                "value": "10"
              },
              "nodeType": "BinaryOperation",
              "operator": "**",
              "rightExpression": {
                "hexValue": "3138",
                "id": 11345,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "560:2:35",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_18_by_1",
                  "typeString": "int_const 18"
                },
                "value": "18"
              },
              "src": "556:6:35",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                "typeString": "int_const 1000000000000000000"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "bd30558e",
            "id": 11350,
            "mutability": "mutable",
            "name": "APR",
            "nameLocation": "582:3:35",
            "nodeType": "VariableDeclaration",
            "scope": 11887,
            "src": "568:23:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint32",
              "typeString": "uint32"
            },
            "typeName": {
              "id": 11348,
              "name": "uint32",
              "nodeType": "ElementaryTypeName",
              "src": "568:6:35",
              "typeDescriptions": {
                "typeIdentifier": "t_uint32",
                "typeString": "uint32"
              }
            },
            "value": {
              "hexValue": "313530",
              "id": 11349,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "588:3:35",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_150_by_1",
                "typeString": "int_const 150"
              },
              "value": "150"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 11353,
            "mutability": "mutable",
            "name": "yearsDuration",
            "nameLocation": "625:13:35",
            "nodeType": "VariableDeclaration",
            "scope": 11887,
            "src": "610:39:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint32",
              "typeString": "uint32"
            },
            "typeName": {
              "id": 11351,
              "name": "uint32",
              "nodeType": "ElementaryTypeName",
              "src": "610:6:35",
              "typeDescriptions": {
                "typeIdentifier": "t_uint32",
                "typeString": "uint32"
              }
            },
            "value": {
              "hexValue": "3331353336303030",
              "id": 11352,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "641:8:35",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_31536000_by_1",
                "typeString": "int_const 31536000"
              },
              "value": "31536000"
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 11356,
            "mutability": "mutable",
            "name": "dayDuration",
            "nameLocation": "670:11:35",
            "nodeType": "VariableDeclaration",
            "scope": 11887,
            "src": "655:34:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint32",
              "typeString": "uint32"
            },
            "typeName": {
              "id": 11354,
              "name": "uint32",
              "nodeType": "ElementaryTypeName",
              "src": "655:6:35",
              "typeDescriptions": {
                "typeIdentifier": "t_uint32",
                "typeString": "uint32"
              }
            },
            "value": {
              "hexValue": "3836343030",
              "id": 11355,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "684:5:35",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_86400_by_1",
                "typeString": "int_const 86400"
              },
              "value": "86400"
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 11361,
            "mutability": "mutable",
            "name": "stakingExpire",
            "nameLocation": "711:13:35",
            "nodeType": "VariableDeclaration",
            "scope": 11887,
            "src": "695:47:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 11357,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "695:7:35",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_uint32",
                "typeString": "uint32"
              },
              "id": 11360,
              "isConstant": false,
              "isLValue": false,
              "isPure": false,
              "lValueRequested": false,
              "leftExpression": {
                "id": 11358,
                "name": "dayDuration",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 11356,
                "src": "727:11:35",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint32",
                  "typeString": "uint32"
                }
              },
              "nodeType": "BinaryOperation",
              "operator": "*",
              "rightExpression": {
                "hexValue": "33",
                "id": 11359,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "741:1:35",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_3_by_1",
                  "typeString": "int_const 3"
                },
                "value": "3"
              },
              "src": "727:15:35",
              "typeDescriptions": {
                "typeIdentifier": "t_uint32",
                "typeString": "uint32"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 11364,
            "mutability": "mutable",
            "name": "jet2",
            "nameLocation": "809:4:35",
            "nodeType": "VariableDeclaration",
            "scope": 11887,
            "src": "799:14:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Jet2Token_$5901",
              "typeString": "contract Jet2Token"
            },
            "typeName": {
              "id": 11363,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 11362,
                "name": "Jet2Token",
                "nameLocations": [
                  "799:9:35"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 5901,
                "src": "799:9:35"
              },
              "referencedDeclaration": 5901,
              "src": "799:9:35",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Jet2Token_$5901",
                "typeString": "contract Jet2Token"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 11367,
            "mutability": "mutable",
            "name": "jt",
            "nameLocation": "856:2:35",
            "nodeType": "VariableDeclaration",
            "scope": 11887,
            "src": "847:11:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_JetToken_$6888",
              "typeString": "contract JetToken"
            },
            "typeName": {
              "id": 11366,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 11365,
                "name": "JetToken",
                "nameLocations": [
                  "847:8:35"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 6888,
                "src": "847:8:35"
              },
              "referencedDeclaration": 6888,
              "src": "847:8:35",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_JetToken_$6888",
                "typeString": "contract JetToken"
              }
            },
            "visibility": "internal"
          },
          {
            "canonicalName": "Staking.StakeInfo",
            "id": 11380,
            "members": [
              {
                "constant": false,
                "id": 11369,
                "mutability": "mutable",
                "name": "startTS",
                "nameLocation": "938:7:35",
                "nodeType": "VariableDeclaration",
                "scope": 11380,
                "src": "930:15:35",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 11368,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "930:7:35",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 11371,
                "mutability": "mutable",
                "name": "claimedTime",
                "nameLocation": "992:11:35",
                "nodeType": "VariableDeclaration",
                "scope": 11380,
                "src": "984:19:35",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 11370,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "984:7:35",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 11373,
                "mutability": "mutable",
                "name": "unStakingTime",
                "nameLocation": "1061:13:35",
                "nodeType": "VariableDeclaration",
                "scope": 11380,
                "src": "1053:21:35",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 11372,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1053:7:35",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 11375,
                "mutability": "mutable",
                "name": "amount",
                "nameLocation": "1121:6:35",
                "nodeType": "VariableDeclaration",
                "scope": 11380,
                "src": "1113:14:35",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 11374,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1113:7:35",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 11377,
                "mutability": "mutable",
                "name": "totalClaimed",
                "nameLocation": "1165:12:35",
                "nodeType": "VariableDeclaration",
                "scope": 11380,
                "src": "1157:20:35",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 11376,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1157:7:35",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 11379,
                "mutability": "mutable",
                "name": "state",
                "nameLocation": "1244:5:35",
                "nodeType": "VariableDeclaration",
                "scope": 11380,
                "src": "1237:12:35",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint32",
                  "typeString": "uint32"
                },
                "typeName": {
                  "id": 11378,
                  "name": "uint32",
                  "nodeType": "ElementaryTypeName",
                  "src": "1237:6:35",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "StakeInfo",
            "nameLocation": "902:9:35",
            "nodeType": "StructDefinition",
            "scope": 11887,
            "src": "895:414:35",
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "dfbf9def",
            "id": 11385,
            "mutability": "mutable",
            "name": "stakeInfos",
            "nameLocation": "1352:10:35",
            "nodeType": "VariableDeclaration",
            "scope": 11887,
            "src": "1315:47:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$11380_storage_$",
              "typeString": "mapping(address => struct Staking.StakeInfo)"
            },
            "typeName": {
              "id": 11384,
              "keyType": {
                "id": 11381,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1323:7:35",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1315:29:35",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$11380_storage_$",
                "typeString": "mapping(address => struct Staking.StakeInfo)"
              },
              "valueType": {
                "id": 11383,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 11382,
                  "name": "StakeInfo",
                  "nameLocations": [
                    "1334:9:35"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 11380,
                  "src": "1334:9:35"
                },
                "referencedDeclaration": 11380,
                "src": "1334:9:35",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_StakeInfo_$11380_storage_ptr",
                  "typeString": "struct Staking.StakeInfo"
                }
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "e74d059f",
            "id": 11389,
            "mutability": "mutable",
            "name": "addressStaked",
            "nameLocation": "1440:13:35",
            "nodeType": "VariableDeclaration",
            "scope": 11887,
            "src": "1408:45:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 11388,
              "keyType": {
                "id": 11386,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1416:7:35",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1408:24:35",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueType": {
                "id": 11387,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "1427:4:35",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 11417,
              "nodeType": "Block",
              "src": "1531:218:35",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 11404,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "id": 11398,
                              "name": "_tokenAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11392,
                              "src": "1593:13:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Jet2Token_$5901",
                                "typeString": "contract Jet2Token"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_Jet2Token_$5901",
                                "typeString": "contract Jet2Token"
                              }
                            ],
                            "id": 11397,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1585:7:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 11396,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1585:7:35",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 11399,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1585:22:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 11402,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1619:1:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 11401,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1611:7:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 11400,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1611:7:35",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 11403,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1611:10:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1585:36:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "546f6b656e20416464726573732063616e6e6f7420626520616464726573732030",
                        "id": 11405,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1622:35:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f2202c1f725dcbd51d00258bd50ca4766e24b49c836557e7bdc6a84c67402a7f",
                          "typeString": "literal_string \"Token Address cannot be address 0\""
                        },
                        "value": "Token Address cannot be address 0"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f2202c1f725dcbd51d00258bd50ca4766e24b49c836557e7bdc6a84c67402a7f",
                          "typeString": "literal_string \"Token Address cannot be address 0\""
                        }
                      ],
                      "id": 11395,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1577:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 11406,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1577:81:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11407,
                  "nodeType": "ExpressionStatement",
                  "src": "1577:81:35"
                },
                {
                  "expression": {
                    "id": 11410,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 11408,
                      "name": "jet2",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11364,
                      "src": "1684:4:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Jet2Token_$5901",
                        "typeString": "contract Jet2Token"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 11409,
                      "name": "_tokenAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11392,
                      "src": "1691:13:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Jet2Token_$5901",
                        "typeString": "contract Jet2Token"
                      }
                    },
                    "src": "1684:20:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Jet2Token_$5901",
                      "typeString": "contract Jet2Token"
                    }
                  },
                  "id": 11411,
                  "nodeType": "ExpressionStatement",
                  "src": "1684:20:35"
                },
                {
                  "expression": {
                    "id": 11415,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 11412,
                      "name": "Deploytime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11342,
                      "src": "1714:10:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 11413,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967292,
                        "src": "1727:5:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 11414,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1733:9:35",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "1727:15:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1714:28:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 11416,
                  "nodeType": "ExpressionStatement",
                  "src": "1714:28:35"
                }
              ]
            },
            "id": 11418,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11393,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11392,
                  "mutability": "mutable",
                  "name": "_tokenAddress",
                  "nameLocation": "1516:13:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 11418,
                  "src": "1506:23:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Jet2Token_$5901",
                    "typeString": "contract Jet2Token"
                  },
                  "typeName": {
                    "id": 11391,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 11390,
                      "name": "Jet2Token",
                      "nameLocations": [
                        "1506:9:35"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 5901,
                      "src": "1506:9:35"
                    },
                    "referencedDeclaration": 5901,
                    "src": "1506:9:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Jet2Token_$5901",
                      "typeString": "contract Jet2Token"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1505:25:35"
            },
            "returnParameters": {
              "id": 11394,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1531:0:35"
            },
            "scope": 11887,
            "src": "1494:255:35",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11436,
              "nodeType": "Block",
              "src": "1832:87:35",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 11431,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 11427,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967268,
                                  "src": "1871:4:35",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_Staking_$11887",
                                    "typeString": "contract Staking"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_Staking_$11887",
                                    "typeString": "contract Staking"
                                  }
                                ],
                                "id": 11426,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1863:7:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 11425,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1863:7:35",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 11428,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1863:13:35",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "id": 11423,
                              "name": "jt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11367,
                              "src": "1850:2:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_JetToken_$6888",
                                "typeString": "contract JetToken"
                              }
                            },
                            "id": 11424,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1853:9:35",
                            "memberName": "balanceOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 2000,
                            "src": "1850:12:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view external returns (uint256)"
                            }
                          },
                          "id": 11429,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1850:27:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 11430,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11420,
                          "src": "1880:6:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1850:36:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "544f4b454e5f4c41434b",
                        "id": 11432,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1888:12:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a753c832f5dff5664adf074d4ff580bea611cf44945f22ffe1b00a3d8df0bdb4",
                          "typeString": "literal_string \"TOKEN_LACK\""
                        },
                        "value": "TOKEN_LACK"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a753c832f5dff5664adf074d4ff580bea611cf44945f22ffe1b00a3d8df0bdb4",
                          "typeString": "literal_string \"TOKEN_LACK\""
                        }
                      ],
                      "id": 11422,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1842:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 11433,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1842:59:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11434,
                  "nodeType": "ExpressionStatement",
                  "src": "1842:59:35"
                },
                {
                  "id": 11435,
                  "nodeType": "PlaceholderStatement",
                  "src": "1911:1:35"
                }
              ]
            },
            "id": 11437,
            "name": "Claimable",
            "nameLocation": "1806:9:35",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 11421,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11420,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1824:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 11437,
                  "src": "1816:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11419,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1816:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1815:16:35"
            },
            "src": "1797:122:35",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 11462,
              "nodeType": "Block",
              "src": "1989:99:35",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 11454,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "id": 11448,
                              "name": "jt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11367,
                              "src": "2015:2:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_JetToken_$6888",
                                "typeString": "contract JetToken"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_JetToken_$6888",
                                "typeString": "contract JetToken"
                              }
                            ],
                            "id": 11447,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2007:7:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 11446,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2007:7:35",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 11449,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2007:11:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 11452,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2030:1:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 11451,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2022:7:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 11450,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2022:7:35",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 11453,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2022:10:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2007:25:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "41444452455353204953204e4f54205a65726f2041646472657373",
                        "id": 11455,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2033:29:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5e968b1b9d679d611ccf949429dd4656124f3d05f600330c38eabd5c429f5b9e",
                          "typeString": "literal_string \"ADDRESS IS NOT Zero Address\""
                        },
                        "value": "ADDRESS IS NOT Zero Address"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5e968b1b9d679d611ccf949429dd4656124f3d05f600330c38eabd5c429f5b9e",
                          "typeString": "literal_string \"ADDRESS IS NOT Zero Address\""
                        }
                      ],
                      "id": 11445,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1999:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 11456,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1999:64:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11457,
                  "nodeType": "ExpressionStatement",
                  "src": "1999:64:35"
                },
                {
                  "expression": {
                    "id": 11460,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 11458,
                      "name": "jt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11367,
                      "src": "2073:2:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_JetToken_$6888",
                        "typeString": "contract JetToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 11459,
                      "name": "_jt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11440,
                      "src": "2078:3:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_JetToken_$6888",
                        "typeString": "contract JetToken"
                      }
                    },
                    "src": "2073:8:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_JetToken_$6888",
                      "typeString": "contract JetToken"
                    }
                  },
                  "id": 11461,
                  "nodeType": "ExpressionStatement",
                  "src": "2073:8:35"
                }
              ]
            },
            "functionSelector": "b2960019",
            "id": 11463,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 11443,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 11442,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "1980:9:35"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31,
                  "src": "1980:9:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "1980:9:35"
              }
            ],
            "name": "setJetTokenAddress",
            "nameLocation": "1938:18:35",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11441,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11440,
                  "mutability": "mutable",
                  "name": "_jt",
                  "nameLocation": "1966:3:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 11463,
                  "src": "1957:12:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_JetToken_$6888",
                    "typeString": "contract JetToken"
                  },
                  "typeName": {
                    "id": 11439,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 11438,
                      "name": "JetToken",
                      "nameLocations": [
                        "1957:8:35"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 6888,
                      "src": "1957:8:35"
                    },
                    "referencedDeclaration": 6888,
                    "src": "1957:8:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_JetToken_$6888",
                      "typeString": "contract JetToken"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1956:14:35"
            },
            "returnParameters": {
              "id": 11444,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1989:0:35"
            },
            "scope": 11887,
            "src": "1929:159:35",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 11475,
              "nodeType": "Block",
              "src": "2194:69:35",
              "statements": [
                {
                  "expression": {
                    "id": 11473,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 11466,
                          "name": "stakeInfos",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11385,
                          "src": "2204:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$11380_storage_$",
                            "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                          }
                        },
                        "id": 11469,
                        "indexExpression": {
                          "expression": {
                            "id": 11467,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "2215:3:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 11468,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2219:6:35",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "2215:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2204:22:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StakeInfo_$11380_storage",
                          "typeString": "struct Staking.StakeInfo storage ref"
                        }
                      },
                      "id": 11470,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "2227:11:35",
                      "memberName": "claimedTime",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11371,
                      "src": "2204:34:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 11471,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967292,
                        "src": "2241:5:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 11472,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2247:9:35",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "2241:15:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2204:52:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 11474,
                  "nodeType": "ExpressionStatement",
                  "src": "2204:52:35"
                }
              ]
            },
            "functionSelector": "89fb2e46",
            "id": 11476,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setStakeInfo",
            "nameLocation": "2172:12:35",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11464,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2184:2:35"
            },
            "returnParameters": {
              "id": 11465,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2194:0:35"
            },
            "scope": 11887,
            "src": "2163:100:35",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11575,
              "nodeType": "Block",
              "src": "2388:1031:35",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 11489,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 11487,
                          "name": "stakeAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11478,
                          "src": "2406:11:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 11488,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2420:1:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2406:15:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5374616b6520616d6f756e742073686f756c6420626520636f7272656374",
                        "id": 11490,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2423:32:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_0ab0414546a08082c35f8d614914f9a063567c270f996193e25fed9c5af250ba",
                          "typeString": "literal_string \"Stake amount should be correct\""
                        },
                        "value": "Stake amount should be correct"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_0ab0414546a08082c35f8d614914f9a063567c270f996193e25fed9c5af250ba",
                          "typeString": "literal_string \"Stake amount should be correct\""
                        }
                      ],
                      "id": 11486,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2398:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 11491,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2398:58:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11492,
                  "nodeType": "ExpressionStatement",
                  "src": "2398:58:35"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 11499,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "id": 11494,
                            "name": "addressStaked",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11389,
                            "src": "2488:13:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 11497,
                          "indexExpression": {
                            "expression": {
                              "id": 11495,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "2502:3:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 11496,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2506:6:35",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "2502:10:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2488:25:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "66616c7365",
                          "id": 11498,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2517:5:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "src": "2488:34:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "596f7520616c726561647920706172746963697061746564",
                        "id": 11500,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2524:26:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_0e75d8d12a7dbee9f06677c3321bb311b9f1e86b675875c5f6d32a870ba6ec0c",
                          "typeString": "literal_string \"You already participated\""
                        },
                        "value": "You already participated"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_0e75d8d12a7dbee9f06677c3321bb311b9f1e86b675875c5f6d32a870ba6ec0c",
                          "typeString": "literal_string \"You already participated\""
                        }
                      ],
                      "id": 11493,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2480:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 11501,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2480:71:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11502,
                  "nodeType": "ExpressionStatement",
                  "src": "2480:71:35"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    },
                    "id": 11509,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "baseExpression": {
                          "id": 11503,
                          "name": "stakeInfos",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11385,
                          "src": "2639:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$11380_storage_$",
                            "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                          }
                        },
                        "id": 11506,
                        "indexExpression": {
                          "expression": {
                            "id": 11504,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "2650:3:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 11505,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2654:6:35",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "2650:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2639:22:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StakeInfo_$11380_storage",
                          "typeString": "struct Staking.StakeInfo storage ref"
                        }
                      },
                      "id": 11507,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2662:5:35",
                      "memberName": "state",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11379,
                      "src": "2639:28:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "32",
                      "id": 11508,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2671:1:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "src": "2639:33:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 11513,
                  "nodeType": "IfStatement",
                  "src": "2636:74:35",
                  "trueBody": {
                    "id": 11512,
                    "nodeType": "Block",
                    "src": "2673:37:35",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "66616c7365",
                          "id": 11510,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2694:5:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 11485,
                        "id": 11511,
                        "nodeType": "Return",
                        "src": "2687:12:35"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    11515
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11515,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "2725:7:35",
                      "nodeType": "VariableDeclaration",
                      "scope": 11575,
                      "src": "2720:12:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 11514,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "2720:4:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11526,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 11518,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "2779:3:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 11519,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2783:6:35",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2779:10:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 11522,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "2812:4:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Staking_$11887",
                              "typeString": "contract Staking"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Staking_$11887",
                              "typeString": "contract Staking"
                            }
                          ],
                          "id": 11521,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2804:7:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 11520,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2804:7:35",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 11523,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2804:13:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 11524,
                        "name": "stakeAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11478,
                        "src": "2831:11:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 11516,
                        "name": "jet2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11364,
                        "src": "2735:4:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Jet2Token_$5901",
                          "typeString": "contract Jet2Token"
                        }
                      },
                      "id": 11517,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2740:25:35",
                      "memberName": "increaseContractAllowance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5845,
                      "src": "2735:30:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 11525,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2735:117:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2720:132:35"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 11528,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11515,
                        "src": "2870:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "496e637265617365436f6e7472616374204661696c",
                        "id": 11529,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2878:23:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4",
                          "typeString": "literal_string \"IncreaseContract Fail\""
                        },
                        "value": "IncreaseContract Fail"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4",
                          "typeString": "literal_string \"IncreaseContract Fail\""
                        }
                      ],
                      "id": 11527,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2862:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 11530,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2862:40:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11531,
                  "nodeType": "ExpressionStatement",
                  "src": "2862:40:35"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 11535,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "2930:3:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 11536,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2934:6:35",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2930:10:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 11539,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "2950:4:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Staking_$11887",
                              "typeString": "contract Staking"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Staking_$11887",
                              "typeString": "contract Staking"
                            }
                          ],
                          "id": 11538,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2942:7:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 11537,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2942:7:35",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 11540,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2942:13:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 11541,
                        "name": "stakeAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11478,
                        "src": "2957:11:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 11532,
                        "name": "jet2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11364,
                        "src": "2912:4:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Jet2Token_$5901",
                          "typeString": "contract Jet2Token"
                        }
                      },
                      "id": 11534,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2917:12:35",
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2101,
                      "src": "2912:17:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 11542,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2912:57:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 11543,
                  "nodeType": "ExpressionStatement",
                  "src": "2912:57:35"
                },
                {
                  "expression": {
                    "id": 11549,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 11544,
                        "name": "addressStaked",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11389,
                        "src": "2999:13:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 11547,
                      "indexExpression": {
                        "expression": {
                          "id": 11545,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "3013:3:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 11546,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3017:6:35",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "3013:10:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2999:25:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 11548,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3027:4:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "2999:32:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 11550,
                  "nodeType": "ExpressionStatement",
                  "src": "2999:32:35"
                },
                {
                  "expression": {
                    "id": 11565,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 11551,
                        "name": "stakeInfos",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11385,
                        "src": "3042:10:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$11380_storage_$",
                          "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                        }
                      },
                      "id": 11554,
                      "indexExpression": {
                        "expression": {
                          "id": 11552,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "3053:3:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 11553,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3057:6:35",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "3053:10:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3042:22:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StakeInfo_$11380_storage",
                        "typeString": "struct Staking.StakeInfo storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 11556,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967292,
                            "src": "3116:5:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 11557,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3122:9:35",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "3116:15:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 11558,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967292,
                            "src": "3158:5:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 11559,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3164:9:35",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "3158:15:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "hexValue": "30",
                          "id": 11560,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3225:1:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "id": 11561,
                          "name": "stakeAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11478,
                          "src": "3248:11:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "hexValue": "30",
                          "id": 11562,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3310:1:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "hexValue": "31",
                          "id": 11563,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3332:1:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          }
                        ],
                        "id": 11555,
                        "name": "StakeInfo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11380,
                        "src": "3067:9:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_StakeInfo_$11380_storage_ptr_$",
                          "typeString": "type(struct Staking.StakeInfo storage pointer)"
                        }
                      },
                      "id": 11564,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "nameLocations": [
                        "3107:7:35",
                        "3145:11:35",
                        "3210:13:35",
                        "3240:6:35",
                        "3296:12:35",
                        "3325:5:35"
                      ],
                      "names": [
                        "startTS",
                        "claimedTime",
                        "unStakingTime",
                        "amount",
                        "totalClaimed",
                        "state"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "3067:277:35",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StakeInfo_$11380_memory_ptr",
                        "typeString": "struct Staking.StakeInfo memory"
                      }
                    },
                    "src": "3042:302:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StakeInfo_$11380_storage",
                      "typeString": "struct Staking.StakeInfo storage ref"
                    }
                  },
                  "id": 11566,
                  "nodeType": "ExpressionStatement",
                  "src": "3042:302:35"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 11568,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "3367:3:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 11569,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3371:6:35",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "3367:10:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 11570,
                        "name": "stakeAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11478,
                        "src": "3379:11:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 11567,
                      "name": "Staked",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11320,
                      "src": "3360:6:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 11571,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3360:31:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11572,
                  "nodeType": "EmitStatement",
                  "src": "3355:36:35"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 11573,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3408:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 11485,
                  "id": 11574,
                  "nodeType": "Return",
                  "src": "3401:11:35"
                }
              ]
            },
            "functionSelector": "cda6b847",
            "id": 11576,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 11481,
                    "name": "stakeAmount",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 11478,
                    "src": "2362:11:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 11482,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 11480,
                  "name": "Claimable",
                  "nameLocations": [
                    "2352:9:35"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 11437,
                  "src": "2352:9:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "2352:22:35"
              }
            ],
            "name": "stakeToken",
            "nameLocation": "2305:10:35",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11479,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11478,
                  "mutability": "mutable",
                  "name": "stakeAmount",
                  "nameLocation": "2324:11:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 11576,
                  "src": "2316:19:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11477,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2316:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2315:21:35"
            },
            "returnParameters": {
              "id": 11485,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11484,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11576,
                  "src": "2383:4:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11483,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2383:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2382:6:35"
            },
            "scope": 11887,
            "src": "2296:1123:35",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11670,
              "nodeType": "Block",
              "src": "3492:945:35",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 11585,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "id": 11580,
                            "name": "addressStaked",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11389,
                            "src": "3510:13:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 11583,
                          "indexExpression": {
                            "expression": {
                              "id": 11581,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "3524:3:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 11582,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3528:6:35",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "3524:10:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3510:25:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "74727565",
                          "id": 11584,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3539:4:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "3510:33:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "596f7520616c726561647920706172746963697061746564",
                        "id": 11586,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3545:26:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_0e75d8d12a7dbee9f06677c3321bb311b9f1e86b675875c5f6d32a870ba6ec0c",
                          "typeString": "literal_string \"You already participated\""
                        },
                        "value": "You already participated"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_0e75d8d12a7dbee9f06677c3321bb311b9f1e86b675875c5f6d32a870ba6ec0c",
                          "typeString": "literal_string \"You already participated\""
                        }
                      ],
                      "id": 11579,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "3502:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 11587,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3502:70:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11588,
                  "nodeType": "ExpressionStatement",
                  "src": "3502:70:35"
                },
                {
                  "assignments": [
                    11590
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11590,
                      "mutability": "mutable",
                      "name": "stakingDuration",
                      "nameLocation": "3651:15:35",
                      "nodeType": "VariableDeclaration",
                      "scope": 11670,
                      "src": "3643:23:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11589,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3643:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11599,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 11598,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 11591,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967292,
                        "src": "3669:5:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 11592,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3675:9:35",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "3669:15:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "expression": {
                        "baseExpression": {
                          "id": 11593,
                          "name": "stakeInfos",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11385,
                          "src": "3687:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$11380_storage_$",
                            "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                          }
                        },
                        "id": 11596,
                        "indexExpression": {
                          "expression": {
                            "id": 11594,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "3698:3:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 11595,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3702:6:35",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "3698:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3687:22:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StakeInfo_$11380_storage",
                          "typeString": "struct Staking.StakeInfo storage ref"
                        }
                      },
                      "id": 11597,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3710:11:35",
                      "memberName": "claimedTime",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11371,
                      "src": "3687:34:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3669:52:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3643:78:35"
                },
                {
                  "assignments": [
                    11601
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11601,
                      "mutability": "mutable",
                      "name": "persecondAmount",
                      "nameLocation": "3792:15:35",
                      "nodeType": "VariableDeclaration",
                      "scope": 11670,
                      "src": "3784:23:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11600,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3784:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11616,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 11615,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 11613,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 11610,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 11608,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "expression": {
                                  "baseExpression": {
                                    "id": 11602,
                                    "name": "stakeInfos",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 11385,
                                    "src": "3811:10:35",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$11380_storage_$",
                                      "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                                    }
                                  },
                                  "id": 11605,
                                  "indexExpression": {
                                    "expression": {
                                      "id": 11603,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4294967281,
                                      "src": "3822:3:35",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 11604,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "3826:6:35",
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "src": "3822:10:35",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "3811:22:35",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_StakeInfo_$11380_storage",
                                    "typeString": "struct Staking.StakeInfo storage ref"
                                  }
                                },
                                "id": 11606,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "3834:6:35",
                                "memberName": "amount",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 11375,
                                "src": "3811:29:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "id": 11607,
                                "name": "APR",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11350,
                                "src": "3843:3:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint32",
                                  "typeString": "uint32"
                                }
                              },
                              "src": "3811:35:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "hexValue": "313030",
                              "id": 11609,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3849:3:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_100_by_1",
                                "typeString": "int_const 100"
                              },
                              "value": "100"
                            },
                            "src": "3811:41:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 11611,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "3810:43:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 11612,
                        "name": "yearsDuration",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11353,
                        "src": "3856:13:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        }
                      },
                      "src": "3810:59:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "id": 11614,
                      "name": "dayDuration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11356,
                      "src": "3872:11:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "src": "3810:73:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3784:99:35"
                },
                {
                  "assignments": [
                    11618
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11618,
                      "mutability": "mutable",
                      "name": "claimableAmount",
                      "nameLocation": "3922:15:35",
                      "nodeType": "VariableDeclaration",
                      "scope": 11670,
                      "src": "3914:23:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11617,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3914:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11622,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 11621,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 11619,
                      "name": "persecondAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11601,
                      "src": "3940:15:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "id": 11620,
                      "name": "stakingDuration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11590,
                      "src": "3958:15:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3940:33:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3914:59:35"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 11626,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "4012:3:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 11627,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4016:6:35",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "4012:10:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 11630,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 11628,
                          "name": "claimableAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11618,
                          "src": "4024:15:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "hexValue": "3130",
                          "id": 11629,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4042:2:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10_by_1",
                            "typeString": "int_const 10"
                          },
                          "value": "10"
                        },
                        "src": "4024:20:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 11623,
                        "name": "jt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11367,
                        "src": "4000:2:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_JetToken_$6888",
                          "typeString": "contract JetToken"
                        }
                      },
                      "id": 11625,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4003:8:35",
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2025,
                      "src": "4000:11:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 11631,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4000:45:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 11632,
                  "nodeType": "ExpressionStatement",
                  "src": "4000:45:35"
                },
                {
                  "expression": {
                    "id": 11640,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 11633,
                          "name": "stakeInfos",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11385,
                          "src": "4077:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$11380_storage_$",
                            "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                          }
                        },
                        "id": 11636,
                        "indexExpression": {
                          "expression": {
                            "id": 11634,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "4088:3:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 11635,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4092:6:35",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "4088:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4077:22:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StakeInfo_$11380_storage",
                          "typeString": "struct Staking.StakeInfo storage ref"
                        }
                      },
                      "id": 11637,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4100:13:35",
                      "memberName": "unStakingTime",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11373,
                      "src": "4077:36:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 11638,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967292,
                        "src": "4116:5:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 11639,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4122:9:35",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "4116:15:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4077:54:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 11641,
                  "nodeType": "ExpressionStatement",
                  "src": "4077:54:35"
                },
                {
                  "expression": {
                    "id": 11647,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 11642,
                        "name": "addressStaked",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11389,
                        "src": "4171:13:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 11645,
                      "indexExpression": {
                        "expression": {
                          "id": 11643,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "4185:3:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 11644,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4189:6:35",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "4185:10:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "4171:25:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "66616c7365",
                      "id": 11646,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4199:5:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "4171:33:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 11648,
                  "nodeType": "ExpressionStatement",
                  "src": "4171:33:35"
                },
                {
                  "expression": {
                    "id": 11655,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 11649,
                          "name": "stakeInfos",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11385,
                          "src": "4238:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$11380_storage_$",
                            "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                          }
                        },
                        "id": 11652,
                        "indexExpression": {
                          "expression": {
                            "id": 11650,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "4249:3:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 11651,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4253:6:35",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "4249:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4238:22:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StakeInfo_$11380_storage",
                          "typeString": "struct Staking.StakeInfo storage ref"
                        }
                      },
                      "id": 11653,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4261:5:35",
                      "memberName": "state",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11379,
                      "src": "4238:28:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "32",
                      "id": 11654,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4269:1:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "src": "4238:32:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "id": 11656,
                  "nodeType": "ExpressionStatement",
                  "src": "4238:32:35"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 11658,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "4338:3:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 11659,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4342:6:35",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "4338:10:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 11660,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967292,
                          "src": "4350:5:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 11661,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4356:9:35",
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "src": "4350:15:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 11657,
                      "name": "UnStaked",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11326,
                      "src": "4329:8:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 11662,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4329:37:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11663,
                  "nodeType": "EmitStatement",
                  "src": "4324:42:35"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 11665,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "4395:3:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 11666,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4399:6:35",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "4395:10:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 11667,
                        "name": "claimableAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11618,
                        "src": "4407:15:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 11664,
                      "name": "Claimed",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11340,
                      "src": "4387:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 11668,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4387:36:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11669,
                  "nodeType": "EmitStatement",
                  "src": "4382:41:35"
                }
              ]
            },
            "functionSelector": "3595bf7a",
            "id": 11671,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "unStakingToken",
            "nameLocation": "3460:14:35",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11577,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3474:2:35"
            },
            "returnParameters": {
              "id": 11578,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3492:0:35"
            },
            "scope": 11887,
            "src": "3451:986:35",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11761,
              "nodeType": "Block",
              "src": "4546:866:35",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        },
                        "id": 11685,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "baseExpression": {
                              "id": 11679,
                              "name": "stakeInfos",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11385,
                              "src": "4564:10:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$11380_storage_$",
                                "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                              }
                            },
                            "id": 11682,
                            "indexExpression": {
                              "expression": {
                                "id": 11680,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "4575:3:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 11681,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4579:6:35",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "4575:10:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4564:22:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_StakeInfo_$11380_storage",
                              "typeString": "struct Staking.StakeInfo storage ref"
                            }
                          },
                          "id": 11683,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4587:5:35",
                          "memberName": "state",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 11379,
                          "src": "4564:28:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 11684,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4596:1:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "4564:33:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "6e6f77205374617465206973205374616b696e672c20506c6561736520556e5374616b696e672121",
                        "id": 11686,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4599:42:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_3fa08d1bdb203005192b699e199b03078e7204a335f58d9200658261ed42d204",
                          "typeString": "literal_string \"now State is Staking, Please UnStaking!!\""
                        },
                        "value": "now State is Staking, Please UnStaking!!"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_3fa08d1bdb203005192b699e199b03078e7204a335f58d9200658261ed42d204",
                          "typeString": "literal_string \"now State is Staking, Please UnStaking!!\""
                        }
                      ],
                      "id": 11678,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "4556:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 11687,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4556:86:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11688,
                  "nodeType": "ExpressionStatement",
                  "src": "4556:86:35"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 11698,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 11695,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "baseExpression": {
                            "id": 11689,
                            "name": "stakeInfos",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11385,
                            "src": "4655:10:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$11380_storage_$",
                              "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                            }
                          },
                          "id": 11692,
                          "indexExpression": {
                            "expression": {
                              "id": 11690,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "4666:3:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 11691,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4670:6:35",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "4666:10:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4655:22:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_StakeInfo_$11380_storage",
                            "typeString": "struct Staking.StakeInfo storage ref"
                          }
                        },
                        "id": 11693,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4678:13:35",
                        "memberName": "unStakingTime",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 11373,
                        "src": "4655:36:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "id": 11694,
                        "name": "stakingExpire",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11361,
                        "src": "4694:13:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4655:52:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 11696,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967292,
                        "src": "4710:5:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 11697,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4716:9:35",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "4710:15:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4655:70:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 11759,
                    "nodeType": "Block",
                    "src": "5178:220:35",
                    "statements": [
                      {
                        "assignments": [
                          11742
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 11742,
                            "mutability": "mutable",
                            "name": "remainingTime",
                            "nameLocation": "5221:13:35",
                            "nodeType": "VariableDeclaration",
                            "scope": 11759,
                            "src": "5213:21:35",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 11741,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "5213:7:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 11754,
                        "initialValue": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 11753,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 11749,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "expression": {
                                    "baseExpression": {
                                      "id": 11743,
                                      "name": "stakeInfos",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 11385,
                                      "src": "5238:10:35",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$11380_storage_$",
                                        "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                                      }
                                    },
                                    "id": 11746,
                                    "indexExpression": {
                                      "expression": {
                                        "id": 11744,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 4294967281,
                                        "src": "5249:3:35",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 11745,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "5253:6:35",
                                      "memberName": "sender",
                                      "nodeType": "MemberAccess",
                                      "src": "5249:10:35",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "5238:22:35",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_StakeInfo_$11380_storage",
                                      "typeString": "struct Staking.StakeInfo storage ref"
                                    }
                                  },
                                  "id": 11747,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "5261:13:35",
                                  "memberName": "unStakingTime",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 11373,
                                  "src": "5238:36:35",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "+",
                                "rightExpression": {
                                  "id": 11748,
                                  "name": "stakingExpire",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 11361,
                                  "src": "5277:13:35",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "5238:52:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 11750,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "5237:54:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "expression": {
                              "id": 11751,
                              "name": "block",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967292,
                              "src": "5294:5:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_block",
                                "typeString": "block"
                              }
                            },
                            "id": 11752,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5300:9:35",
                            "memberName": "timestamp",
                            "nodeType": "MemberAccess",
                            "src": "5294:15:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5237:72:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "5213:96:35"
                      },
                      {
                        "expression": {
                          "components": [
                            {
                              "hexValue": "66616c7365",
                              "id": 11755,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5366:5:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "false"
                            },
                            {
                              "id": 11756,
                              "name": "remainingTime",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11742,
                              "src": "5373:13:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 11757,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "5365:22:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                            "typeString": "tuple(bool,uint256)"
                          }
                        },
                        "functionReturnParameters": 11677,
                        "id": 11758,
                        "nodeType": "Return",
                        "src": "5359:28:35"
                      }
                    ]
                  },
                  "id": 11760,
                  "nodeType": "IfStatement",
                  "src": "4652:746:35",
                  "trueBody": {
                    "id": 11740,
                    "nodeType": "Block",
                    "src": "4726:448:35",
                    "statements": [
                      {
                        "assignments": [
                          11700
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 11700,
                            "mutability": "mutable",
                            "name": "amount",
                            "nameLocation": "4768:6:35",
                            "nodeType": "VariableDeclaration",
                            "scope": 11740,
                            "src": "4760:14:35",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 11699,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "4760:7:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 11706,
                        "initialValue": {
                          "expression": {
                            "baseExpression": {
                              "id": 11701,
                              "name": "stakeInfos",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11385,
                              "src": "4777:10:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$11380_storage_$",
                                "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                              }
                            },
                            "id": 11704,
                            "indexExpression": {
                              "expression": {
                                "id": 11702,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "4788:3:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 11703,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4792:6:35",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "4788:10:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4777:22:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_StakeInfo_$11380_storage",
                              "typeString": "struct Staking.StakeInfo storage ref"
                            }
                          },
                          "id": 11705,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4800:6:35",
                          "memberName": "amount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 11375,
                          "src": "4777:29:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "4760:46:35"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 11710,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "4861:3:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 11711,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4865:6:35",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "4861:10:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 11712,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11700,
                              "src": "4872:6:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "id": 11707,
                              "name": "jet2",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11364,
                              "src": "4847:4:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Jet2Token_$5901",
                                "typeString": "contract Jet2Token"
                              }
                            },
                            "id": 11709,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4852:8:35",
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 2025,
                            "src": "4847:13:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,uint256) external returns (bool)"
                            }
                          },
                          "id": 11713,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4847:32:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 11714,
                        "nodeType": "ExpressionStatement",
                        "src": "4847:32:35"
                      },
                      {
                        "expression": {
                          "id": 11719,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "delete",
                          "prefix": true,
                          "src": "4905:29:35",
                          "subExpression": {
                            "baseExpression": {
                              "id": 11715,
                              "name": "stakeInfos",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11385,
                              "src": "4912:10:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$11380_storage_$",
                                "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                              }
                            },
                            "id": 11718,
                            "indexExpression": {
                              "expression": {
                                "id": 11716,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "4923:3:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 11717,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4927:6:35",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "4923:10:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "4912:22:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_StakeInfo_$11380_storage",
                              "typeString": "struct Staking.StakeInfo storage ref"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 11720,
                        "nodeType": "ExpressionStatement",
                        "src": "4905:29:35"
                      },
                      {
                        "expression": {
                          "id": 11725,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "delete",
                          "prefix": true,
                          "src": "4979:32:35",
                          "subExpression": {
                            "baseExpression": {
                              "id": 11721,
                              "name": "addressStaked",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11389,
                              "src": "4986:13:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 11724,
                            "indexExpression": {
                              "expression": {
                                "id": 11722,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "5000:3:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 11723,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5004:6:35",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "5000:10:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "4986:25:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 11726,
                        "nodeType": "ExpressionStatement",
                        "src": "4979:32:35"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 11728,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "5084:3:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 11729,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5088:6:35",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "5084:10:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "expression": {
                                "id": 11730,
                                "name": "block",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967292,
                                "src": "5096:5:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_block",
                                  "typeString": "block"
                                }
                              },
                              "id": 11731,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5102:9:35",
                              "memberName": "timestamp",
                              "nodeType": "MemberAccess",
                              "src": "5096:15:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 11732,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11700,
                              "src": "5113:6:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 11727,
                            "name": "UnStakedClaimed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11334,
                            "src": "5068:15:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256,uint256)"
                            }
                          },
                          "id": 11733,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5068:52:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 11734,
                        "nodeType": "EmitStatement",
                        "src": "5063:57:35"
                      },
                      {
                        "expression": {
                          "components": [
                            {
                              "hexValue": "74727565",
                              "id": 11735,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5141:4:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "true"
                            },
                            {
                              "expression": {
                                "id": 11736,
                                "name": "block",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967292,
                                "src": "5147:5:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_block",
                                  "typeString": "block"
                                }
                              },
                              "id": 11737,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5153:9:35",
                              "memberName": "timestamp",
                              "nodeType": "MemberAccess",
                              "src": "5147:15:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 11738,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "5140:23:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                            "typeString": "tuple(bool,uint256)"
                          }
                        },
                        "functionReturnParameters": 11677,
                        "id": 11739,
                        "nodeType": "Return",
                        "src": "5134:29:35"
                      }
                    ]
                  }
                }
              ]
            },
            "functionSelector": "7b9ba7fd",
            "id": 11762,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "unStakingClaime",
            "nameLocation": "4492:15:35",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11672,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4507:2:35"
            },
            "returnParameters": {
              "id": 11677,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11674,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11762,
                  "src": "4533:4:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11673,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4533:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11676,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11762,
                  "src": "4538:7:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11675,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4538:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4532:14:35"
            },
            "scope": 11887,
            "src": "4483:929:35",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11832,
              "nodeType": "Block",
              "src": "5486:669:35",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 11773,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "id": 11768,
                            "name": "addressStaked",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11389,
                            "src": "5504:13:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 11771,
                          "indexExpression": {
                            "expression": {
                              "id": 11769,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "5518:3:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 11770,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5522:6:35",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "5518:10:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "5504:25:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "74727565",
                          "id": 11772,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5533:4:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "5504:33:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "596f7520617265206e6f7420706172746963697061746564",
                        "id": 11774,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5539:26:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_14e119e374624bd5141fb3d3b6f1df053339f5b657ddfe13cf912bfd50e9b8af",
                          "typeString": "literal_string \"You are not participated\""
                        },
                        "value": "You are not participated"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_14e119e374624bd5141fb3d3b6f1df053339f5b657ddfe13cf912bfd50e9b8af",
                          "typeString": "literal_string \"You are not participated\""
                        }
                      ],
                      "id": 11767,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "5496:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 11775,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5496:70:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11776,
                  "nodeType": "ExpressionStatement",
                  "src": "5496:70:35"
                },
                {
                  "assignments": [
                    11778
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11778,
                      "mutability": "mutable",
                      "name": "stakingDuration",
                      "nameLocation": "5585:15:35",
                      "nodeType": "VariableDeclaration",
                      "scope": 11832,
                      "src": "5577:23:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11777,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5577:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11787,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 11786,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 11779,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967292,
                        "src": "5603:5:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 11780,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5609:9:35",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "5603:15:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "expression": {
                        "baseExpression": {
                          "id": 11781,
                          "name": "stakeInfos",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11385,
                          "src": "5621:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$11380_storage_$",
                            "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                          }
                        },
                        "id": 11784,
                        "indexExpression": {
                          "expression": {
                            "id": 11782,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "5632:3:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 11783,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5636:6:35",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "5632:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "5621:22:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StakeInfo_$11380_storage",
                          "typeString": "struct Staking.StakeInfo storage ref"
                        }
                      },
                      "id": 11785,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5644:11:35",
                      "memberName": "claimedTime",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11371,
                      "src": "5621:34:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5603:52:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5577:78:35"
                },
                {
                  "assignments": [
                    11789
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11789,
                      "mutability": "mutable",
                      "name": "persecondAmount",
                      "nameLocation": "5726:15:35",
                      "nodeType": "VariableDeclaration",
                      "scope": 11832,
                      "src": "5718:23:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11788,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5718:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11804,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 11803,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 11801,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 11798,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 11796,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "expression": {
                                  "baseExpression": {
                                    "id": 11790,
                                    "name": "stakeInfos",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 11385,
                                    "src": "5745:10:35",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$11380_storage_$",
                                      "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                                    }
                                  },
                                  "id": 11793,
                                  "indexExpression": {
                                    "expression": {
                                      "id": 11791,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4294967281,
                                      "src": "5756:3:35",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 11792,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "5760:6:35",
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "src": "5756:10:35",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "5745:22:35",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_StakeInfo_$11380_storage",
                                    "typeString": "struct Staking.StakeInfo storage ref"
                                  }
                                },
                                "id": 11794,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "5768:6:35",
                                "memberName": "amount",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 11375,
                                "src": "5745:29:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "id": 11795,
                                "name": "APR",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11350,
                                "src": "5777:3:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint32",
                                  "typeString": "uint32"
                                }
                              },
                              "src": "5745:35:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "hexValue": "313030",
                              "id": 11797,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5783:3:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_100_by_1",
                                "typeString": "int_const 100"
                              },
                              "value": "100"
                            },
                            "src": "5745:41:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 11799,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "5744:43:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 11800,
                        "name": "yearsDuration",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11353,
                        "src": "5790:13:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        }
                      },
                      "src": "5744:59:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "id": 11802,
                      "name": "dayDuration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11356,
                      "src": "5806:11:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "src": "5744:73:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5718:99:35"
                },
                {
                  "assignments": [
                    11806
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11806,
                      "mutability": "mutable",
                      "name": "claimableAmount",
                      "nameLocation": "5856:15:35",
                      "nodeType": "VariableDeclaration",
                      "scope": 11832,
                      "src": "5848:23:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11805,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5848:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11810,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 11809,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 11807,
                      "name": "persecondAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11789,
                      "src": "5874:15:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "id": 11808,
                      "name": "stakingDuration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11778,
                      "src": "5892:15:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5874:33:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5848:59:35"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 11814,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "5947:3:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 11815,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5951:6:35",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "5947:10:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 11818,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 11816,
                          "name": "claimableAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11806,
                          "src": "5959:15:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "hexValue": "3130",
                          "id": 11817,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5977:2:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10_by_1",
                            "typeString": "int_const 10"
                          },
                          "value": "10"
                        },
                        "src": "5959:20:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 11811,
                        "name": "jt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11367,
                        "src": "5935:2:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_JetToken_$6888",
                          "typeString": "contract JetToken"
                        }
                      },
                      "id": 11813,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5938:8:35",
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2025,
                      "src": "5935:11:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 11819,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5935:45:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 11820,
                  "nodeType": "ExpressionStatement",
                  "src": "5935:45:35"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 11821,
                      "name": "setStakeInfo",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11476,
                      "src": "6015:12:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 11822,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6015:14:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11823,
                  "nodeType": "ExpressionStatement",
                  "src": "6015:14:35"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 11825,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "6098:3:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 11826,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6102:6:35",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "6098:10:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 11827,
                        "name": "claimableAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11806,
                        "src": "6110:15:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 11824,
                      "name": "Claimed",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11340,
                      "src": "6090:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 11828,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6090:36:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11829,
                  "nodeType": "EmitStatement",
                  "src": "6085:41:35"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 11830,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "6144:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 11766,
                  "id": 11831,
                  "nodeType": "Return",
                  "src": "6137:11:35"
                }
              ]
            },
            "functionSelector": "b88a802f",
            "id": 11833,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "claimReward",
            "nameLocation": "5449:11:35",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11763,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5460:2:35"
            },
            "returnParameters": {
              "id": 11766,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11765,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11833,
                  "src": "5481:4:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11764,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5481:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5480:6:35"
            },
            "scope": 11887,
            "src": "5440:715:35",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 11885,
              "nodeType": "Block",
              "src": "6249:506:35",
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 11843,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "baseExpression": {
                        "id": 11838,
                        "name": "addressStaked",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11389,
                        "src": "6262:13:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 11841,
                      "indexExpression": {
                        "expression": {
                          "id": 11839,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "6276:3:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 11840,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6280:6:35",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "6276:10:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "6262:25:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "74727565",
                      "id": 11842,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6291:4:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "6262:33:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 11883,
                    "nodeType": "Block",
                    "src": "6716:33:35",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "30",
                          "id": 11881,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6737:1:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 11837,
                        "id": 11882,
                        "nodeType": "Return",
                        "src": "6730:8:35"
                      }
                    ]
                  },
                  "id": 11884,
                  "nodeType": "IfStatement",
                  "src": "6259:490:35",
                  "trueBody": {
                    "id": 11880,
                    "nodeType": "Block",
                    "src": "6296:416:35",
                    "statements": [
                      {
                        "assignments": [
                          11845
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 11845,
                            "mutability": "mutable",
                            "name": "stakingDuration",
                            "nameLocation": "6318:15:35",
                            "nodeType": "VariableDeclaration",
                            "scope": 11880,
                            "src": "6310:23:35",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 11844,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6310:7:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 11854,
                        "initialValue": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 11853,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 11846,
                              "name": "block",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967292,
                              "src": "6336:5:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_block",
                                "typeString": "block"
                              }
                            },
                            "id": 11847,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6342:9:35",
                            "memberName": "timestamp",
                            "nodeType": "MemberAccess",
                            "src": "6336:15:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "expression": {
                              "baseExpression": {
                                "id": 11848,
                                "name": "stakeInfos",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11385,
                                "src": "6354:10:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$11380_storage_$",
                                  "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                                }
                              },
                              "id": 11851,
                              "indexExpression": {
                                "expression": {
                                  "id": 11849,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967281,
                                  "src": "6365:3:35",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 11850,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "6369:6:35",
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "src": "6365:10:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "6354:22:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_StakeInfo_$11380_storage",
                                "typeString": "struct Staking.StakeInfo storage ref"
                              }
                            },
                            "id": 11852,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6377:11:35",
                            "memberName": "claimedTime",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 11371,
                            "src": "6354:34:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6336:52:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6310:78:35"
                      },
                      {
                        "assignments": [
                          11856
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 11856,
                            "mutability": "mutable",
                            "name": "persecondAmount",
                            "nameLocation": "6463:15:35",
                            "nodeType": "VariableDeclaration",
                            "scope": 11880,
                            "src": "6455:23:35",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 11855,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6455:7:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 11871,
                        "initialValue": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 11870,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 11868,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 11865,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 11863,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "expression": {
                                        "baseExpression": {
                                          "id": 11857,
                                          "name": "stakeInfos",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 11385,
                                          "src": "6482:10:35",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$11380_storage_$",
                                            "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                                          }
                                        },
                                        "id": 11860,
                                        "indexExpression": {
                                          "expression": {
                                            "id": 11858,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 4294967281,
                                            "src": "6493:3:35",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_magic_message",
                                              "typeString": "msg"
                                            }
                                          },
                                          "id": 11859,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "6497:6:35",
                                          "memberName": "sender",
                                          "nodeType": "MemberAccess",
                                          "src": "6493:10:35",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "6482:22:35",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_StakeInfo_$11380_storage",
                                          "typeString": "struct Staking.StakeInfo storage ref"
                                        }
                                      },
                                      "id": 11861,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "6505:6:35",
                                      "memberName": "amount",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 11375,
                                      "src": "6482:29:35",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "*",
                                    "rightExpression": {
                                      "id": 11862,
                                      "name": "APR",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 11350,
                                      "src": "6514:3:35",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint32",
                                        "typeString": "uint32"
                                      }
                                    },
                                    "src": "6482:35:35",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "hexValue": "313030",
                                    "id": 11864,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6520:3:35",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_100_by_1",
                                      "typeString": "int_const 100"
                                    },
                                    "value": "100"
                                  },
                                  "src": "6482:41:35",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "id": 11866,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "6481:43:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 11867,
                              "name": "yearsDuration",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11353,
                              "src": "6527:13:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint32",
                                "typeString": "uint32"
                              }
                            },
                            "src": "6481:59:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "id": 11869,
                            "name": "dayDuration",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11356,
                            "src": "6543:11:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint32",
                              "typeString": "uint32"
                            }
                          },
                          "src": "6481:73:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6455:99:35"
                      },
                      {
                        "assignments": [
                          11873
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 11873,
                            "mutability": "mutable",
                            "name": "claimableAmount",
                            "nameLocation": "6597:15:35",
                            "nodeType": "VariableDeclaration",
                            "scope": 11880,
                            "src": "6589:23:35",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 11872,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6589:7:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 11877,
                        "initialValue": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 11876,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 11874,
                            "name": "persecondAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11856,
                            "src": "6615:15:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 11875,
                            "name": "stakingDuration",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11845,
                            "src": "6633:15:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6615:33:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6589:59:35"
                      },
                      {
                        "expression": {
                          "id": 11878,
                          "name": "claimableAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11873,
                          "src": "6686:15:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 11837,
                        "id": 11879,
                        "nodeType": "Return",
                        "src": "6679:22:35"
                      }
                    ]
                  }
                }
              ]
            },
            "functionSelector": "e7181edc",
            "id": 11886,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "claimableReward",
            "nameLocation": "6202:15:35",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11834,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6217:2:35"
            },
            "returnParameters": {
              "id": 11837,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11836,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11886,
                  "src": "6240:7:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11835,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6240:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6239:9:35"
            },
            "scope": 11887,
            "src": "6193:562:35",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 11888,
        "src": "171:6586:35",
        "usedErrors": []
      }
    ],
    "src": "41:6716:35"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.17+commit.8df45f5f.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.4.10",
  "updatedAt": "2022-11-29T14:59:18.807Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}

module.exports = STAKING;