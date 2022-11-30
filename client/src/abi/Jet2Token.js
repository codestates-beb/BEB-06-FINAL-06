const J2TOKEN = {  
  "contractName": "Jet2Token",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address payable",
            "name": "treasury",
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
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
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
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [],
        "name": "TreasuryMoved",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "MAX_SUPPLY",
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
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
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
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "approve",
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
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "balanceOf",
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
        "name": "decimals",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "subtractedValue",
            "type": "uint256"
          }
        ],
        "name": "decreaseAllowance",
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
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "addedValue",
            "type": "uint256"
          }
        ],
        "name": "increaseAllowance",
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
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
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
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
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
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transfer",
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
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
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
        "name": "treasuryWallet",
        "outputs": [
          {
            "internalType": "address payable",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "contract LiquidityPool",
            "name": "_lp",
            "type": "address"
          }
        ],
        "name": "setLPAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "increaseContractAllowance",
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
        "name": "MoveToTreasuryWallet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.8.17+commit.8df45f5f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"treasury\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"TreasuryMoved\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"MAX_SUPPLY\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MoveToTreasuryWallet\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"increaseContractAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract LiquidityPool\",\"name\":\"_lp\",\"type\":\"address\"}],\"name\":\"setLPAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"treasuryWallet\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/Jet2Token.sol\":\"Jet2Token\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/security/Pausable.sol\":{\"keccak256\":\"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004\",\"dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B\"]},\"@openzeppelin/contracts/security/ReentrancyGuard.sol\":{\"keccak256\":\"0x190dd6f8d592b7e4e930feb7f4313aeb8e1c4ad3154c27ce1cf6a512fc30d8cc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ce8dfb62d0c4fa260d6eec8f1cd47f5f2a044e11bde5b31d18072fa6e7d9010\",\"dweb:/ipfs/QmTyFztU3tLEcEDnqqiaW4UJetqsU77LXc6pjc9oTXCK5u\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x4ffc0547c02ad22925310c585c0f166f8759e2648a09e9b489100c42f15dd98d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://15f52f51413a9de1ff191e2f6367c62178e1df7806d7880fe857a98b0b66253d\",\"dweb:/ipfs/QmaQG1fwfgUt5E9nu2cccFiV47B2V78MM1tCy1qB7n4MsH\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34\",\"dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xa4d1d62251f8574deb032a35fc948386a9b4de74b812d4f545a1ac120486b48a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8c969013129ba9e651a20735ef659fef6d8a1139ea3607bd4b26ddea2d645634\",\"dweb:/ipfs/QmVhVa6LGuzAcB8qgDtVHRkucn4ihj5UZr8xBLcJkP6ucb\"]},\"@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xa1e8e83cd0087785df04ac79fb395d9f3684caeaf973d9e2c71caef723a3a5d6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://33bbf48cc069be677705037ba7520c22b1b622c23b33e1a71495f2d36549d40b\",\"dweb:/ipfs/Qmct36zWXv3j7LZB83uwbg7TXwnZSN1fqHNDZ93GG98bGz\"]},\"@uniswap/lib/contracts/libraries/Babylonian.sol\":{\"keccak256\":\"0xe20fc48e3575b4a2932e5d2dd53b6742e1ca96f652bd41038cb89d7f5d49a096\",\"urls\":[\"bzz-raw://6ba298d8e592d39960eabc2328b7d4a01ad6cf8b06366adc3ef0133d3b196a9f\",\"dweb:/ipfs/QmQgrNaHssJ8XVsPUCMHpyYRFLbBqNrumaoFgXHWdDiTyy\"]},\"project:/contracts/Jet2Token.sol\":{\"keccak256\":\"0x096e3b882b8e7937da0aaceac97b46cb323b5ea4afd51964f3a7554987f3d6ad\",\"license\":\"GPL-3.0-only\",\"urls\":[\"bzz-raw://a89f62ba22d7889200ffc06372874fa91e99913745f7ed120065df6815c3b1ea\",\"dweb:/ipfs/Qmean2SEtji3m6gWPEUPy7K5NdPigCXYkAjvycymP9htti\"]},\"project:/contracts/JetToken.sol\":{\"keccak256\":\"0x4702e50cf8503cc1120618e2333c1cf842c842cbf53ca25fb7a9fbb4e8f051ce\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://80ee0620b1f13a524f85482182c7e714b8edbfea964af077097c4d9634a09cfc\",\"dweb:/ipfs/Qmb91iASuLSuqZTotGfFA3EQkbNnRQ6yCbqcPpABRtdmk6\"]},\"project:/contracts/LPT.sol\":{\"keccak256\":\"0xed736abaceb3ae48c617e3f658e9b025d5b61ef8df551970899895432b0ec7b6\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://ad6919c26ab33a0f95936b6de5c1267e1a4ce2d41ef609c72be2ea63e39cf275\",\"dweb:/ipfs/QmVMZpeSSxWUxc9SME2pgQ3xwazzvdjRYGxF7sfMWGspwn\"]},\"project:/contracts/LiquidityPool.sol\":{\"keccak256\":\"0xfd66d7c0944de79c5c033775f51c15e42e4b46f9cf57be7ef0e4696432143382\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://307600d2025ef8566b2389a199fb50ccafbcdb35813a1deda78c0edac7d31592\",\"dweb:/ipfs/QmbFZWqDo9nyam9m8ms9WXaEbRqnW9ZrhATkRzUHTJfS3T\"]}},\"version\":1}",
    "bytecode": "0x60806040523480156200001157600080fd5b5060405162002bd438038062002bd4833981810160405281019062000037919062000384565b6040518060400160405280600a81526020017f4a65743220546f6b656e000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f4a657432000000000000000000000000000000000000000000000000000000008152508160039081620000b4919062000630565b508060049081620000c6919062000630565b505050620000d96200019a60201b60201c565b600a620000e79190620008a7565b620927c0620000f79190620008f8565b6005819055506200011130600554620001a360201b60201c565b33600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000a2f565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000215576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200020c90620009a4565b60405180910390fd5b62000229600083836200031060201b60201c565b80600260008282546200023d9190620009c6565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620002f0919062000a12565b60405180910390a36200030c600083836200031560201b60201c565b5050565b505050565b505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200034c826200031f565b9050919050565b6200035e816200033f565b81146200036a57600080fd5b50565b6000815190506200037e8162000353565b92915050565b6000602082840312156200039d576200039c6200031a565b5b6000620003ad848285016200036d565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200043857607f821691505b6020821081036200044e576200044d620003f0565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004b87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000479565b620004c4868362000479565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620005116200050b6200050584620004dc565b620004e6565b620004dc565b9050919050565b6000819050919050565b6200052d83620004f0565b620005456200053c8262000518565b84845462000486565b825550505050565b600090565b6200055c6200054d565b6200056981848462000522565b505050565b5b8181101562000591576200058560008262000552565b6001810190506200056f565b5050565b601f821115620005e057620005aa8162000454565b620005b58462000469565b81016020851015620005c5578190505b620005dd620005d48562000469565b8301826200056e565b50505b505050565b600082821c905092915050565b60006200060560001984600802620005e5565b1980831691505092915050565b6000620006208383620005f2565b9150826002028217905092915050565b6200063b82620003b6565b67ffffffffffffffff811115620006575762000656620003c1565b5b6200066382546200041f565b6200067082828562000595565b600060209050601f831160018114620006a8576000841562000693578287015190505b6200069f858262000612565b8655506200070f565b601f198416620006b88662000454565b60005b82811015620006e257848901518255600182019150602085019450602081019050620006bb565b86831015620007025784890151620006fe601f891682620005f2565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b6001851115620007a5578086048111156200077d576200077c62000717565b5b60018516156200078d5780820291505b80810290506200079d8562000746565b94506200075d565b94509492505050565b600082620007c0576001905062000893565b81620007d0576000905062000893565b8160018114620007e95760028114620007f4576200082a565b600191505062000893565b60ff84111562000809576200080862000717565b5b8360020a91508482111562000823576200082262000717565b5b5062000893565b5060208310610133831016604e8410600b8410161715620008645782820a9050838111156200085e576200085d62000717565b5b62000893565b62000873848484600162000753565b925090508184048111156200088d576200088c62000717565b5b81810290505b9392505050565b600060ff82169050919050565b6000620008b482620004dc565b9150620008c1836200089a565b9250620008f07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620007ae565b905092915050565b60006200090582620004dc565b91506200091283620004dc565b92508282026200092281620004dc565b915082820484148315176200093c576200093b62000717565b5b5092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006200098c601f8362000943565b9150620009998262000954565b602082019050919050565b60006020820190508181036000830152620009bf816200097d565b9050919050565b6000620009d382620004dc565b9150620009e083620004dc565b9250828201905080821115620009fb57620009fa62000717565b5b92915050565b62000a0c81620004dc565b82525050565b600060208201905062000a29600083018462000a01565b92915050565b6121958062000a3f6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806370a08231116100ad578063a457c2d711610071578063a457c2d71461030c578063a9059cbb1461033c578063d83a2bf31461036c578063dd62ed3e1461039c578063f3748af9146103cc57610121565b806370a08231146102685780637a351a1d146102985780638da5cb5b146102b457806395d89b41146102d25780639dc29fac146102f057610121565b8063313ce567116100f4578063313ce567146101c257806332cb6b0c146101e057806339509351146101fe57806340c10f191461022e5780634626402b1461024a57610121565b806306fdde0314610126578063095ea7b31461014457806318160ddd1461017457806323b872dd14610192575b600080fd5b61012e6103d6565b60405161013b919061150d565b60405180910390f35b61015e600480360381019061015991906115c8565b610468565b60405161016b9190611623565b60405180910390f35b61017c61048b565b604051610189919061164d565b60405180910390f35b6101ac60048036038101906101a79190611668565b610495565b6040516101b99190611623565b60405180910390f35b6101ca6104c4565b6040516101d791906116d7565b60405180910390f35b6101e86104cd565b6040516101f5919061164d565b60405180910390f35b610218600480360381019061021391906115c8565b6104d3565b6040516102259190611623565b60405180910390f35b610248600480360381019061024391906115c8565b61050a565b005b61025261068c565b60405161025f9190611713565b60405180910390f35b610282600480360381019061027d919061172e565b6106b2565b60405161028f919061164d565b60405180910390f35b6102b260048036038101906102ad9190611799565b6106fa565b005b6102bc61085f565b6040516102c991906117d5565b60405180910390f35b6102da610885565b6040516102e7919061150d565b60405180910390f35b61030a600480360381019061030591906115c8565b610917565b005b610326600480360381019061032191906115c8565b6109d3565b6040516103339190611623565b60405180910390f35b610356600480360381019061035191906115c8565b610a4a565b6040516103639190611623565b60405180910390f35b61038660048036038101906103819190611668565b610a6d565b6040516103939190611623565b60405180910390f35b6103b660048036038101906103b191906117f0565b610a99565b6040516103c3919061164d565b60405180910390f35b6103d4610b20565b005b6060600380546103e59061185f565b80601f01602080910402602001604051908101604052809291908181526020018280546104119061185f565b801561045e5780601f106104335761010080835404028352916020019161045e565b820191906000526020600020905b81548152906001019060200180831161044157829003601f168201915b5050505050905090565b600080610473610c6d565b9050610480818585610c75565b600191505092915050565b6000600254905090565b6000806104a0610c6d565b90506104ad858285610e3e565b6104b8858585610eca565b60019150509392505050565b60006012905090565b60055481565b6000806104de610c6d565b90506104ff8185856104f08589610a99565b6104fa91906118bf565b610c75565b600191505092915050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461059a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105919061193f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610609576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610600906119ab565b60405180910390fd5b6005548161061561048b565b61061f91906118bf565b1115610660576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065790611a17565b60405180910390fd5b6106888261066c6104c4565b600a6106789190611b6a565b836106839190611bb5565b610eda565b5050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461078a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107819061193f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461081b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081290611c43565b60405180910390fd5b80600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600480546108949061185f565b80601f01602080910402602001604051908101604052809291908181526020018280546108c09061185f565b801561090d5780601f106108e25761010080835404028352916020019161090d565b820191906000526020600020905b8154815290600101906020018083116108f057829003601f168201915b5050505050905090565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146109a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099e9061193f565b60405180910390fd5b6109cf826109b36104c4565b600a6109bf9190611b6a565b836109ca9190611bb5565b611030565b5050565b6000806109de610c6d565b905060006109ec8286610a99565b905083811015610a31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2890611cd5565b60405180910390fd5b610a3e8286868403610c75565b60019250505092915050565b600080610a55610c6d565b9050610a62818585610eca565b600191505092915050565b6000610a8e848484610a7f3330610a99565b610a8991906118bf565b610c75565b600190509392505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610bb0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba79061193f565b60405180910390fd5b6000610bba6104c4565b600a610bc69190611b6a565b620186a0610bd49190611bb5565b9050610c0330600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836111fd565b6000610c0e306106b2565b9050610c3d30600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836111fd565b7fede40e57f47ee7d3737450b9e0e25fc56b11ce89ebac5d06dd834fe351418fa760405160405180910390a15050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610ce4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cdb90611d67565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d53576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4a90611df9565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610e31919061164d565b60405180910390a3505050565b6000610e4a8484610a99565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610ec45781811015610eb6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ead90611e65565b60405180910390fd5b610ec38484848403610c75565b5b50505050565b610ed58383836111fd565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f49576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f40906119ab565b60405180910390fd5b610f5560008383611473565b8060026000828254610f6791906118bf565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611018919061164d565b60405180910390a361102c60008383611478565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361109f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109690611ef7565b60405180910390fd5b6110ab82600083611473565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611131576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161112890611f89565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516111e4919061164d565b60405180910390a36111f883600084611478565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361126c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112639061201b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036112db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112d2906120ad565b60405180910390fd5b6112e6838383611473565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561136c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113639061213f565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161145a919061164d565b60405180910390a361146d848484611478565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156114b757808201518184015260208101905061149c565b60008484015250505050565b6000601f19601f8301169050919050565b60006114df8261147d565b6114e98185611488565b93506114f9818560208601611499565b611502816114c3565b840191505092915050565b6000602082019050818103600083015261152781846114d4565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061155f82611534565b9050919050565b61156f81611554565b811461157a57600080fd5b50565b60008135905061158c81611566565b92915050565b6000819050919050565b6115a581611592565b81146115b057600080fd5b50565b6000813590506115c28161159c565b92915050565b600080604083850312156115df576115de61152f565b5b60006115ed8582860161157d565b92505060206115fe858286016115b3565b9150509250929050565b60008115159050919050565b61161d81611608565b82525050565b60006020820190506116386000830184611614565b92915050565b61164781611592565b82525050565b6000602082019050611662600083018461163e565b92915050565b6000806000606084860312156116815761168061152f565b5b600061168f8682870161157d565b93505060206116a08682870161157d565b92505060406116b1868287016115b3565b9150509250925092565b600060ff82169050919050565b6116d1816116bb565b82525050565b60006020820190506116ec60008301846116c8565b92915050565b60006116fd82611534565b9050919050565b61170d816116f2565b82525050565b60006020820190506117286000830184611704565b92915050565b6000602082840312156117445761174361152f565b5b60006117528482850161157d565b91505092915050565b600061176682611554565b9050919050565b6117768161175b565b811461178157600080fd5b50565b6000813590506117938161176d565b92915050565b6000602082840312156117af576117ae61152f565b5b60006117bd84828501611784565b91505092915050565b6117cf81611554565b82525050565b60006020820190506117ea60008301846117c6565b92915050565b600080604083850312156118075761180661152f565b5b60006118158582860161157d565b92505060206118268582860161157d565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061187757607f821691505b60208210810361188a57611889611830565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006118ca82611592565b91506118d583611592565b92508282019050808211156118ed576118ec611890565b5b92915050565b7f4f574e45525f4f4e4c5900000000000000000000000000000000000000000000600082015250565b6000611929600a83611488565b9150611934826118f3565b602082019050919050565b600060208201905081810360008301526119588161191c565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611995601f83611488565b91506119a08261195f565b602082019050919050565b600060208201905081810360008301526119c481611988565b9050919050565b7f41424f56455f4d41585f535550504c5900000000000000000000000000000000600082015250565b6000611a01601083611488565b9150611a0c826119cb565b602082019050919050565b60006020820190508181036000830152611a30816119f4565b9050919050565b60008160011c9050919050565b6000808291508390505b6001851115611a8e57808604811115611a6a57611a69611890565b5b6001851615611a795780820291505b8081029050611a8785611a37565b9450611a4e565b94509492505050565b600082611aa75760019050611b63565b81611ab55760009050611b63565b8160018114611acb5760028114611ad557611b04565b6001915050611b63565b60ff841115611ae757611ae6611890565b5b8360020a915084821115611afe57611afd611890565b5b50611b63565b5060208310610133831016604e8410600b8410161715611b395782820a905083811115611b3457611b33611890565b5b611b63565b611b468484846001611a44565b92509050818404811115611b5d57611b5c611890565b5b81810290505b9392505050565b6000611b7582611592565b9150611b80836116bb565b9250611bad7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484611a97565b905092915050565b6000611bc082611592565b9150611bcb83611592565b9250828202611bd981611592565b91508282048414831517611bf057611bef611890565b5b5092915050565b7f57524954455f4f4e434500000000000000000000000000000000000000000000600082015250565b6000611c2d600a83611488565b9150611c3882611bf7565b602082019050919050565b60006020820190508181036000830152611c5c81611c20565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611cbf602583611488565b9150611cca82611c63565b604082019050919050565b60006020820190508181036000830152611cee81611cb2565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611d51602483611488565b9150611d5c82611cf5565b604082019050919050565b60006020820190508181036000830152611d8081611d44565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611de3602283611488565b9150611dee82611d87565b604082019050919050565b60006020820190508181036000830152611e1281611dd6565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611e4f601d83611488565b9150611e5a82611e19565b602082019050919050565b60006020820190508181036000830152611e7e81611e42565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ee1602183611488565b9150611eec82611e85565b604082019050919050565b60006020820190508181036000830152611f1081611ed4565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000611f73602283611488565b9150611f7e82611f17565b604082019050919050565b60006020820190508181036000830152611fa281611f66565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000612005602583611488565b915061201082611fa9565b604082019050919050565b6000602082019050818103600083015261203481611ff8565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000612097602383611488565b91506120a28261203b565b604082019050919050565b600060208201905081810360008301526120c68161208a565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000612129602683611488565b9150612134826120cd565b604082019050919050565b600060208201905081810360008301526121588161211c565b905091905056fea264697066735822122097f97442f73c78592cd3626e2e8dd728abd9fd0cc0b7d598812ff1a05e26f3ab64736f6c63430008110033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101215760003560e01c806370a08231116100ad578063a457c2d711610071578063a457c2d71461030c578063a9059cbb1461033c578063d83a2bf31461036c578063dd62ed3e1461039c578063f3748af9146103cc57610121565b806370a08231146102685780637a351a1d146102985780638da5cb5b146102b457806395d89b41146102d25780639dc29fac146102f057610121565b8063313ce567116100f4578063313ce567146101c257806332cb6b0c146101e057806339509351146101fe57806340c10f191461022e5780634626402b1461024a57610121565b806306fdde0314610126578063095ea7b31461014457806318160ddd1461017457806323b872dd14610192575b600080fd5b61012e6103d6565b60405161013b919061150d565b60405180910390f35b61015e600480360381019061015991906115c8565b610468565b60405161016b9190611623565b60405180910390f35b61017c61048b565b604051610189919061164d565b60405180910390f35b6101ac60048036038101906101a79190611668565b610495565b6040516101b99190611623565b60405180910390f35b6101ca6104c4565b6040516101d791906116d7565b60405180910390f35b6101e86104cd565b6040516101f5919061164d565b60405180910390f35b610218600480360381019061021391906115c8565b6104d3565b6040516102259190611623565b60405180910390f35b610248600480360381019061024391906115c8565b61050a565b005b61025261068c565b60405161025f9190611713565b60405180910390f35b610282600480360381019061027d919061172e565b6106b2565b60405161028f919061164d565b60405180910390f35b6102b260048036038101906102ad9190611799565b6106fa565b005b6102bc61085f565b6040516102c991906117d5565b60405180910390f35b6102da610885565b6040516102e7919061150d565b60405180910390f35b61030a600480360381019061030591906115c8565b610917565b005b610326600480360381019061032191906115c8565b6109d3565b6040516103339190611623565b60405180910390f35b610356600480360381019061035191906115c8565b610a4a565b6040516103639190611623565b60405180910390f35b61038660048036038101906103819190611668565b610a6d565b6040516103939190611623565b60405180910390f35b6103b660048036038101906103b191906117f0565b610a99565b6040516103c3919061164d565b60405180910390f35b6103d4610b20565b005b6060600380546103e59061185f565b80601f01602080910402602001604051908101604052809291908181526020018280546104119061185f565b801561045e5780601f106104335761010080835404028352916020019161045e565b820191906000526020600020905b81548152906001019060200180831161044157829003601f168201915b5050505050905090565b600080610473610c6d565b9050610480818585610c75565b600191505092915050565b6000600254905090565b6000806104a0610c6d565b90506104ad858285610e3e565b6104b8858585610eca565b60019150509392505050565b60006012905090565b60055481565b6000806104de610c6d565b90506104ff8185856104f08589610a99565b6104fa91906118bf565b610c75565b600191505092915050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461059a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105919061193f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610609576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610600906119ab565b60405180910390fd5b6005548161061561048b565b61061f91906118bf565b1115610660576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065790611a17565b60405180910390fd5b6106888261066c6104c4565b600a6106789190611b6a565b836106839190611bb5565b610eda565b5050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461078a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107819061193f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461081b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081290611c43565b60405180910390fd5b80600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600480546108949061185f565b80601f01602080910402602001604051908101604052809291908181526020018280546108c09061185f565b801561090d5780601f106108e25761010080835404028352916020019161090d565b820191906000526020600020905b8154815290600101906020018083116108f057829003601f168201915b5050505050905090565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146109a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099e9061193f565b60405180910390fd5b6109cf826109b36104c4565b600a6109bf9190611b6a565b836109ca9190611bb5565b611030565b5050565b6000806109de610c6d565b905060006109ec8286610a99565b905083811015610a31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2890611cd5565b60405180910390fd5b610a3e8286868403610c75565b60019250505092915050565b600080610a55610c6d565b9050610a62818585610eca565b600191505092915050565b6000610a8e848484610a7f3330610a99565b610a8991906118bf565b610c75565b600190509392505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610bb0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba79061193f565b60405180910390fd5b6000610bba6104c4565b600a610bc69190611b6a565b620186a0610bd49190611bb5565b9050610c0330600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836111fd565b6000610c0e306106b2565b9050610c3d30600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836111fd565b7fede40e57f47ee7d3737450b9e0e25fc56b11ce89ebac5d06dd834fe351418fa760405160405180910390a15050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610ce4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cdb90611d67565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d53576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4a90611df9565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610e31919061164d565b60405180910390a3505050565b6000610e4a8484610a99565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610ec45781811015610eb6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ead90611e65565b60405180910390fd5b610ec38484848403610c75565b5b50505050565b610ed58383836111fd565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f49576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f40906119ab565b60405180910390fd5b610f5560008383611473565b8060026000828254610f6791906118bf565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611018919061164d565b60405180910390a361102c60008383611478565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361109f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109690611ef7565b60405180910390fd5b6110ab82600083611473565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611131576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161112890611f89565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516111e4919061164d565b60405180910390a36111f883600084611478565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361126c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112639061201b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036112db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112d2906120ad565b60405180910390fd5b6112e6838383611473565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561136c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113639061213f565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161145a919061164d565b60405180910390a361146d848484611478565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156114b757808201518184015260208101905061149c565b60008484015250505050565b6000601f19601f8301169050919050565b60006114df8261147d565b6114e98185611488565b93506114f9818560208601611499565b611502816114c3565b840191505092915050565b6000602082019050818103600083015261152781846114d4565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061155f82611534565b9050919050565b61156f81611554565b811461157a57600080fd5b50565b60008135905061158c81611566565b92915050565b6000819050919050565b6115a581611592565b81146115b057600080fd5b50565b6000813590506115c28161159c565b92915050565b600080604083850312156115df576115de61152f565b5b60006115ed8582860161157d565b92505060206115fe858286016115b3565b9150509250929050565b60008115159050919050565b61161d81611608565b82525050565b60006020820190506116386000830184611614565b92915050565b61164781611592565b82525050565b6000602082019050611662600083018461163e565b92915050565b6000806000606084860312156116815761168061152f565b5b600061168f8682870161157d565b93505060206116a08682870161157d565b92505060406116b1868287016115b3565b9150509250925092565b600060ff82169050919050565b6116d1816116bb565b82525050565b60006020820190506116ec60008301846116c8565b92915050565b60006116fd82611534565b9050919050565b61170d816116f2565b82525050565b60006020820190506117286000830184611704565b92915050565b6000602082840312156117445761174361152f565b5b60006117528482850161157d565b91505092915050565b600061176682611554565b9050919050565b6117768161175b565b811461178157600080fd5b50565b6000813590506117938161176d565b92915050565b6000602082840312156117af576117ae61152f565b5b60006117bd84828501611784565b91505092915050565b6117cf81611554565b82525050565b60006020820190506117ea60008301846117c6565b92915050565b600080604083850312156118075761180661152f565b5b60006118158582860161157d565b92505060206118268582860161157d565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061187757607f821691505b60208210810361188a57611889611830565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006118ca82611592565b91506118d583611592565b92508282019050808211156118ed576118ec611890565b5b92915050565b7f4f574e45525f4f4e4c5900000000000000000000000000000000000000000000600082015250565b6000611929600a83611488565b9150611934826118f3565b602082019050919050565b600060208201905081810360008301526119588161191c565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611995601f83611488565b91506119a08261195f565b602082019050919050565b600060208201905081810360008301526119c481611988565b9050919050565b7f41424f56455f4d41585f535550504c5900000000000000000000000000000000600082015250565b6000611a01601083611488565b9150611a0c826119cb565b602082019050919050565b60006020820190508181036000830152611a30816119f4565b9050919050565b60008160011c9050919050565b6000808291508390505b6001851115611a8e57808604811115611a6a57611a69611890565b5b6001851615611a795780820291505b8081029050611a8785611a37565b9450611a4e565b94509492505050565b600082611aa75760019050611b63565b81611ab55760009050611b63565b8160018114611acb5760028114611ad557611b04565b6001915050611b63565b60ff841115611ae757611ae6611890565b5b8360020a915084821115611afe57611afd611890565b5b50611b63565b5060208310610133831016604e8410600b8410161715611b395782820a905083811115611b3457611b33611890565b5b611b63565b611b468484846001611a44565b92509050818404811115611b5d57611b5c611890565b5b81810290505b9392505050565b6000611b7582611592565b9150611b80836116bb565b9250611bad7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484611a97565b905092915050565b6000611bc082611592565b9150611bcb83611592565b9250828202611bd981611592565b91508282048414831517611bf057611bef611890565b5b5092915050565b7f57524954455f4f4e434500000000000000000000000000000000000000000000600082015250565b6000611c2d600a83611488565b9150611c3882611bf7565b602082019050919050565b60006020820190508181036000830152611c5c81611c20565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611cbf602583611488565b9150611cca82611c63565b604082019050919050565b60006020820190508181036000830152611cee81611cb2565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611d51602483611488565b9150611d5c82611cf5565b604082019050919050565b60006020820190508181036000830152611d8081611d44565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611de3602283611488565b9150611dee82611d87565b604082019050919050565b60006020820190508181036000830152611e1281611dd6565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611e4f601d83611488565b9150611e5a82611e19565b602082019050919050565b60006020820190508181036000830152611e7e81611e42565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ee1602183611488565b9150611eec82611e85565b604082019050919050565b60006020820190508181036000830152611f1081611ed4565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000611f73602283611488565b9150611f7e82611f17565b604082019050919050565b60006020820190508181036000830152611fa281611f66565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000612005602583611488565b915061201082611fa9565b604082019050919050565b6000602082019050818103600083015261203481611ff8565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000612097602383611488565b91506120a28261203b565b604082019050919050565b600060208201905081810360008301526120c68161208a565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000612129602683611488565b9150612134826120cd565b604082019050919050565b600060208201905081810360008301526121588161211c565b905091905056fea264697066735822122097f97442f73c78592cd3626e2e8dd728abd9fd0cc0b7d598812ff1a05e26f3ab64736f6c63430008110033",
    "immutableReferences": {},
    "generatedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:11212:37",
          "statements": [
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "47:35:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "57:19:37",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "73:2:37",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "67:5:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "67:9:37"
                    },
                    "variableNames": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "57:6:37"
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
                  "src": "40:6:37",
                  "type": ""
                }
              ],
              "src": "7:75:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "177:28:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "194:1:37",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "197:1:37",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "187:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "187:12:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "187:12:37"
                  }
                ]
              },
              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
              "nodeType": "YulFunctionDefinition",
              "src": "88:117:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "300:28:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "317:1:37",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "320:1:37",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "310:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "310:12:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "310:12:37"
                  }
                ]
              },
              "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
              "nodeType": "YulFunctionDefinition",
              "src": "211:117:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "379:81:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "389:65:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "404:5:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "411:42:37",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "400:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "400:54:37"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "389:7:37"
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
                  "src": "361:5:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "371:7:37",
                  "type": ""
                }
              ],
              "src": "334:126:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "519:51:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "529:35:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "558:5:37"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint160",
                        "nodeType": "YulIdentifier",
                        "src": "540:17:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "540:24:37"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "529:7:37"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_address_payable",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "501:5:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "511:7:37",
                  "type": ""
                }
              ],
              "src": "466:104:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "627:87:37",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "692:16:37",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "701:1:37",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "704:1:37",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "694:6:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "694:12:37"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "694:12:37"
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
                              "src": "650:5:37"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "683:5:37"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_address_payable",
                                "nodeType": "YulIdentifier",
                                "src": "657:25:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "657:32:37"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "647:2:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "647:43:37"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "640:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "640:51:37"
                    },
                    "nodeType": "YulIf",
                    "src": "637:71:37"
                  }
                ]
              },
              "name": "validator_revert_t_address_payable",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "620:5:37",
                  "type": ""
                }
              ],
              "src": "576:138:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "791:88:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "801:22:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "816:6:37"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "810:5:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "810:13:37"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "801:5:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "867:5:37"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_address_payable",
                        "nodeType": "YulIdentifier",
                        "src": "832:34:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "832:41:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "832:41:37"
                  }
                ]
              },
              "name": "abi_decode_t_address_payable_fromMemory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "769:6:37",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "777:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "785:5:37",
                  "type": ""
                }
              ],
              "src": "720:159:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "970:282:37",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1016:83:37",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "1018:77:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1018:79:37"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1018:79:37"
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
                              "src": "991:7:37"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1000:9:37"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "987:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "987:23:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1012:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "983:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "983:32:37"
                    },
                    "nodeType": "YulIf",
                    "src": "980:119:37"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "1109:136:37",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1124:15:37",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1138:1:37",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "1128:6:37",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1153:82:37",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1207:9:37"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "1218:6:37"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1203:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1203:22:37"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1227:7:37"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address_payable_fromMemory",
                            "nodeType": "YulIdentifier",
                            "src": "1163:39:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1163:72:37"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1153:6:37"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_address_payable_fromMemory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "940:9:37",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "951:7:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "963:6:37",
                  "type": ""
                }
              ],
              "src": "885:367:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1317:40:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1328:22:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "1344:5:37"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "1338:5:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1338:12:37"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1328:6:37"
                      }
                    ]
                  }
                ]
              },
              "name": "array_length_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1300:5:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "1310:6:37",
                  "type": ""
                }
              ],
              "src": "1258:99:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1391:152:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1408:1:37",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1411:77:37",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1401:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1401:88:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1401:88:37"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1505:1:37",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1508:4:37",
                          "type": "",
                          "value": "0x41"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1498:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1498:15:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1498:15:37"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1529:1:37",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1532:4:37",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "1522:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1522:15:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1522:15:37"
                  }
                ]
              },
              "name": "panic_error_0x41",
              "nodeType": "YulFunctionDefinition",
              "src": "1363:180:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1577:152:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1594:1:37",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1597:77:37",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1587:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1587:88:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1587:88:37"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1691:1:37",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1694:4:37",
                          "type": "",
                          "value": "0x22"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1684:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1684:15:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1684:15:37"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1715:1:37",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1718:4:37",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "1708:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1708:15:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1708:15:37"
                  }
                ]
              },
              "name": "panic_error_0x22",
              "nodeType": "YulFunctionDefinition",
              "src": "1549:180:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1786:269:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1796:22:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "1810:4:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1816:1:37",
                          "type": "",
                          "value": "2"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "1806:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1806:12:37"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1796:6:37"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1827:38:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "1857:4:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1863:1:37",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "1853:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1853:12:37"
                    },
                    "variables": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulTypedName",
                        "src": "1831:18:37",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1904:51:37",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "1918:27:37",
                          "value": {
                            "arguments": [
                              {
                                "name": "length",
                                "nodeType": "YulIdentifier",
                                "src": "1932:6:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1940:4:37",
                                "type": "",
                                "value": "0x7f"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "1928:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1928:17:37"
                          },
                          "variableNames": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "1918:6:37"
                            }
                          ]
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "1884:18:37"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "1877:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1877:26:37"
                    },
                    "nodeType": "YulIf",
                    "src": "1874:81:37"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2007:42:37",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x22",
                              "nodeType": "YulIdentifier",
                              "src": "2021:16:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2021:18:37"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2021:18:37"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "1971:18:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "1994:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2002:2:37",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "1991:2:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1991:14:37"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "1968:2:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1968:38:37"
                    },
                    "nodeType": "YulIf",
                    "src": "1965:84:37"
                  }
                ]
              },
              "name": "extract_byte_array_length",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "1770:4:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "1779:6:37",
                  "type": ""
                }
              ],
              "src": "1735:320:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2115:87:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2125:11:37",
                    "value": {
                      "name": "ptr",
                      "nodeType": "YulIdentifier",
                      "src": "2133:3:37"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "2125:4:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2153:1:37",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "name": "ptr",
                          "nodeType": "YulIdentifier",
                          "src": "2156:3:37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2146:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2146:14:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2146:14:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2169:26:37",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2187:1:37",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2190:4:37",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "keccak256",
                        "nodeType": "YulIdentifier",
                        "src": "2177:9:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2177:18:37"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "2169:4:37"
                      }
                    ]
                  }
                ]
              },
              "name": "array_dataslot_t_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "ptr",
                  "nodeType": "YulTypedName",
                  "src": "2102:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "2110:4:37",
                  "type": ""
                }
              ],
              "src": "2061:141:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2252:49:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2262:33:37",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "2280:5:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2287:2:37",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2276:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2276:14:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2292:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "2272:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2272:23:37"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "2262:6:37"
                      }
                    ]
                  }
                ]
              },
              "name": "divide_by_32_ceil",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2235:5:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "2245:6:37",
                  "type": ""
                }
              ],
              "src": "2208:93:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2360:54:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2370:37:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "bits",
                          "nodeType": "YulIdentifier",
                          "src": "2395:4:37"
                        },
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2401:5:37"
                        }
                      ],
                      "functionName": {
                        "name": "shl",
                        "nodeType": "YulIdentifier",
                        "src": "2391:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2391:16:37"
                    },
                    "variableNames": [
                      {
                        "name": "newValue",
                        "nodeType": "YulIdentifier",
                        "src": "2370:8:37"
                      }
                    ]
                  }
                ]
              },
              "name": "shift_left_dynamic",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "bits",
                  "nodeType": "YulTypedName",
                  "src": "2335:4:37",
                  "type": ""
                },
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2341:5:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "newValue",
                  "nodeType": "YulTypedName",
                  "src": "2351:8:37",
                  "type": ""
                }
              ],
              "src": "2307:107:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2496:317:37",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2506:35:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "shiftBytes",
                          "nodeType": "YulIdentifier",
                          "src": "2527:10:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2539:1:37",
                          "type": "",
                          "value": "8"
                        }
                      ],
                      "functionName": {
                        "name": "mul",
                        "nodeType": "YulIdentifier",
                        "src": "2523:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2523:18:37"
                    },
                    "variables": [
                      {
                        "name": "shiftBits",
                        "nodeType": "YulTypedName",
                        "src": "2510:9:37",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2550:109:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "shiftBits",
                          "nodeType": "YulIdentifier",
                          "src": "2581:9:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2592:66:37",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "shift_left_dynamic",
                        "nodeType": "YulIdentifier",
                        "src": "2562:18:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2562:97:37"
                    },
                    "variables": [
                      {
                        "name": "mask",
                        "nodeType": "YulTypedName",
                        "src": "2554:4:37",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2668:51:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "shiftBits",
                          "nodeType": "YulIdentifier",
                          "src": "2699:9:37"
                        },
                        {
                          "name": "toInsert",
                          "nodeType": "YulIdentifier",
                          "src": "2710:8:37"
                        }
                      ],
                      "functionName": {
                        "name": "shift_left_dynamic",
                        "nodeType": "YulIdentifier",
                        "src": "2680:18:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2680:39:37"
                    },
                    "variableNames": [
                      {
                        "name": "toInsert",
                        "nodeType": "YulIdentifier",
                        "src": "2668:8:37"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2728:30:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2741:5:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "mask",
                              "nodeType": "YulIdentifier",
                              "src": "2752:4:37"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "2748:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2748:9:37"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "2737:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2737:21:37"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2728:5:37"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2767:40:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2780:5:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "toInsert",
                              "nodeType": "YulIdentifier",
                              "src": "2791:8:37"
                            },
                            {
                              "name": "mask",
                              "nodeType": "YulIdentifier",
                              "src": "2801:4:37"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "2787:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2787:19:37"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "2777:2:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2777:30:37"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "2767:6:37"
                      }
                    ]
                  }
                ]
              },
              "name": "update_byte_slice_dynamic32",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2457:5:37",
                  "type": ""
                },
                {
                  "name": "shiftBytes",
                  "nodeType": "YulTypedName",
                  "src": "2464:10:37",
                  "type": ""
                },
                {
                  "name": "toInsert",
                  "nodeType": "YulTypedName",
                  "src": "2476:8:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "2489:6:37",
                  "type": ""
                }
              ],
              "src": "2420:393:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2864:32:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2874:16:37",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "2885:5:37"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "2874:7:37"
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
                  "src": "2846:5:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "2856:7:37",
                  "type": ""
                }
              ],
              "src": "2819:77:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2934:28:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2944:12:37",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "2951:5:37"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "2944:3:37"
                      }
                    ]
                  }
                ]
              },
              "name": "identity",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2920:5:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "2930:3:37",
                  "type": ""
                }
              ],
              "src": "2902:60:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3028:82:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3038:66:37",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "3096:5:37"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "3078:17:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3078:24:37"
                            }
                          ],
                          "functionName": {
                            "name": "identity",
                            "nodeType": "YulIdentifier",
                            "src": "3069:8:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3069:34:37"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "3051:17:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3051:53:37"
                    },
                    "variableNames": [
                      {
                        "name": "converted",
                        "nodeType": "YulIdentifier",
                        "src": "3038:9:37"
                      }
                    ]
                  }
                ]
              },
              "name": "convert_t_uint256_to_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3008:5:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "converted",
                  "nodeType": "YulTypedName",
                  "src": "3018:9:37",
                  "type": ""
                }
              ],
              "src": "2968:142:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3163:28:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3173:12:37",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "3180:5:37"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "3173:3:37"
                      }
                    ]
                  }
                ]
              },
              "name": "prepare_store_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3149:5:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "3159:3:37",
                  "type": ""
                }
              ],
              "src": "3116:75:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3273:193:37",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3283:63:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "value_0",
                          "nodeType": "YulIdentifier",
                          "src": "3338:7:37"
                        }
                      ],
                      "functionName": {
                        "name": "convert_t_uint256_to_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "3307:30:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3307:39:37"
                    },
                    "variables": [
                      {
                        "name": "convertedValue_0",
                        "nodeType": "YulTypedName",
                        "src": "3287:16:37",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "3362:4:37"
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "3402:4:37"
                                }
                              ],
                              "functionName": {
                                "name": "sload",
                                "nodeType": "YulIdentifier",
                                "src": "3396:5:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3396:11:37"
                            },
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "3409:6:37"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "convertedValue_0",
                                  "nodeType": "YulIdentifier",
                                  "src": "3441:16:37"
                                }
                              ],
                              "functionName": {
                                "name": "prepare_store_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "3417:23:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3417:41:37"
                            }
                          ],
                          "functionName": {
                            "name": "update_byte_slice_dynamic32",
                            "nodeType": "YulIdentifier",
                            "src": "3368:27:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3368:91:37"
                        }
                      ],
                      "functionName": {
                        "name": "sstore",
                        "nodeType": "YulIdentifier",
                        "src": "3355:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3355:105:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3355:105:37"
                  }
                ]
              },
              "name": "update_storage_value_t_uint256_to_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "3250:4:37",
                  "type": ""
                },
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "3256:6:37",
                  "type": ""
                },
                {
                  "name": "value_0",
                  "nodeType": "YulTypedName",
                  "src": "3264:7:37",
                  "type": ""
                }
              ],
              "src": "3197:269:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3521:24:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3531:8:37",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "3538:1:37",
                      "type": "",
                      "value": "0"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "3531:3:37"
                      }
                    ]
                  }
                ]
              },
              "name": "zero_value_for_split_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "3517:3:37",
                  "type": ""
                }
              ],
              "src": "3472:73:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3604:136:37",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3614:46:37",
                    "value": {
                      "arguments": [],
                      "functionName": {
                        "name": "zero_value_for_split_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "3628:30:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3628:32:37"
                    },
                    "variables": [
                      {
                        "name": "zero_0",
                        "nodeType": "YulTypedName",
                        "src": "3618:6:37",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "3713:4:37"
                        },
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "3719:6:37"
                        },
                        {
                          "name": "zero_0",
                          "nodeType": "YulIdentifier",
                          "src": "3727:6:37"
                        }
                      ],
                      "functionName": {
                        "name": "update_storage_value_t_uint256_to_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "3669:43:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3669:65:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3669:65:37"
                  }
                ]
              },
              "name": "storage_set_to_zero_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "3590:4:37",
                  "type": ""
                },
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "3596:6:37",
                  "type": ""
                }
              ],
              "src": "3551:189:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3796:136:37",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3863:63:37",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "name": "start",
                                "nodeType": "YulIdentifier",
                                "src": "3907:5:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3914:1:37",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "storage_set_to_zero_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "3877:29:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3877:39:37"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3877:39:37"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "start",
                          "nodeType": "YulIdentifier",
                          "src": "3816:5:37"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "3823:3:37"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "3813:2:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3813:14:37"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "3828:26:37",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "3830:22:37",
                          "value": {
                            "arguments": [
                              {
                                "name": "start",
                                "nodeType": "YulIdentifier",
                                "src": "3843:5:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3850:1:37",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3839:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3839:13:37"
                          },
                          "variableNames": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "3830:5:37"
                            }
                          ]
                        }
                      ]
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "3810:2:37",
                      "statements": []
                    },
                    "src": "3806:120:37"
                  }
                ]
              },
              "name": "clear_storage_range_t_bytes1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "start",
                  "nodeType": "YulTypedName",
                  "src": "3784:5:37",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "3791:3:37",
                  "type": ""
                }
              ],
              "src": "3746:186:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4017:464:37",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4043:431:37",
                      "statements": [
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "4057:54:37",
                          "value": {
                            "arguments": [
                              {
                                "name": "array",
                                "nodeType": "YulIdentifier",
                                "src": "4105:5:37"
                              }
                            ],
                            "functionName": {
                              "name": "array_dataslot_t_string_storage",
                              "nodeType": "YulIdentifier",
                              "src": "4073:31:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4073:38:37"
                          },
                          "variables": [
                            {
                              "name": "dataArea",
                              "nodeType": "YulTypedName",
                              "src": "4061:8:37",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "4124:63:37",
                          "value": {
                            "arguments": [
                              {
                                "name": "dataArea",
                                "nodeType": "YulIdentifier",
                                "src": "4147:8:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "startIndex",
                                    "nodeType": "YulIdentifier",
                                    "src": "4175:10:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "divide_by_32_ceil",
                                  "nodeType": "YulIdentifier",
                                  "src": "4157:17:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4157:29:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4143:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4143:44:37"
                          },
                          "variables": [
                            {
                              "name": "deleteStart",
                              "nodeType": "YulTypedName",
                              "src": "4128:11:37",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "4344:27:37",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "4346:23:37",
                                "value": {
                                  "name": "dataArea",
                                  "nodeType": "YulIdentifier",
                                  "src": "4361:8:37"
                                },
                                "variableNames": [
                                  {
                                    "name": "deleteStart",
                                    "nodeType": "YulIdentifier",
                                    "src": "4346:11:37"
                                  }
                                ]
                              }
                            ]
                          },
                          "condition": {
                            "arguments": [
                              {
                                "name": "startIndex",
                                "nodeType": "YulIdentifier",
                                "src": "4328:10:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4340:2:37",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nodeType": "YulIdentifier",
                              "src": "4325:2:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4325:18:37"
                          },
                          "nodeType": "YulIf",
                          "src": "4322:49:37"
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "name": "deleteStart",
                                "nodeType": "YulIdentifier",
                                "src": "4413:11:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "dataArea",
                                    "nodeType": "YulIdentifier",
                                    "src": "4430:8:37"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "len",
                                        "nodeType": "YulIdentifier",
                                        "src": "4458:3:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "divide_by_32_ceil",
                                      "nodeType": "YulIdentifier",
                                      "src": "4440:17:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4440:22:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "4426:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4426:37:37"
                              }
                            ],
                            "functionName": {
                              "name": "clear_storage_range_t_bytes1",
                              "nodeType": "YulIdentifier",
                              "src": "4384:28:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4384:80:37"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4384:80:37"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "len",
                          "nodeType": "YulIdentifier",
                          "src": "4034:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4039:2:37",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "4031:2:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4031:11:37"
                    },
                    "nodeType": "YulIf",
                    "src": "4028:446:37"
                  }
                ]
              },
              "name": "clean_up_bytearray_end_slots_t_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "3993:5:37",
                  "type": ""
                },
                {
                  "name": "len",
                  "nodeType": "YulTypedName",
                  "src": "4000:3:37",
                  "type": ""
                },
                {
                  "name": "startIndex",
                  "nodeType": "YulTypedName",
                  "src": "4005:10:37",
                  "type": ""
                }
              ],
              "src": "3938:543:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4550:54:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4560:37:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "bits",
                          "nodeType": "YulIdentifier",
                          "src": "4585:4:37"
                        },
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "4591:5:37"
                        }
                      ],
                      "functionName": {
                        "name": "shr",
                        "nodeType": "YulIdentifier",
                        "src": "4581:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4581:16:37"
                    },
                    "variableNames": [
                      {
                        "name": "newValue",
                        "nodeType": "YulIdentifier",
                        "src": "4560:8:37"
                      }
                    ]
                  }
                ]
              },
              "name": "shift_right_unsigned_dynamic",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "bits",
                  "nodeType": "YulTypedName",
                  "src": "4525:4:37",
                  "type": ""
                },
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "4531:5:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "newValue",
                  "nodeType": "YulTypedName",
                  "src": "4541:8:37",
                  "type": ""
                }
              ],
              "src": "4487:117:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4661:118:37",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "4671:68:37",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4720:1:37",
                                  "type": "",
                                  "value": "8"
                                },
                                {
                                  "name": "bytes",
                                  "nodeType": "YulIdentifier",
                                  "src": "4723:5:37"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "4716:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4716:13:37"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4735:1:37",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nodeType": "YulIdentifier",
                                "src": "4731:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4731:6:37"
                            }
                          ],
                          "functionName": {
                            "name": "shift_right_unsigned_dynamic",
                            "nodeType": "YulIdentifier",
                            "src": "4687:28:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4687:51:37"
                        }
                      ],
                      "functionName": {
                        "name": "not",
                        "nodeType": "YulIdentifier",
                        "src": "4683:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4683:56:37"
                    },
                    "variables": [
                      {
                        "name": "mask",
                        "nodeType": "YulTypedName",
                        "src": "4675:4:37",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4748:25:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "4762:4:37"
                        },
                        {
                          "name": "mask",
                          "nodeType": "YulIdentifier",
                          "src": "4768:4:37"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "4758:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4758:15:37"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "4748:6:37"
                      }
                    ]
                  }
                ]
              },
              "name": "mask_bytes_dynamic",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "4638:4:37",
                  "type": ""
                },
                {
                  "name": "bytes",
                  "nodeType": "YulTypedName",
                  "src": "4644:5:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "4654:6:37",
                  "type": ""
                }
              ],
              "src": "4610:169:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4865:214:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4998:37:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "5025:4:37"
                        },
                        {
                          "name": "len",
                          "nodeType": "YulIdentifier",
                          "src": "5031:3:37"
                        }
                      ],
                      "functionName": {
                        "name": "mask_bytes_dynamic",
                        "nodeType": "YulIdentifier",
                        "src": "5006:18:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5006:29:37"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "4998:4:37"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "5044:29:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "5055:4:37"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5065:1:37",
                              "type": "",
                              "value": "2"
                            },
                            {
                              "name": "len",
                              "nodeType": "YulIdentifier",
                              "src": "5068:3:37"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nodeType": "YulIdentifier",
                            "src": "5061:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5061:11:37"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "5052:2:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5052:21:37"
                    },
                    "variableNames": [
                      {
                        "name": "used",
                        "nodeType": "YulIdentifier",
                        "src": "5044:4:37"
                      }
                    ]
                  }
                ]
              },
              "name": "extract_used_part_and_set_length_of_short_byte_array",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "4846:4:37",
                  "type": ""
                },
                {
                  "name": "len",
                  "nodeType": "YulTypedName",
                  "src": "4852:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "used",
                  "nodeType": "YulTypedName",
                  "src": "4860:4:37",
                  "type": ""
                }
              ],
              "src": "4784:295:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5176:1303:37",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "5187:51:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "src",
                          "nodeType": "YulIdentifier",
                          "src": "5234:3:37"
                        }
                      ],
                      "functionName": {
                        "name": "array_length_t_string_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "5201:32:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5201:37:37"
                    },
                    "variables": [
                      {
                        "name": "newLen",
                        "nodeType": "YulTypedName",
                        "src": "5191:6:37",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "5323:22:37",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "5325:16:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5325:18:37"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "5325:18:37"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "5295:6:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5303:18:37",
                          "type": "",
                          "value": "0xffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "5292:2:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5292:30:37"
                    },
                    "nodeType": "YulIf",
                    "src": "5289:56:37"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "5355:52:37",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "slot",
                              "nodeType": "YulIdentifier",
                              "src": "5401:4:37"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nodeType": "YulIdentifier",
                            "src": "5395:5:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5395:11:37"
                        }
                      ],
                      "functionName": {
                        "name": "extract_byte_array_length",
                        "nodeType": "YulIdentifier",
                        "src": "5369:25:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5369:38:37"
                    },
                    "variables": [
                      {
                        "name": "oldLen",
                        "nodeType": "YulTypedName",
                        "src": "5359:6:37",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "5500:4:37"
                        },
                        {
                          "name": "oldLen",
                          "nodeType": "YulIdentifier",
                          "src": "5506:6:37"
                        },
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "5514:6:37"
                        }
                      ],
                      "functionName": {
                        "name": "clean_up_bytearray_end_slots_t_string_storage",
                        "nodeType": "YulIdentifier",
                        "src": "5454:45:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5454:67:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5454:67:37"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "5531:18:37",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "5548:1:37",
                      "type": "",
                      "value": "0"
                    },
                    "variables": [
                      {
                        "name": "srcOffset",
                        "nodeType": "YulTypedName",
                        "src": "5535:9:37",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "5559:17:37",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "5572:4:37",
                      "type": "",
                      "value": "0x20"
                    },
                    "variableNames": [
                      {
                        "name": "srcOffset",
                        "nodeType": "YulIdentifier",
                        "src": "5559:9:37"
                      }
                    ]
                  },
                  {
                    "cases": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "5623:611:37",
                          "statements": [
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "5637:37:37",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "newLen",
                                    "nodeType": "YulIdentifier",
                                    "src": "5656:6:37"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "5668:4:37",
                                        "type": "",
                                        "value": "0x1f"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "not",
                                      "nodeType": "YulIdentifier",
                                      "src": "5664:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "5664:9:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "5652:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5652:22:37"
                              },
                              "variables": [
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulTypedName",
                                  "src": "5641:7:37",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "5688:51:37",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "5734:4:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "array_dataslot_t_string_storage",
                                  "nodeType": "YulIdentifier",
                                  "src": "5702:31:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5702:37:37"
                              },
                              "variables": [
                                {
                                  "name": "dstPtr",
                                  "nodeType": "YulTypedName",
                                  "src": "5692:6:37",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "5752:10:37",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5761:1:37",
                                "type": "",
                                "value": "0"
                              },
                              "variables": [
                                {
                                  "name": "i",
                                  "nodeType": "YulTypedName",
                                  "src": "5756:1:37",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "5820:163:37",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "5845:6:37"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "arguments": [
                                                {
                                                  "name": "src",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "5863:3:37"
                                                },
                                                {
                                                  "name": "srcOffset",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "5868:9:37"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "5859:3:37"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "5859:19:37"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mload",
                                            "nodeType": "YulIdentifier",
                                            "src": "5853:5:37"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "5853:26:37"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "5838:6:37"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "5838:42:37"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "5838:42:37"
                                  },
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "5897:24:37",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "5911:6:37"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "5919:1:37",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "5907:3:37"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "5907:14:37"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "5897:6:37"
                                      }
                                    ]
                                  },
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "5938:31:37",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "srcOffset",
                                          "nodeType": "YulIdentifier",
                                          "src": "5955:9:37"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "5966:2:37",
                                          "type": "",
                                          "value": "32"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "5951:3:37"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "5951:18:37"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "srcOffset",
                                        "nodeType": "YulIdentifier",
                                        "src": "5938:9:37"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "5786:1:37"
                                  },
                                  {
                                    "name": "loopEnd",
                                    "nodeType": "YulIdentifier",
                                    "src": "5789:7:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "lt",
                                  "nodeType": "YulIdentifier",
                                  "src": "5783:2:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5783:14:37"
                              },
                              "nodeType": "YulForLoop",
                              "post": {
                                "nodeType": "YulBlock",
                                "src": "5798:21:37",
                                "statements": [
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "5800:17:37",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "i",
                                          "nodeType": "YulIdentifier",
                                          "src": "5809:1:37"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "5812:4:37",
                                          "type": "",
                                          "value": "0x20"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "5805:3:37"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "5805:12:37"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "5800:1:37"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "pre": {
                                "nodeType": "YulBlock",
                                "src": "5779:3:37",
                                "statements": []
                              },
                              "src": "5775:208:37"
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "6019:156:37",
                                "statements": [
                                  {
                                    "nodeType": "YulVariableDeclaration",
                                    "src": "6037:43:37",
                                    "value": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "src",
                                              "nodeType": "YulIdentifier",
                                              "src": "6064:3:37"
                                            },
                                            {
                                              "name": "srcOffset",
                                              "nodeType": "YulIdentifier",
                                              "src": "6069:9:37"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "6060:3:37"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "6060:19:37"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nodeType": "YulIdentifier",
                                        "src": "6054:5:37"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "6054:26:37"
                                    },
                                    "variables": [
                                      {
                                        "name": "lastValue",
                                        "nodeType": "YulTypedName",
                                        "src": "6041:9:37",
                                        "type": ""
                                      }
                                    ]
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "6104:6:37"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "lastValue",
                                              "nodeType": "YulIdentifier",
                                              "src": "6131:9:37"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "newLen",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "6146:6:37"
                                                },
                                                {
                                                  "kind": "number",
                                                  "nodeType": "YulLiteral",
                                                  "src": "6154:4:37",
                                                  "type": "",
                                                  "value": "0x1f"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "and",
                                                "nodeType": "YulIdentifier",
                                                "src": "6142:3:37"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "6142:17:37"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mask_bytes_dynamic",
                                            "nodeType": "YulIdentifier",
                                            "src": "6112:18:37"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "6112:48:37"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "6097:6:37"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "6097:64:37"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "6097:64:37"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "loopEnd",
                                    "nodeType": "YulIdentifier",
                                    "src": "6002:7:37"
                                  },
                                  {
                                    "name": "newLen",
                                    "nodeType": "YulIdentifier",
                                    "src": "6011:6:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "lt",
                                  "nodeType": "YulIdentifier",
                                  "src": "5999:2:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5999:19:37"
                              },
                              "nodeType": "YulIf",
                              "src": "5996:179:37"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "6195:4:37"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "newLen",
                                            "nodeType": "YulIdentifier",
                                            "src": "6209:6:37"
                                          },
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "6217:1:37",
                                            "type": "",
                                            "value": "2"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mul",
                                          "nodeType": "YulIdentifier",
                                          "src": "6205:3:37"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "6205:14:37"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "6221:1:37",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "6201:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "6201:22:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "6188:6:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6188:36:37"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "6188:36:37"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "5616:618:37",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5621:1:37",
                          "type": "",
                          "value": "1"
                        }
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6251:222:37",
                          "statements": [
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "6265:14:37",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6278:1:37",
                                "type": "",
                                "value": "0"
                              },
                              "variables": [
                                {
                                  "name": "value",
                                  "nodeType": "YulTypedName",
                                  "src": "6269:5:37",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "6302:67:37",
                                "statements": [
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "6320:35:37",
                                    "value": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "src",
                                              "nodeType": "YulIdentifier",
                                              "src": "6339:3:37"
                                            },
                                            {
                                              "name": "srcOffset",
                                              "nodeType": "YulIdentifier",
                                              "src": "6344:9:37"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "6335:3:37"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "6335:19:37"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nodeType": "YulIdentifier",
                                        "src": "6329:5:37"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "6329:26:37"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "6320:5:37"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "condition": {
                                "name": "newLen",
                                "nodeType": "YulIdentifier",
                                "src": "6295:6:37"
                              },
                              "nodeType": "YulIf",
                              "src": "6292:77:37"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "6389:4:37"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "6448:5:37"
                                      },
                                      {
                                        "name": "newLen",
                                        "nodeType": "YulIdentifier",
                                        "src": "6455:6:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "extract_used_part_and_set_length_of_short_byte_array",
                                      "nodeType": "YulIdentifier",
                                      "src": "6395:52:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "6395:67:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "6382:6:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6382:81:37"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "6382:81:37"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "6243:230:37",
                        "value": "default"
                      }
                    ],
                    "expression": {
                      "arguments": [
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "5596:6:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5604:2:37",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "5593:2:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5593:14:37"
                    },
                    "nodeType": "YulSwitch",
                    "src": "5586:887:37"
                  }
                ]
              },
              "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "5165:4:37",
                  "type": ""
                },
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "5171:3:37",
                  "type": ""
                }
              ],
              "src": "5084:1395:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6513:152:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6530:1:37",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6533:77:37",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6523:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6523:88:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6523:88:37"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6627:1:37",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6630:4:37",
                          "type": "",
                          "value": "0x11"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6620:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6620:15:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6620:15:37"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6651:1:37",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6654:4:37",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "6644:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6644:15:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6644:15:37"
                  }
                ]
              },
              "name": "panic_error_0x11",
              "nodeType": "YulFunctionDefinition",
              "src": "6485:180:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6722:51:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "6732:34:37",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6757:1:37",
                          "type": "",
                          "value": "1"
                        },
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "6760:5:37"
                        }
                      ],
                      "functionName": {
                        "name": "shr",
                        "nodeType": "YulIdentifier",
                        "src": "6753:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6753:13:37"
                    },
                    "variableNames": [
                      {
                        "name": "newValue",
                        "nodeType": "YulIdentifier",
                        "src": "6732:8:37"
                      }
                    ]
                  }
                ]
              },
              "name": "shift_right_1_unsigned",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "6703:5:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "newValue",
                  "nodeType": "YulTypedName",
                  "src": "6713:8:37",
                  "type": ""
                }
              ],
              "src": "6671:102:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6852:775:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "6862:15:37",
                    "value": {
                      "name": "_power",
                      "nodeType": "YulIdentifier",
                      "src": "6871:6:37"
                    },
                    "variableNames": [
                      {
                        "name": "power",
                        "nodeType": "YulIdentifier",
                        "src": "6862:5:37"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "6886:14:37",
                    "value": {
                      "name": "_base",
                      "nodeType": "YulIdentifier",
                      "src": "6895:5:37"
                    },
                    "variableNames": [
                      {
                        "name": "base",
                        "nodeType": "YulIdentifier",
                        "src": "6886:4:37"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "6944:677:37",
                      "statements": [
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "7032:22:37",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "panic_error_0x11",
                                    "nodeType": "YulIdentifier",
                                    "src": "7034:16:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "7034:18:37"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "7034:18:37"
                              }
                            ]
                          },
                          "condition": {
                            "arguments": [
                              {
                                "name": "base",
                                "nodeType": "YulIdentifier",
                                "src": "7010:4:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "max",
                                    "nodeType": "YulIdentifier",
                                    "src": "7020:3:37"
                                  },
                                  {
                                    "name": "base",
                                    "nodeType": "YulIdentifier",
                                    "src": "7025:4:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "div",
                                  "nodeType": "YulIdentifier",
                                  "src": "7016:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "7016:14:37"
                              }
                            ],
                            "functionName": {
                              "name": "gt",
                              "nodeType": "YulIdentifier",
                              "src": "7007:2:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7007:24:37"
                          },
                          "nodeType": "YulIf",
                          "src": "7004:50:37"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "7099:419:37",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "7479:25:37",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "power",
                                      "nodeType": "YulIdentifier",
                                      "src": "7492:5:37"
                                    },
                                    {
                                      "name": "base",
                                      "nodeType": "YulIdentifier",
                                      "src": "7499:4:37"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mul",
                                    "nodeType": "YulIdentifier",
                                    "src": "7488:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "7488:16:37"
                                },
                                "variableNames": [
                                  {
                                    "name": "power",
                                    "nodeType": "YulIdentifier",
                                    "src": "7479:5:37"
                                  }
                                ]
                              }
                            ]
                          },
                          "condition": {
                            "arguments": [
                              {
                                "name": "exponent",
                                "nodeType": "YulIdentifier",
                                "src": "7074:8:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "7084:1:37",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "7070:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7070:16:37"
                          },
                          "nodeType": "YulIf",
                          "src": "7067:451:37"
                        },
                        {
                          "nodeType": "YulAssignment",
                          "src": "7531:23:37",
                          "value": {
                            "arguments": [
                              {
                                "name": "base",
                                "nodeType": "YulIdentifier",
                                "src": "7543:4:37"
                              },
                              {
                                "name": "base",
                                "nodeType": "YulIdentifier",
                                "src": "7549:4:37"
                              }
                            ],
                            "functionName": {
                              "name": "mul",
                              "nodeType": "YulIdentifier",
                              "src": "7539:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7539:15:37"
                          },
                          "variableNames": [
                            {
                              "name": "base",
                              "nodeType": "YulIdentifier",
                              "src": "7531:4:37"
                            }
                          ]
                        },
                        {
                          "nodeType": "YulAssignment",
                          "src": "7567:44:37",
                          "value": {
                            "arguments": [
                              {
                                "name": "exponent",
                                "nodeType": "YulIdentifier",
                                "src": "7602:8:37"
                              }
                            ],
                            "functionName": {
                              "name": "shift_right_1_unsigned",
                              "nodeType": "YulIdentifier",
                              "src": "7579:22:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7579:32:37"
                          },
                          "variableNames": [
                            {
                              "name": "exponent",
                              "nodeType": "YulIdentifier",
                              "src": "7567:8:37"
                            }
                          ]
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "exponent",
                          "nodeType": "YulIdentifier",
                          "src": "6920:8:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6930:1:37",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "6917:2:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6917:15:37"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "6933:2:37",
                      "statements": []
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "6913:3:37",
                      "statements": []
                    },
                    "src": "6909:712:37"
                  }
                ]
              },
              "name": "checked_exp_helper",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "_power",
                  "nodeType": "YulTypedName",
                  "src": "6807:6:37",
                  "type": ""
                },
                {
                  "name": "_base",
                  "nodeType": "YulTypedName",
                  "src": "6815:5:37",
                  "type": ""
                },
                {
                  "name": "exponent",
                  "nodeType": "YulTypedName",
                  "src": "6822:8:37",
                  "type": ""
                },
                {
                  "name": "max",
                  "nodeType": "YulTypedName",
                  "src": "6832:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "power",
                  "nodeType": "YulTypedName",
                  "src": "6840:5:37",
                  "type": ""
                },
                {
                  "name": "base",
                  "nodeType": "YulTypedName",
                  "src": "6847:4:37",
                  "type": ""
                }
              ],
              "src": "6779:848:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7693:1013:37",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "7888:20:37",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "7890:10:37",
                          "value": {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7899:1:37",
                            "type": "",
                            "value": "1"
                          },
                          "variableNames": [
                            {
                              "name": "power",
                              "nodeType": "YulIdentifier",
                              "src": "7890:5:37"
                            }
                          ]
                        },
                        {
                          "nodeType": "YulLeave",
                          "src": "7901:5:37"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "exponent",
                          "nodeType": "YulIdentifier",
                          "src": "7878:8:37"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "7871:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7871:16:37"
                    },
                    "nodeType": "YulIf",
                    "src": "7868:40:37"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "7933:20:37",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "7935:10:37",
                          "value": {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7944:1:37",
                            "type": "",
                            "value": "0"
                          },
                          "variableNames": [
                            {
                              "name": "power",
                              "nodeType": "YulIdentifier",
                              "src": "7935:5:37"
                            }
                          ]
                        },
                        {
                          "nodeType": "YulLeave",
                          "src": "7946:5:37"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "base",
                          "nodeType": "YulIdentifier",
                          "src": "7927:4:37"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "7920:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7920:12:37"
                    },
                    "nodeType": "YulIf",
                    "src": "7917:36:37"
                  },
                  {
                    "cases": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "8063:20:37",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "8065:10:37",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "8074:1:37",
                                "type": "",
                                "value": "1"
                              },
                              "variableNames": [
                                {
                                  "name": "power",
                                  "nodeType": "YulIdentifier",
                                  "src": "8065:5:37"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulLeave",
                              "src": "8076:5:37"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "8056:27:37",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8061:1:37",
                          "type": "",
                          "value": "1"
                        }
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "8107:176:37",
                          "statements": [
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "8142:22:37",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "panic_error_0x11",
                                        "nodeType": "YulIdentifier",
                                        "src": "8144:16:37"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "8144:18:37"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "8144:18:37"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "exponent",
                                    "nodeType": "YulIdentifier",
                                    "src": "8127:8:37"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "8137:3:37",
                                    "type": "",
                                    "value": "255"
                                  }
                                ],
                                "functionName": {
                                  "name": "gt",
                                  "nodeType": "YulIdentifier",
                                  "src": "8124:2:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "8124:17:37"
                              },
                              "nodeType": "YulIf",
                              "src": "8121:43:37"
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "8177:25:37",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "8190:1:37",
                                    "type": "",
                                    "value": "2"
                                  },
                                  {
                                    "name": "exponent",
                                    "nodeType": "YulIdentifier",
                                    "src": "8193:8:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "exp",
                                  "nodeType": "YulIdentifier",
                                  "src": "8186:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "8186:16:37"
                              },
                              "variableNames": [
                                {
                                  "name": "power",
                                  "nodeType": "YulIdentifier",
                                  "src": "8177:5:37"
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "8233:22:37",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "panic_error_0x11",
                                        "nodeType": "YulIdentifier",
                                        "src": "8235:16:37"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "8235:18:37"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "8235:18:37"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "power",
                                    "nodeType": "YulIdentifier",
                                    "src": "8221:5:37"
                                  },
                                  {
                                    "name": "max",
                                    "nodeType": "YulIdentifier",
                                    "src": "8228:3:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "gt",
                                  "nodeType": "YulIdentifier",
                                  "src": "8218:2:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "8218:14:37"
                              },
                              "nodeType": "YulIf",
                              "src": "8215:40:37"
                            },
                            {
                              "nodeType": "YulLeave",
                              "src": "8268:5:37"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "8092:191:37",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8097:1:37",
                          "type": "",
                          "value": "2"
                        }
                      }
                    ],
                    "expression": {
                      "name": "base",
                      "nodeType": "YulIdentifier",
                      "src": "8013:4:37"
                    },
                    "nodeType": "YulSwitch",
                    "src": "8006:277:37"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "8415:123:37",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "8429:28:37",
                          "value": {
                            "arguments": [
                              {
                                "name": "base",
                                "nodeType": "YulIdentifier",
                                "src": "8442:4:37"
                              },
                              {
                                "name": "exponent",
                                "nodeType": "YulIdentifier",
                                "src": "8448:8:37"
                              }
                            ],
                            "functionName": {
                              "name": "exp",
                              "nodeType": "YulIdentifier",
                              "src": "8438:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8438:19:37"
                          },
                          "variableNames": [
                            {
                              "name": "power",
                              "nodeType": "YulIdentifier",
                              "src": "8429:5:37"
                            }
                          ]
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "8488:22:37",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "panic_error_0x11",
                                    "nodeType": "YulIdentifier",
                                    "src": "8490:16:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8490:18:37"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "8490:18:37"
                              }
                            ]
                          },
                          "condition": {
                            "arguments": [
                              {
                                "name": "power",
                                "nodeType": "YulIdentifier",
                                "src": "8476:5:37"
                              },
                              {
                                "name": "max",
                                "nodeType": "YulIdentifier",
                                "src": "8483:3:37"
                              }
                            ],
                            "functionName": {
                              "name": "gt",
                              "nodeType": "YulIdentifier",
                              "src": "8473:2:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8473:14:37"
                          },
                          "nodeType": "YulIf",
                          "src": "8470:40:37"
                        },
                        {
                          "nodeType": "YulLeave",
                          "src": "8523:5:37"
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
                                  "name": "base",
                                  "nodeType": "YulIdentifier",
                                  "src": "8318:4:37"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "8324:2:37",
                                  "type": "",
                                  "value": "11"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "8315:2:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8315:12:37"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "exponent",
                                  "nodeType": "YulIdentifier",
                                  "src": "8332:8:37"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "8342:2:37",
                                  "type": "",
                                  "value": "78"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "8329:2:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8329:16:37"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "8311:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8311:35:37"
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "base",
                                  "nodeType": "YulIdentifier",
                                  "src": "8367:4:37"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "8373:3:37",
                                  "type": "",
                                  "value": "307"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "8364:2:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8364:13:37"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "exponent",
                                  "nodeType": "YulIdentifier",
                                  "src": "8382:8:37"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "8392:2:37",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "8379:2:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8379:16:37"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "8360:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8360:36:37"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "8295:2:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8295:111:37"
                    },
                    "nodeType": "YulIf",
                    "src": "8292:246:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "8548:57:37",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8582:1:37",
                          "type": "",
                          "value": "1"
                        },
                        {
                          "name": "base",
                          "nodeType": "YulIdentifier",
                          "src": "8585:4:37"
                        },
                        {
                          "name": "exponent",
                          "nodeType": "YulIdentifier",
                          "src": "8591:8:37"
                        },
                        {
                          "name": "max",
                          "nodeType": "YulIdentifier",
                          "src": "8601:3:37"
                        }
                      ],
                      "functionName": {
                        "name": "checked_exp_helper",
                        "nodeType": "YulIdentifier",
                        "src": "8563:18:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8563:42:37"
                    },
                    "variableNames": [
                      {
                        "name": "power",
                        "nodeType": "YulIdentifier",
                        "src": "8548:5:37"
                      },
                      {
                        "name": "base",
                        "nodeType": "YulIdentifier",
                        "src": "8555:4:37"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "8644:22:37",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "8646:16:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8646:18:37"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "8646:18:37"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "power",
                          "nodeType": "YulIdentifier",
                          "src": "8621:5:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "max",
                              "nodeType": "YulIdentifier",
                              "src": "8632:3:37"
                            },
                            {
                              "name": "base",
                              "nodeType": "YulIdentifier",
                              "src": "8637:4:37"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "8628:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8628:14:37"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "8618:2:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8618:25:37"
                    },
                    "nodeType": "YulIf",
                    "src": "8615:51:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "8675:25:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "power",
                          "nodeType": "YulIdentifier",
                          "src": "8688:5:37"
                        },
                        {
                          "name": "base",
                          "nodeType": "YulIdentifier",
                          "src": "8695:4:37"
                        }
                      ],
                      "functionName": {
                        "name": "mul",
                        "nodeType": "YulIdentifier",
                        "src": "8684:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8684:16:37"
                    },
                    "variableNames": [
                      {
                        "name": "power",
                        "nodeType": "YulIdentifier",
                        "src": "8675:5:37"
                      }
                    ]
                  }
                ]
              },
              "name": "checked_exp_unsigned",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "base",
                  "nodeType": "YulTypedName",
                  "src": "7663:4:37",
                  "type": ""
                },
                {
                  "name": "exponent",
                  "nodeType": "YulTypedName",
                  "src": "7669:8:37",
                  "type": ""
                },
                {
                  "name": "max",
                  "nodeType": "YulTypedName",
                  "src": "7679:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "power",
                  "nodeType": "YulTypedName",
                  "src": "7687:5:37",
                  "type": ""
                }
              ],
              "src": "7633:1073:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8755:43:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8765:27:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "8780:5:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8787:4:37",
                          "type": "",
                          "value": "0xff"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "8776:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8776:16:37"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "8765:7:37"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint8",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "8737:5:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "8747:7:37",
                  "type": ""
                }
              ],
              "src": "8712:86:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8868:217:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8878:31:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "base",
                          "nodeType": "YulIdentifier",
                          "src": "8904:4:37"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "8886:17:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8886:23:37"
                    },
                    "variableNames": [
                      {
                        "name": "base",
                        "nodeType": "YulIdentifier",
                        "src": "8878:4:37"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "8918:37:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "exponent",
                          "nodeType": "YulIdentifier",
                          "src": "8946:8:37"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint8",
                        "nodeType": "YulIdentifier",
                        "src": "8930:15:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8930:25:37"
                    },
                    "variableNames": [
                      {
                        "name": "exponent",
                        "nodeType": "YulIdentifier",
                        "src": "8918:8:37"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "8965:113:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "base",
                          "nodeType": "YulIdentifier",
                          "src": "8995:4:37"
                        },
                        {
                          "name": "exponent",
                          "nodeType": "YulIdentifier",
                          "src": "9001:8:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9011:66:37",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "checked_exp_unsigned",
                        "nodeType": "YulIdentifier",
                        "src": "8974:20:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8974:104:37"
                    },
                    "variableNames": [
                      {
                        "name": "power",
                        "nodeType": "YulIdentifier",
                        "src": "8965:5:37"
                      }
                    ]
                  }
                ]
              },
              "name": "checked_exp_t_uint256_t_uint8",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "base",
                  "nodeType": "YulTypedName",
                  "src": "8843:4:37",
                  "type": ""
                },
                {
                  "name": "exponent",
                  "nodeType": "YulTypedName",
                  "src": "8849:8:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "power",
                  "nodeType": "YulTypedName",
                  "src": "8862:5:37",
                  "type": ""
                }
              ],
              "src": "8804:281:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9139:362:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "9149:25:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "9172:1:37"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "9154:17:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9154:20:37"
                    },
                    "variableNames": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "9149:1:37"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "9183:25:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "9206:1:37"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "9188:17:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9188:20:37"
                    },
                    "variableNames": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "9183:1:37"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "9217:28:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "9240:1:37"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "9243:1:37"
                        }
                      ],
                      "functionName": {
                        "name": "mul",
                        "nodeType": "YulIdentifier",
                        "src": "9236:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9236:9:37"
                    },
                    "variables": [
                      {
                        "name": "product_raw",
                        "nodeType": "YulTypedName",
                        "src": "9221:11:37",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "9254:41:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "product_raw",
                          "nodeType": "YulIdentifier",
                          "src": "9283:11:37"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "9265:17:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9265:30:37"
                    },
                    "variableNames": [
                      {
                        "name": "product",
                        "nodeType": "YulIdentifier",
                        "src": "9254:7:37"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "9472:22:37",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "9474:16:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9474:18:37"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "9474:18:37"
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
                                  "src": "9405:1:37"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nodeType": "YulIdentifier",
                                "src": "9398:6:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9398:9:37"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "9428:1:37"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "product",
                                      "nodeType": "YulIdentifier",
                                      "src": "9435:7:37"
                                    },
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "9444:1:37"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "9431:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "9431:15:37"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "9425:2:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9425:22:37"
                            }
                          ],
                          "functionName": {
                            "name": "or",
                            "nodeType": "YulIdentifier",
                            "src": "9378:2:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9378:83:37"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "9358:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9358:113:37"
                    },
                    "nodeType": "YulIf",
                    "src": "9355:139:37"
                  }
                ]
              },
              "name": "checked_mul_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "9122:1:37",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "9125:1:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "product",
                  "nodeType": "YulTypedName",
                  "src": "9131:7:37",
                  "type": ""
                }
              ],
              "src": "9091:410:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9603:73:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "9620:3:37"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "9625:6:37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9613:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9613:19:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9613:19:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "9641:29:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "9660:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9665:4:37",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "9656:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9656:14:37"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nodeType": "YulIdentifier",
                        "src": "9641:11:37"
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
                  "src": "9575:3:37",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "9580:6:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nodeType": "YulTypedName",
                  "src": "9591:11:37",
                  "type": ""
                }
              ],
              "src": "9507:169:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9788:75:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "9810:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9818:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9806:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9806:14:37"
                        },
                        {
                          "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "9822:33:37",
                          "type": "",
                          "value": "ERC20: mint to the zero address"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9799:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9799:57:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9799:57:37"
                  }
                ]
              },
              "name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "9780:6:37",
                  "type": ""
                }
              ],
              "src": "9682:181:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10015:220:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "10025:74:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "10091:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10096:2:37",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "10032:58:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10032:67:37"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "10025:3:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "10197:3:37"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
                        "nodeType": "YulIdentifier",
                        "src": "10108:88:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10108:93:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10108:93:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "10210:19:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "10221:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10226:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "10217:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10217:12:37"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "10210:3:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "10003:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "10011:3:37",
                  "type": ""
                }
              ],
              "src": "9869:366:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10412:248:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "10422:26:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "10434:9:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10445:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "10430:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10430:18:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "10422:4:37"
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
                              "src": "10469:9:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10480:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10465:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10465:17:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "10488:4:37"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "10494:9:37"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "10484:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10484:20:37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10458:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10458:47:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10458:47:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "10514:139:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "10648:4:37"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "10522:124:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10522:131:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "10514:4:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "10392:9:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "10407:4:37",
                  "type": ""
                }
              ],
              "src": "10241:419:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10710:147:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "10720:25:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "10743:1:37"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "10725:17:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10725:20:37"
                    },
                    "variableNames": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "10720:1:37"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "10754:25:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "10777:1:37"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "10759:17:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10759:20:37"
                    },
                    "variableNames": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "10754:1:37"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "10788:16:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "10799:1:37"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "10802:1:37"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "10795:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10795:9:37"
                    },
                    "variableNames": [
                      {
                        "name": "sum",
                        "nodeType": "YulIdentifier",
                        "src": "10788:3:37"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "10828:22:37",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "10830:16:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "10830:18:37"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "10830:18:37"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "10820:1:37"
                        },
                        {
                          "name": "sum",
                          "nodeType": "YulIdentifier",
                          "src": "10823:3:37"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "10817:2:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10817:10:37"
                    },
                    "nodeType": "YulIf",
                    "src": "10814:36:37"
                  }
                ]
              },
              "name": "checked_add_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "10697:1:37",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "10700:1:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "sum",
                  "nodeType": "YulTypedName",
                  "src": "10706:3:37",
                  "type": ""
                }
              ],
              "src": "10666:191:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10928:53:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "10945:3:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "10968:5:37"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "10950:17:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10950:24:37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10938:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10938:37:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10938:37:37"
                  }
                ]
              },
              "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "10916:5:37",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "10923:3:37",
                  "type": ""
                }
              ],
              "src": "10863:118:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11085:124:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "11095:26:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "11107:9:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11118:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "11103:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11103:18:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "11095:4:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "11175:6:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "11188:9:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11199:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11184:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11184:17:37"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "11131:43:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11131:71:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11131:71:37"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "11057:9:37",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "11069:6:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "11080:4:37",
                  "type": ""
                }
              ],
              "src": "10987:222:37"
            }
          ]
        },
        "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address_payable(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address_payable(value) {\n        if iszero(eq(value, cleanup_t_address_payable(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address_payable_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_address_payable(value)\n    }\n\n    function abi_decode_tuple_t_address_payable_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address_payable_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function shift_right_1_unsigned(value) -> newValue {\n        newValue :=\n\n        shr(1, value)\n\n    }\n\n    function checked_exp_helper(_power, _base, exponent, max) -> power, base {\n        power := _power\n        base  := _base\n        for { } gt(exponent, 1) {}\n        {\n            // overflow check for base * base\n            if gt(base, div(max, base)) { panic_error_0x11() }\n            if and(exponent, 1)\n            {\n                // No checks for power := mul(power, base) needed, because the check\n                // for base * base above is sufficient, since:\n                // |power| <= base (proof by induction) and thus:\n                // |power * base| <= base * base <= max <= |min| (for signed)\n                // (this is equally true for signed and unsigned exp)\n                power := mul(power, base)\n            }\n            base := mul(base, base)\n            exponent := shift_right_1_unsigned(exponent)\n        }\n    }\n\n    function checked_exp_unsigned(base, exponent, max) -> power {\n        // This function currently cannot be inlined because of the\n        // \"leave\" statements. We have to improve the optimizer.\n\n        // Note that 0**0 == 1\n        if iszero(exponent) { power := 1 leave }\n        if iszero(base) { power := 0 leave }\n\n        // Specializations for small bases\n        switch base\n        // 0 is handled above\n        case 1 { power := 1 leave }\n        case 2\n        {\n            if gt(exponent, 255) { panic_error_0x11() }\n            power := exp(2, exponent)\n            if gt(power, max) { panic_error_0x11() }\n            leave\n        }\n        if or(\n            and(lt(base, 11), lt(exponent, 78)),\n            and(lt(base, 307), lt(exponent, 32))\n        )\n        {\n            power := exp(base, exponent)\n            if gt(power, max) { panic_error_0x11() }\n            leave\n        }\n\n        power, base := checked_exp_helper(1, base, exponent, max)\n\n        if gt(power, div(max, base)) { panic_error_0x11() }\n        power := mul(power, base)\n    }\n\n    function cleanup_t_uint8(value) -> cleaned {\n        cleaned := and(value, 0xff)\n    }\n\n    function checked_exp_t_uint256_t_uint8(base, exponent) -> power {\n        base := cleanup_t_uint256(base)\n        exponent := cleanup_t_uint8(exponent)\n\n        power := checked_exp_unsigned(base, exponent, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        let product_raw := mul(x, y)\n        product := cleanup_t_uint256(product_raw)\n\n        // overflow, if x != 0 and y != product/x\n        if iszero(\n            or(\n                iszero(x),\n                eq(y, div(product, x))\n            )\n        ) { panic_error_0x11() }\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: mint to the zero address\")\n\n    }\n\n    function abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 31)\n        store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        sum := add(x, y)\n\n        if gt(x, sum) { panic_error_0x11() }\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n}\n",
        "id": 37,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "deployedGeneratedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:24110:37",
          "statements": [
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "66:40:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "77:22:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "93:5:37"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "87:5:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "87:12:37"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "77:6:37"
                      }
                    ]
                  }
                ]
              },
              "name": "array_length_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "49:5:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "59:6:37",
                  "type": ""
                }
              ],
              "src": "7:99:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "208:73:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "225:3:37"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "230:6:37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "218:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "218:19:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "218:19:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "246:29:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "265:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "270:4:37",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "261:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "261:14:37"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nodeType": "YulIdentifier",
                        "src": "246:11:37"
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
                  "src": "180:3:37",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "185:6:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nodeType": "YulTypedName",
                  "src": "196:11:37",
                  "type": ""
                }
              ],
              "src": "112:169:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "349:184:37",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "359:10:37",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "368:1:37",
                      "type": "",
                      "value": "0"
                    },
                    "variables": [
                      {
                        "name": "i",
                        "nodeType": "YulTypedName",
                        "src": "363:1:37",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "428:63:37",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "dst",
                                    "nodeType": "YulIdentifier",
                                    "src": "453:3:37"
                                  },
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "458:1:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "449:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "449:11:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "src",
                                        "nodeType": "YulIdentifier",
                                        "src": "472:3:37"
                                      },
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "477:1:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "468:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "468:11:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nodeType": "YulIdentifier",
                                  "src": "462:5:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "462:18:37"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "442:6:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "442:39:37"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "442:39:37"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "i",
                          "nodeType": "YulIdentifier",
                          "src": "389:1:37"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "392:6:37"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "386:2:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "386:13:37"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "400:19:37",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "402:15:37",
                          "value": {
                            "arguments": [
                              {
                                "name": "i",
                                "nodeType": "YulIdentifier",
                                "src": "411:1:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "414:2:37",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "407:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "407:10:37"
                          },
                          "variableNames": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "402:1:37"
                            }
                          ]
                        }
                      ]
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "382:3:37",
                      "statements": []
                    },
                    "src": "378:113:37"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "511:3:37"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "516:6:37"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "507:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "507:16:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "525:1:37",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "500:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "500:27:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "500:27:37"
                  }
                ]
              },
              "name": "copy_memory_to_memory_with_cleanup",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "331:3:37",
                  "type": ""
                },
                {
                  "name": "dst",
                  "nodeType": "YulTypedName",
                  "src": "336:3:37",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "341:6:37",
                  "type": ""
                }
              ],
              "src": "287:246:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "587:54:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "597:38:37",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "615:5:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "622:2:37",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "611:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "611:14:37"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "631:2:37",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "627:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "627:7:37"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "607:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "607:28:37"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "597:6:37"
                      }
                    ]
                  }
                ]
              },
              "name": "round_up_to_mul_of_32",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "570:5:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "580:6:37",
                  "type": ""
                }
              ],
              "src": "539:102:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "739:285:37",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "749:53:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "796:5:37"
                        }
                      ],
                      "functionName": {
                        "name": "array_length_t_string_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "763:32:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "763:39:37"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "753:6:37",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "811:78:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "877:3:37"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "882:6:37"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "818:58:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "818:71:37"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "811:3:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "937:5:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "944:4:37",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "933:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "933:16:37"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "951:3:37"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "956:6:37"
                        }
                      ],
                      "functionName": {
                        "name": "copy_memory_to_memory_with_cleanup",
                        "nodeType": "YulIdentifier",
                        "src": "898:34:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "898:65:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "898:65:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "972:46:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "983:3:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "1010:6:37"
                            }
                          ],
                          "functionName": {
                            "name": "round_up_to_mul_of_32",
                            "nodeType": "YulIdentifier",
                            "src": "988:21:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "988:29:37"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "979:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "979:39:37"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "972:3:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "720:5:37",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "727:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "735:3:37",
                  "type": ""
                }
              ],
              "src": "647:377:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1148:195:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1158:26:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "1170:9:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1181:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "1166:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1166:18:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "1158:4:37"
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
                              "src": "1205:9:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1216:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1201:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1201:17:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "1224:4:37"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1230:9:37"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "1220:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1220:20:37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1194:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1194:47:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1194:47:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1250:86:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1322:6:37"
                        },
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "1331:4:37"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "1258:63:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1258:78:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "1250:4:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "1120:9:37",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "1132:6:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "1143:4:37",
                  "type": ""
                }
              ],
              "src": "1030:313:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1389:35:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1399:19:37",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1415:2:37",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "1409:5:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1409:9:37"
                    },
                    "variableNames": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "1399:6:37"
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
                  "src": "1382:6:37",
                  "type": ""
                }
              ],
              "src": "1349:75:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1519:28:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1536:1:37",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1539:1:37",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "1529:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1529:12:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1529:12:37"
                  }
                ]
              },
              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
              "nodeType": "YulFunctionDefinition",
              "src": "1430:117:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1642:28:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1659:1:37",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1662:1:37",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "1652:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1652:12:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1652:12:37"
                  }
                ]
              },
              "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
              "nodeType": "YulFunctionDefinition",
              "src": "1553:117:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1721:81:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1731:65:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "1746:5:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1753:42:37",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "1742:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1742:54:37"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "1731:7:37"
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
                  "src": "1703:5:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "1713:7:37",
                  "type": ""
                }
              ],
              "src": "1676:126:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1853:51:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1863:35:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "1892:5:37"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint160",
                        "nodeType": "YulIdentifier",
                        "src": "1874:17:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1874:24:37"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "1863:7:37"
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
                  "src": "1835:5:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "1845:7:37",
                  "type": ""
                }
              ],
              "src": "1808:96:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1953:79:37",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2010:16:37",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2019:1:37",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2022:1:37",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "2012:6:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2012:12:37"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2012:12:37"
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
                              "src": "1976:5:37"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "2001:5:37"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "1983:17:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1983:24:37"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "1973:2:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1973:35:37"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "1966:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1966:43:37"
                    },
                    "nodeType": "YulIf",
                    "src": "1963:63:37"
                  }
                ]
              },
              "name": "validator_revert_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1946:5:37",
                  "type": ""
                }
              ],
              "src": "1910:122:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2090:87:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2100:29:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "2122:6:37"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "2109:12:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2109:20:37"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2100:5:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2165:5:37"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_address",
                        "nodeType": "YulIdentifier",
                        "src": "2138:26:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2138:33:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2138:33:37"
                  }
                ]
              },
              "name": "abi_decode_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "2068:6:37",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "2076:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2084:5:37",
                  "type": ""
                }
              ],
              "src": "2038:139:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2228:32:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2238:16:37",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "2249:5:37"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "2238:7:37"
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
                  "src": "2210:5:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "2220:7:37",
                  "type": ""
                }
              ],
              "src": "2183:77:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2309:79:37",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2366:16:37",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2375:1:37",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2378:1:37",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "2368:6:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2368:12:37"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2368:12:37"
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
                              "src": "2332:5:37"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "2357:5:37"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "2339:17:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2339:24:37"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "2329:2:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2329:35:37"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "2322:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2322:43:37"
                    },
                    "nodeType": "YulIf",
                    "src": "2319:63:37"
                  }
                ]
              },
              "name": "validator_revert_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2302:5:37",
                  "type": ""
                }
              ],
              "src": "2266:122:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2446:87:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2456:29:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "2478:6:37"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "2465:12:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2465:20:37"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2456:5:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2521:5:37"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "2494:26:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2494:33:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2494:33:37"
                  }
                ]
              },
              "name": "abi_decode_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "2424:6:37",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "2432:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2440:5:37",
                  "type": ""
                }
              ],
              "src": "2394:139:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2622:391:37",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2668:83:37",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "2670:77:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2670:79:37"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2670:79:37"
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
                              "src": "2643:7:37"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2652:9:37"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "2639:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2639:23:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2664:2:37",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "2635:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2635:32:37"
                    },
                    "nodeType": "YulIf",
                    "src": "2632:119:37"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "2761:117:37",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2776:15:37",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2790:1:37",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "2780:6:37",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2805:63:37",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "2840:9:37"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "2851:6:37"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2836:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2836:22:37"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "2860:7:37"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "2815:20:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2815:53:37"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2805:6:37"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "2888:118:37",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2903:16:37",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2917:2:37",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "2907:6:37",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2933:63:37",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "2968:9:37"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "2979:6:37"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2964:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2964:22:37"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "2988:7:37"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "2943:20:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2943:53:37"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "2933:6:37"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "2584:9:37",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "2595:7:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "2607:6:37",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "2615:6:37",
                  "type": ""
                }
              ],
              "src": "2539:474:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3061:48:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3071:32:37",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "3096:5:37"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "3089:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3089:13:37"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "3082:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3082:21:37"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "3071:7:37"
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
                  "src": "3043:5:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "3053:7:37",
                  "type": ""
                }
              ],
              "src": "3019:90:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3174:50:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3191:3:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "3211:5:37"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_bool",
                            "nodeType": "YulIdentifier",
                            "src": "3196:14:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3196:21:37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "3184:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3184:34:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3184:34:37"
                  }
                ]
              },
              "name": "abi_encode_t_bool_to_t_bool_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3162:5:37",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "3169:3:37",
                  "type": ""
                }
              ],
              "src": "3115:109:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3322:118:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3332:26:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "3344:9:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3355:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3340:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3340:18:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "3332:4:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "3406:6:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3419:9:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3430:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3415:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3415:17:37"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_bool_to_t_bool_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "3368:37:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3368:65:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3368:65:37"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "3294:9:37",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "3306:6:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "3317:4:37",
                  "type": ""
                }
              ],
              "src": "3230:210:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3511:53:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3528:3:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "3551:5:37"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "3533:17:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3533:24:37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "3521:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3521:37:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3521:37:37"
                  }
                ]
              },
              "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3499:5:37",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "3506:3:37",
                  "type": ""
                }
              ],
              "src": "3446:118:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3668:124:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3678:26:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "3690:9:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3701:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3686:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3686:18:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "3678:4:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "3758:6:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3771:9:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3782:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3767:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3767:17:37"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "3714:43:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3714:71:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3714:71:37"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "3640:9:37",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "3652:6:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "3663:4:37",
                  "type": ""
                }
              ],
              "src": "3570:222:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3898:519:37",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3944:83:37",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "3946:77:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3946:79:37"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3946:79:37"
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
                              "src": "3919:7:37"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3928:9:37"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "3915:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3915:23:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3940:2:37",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "3911:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3911:32:37"
                    },
                    "nodeType": "YulIf",
                    "src": "3908:119:37"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "4037:117:37",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "4052:15:37",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4066:1:37",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "4056:6:37",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "4081:63:37",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "4116:9:37"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "4127:6:37"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4112:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4112:22:37"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "4136:7:37"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "4091:20:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4091:53:37"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "4081:6:37"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "4164:118:37",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "4179:16:37",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4193:2:37",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "4183:6:37",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "4209:63:37",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "4244:9:37"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "4255:6:37"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4240:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4240:22:37"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "4264:7:37"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "4219:20:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4219:53:37"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "4209:6:37"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "4292:118:37",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "4307:16:37",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4321:2:37",
                          "type": "",
                          "value": "64"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "4311:6:37",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "4337:63:37",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "4372:9:37"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "4383:6:37"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4368:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4368:22:37"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "4392:7:37"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "4347:20:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4347:53:37"
                        },
                        "variableNames": [
                          {
                            "name": "value2",
                            "nodeType": "YulIdentifier",
                            "src": "4337:6:37"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_addresst_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "3852:9:37",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "3863:7:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "3875:6:37",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "3883:6:37",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "3891:6:37",
                  "type": ""
                }
              ],
              "src": "3798:619:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4466:43:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4476:27:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "4491:5:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4498:4:37",
                          "type": "",
                          "value": "0xff"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "4487:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4487:16:37"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "4476:7:37"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint8",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "4448:5:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "4458:7:37",
                  "type": ""
                }
              ],
              "src": "4423:86:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4576:51:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "4593:3:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "4614:5:37"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint8",
                            "nodeType": "YulIdentifier",
                            "src": "4598:15:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4598:22:37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4586:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4586:35:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4586:35:37"
                  }
                ]
              },
              "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "4564:5:37",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "4571:3:37",
                  "type": ""
                }
              ],
              "src": "4515:112:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4727:120:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4737:26:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4749:9:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4760:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4745:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4745:18:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "4737:4:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4813:6:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4826:9:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4837:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4822:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4822:17:37"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "4773:39:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4773:67:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4773:67:37"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "4699:9:37",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "4711:6:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "4722:4:37",
                  "type": ""
                }
              ],
              "src": "4633:214:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4906:51:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4916:35:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "4945:5:37"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint160",
                        "nodeType": "YulIdentifier",
                        "src": "4927:17:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4927:24:37"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "4916:7:37"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_address_payable",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "4888:5:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "4898:7:37",
                  "type": ""
                }
              ],
              "src": "4853:104:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5044:61:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "5061:3:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "5092:5:37"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_address_payable",
                            "nodeType": "YulIdentifier",
                            "src": "5066:25:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5066:32:37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5054:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5054:45:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5054:45:37"
                  }
                ]
              },
              "name": "abi_encode_t_address_payable_to_t_address_payable_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "5032:5:37",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "5039:3:37",
                  "type": ""
                }
              ],
              "src": "4963:142:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5225:140:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5235:26:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "5247:9:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5258:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "5243:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5243:18:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "5235:4:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "5331:6:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5344:9:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5355:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5340:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5340:17:37"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_payable_to_t_address_payable_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "5271:59:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5271:87:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5271:87:37"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address_payable__to_t_address_payable__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "5197:9:37",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "5209:6:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "5220:4:37",
                  "type": ""
                }
              ],
              "src": "5111:254:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5437:263:37",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "5483:83:37",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "5485:77:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5485:79:37"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "5485:79:37"
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
                              "src": "5458:7:37"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5467:9:37"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "5454:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5454:23:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5479:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "5450:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5450:32:37"
                    },
                    "nodeType": "YulIf",
                    "src": "5447:119:37"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "5576:117:37",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "5591:15:37",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5605:1:37",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "5595:6:37",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5620:63:37",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "5655:9:37"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "5666:6:37"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "5651:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5651:22:37"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "5675:7:37"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "5630:20:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5630:53:37"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "5620:6:37"
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
                  "src": "5407:9:37",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "5418:7:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "5430:6:37",
                  "type": ""
                }
              ],
              "src": "5371:329:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5774:51:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5784:35:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "5813:5:37"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_address",
                        "nodeType": "YulIdentifier",
                        "src": "5795:17:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5795:24:37"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "5784:7:37"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_contract$_LiquidityPool_$11307",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "5756:5:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "5766:7:37",
                  "type": ""
                }
              ],
              "src": "5706:119:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5897:102:37",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "5977:16:37",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5986:1:37",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5989:1:37",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "5979:6:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5979:12:37"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "5979:12:37"
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
                              "src": "5920:5:37"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "5968:5:37"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_contract$_LiquidityPool_$11307",
                                "nodeType": "YulIdentifier",
                                "src": "5927:40:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5927:47:37"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "5917:2:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5917:58:37"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "5910:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5910:66:37"
                    },
                    "nodeType": "YulIf",
                    "src": "5907:86:37"
                  }
                ]
              },
              "name": "validator_revert_t_contract$_LiquidityPool_$11307",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "5890:5:37",
                  "type": ""
                }
              ],
              "src": "5831:168:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6080:110:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "6090:29:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "6112:6:37"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "6099:12:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6099:20:37"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6090:5:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "6178:5:37"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_contract$_LiquidityPool_$11307",
                        "nodeType": "YulIdentifier",
                        "src": "6128:49:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6128:56:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6128:56:37"
                  }
                ]
              },
              "name": "abi_decode_t_contract$_LiquidityPool_$11307",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "6058:6:37",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "6066:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "6074:5:37",
                  "type": ""
                }
              ],
              "src": "6005:185:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6285:286:37",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "6331:83:37",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "6333:77:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6333:79:37"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "6333:79:37"
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
                              "src": "6306:7:37"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6315:9:37"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "6302:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6302:23:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6327:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "6298:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6298:32:37"
                    },
                    "nodeType": "YulIf",
                    "src": "6295:119:37"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "6424:140:37",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "6439:15:37",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6453:1:37",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "6443:6:37",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "6468:86:37",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "6526:9:37"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "6537:6:37"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "6522:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6522:22:37"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "6546:7:37"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_contract$_LiquidityPool_$11307",
                            "nodeType": "YulIdentifier",
                            "src": "6478:43:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6478:76:37"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "6468:6:37"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_contract$_LiquidityPool_$11307",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "6255:9:37",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "6266:7:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "6278:6:37",
                  "type": ""
                }
              ],
              "src": "6196:375:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6642:53:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "6659:3:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "6682:5:37"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "6664:17:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6664:24:37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6652:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6652:37:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6652:37:37"
                  }
                ]
              },
              "name": "abi_encode_t_address_to_t_address_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "6630:5:37",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "6637:3:37",
                  "type": ""
                }
              ],
              "src": "6577:118:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6799:124:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "6809:26:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "6821:9:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6832:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "6817:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6817:18:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6809:4:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "6889:6:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6902:9:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6913:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6898:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6898:17:37"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "6845:43:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6845:71:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6845:71:37"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "6771:9:37",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "6783:6:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "6794:4:37",
                  "type": ""
                }
              ],
              "src": "6701:222:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7012:391:37",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "7058:83:37",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "7060:77:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7060:79:37"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "7060:79:37"
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
                              "src": "7033:7:37"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7042:9:37"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "7029:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7029:23:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7054:2:37",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "7025:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7025:32:37"
                    },
                    "nodeType": "YulIf",
                    "src": "7022:119:37"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "7151:117:37",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "7166:15:37",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7180:1:37",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "7170:6:37",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "7195:63:37",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "7230:9:37"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "7241:6:37"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "7226:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7226:22:37"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "7250:7:37"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "7205:20:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7205:53:37"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "7195:6:37"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "7278:118:37",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "7293:16:37",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7307:2:37",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "7297:6:37",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "7323:63:37",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "7358:9:37"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "7369:6:37"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "7354:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7354:22:37"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "7378:7:37"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "7333:20:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7333:53:37"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "7323:6:37"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "6974:9:37",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "6985:7:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "6997:6:37",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "7005:6:37",
                  "type": ""
                }
              ],
              "src": "6929:474:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7437:152:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7454:1:37",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7457:77:37",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7447:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7447:88:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7447:88:37"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7551:1:37",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7554:4:37",
                          "type": "",
                          "value": "0x22"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7544:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7544:15:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7544:15:37"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7575:1:37",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7578:4:37",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "7568:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7568:15:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7568:15:37"
                  }
                ]
              },
              "name": "panic_error_0x22",
              "nodeType": "YulFunctionDefinition",
              "src": "7409:180:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7646:269:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "7656:22:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "7670:4:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7676:1:37",
                          "type": "",
                          "value": "2"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "7666:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7666:12:37"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "7656:6:37"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "7687:38:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "7717:4:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7723:1:37",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "7713:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7713:12:37"
                    },
                    "variables": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulTypedName",
                        "src": "7691:18:37",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "7764:51:37",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "7778:27:37",
                          "value": {
                            "arguments": [
                              {
                                "name": "length",
                                "nodeType": "YulIdentifier",
                                "src": "7792:6:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "7800:4:37",
                                "type": "",
                                "value": "0x7f"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "7788:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7788:17:37"
                          },
                          "variableNames": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "7778:6:37"
                            }
                          ]
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "7744:18:37"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "7737:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7737:26:37"
                    },
                    "nodeType": "YulIf",
                    "src": "7734:81:37"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "7867:42:37",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x22",
                              "nodeType": "YulIdentifier",
                              "src": "7881:16:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7881:18:37"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "7881:18:37"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "7831:18:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "7854:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7862:2:37",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "7851:2:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7851:14:37"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "7828:2:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7828:38:37"
                    },
                    "nodeType": "YulIf",
                    "src": "7825:84:37"
                  }
                ]
              },
              "name": "extract_byte_array_length",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "7630:4:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "7639:6:37",
                  "type": ""
                }
              ],
              "src": "7595:320:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7949:152:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7966:1:37",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7969:77:37",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7959:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7959:88:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7959:88:37"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8063:1:37",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8066:4:37",
                          "type": "",
                          "value": "0x11"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8056:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8056:15:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8056:15:37"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8087:1:37",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8090:4:37",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "8080:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8080:15:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8080:15:37"
                  }
                ]
              },
              "name": "panic_error_0x11",
              "nodeType": "YulFunctionDefinition",
              "src": "7921:180:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8151:147:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8161:25:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "8184:1:37"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "8166:17:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8166:20:37"
                    },
                    "variableNames": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "8161:1:37"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "8195:25:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "8218:1:37"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "8200:17:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8200:20:37"
                    },
                    "variableNames": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "8195:1:37"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "8229:16:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "8240:1:37"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "8243:1:37"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "8236:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8236:9:37"
                    },
                    "variableNames": [
                      {
                        "name": "sum",
                        "nodeType": "YulIdentifier",
                        "src": "8229:3:37"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "8269:22:37",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "8271:16:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8271:18:37"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "8271:18:37"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "8261:1:37"
                        },
                        {
                          "name": "sum",
                          "nodeType": "YulIdentifier",
                          "src": "8264:3:37"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "8258:2:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8258:10:37"
                    },
                    "nodeType": "YulIf",
                    "src": "8255:36:37"
                  }
                ]
              },
              "name": "checked_add_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "8138:1:37",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "8141:1:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "sum",
                  "nodeType": "YulTypedName",
                  "src": "8147:3:37",
                  "type": ""
                }
              ],
              "src": "8107:191:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8410:54:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "8432:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8440:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "8428:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8428:14:37"
                        },
                        {
                          "hexValue": "4f574e45525f4f4e4c59",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "8444:12:37",
                          "type": "",
                          "value": "OWNER_ONLY"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8421:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8421:36:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8421:36:37"
                  }
                ]
              },
              "name": "store_literal_in_memory_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "8402:6:37",
                  "type": ""
                }
              ],
              "src": "8304:160:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8616:220:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8626:74:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "8692:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8697:2:37",
                          "type": "",
                          "value": "10"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "8633:58:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8633:67:37"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8626:3:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "8798:3:37"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20",
                        "nodeType": "YulIdentifier",
                        "src": "8709:88:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8709:93:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8709:93:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "8811:19:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "8822:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8827:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "8818:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8818:12:37"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "8811:3:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "8604:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "8612:3:37",
                  "type": ""
                }
              ],
              "src": "8470:366:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9013:248:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "9023:26:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "9035:9:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9046:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "9031:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9031:18:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "9023:4:37"
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
                              "src": "9070:9:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9081:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9066:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9066:17:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "9089:4:37"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "9095:9:37"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "9085:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9085:20:37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9059:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9059:47:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9059:47:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "9115:139:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "9249:4:37"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "9123:124:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9123:131:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "9115:4:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "8993:9:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "9008:4:37",
                  "type": ""
                }
              ],
              "src": "8842:419:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9373:75:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "9395:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9403:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9391:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9391:14:37"
                        },
                        {
                          "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "9407:33:37",
                          "type": "",
                          "value": "ERC20: mint to the zero address"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9384:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9384:57:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9384:57:37"
                  }
                ]
              },
              "name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "9365:6:37",
                  "type": ""
                }
              ],
              "src": "9267:181:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9600:220:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "9610:74:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "9676:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9681:2:37",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "9617:58:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9617:67:37"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "9610:3:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "9782:3:37"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
                        "nodeType": "YulIdentifier",
                        "src": "9693:88:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9693:93:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9693:93:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "9795:19:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "9806:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9811:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "9802:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9802:12:37"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "9795:3:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "9588:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "9596:3:37",
                  "type": ""
                }
              ],
              "src": "9454:366:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9997:248:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "10007:26:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "10019:9:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10030:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "10015:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10015:18:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "10007:4:37"
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
                              "src": "10054:9:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10065:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10050:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10050:17:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "10073:4:37"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "10079:9:37"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "10069:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10069:20:37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10043:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10043:47:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10043:47:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "10099:139:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "10233:4:37"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "10107:124:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10107:131:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "10099:4:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "9977:9:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "9992:4:37",
                  "type": ""
                }
              ],
              "src": "9826:419:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10357:60:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "10379:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10387:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10375:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10375:14:37"
                        },
                        {
                          "hexValue": "41424f56455f4d41585f535550504c59",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "10391:18:37",
                          "type": "",
                          "value": "ABOVE_MAX_SUPPLY"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10368:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10368:42:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10368:42:37"
                  }
                ]
              },
              "name": "store_literal_in_memory_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "10349:6:37",
                  "type": ""
                }
              ],
              "src": "10251:166:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10569:220:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "10579:74:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "10645:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10650:2:37",
                          "type": "",
                          "value": "16"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "10586:58:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10586:67:37"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "10579:3:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "10751:3:37"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff",
                        "nodeType": "YulIdentifier",
                        "src": "10662:88:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10662:93:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10662:93:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "10764:19:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "10775:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10780:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "10771:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10771:12:37"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "10764:3:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "10557:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "10565:3:37",
                  "type": ""
                }
              ],
              "src": "10423:366:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10966:248:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "10976:26:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "10988:9:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10999:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "10984:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10984:18:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "10976:4:37"
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
                              "src": "11023:9:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11034:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11019:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11019:17:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "11042:4:37"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "11048:9:37"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "11038:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11038:20:37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "11012:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11012:47:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11012:47:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "11068:139:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "11202:4:37"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "11076:124:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11076:131:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "11068:4:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "10946:9:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "10961:4:37",
                  "type": ""
                }
              ],
              "src": "10795:419:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11271:51:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "11281:34:37",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11306:1:37",
                          "type": "",
                          "value": "1"
                        },
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "11309:5:37"
                        }
                      ],
                      "functionName": {
                        "name": "shr",
                        "nodeType": "YulIdentifier",
                        "src": "11302:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11302:13:37"
                    },
                    "variableNames": [
                      {
                        "name": "newValue",
                        "nodeType": "YulIdentifier",
                        "src": "11281:8:37"
                      }
                    ]
                  }
                ]
              },
              "name": "shift_right_1_unsigned",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "11252:5:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "newValue",
                  "nodeType": "YulTypedName",
                  "src": "11262:8:37",
                  "type": ""
                }
              ],
              "src": "11220:102:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11401:775:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "11411:15:37",
                    "value": {
                      "name": "_power",
                      "nodeType": "YulIdentifier",
                      "src": "11420:6:37"
                    },
                    "variableNames": [
                      {
                        "name": "power",
                        "nodeType": "YulIdentifier",
                        "src": "11411:5:37"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "11435:14:37",
                    "value": {
                      "name": "_base",
                      "nodeType": "YulIdentifier",
                      "src": "11444:5:37"
                    },
                    "variableNames": [
                      {
                        "name": "base",
                        "nodeType": "YulIdentifier",
                        "src": "11435:4:37"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "11493:677:37",
                      "statements": [
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "11581:22:37",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "panic_error_0x11",
                                    "nodeType": "YulIdentifier",
                                    "src": "11583:16:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "11583:18:37"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "11583:18:37"
                              }
                            ]
                          },
                          "condition": {
                            "arguments": [
                              {
                                "name": "base",
                                "nodeType": "YulIdentifier",
                                "src": "11559:4:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "max",
                                    "nodeType": "YulIdentifier",
                                    "src": "11569:3:37"
                                  },
                                  {
                                    "name": "base",
                                    "nodeType": "YulIdentifier",
                                    "src": "11574:4:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "div",
                                  "nodeType": "YulIdentifier",
                                  "src": "11565:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "11565:14:37"
                              }
                            ],
                            "functionName": {
                              "name": "gt",
                              "nodeType": "YulIdentifier",
                              "src": "11556:2:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11556:24:37"
                          },
                          "nodeType": "YulIf",
                          "src": "11553:50:37"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "11648:419:37",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "12028:25:37",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "power",
                                      "nodeType": "YulIdentifier",
                                      "src": "12041:5:37"
                                    },
                                    {
                                      "name": "base",
                                      "nodeType": "YulIdentifier",
                                      "src": "12048:4:37"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mul",
                                    "nodeType": "YulIdentifier",
                                    "src": "12037:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "12037:16:37"
                                },
                                "variableNames": [
                                  {
                                    "name": "power",
                                    "nodeType": "YulIdentifier",
                                    "src": "12028:5:37"
                                  }
                                ]
                              }
                            ]
                          },
                          "condition": {
                            "arguments": [
                              {
                                "name": "exponent",
                                "nodeType": "YulIdentifier",
                                "src": "11623:8:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "11633:1:37",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "11619:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11619:16:37"
                          },
                          "nodeType": "YulIf",
                          "src": "11616:451:37"
                        },
                        {
                          "nodeType": "YulAssignment",
                          "src": "12080:23:37",
                          "value": {
                            "arguments": [
                              {
                                "name": "base",
                                "nodeType": "YulIdentifier",
                                "src": "12092:4:37"
                              },
                              {
                                "name": "base",
                                "nodeType": "YulIdentifier",
                                "src": "12098:4:37"
                              }
                            ],
                            "functionName": {
                              "name": "mul",
                              "nodeType": "YulIdentifier",
                              "src": "12088:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "12088:15:37"
                          },
                          "variableNames": [
                            {
                              "name": "base",
                              "nodeType": "YulIdentifier",
                              "src": "12080:4:37"
                            }
                          ]
                        },
                        {
                          "nodeType": "YulAssignment",
                          "src": "12116:44:37",
                          "value": {
                            "arguments": [
                              {
                                "name": "exponent",
                                "nodeType": "YulIdentifier",
                                "src": "12151:8:37"
                              }
                            ],
                            "functionName": {
                              "name": "shift_right_1_unsigned",
                              "nodeType": "YulIdentifier",
                              "src": "12128:22:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "12128:32:37"
                          },
                          "variableNames": [
                            {
                              "name": "exponent",
                              "nodeType": "YulIdentifier",
                              "src": "12116:8:37"
                            }
                          ]
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "exponent",
                          "nodeType": "YulIdentifier",
                          "src": "11469:8:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11479:1:37",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "11466:2:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11466:15:37"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "11482:2:37",
                      "statements": []
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "11462:3:37",
                      "statements": []
                    },
                    "src": "11458:712:37"
                  }
                ]
              },
              "name": "checked_exp_helper",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "_power",
                  "nodeType": "YulTypedName",
                  "src": "11356:6:37",
                  "type": ""
                },
                {
                  "name": "_base",
                  "nodeType": "YulTypedName",
                  "src": "11364:5:37",
                  "type": ""
                },
                {
                  "name": "exponent",
                  "nodeType": "YulTypedName",
                  "src": "11371:8:37",
                  "type": ""
                },
                {
                  "name": "max",
                  "nodeType": "YulTypedName",
                  "src": "11381:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "power",
                  "nodeType": "YulTypedName",
                  "src": "11389:5:37",
                  "type": ""
                },
                {
                  "name": "base",
                  "nodeType": "YulTypedName",
                  "src": "11396:4:37",
                  "type": ""
                }
              ],
              "src": "11328:848:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "12242:1013:37",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "12437:20:37",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "12439:10:37",
                          "value": {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12448:1:37",
                            "type": "",
                            "value": "1"
                          },
                          "variableNames": [
                            {
                              "name": "power",
                              "nodeType": "YulIdentifier",
                              "src": "12439:5:37"
                            }
                          ]
                        },
                        {
                          "nodeType": "YulLeave",
                          "src": "12450:5:37"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "exponent",
                          "nodeType": "YulIdentifier",
                          "src": "12427:8:37"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "12420:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12420:16:37"
                    },
                    "nodeType": "YulIf",
                    "src": "12417:40:37"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "12482:20:37",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "12484:10:37",
                          "value": {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12493:1:37",
                            "type": "",
                            "value": "0"
                          },
                          "variableNames": [
                            {
                              "name": "power",
                              "nodeType": "YulIdentifier",
                              "src": "12484:5:37"
                            }
                          ]
                        },
                        {
                          "nodeType": "YulLeave",
                          "src": "12495:5:37"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "base",
                          "nodeType": "YulIdentifier",
                          "src": "12476:4:37"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "12469:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12469:12:37"
                    },
                    "nodeType": "YulIf",
                    "src": "12466:36:37"
                  },
                  {
                    "cases": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "12612:20:37",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "12614:10:37",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "12623:1:37",
                                "type": "",
                                "value": "1"
                              },
                              "variableNames": [
                                {
                                  "name": "power",
                                  "nodeType": "YulIdentifier",
                                  "src": "12614:5:37"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulLeave",
                              "src": "12625:5:37"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "12605:27:37",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12610:1:37",
                          "type": "",
                          "value": "1"
                        }
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "12656:176:37",
                          "statements": [
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "12691:22:37",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "panic_error_0x11",
                                        "nodeType": "YulIdentifier",
                                        "src": "12693:16:37"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "12693:18:37"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "12693:18:37"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "exponent",
                                    "nodeType": "YulIdentifier",
                                    "src": "12676:8:37"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "12686:3:37",
                                    "type": "",
                                    "value": "255"
                                  }
                                ],
                                "functionName": {
                                  "name": "gt",
                                  "nodeType": "YulIdentifier",
                                  "src": "12673:2:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "12673:17:37"
                              },
                              "nodeType": "YulIf",
                              "src": "12670:43:37"
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "12726:25:37",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "12739:1:37",
                                    "type": "",
                                    "value": "2"
                                  },
                                  {
                                    "name": "exponent",
                                    "nodeType": "YulIdentifier",
                                    "src": "12742:8:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "exp",
                                  "nodeType": "YulIdentifier",
                                  "src": "12735:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "12735:16:37"
                              },
                              "variableNames": [
                                {
                                  "name": "power",
                                  "nodeType": "YulIdentifier",
                                  "src": "12726:5:37"
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "12782:22:37",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "panic_error_0x11",
                                        "nodeType": "YulIdentifier",
                                        "src": "12784:16:37"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "12784:18:37"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "12784:18:37"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "power",
                                    "nodeType": "YulIdentifier",
                                    "src": "12770:5:37"
                                  },
                                  {
                                    "name": "max",
                                    "nodeType": "YulIdentifier",
                                    "src": "12777:3:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "gt",
                                  "nodeType": "YulIdentifier",
                                  "src": "12767:2:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "12767:14:37"
                              },
                              "nodeType": "YulIf",
                              "src": "12764:40:37"
                            },
                            {
                              "nodeType": "YulLeave",
                              "src": "12817:5:37"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "12641:191:37",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12646:1:37",
                          "type": "",
                          "value": "2"
                        }
                      }
                    ],
                    "expression": {
                      "name": "base",
                      "nodeType": "YulIdentifier",
                      "src": "12562:4:37"
                    },
                    "nodeType": "YulSwitch",
                    "src": "12555:277:37"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "12964:123:37",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "12978:28:37",
                          "value": {
                            "arguments": [
                              {
                                "name": "base",
                                "nodeType": "YulIdentifier",
                                "src": "12991:4:37"
                              },
                              {
                                "name": "exponent",
                                "nodeType": "YulIdentifier",
                                "src": "12997:8:37"
                              }
                            ],
                            "functionName": {
                              "name": "exp",
                              "nodeType": "YulIdentifier",
                              "src": "12987:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "12987:19:37"
                          },
                          "variableNames": [
                            {
                              "name": "power",
                              "nodeType": "YulIdentifier",
                              "src": "12978:5:37"
                            }
                          ]
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "13037:22:37",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "panic_error_0x11",
                                    "nodeType": "YulIdentifier",
                                    "src": "13039:16:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "13039:18:37"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "13039:18:37"
                              }
                            ]
                          },
                          "condition": {
                            "arguments": [
                              {
                                "name": "power",
                                "nodeType": "YulIdentifier",
                                "src": "13025:5:37"
                              },
                              {
                                "name": "max",
                                "nodeType": "YulIdentifier",
                                "src": "13032:3:37"
                              }
                            ],
                            "functionName": {
                              "name": "gt",
                              "nodeType": "YulIdentifier",
                              "src": "13022:2:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "13022:14:37"
                          },
                          "nodeType": "YulIf",
                          "src": "13019:40:37"
                        },
                        {
                          "nodeType": "YulLeave",
                          "src": "13072:5:37"
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
                                  "name": "base",
                                  "nodeType": "YulIdentifier",
                                  "src": "12867:4:37"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "12873:2:37",
                                  "type": "",
                                  "value": "11"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "12864:2:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12864:12:37"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "exponent",
                                  "nodeType": "YulIdentifier",
                                  "src": "12881:8:37"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "12891:2:37",
                                  "type": "",
                                  "value": "78"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "12878:2:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12878:16:37"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "12860:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12860:35:37"
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "base",
                                  "nodeType": "YulIdentifier",
                                  "src": "12916:4:37"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "12922:3:37",
                                  "type": "",
                                  "value": "307"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "12913:2:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12913:13:37"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "exponent",
                                  "nodeType": "YulIdentifier",
                                  "src": "12931:8:37"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "12941:2:37",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "12928:2:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12928:16:37"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "12909:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12909:36:37"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "12844:2:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12844:111:37"
                    },
                    "nodeType": "YulIf",
                    "src": "12841:246:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "13097:57:37",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "13131:1:37",
                          "type": "",
                          "value": "1"
                        },
                        {
                          "name": "base",
                          "nodeType": "YulIdentifier",
                          "src": "13134:4:37"
                        },
                        {
                          "name": "exponent",
                          "nodeType": "YulIdentifier",
                          "src": "13140:8:37"
                        },
                        {
                          "name": "max",
                          "nodeType": "YulIdentifier",
                          "src": "13150:3:37"
                        }
                      ],
                      "functionName": {
                        "name": "checked_exp_helper",
                        "nodeType": "YulIdentifier",
                        "src": "13112:18:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13112:42:37"
                    },
                    "variableNames": [
                      {
                        "name": "power",
                        "nodeType": "YulIdentifier",
                        "src": "13097:5:37"
                      },
                      {
                        "name": "base",
                        "nodeType": "YulIdentifier",
                        "src": "13104:4:37"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "13193:22:37",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "13195:16:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "13195:18:37"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "13195:18:37"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "power",
                          "nodeType": "YulIdentifier",
                          "src": "13170:5:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "max",
                              "nodeType": "YulIdentifier",
                              "src": "13181:3:37"
                            },
                            {
                              "name": "base",
                              "nodeType": "YulIdentifier",
                              "src": "13186:4:37"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "13177:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13177:14:37"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "13167:2:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13167:25:37"
                    },
                    "nodeType": "YulIf",
                    "src": "13164:51:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "13224:25:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "power",
                          "nodeType": "YulIdentifier",
                          "src": "13237:5:37"
                        },
                        {
                          "name": "base",
                          "nodeType": "YulIdentifier",
                          "src": "13244:4:37"
                        }
                      ],
                      "functionName": {
                        "name": "mul",
                        "nodeType": "YulIdentifier",
                        "src": "13233:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13233:16:37"
                    },
                    "variableNames": [
                      {
                        "name": "power",
                        "nodeType": "YulIdentifier",
                        "src": "13224:5:37"
                      }
                    ]
                  }
                ]
              },
              "name": "checked_exp_unsigned",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "base",
                  "nodeType": "YulTypedName",
                  "src": "12212:4:37",
                  "type": ""
                },
                {
                  "name": "exponent",
                  "nodeType": "YulTypedName",
                  "src": "12218:8:37",
                  "type": ""
                },
                {
                  "name": "max",
                  "nodeType": "YulTypedName",
                  "src": "12228:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "power",
                  "nodeType": "YulTypedName",
                  "src": "12236:5:37",
                  "type": ""
                }
              ],
              "src": "12182:1073:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "13325:217:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "13335:31:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "base",
                          "nodeType": "YulIdentifier",
                          "src": "13361:4:37"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "13343:17:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13343:23:37"
                    },
                    "variableNames": [
                      {
                        "name": "base",
                        "nodeType": "YulIdentifier",
                        "src": "13335:4:37"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "13375:37:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "exponent",
                          "nodeType": "YulIdentifier",
                          "src": "13403:8:37"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint8",
                        "nodeType": "YulIdentifier",
                        "src": "13387:15:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13387:25:37"
                    },
                    "variableNames": [
                      {
                        "name": "exponent",
                        "nodeType": "YulIdentifier",
                        "src": "13375:8:37"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "13422:113:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "base",
                          "nodeType": "YulIdentifier",
                          "src": "13452:4:37"
                        },
                        {
                          "name": "exponent",
                          "nodeType": "YulIdentifier",
                          "src": "13458:8:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "13468:66:37",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "checked_exp_unsigned",
                        "nodeType": "YulIdentifier",
                        "src": "13431:20:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13431:104:37"
                    },
                    "variableNames": [
                      {
                        "name": "power",
                        "nodeType": "YulIdentifier",
                        "src": "13422:5:37"
                      }
                    ]
                  }
                ]
              },
              "name": "checked_exp_t_uint256_t_uint8",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "base",
                  "nodeType": "YulTypedName",
                  "src": "13300:4:37",
                  "type": ""
                },
                {
                  "name": "exponent",
                  "nodeType": "YulTypedName",
                  "src": "13306:8:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "power",
                  "nodeType": "YulTypedName",
                  "src": "13319:5:37",
                  "type": ""
                }
              ],
              "src": "13261:281:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "13596:362:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "13606:25:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "13629:1:37"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "13611:17:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13611:20:37"
                    },
                    "variableNames": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "13606:1:37"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "13640:25:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "13663:1:37"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "13645:17:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13645:20:37"
                    },
                    "variableNames": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "13640:1:37"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "13674:28:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "13697:1:37"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "13700:1:37"
                        }
                      ],
                      "functionName": {
                        "name": "mul",
                        "nodeType": "YulIdentifier",
                        "src": "13693:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13693:9:37"
                    },
                    "variables": [
                      {
                        "name": "product_raw",
                        "nodeType": "YulTypedName",
                        "src": "13678:11:37",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "13711:41:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "product_raw",
                          "nodeType": "YulIdentifier",
                          "src": "13740:11:37"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "13722:17:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13722:30:37"
                    },
                    "variableNames": [
                      {
                        "name": "product",
                        "nodeType": "YulIdentifier",
                        "src": "13711:7:37"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "13929:22:37",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "13931:16:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "13931:18:37"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "13931:18:37"
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
                                  "src": "13862:1:37"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nodeType": "YulIdentifier",
                                "src": "13855:6:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "13855:9:37"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "13885:1:37"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "product",
                                      "nodeType": "YulIdentifier",
                                      "src": "13892:7:37"
                                    },
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "13901:1:37"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "13888:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "13888:15:37"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "13882:2:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "13882:22:37"
                            }
                          ],
                          "functionName": {
                            "name": "or",
                            "nodeType": "YulIdentifier",
                            "src": "13835:2:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13835:83:37"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "13815:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13815:113:37"
                    },
                    "nodeType": "YulIf",
                    "src": "13812:139:37"
                  }
                ]
              },
              "name": "checked_mul_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "13579:1:37",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "13582:1:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "product",
                  "nodeType": "YulTypedName",
                  "src": "13588:7:37",
                  "type": ""
                }
              ],
              "src": "13548:410:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "14070:54:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "14092:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "14100:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "14088:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14088:14:37"
                        },
                        {
                          "hexValue": "57524954455f4f4e4345",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "14104:12:37",
                          "type": "",
                          "value": "WRITE_ONCE"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "14081:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14081:36:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "14081:36:37"
                  }
                ]
              },
              "name": "store_literal_in_memory_b2a82e4e45b336ce6c44d9804b6c2ced0fb24d6ef1a76c7dfe3cfb5d8d132923",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "14062:6:37",
                  "type": ""
                }
              ],
              "src": "13964:160:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "14276:220:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "14286:74:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "14352:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "14357:2:37",
                          "type": "",
                          "value": "10"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "14293:58:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14293:67:37"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "14286:3:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "14458:3:37"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_b2a82e4e45b336ce6c44d9804b6c2ced0fb24d6ef1a76c7dfe3cfb5d8d132923",
                        "nodeType": "YulIdentifier",
                        "src": "14369:88:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14369:93:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "14369:93:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "14471:19:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "14482:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "14487:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "14478:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14478:12:37"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "14471:3:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_b2a82e4e45b336ce6c44d9804b6c2ced0fb24d6ef1a76c7dfe3cfb5d8d132923_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "14264:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "14272:3:37",
                  "type": ""
                }
              ],
              "src": "14130:366:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "14673:248:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "14683:26:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "14695:9:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "14706:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "14691:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14691:18:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "14683:4:37"
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
                              "src": "14730:9:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "14741:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "14726:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14726:17:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "14749:4:37"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "14755:9:37"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "14745:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14745:20:37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "14719:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14719:47:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "14719:47:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "14775:139:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "14909:4:37"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_b2a82e4e45b336ce6c44d9804b6c2ced0fb24d6ef1a76c7dfe3cfb5d8d132923_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "14783:124:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14783:131:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "14775:4:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_b2a82e4e45b336ce6c44d9804b6c2ced0fb24d6ef1a76c7dfe3cfb5d8d132923__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "14653:9:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "14668:4:37",
                  "type": ""
                }
              ],
              "src": "14502:419:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "15033:118:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "15055:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15063:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15051:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15051:14:37"
                        },
                        {
                          "hexValue": "45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "15067:34:37",
                          "type": "",
                          "value": "ERC20: decreased allowance below"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "15044:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15044:58:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15044:58:37"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "15123:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15131:2:37",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15119:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15119:15:37"
                        },
                        {
                          "hexValue": "207a65726f",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "15136:7:37",
                          "type": "",
                          "value": " zero"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "15112:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15112:32:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15112:32:37"
                  }
                ]
              },
              "name": "store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "15025:6:37",
                  "type": ""
                }
              ],
              "src": "14927:224:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "15303:220:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "15313:74:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "15379:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "15384:2:37",
                          "type": "",
                          "value": "37"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "15320:58:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15320:67:37"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "15313:3:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "15485:3:37"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8",
                        "nodeType": "YulIdentifier",
                        "src": "15396:88:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15396:93:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15396:93:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "15498:19:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "15509:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "15514:2:37",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "15505:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15505:12:37"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "15498:3:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "15291:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "15299:3:37",
                  "type": ""
                }
              ],
              "src": "15157:366:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "15700:248:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "15710:26:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "15722:9:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "15733:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "15718:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15718:18:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "15710:4:37"
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
                              "src": "15757:9:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15768:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15753:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15753:17:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "15776:4:37"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "15782:9:37"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "15772:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15772:20:37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "15746:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15746:47:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15746:47:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "15802:139:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "15936:4:37"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "15810:124:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15810:131:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "15802:4:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "15680:9:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "15695:4:37",
                  "type": ""
                }
              ],
              "src": "15529:419:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "16060:117:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "16082:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16090:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "16078:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16078:14:37"
                        },
                        {
                          "hexValue": "45524332303a20617070726f76652066726f6d20746865207a65726f20616464",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "16094:34:37",
                          "type": "",
                          "value": "ERC20: approve from the zero add"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "16071:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16071:58:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "16071:58:37"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "16150:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16158:2:37",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "16146:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16146:15:37"
                        },
                        {
                          "hexValue": "72657373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "16163:6:37",
                          "type": "",
                          "value": "ress"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "16139:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16139:31:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "16139:31:37"
                  }
                ]
              },
              "name": "store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "16052:6:37",
                  "type": ""
                }
              ],
              "src": "15954:223:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "16329:220:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "16339:74:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "16405:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "16410:2:37",
                          "type": "",
                          "value": "36"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "16346:58:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16346:67:37"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "16339:3:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "16511:3:37"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208",
                        "nodeType": "YulIdentifier",
                        "src": "16422:88:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16422:93:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "16422:93:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "16524:19:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "16535:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "16540:2:37",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "16531:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16531:12:37"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "16524:3:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "16317:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "16325:3:37",
                  "type": ""
                }
              ],
              "src": "16183:366:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "16726:248:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "16736:26:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "16748:9:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "16759:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "16744:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16744:18:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "16736:4:37"
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
                              "src": "16783:9:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16794:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "16779:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16779:17:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "16802:4:37"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "16808:9:37"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "16798:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16798:20:37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "16772:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16772:47:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "16772:47:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "16828:139:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "16962:4:37"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "16836:124:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16836:131:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "16828:4:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "16706:9:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "16721:4:37",
                  "type": ""
                }
              ],
              "src": "16555:419:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "17086:115:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "17108:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17116:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "17104:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17104:14:37"
                        },
                        {
                          "hexValue": "45524332303a20617070726f766520746f20746865207a65726f206164647265",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "17120:34:37",
                          "type": "",
                          "value": "ERC20: approve to the zero addre"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "17097:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17097:58:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "17097:58:37"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "17176:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17184:2:37",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "17172:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17172:15:37"
                        },
                        {
                          "hexValue": "7373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "17189:4:37",
                          "type": "",
                          "value": "ss"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "17165:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17165:29:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "17165:29:37"
                  }
                ]
              },
              "name": "store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "17078:6:37",
                  "type": ""
                }
              ],
              "src": "16980:221:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "17353:220:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "17363:74:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "17429:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "17434:2:37",
                          "type": "",
                          "value": "34"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "17370:58:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17370:67:37"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "17363:3:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "17535:3:37"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029",
                        "nodeType": "YulIdentifier",
                        "src": "17446:88:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17446:93:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "17446:93:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "17548:19:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "17559:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "17564:2:37",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "17555:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17555:12:37"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "17548:3:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "17341:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "17349:3:37",
                  "type": ""
                }
              ],
              "src": "17207:366:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "17750:248:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "17760:26:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "17772:9:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "17783:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "17768:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17768:18:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "17760:4:37"
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
                              "src": "17807:9:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17818:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "17803:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17803:17:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "17826:4:37"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "17832:9:37"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "17822:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17822:20:37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "17796:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17796:47:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "17796:47:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "17852:139:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "17986:4:37"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "17860:124:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17860:131:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "17852:4:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "17730:9:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "17745:4:37",
                  "type": ""
                }
              ],
              "src": "17579:419:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "18110:73:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "18132:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "18140:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "18128:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18128:14:37"
                        },
                        {
                          "hexValue": "45524332303a20696e73756666696369656e7420616c6c6f77616e6365",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "18144:31:37",
                          "type": "",
                          "value": "ERC20: insufficient allowance"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "18121:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18121:55:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "18121:55:37"
                  }
                ]
              },
              "name": "store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "18102:6:37",
                  "type": ""
                }
              ],
              "src": "18004:179:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "18335:220:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "18345:74:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "18411:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "18416:2:37",
                          "type": "",
                          "value": "29"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "18352:58:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18352:67:37"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "18345:3:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "18517:3:37"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe",
                        "nodeType": "YulIdentifier",
                        "src": "18428:88:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18428:93:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "18428:93:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "18530:19:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "18541:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "18546:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "18537:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18537:12:37"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "18530:3:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "18323:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "18331:3:37",
                  "type": ""
                }
              ],
              "src": "18189:366:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "18732:248:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "18742:26:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "18754:9:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "18765:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "18750:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18750:18:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "18742:4:37"
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
                              "src": "18789:9:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "18800:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "18785:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18785:17:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "18808:4:37"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "18814:9:37"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "18804:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18804:20:37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "18778:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18778:47:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "18778:47:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "18834:139:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "18968:4:37"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "18842:124:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18842:131:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "18834:4:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "18712:9:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "18727:4:37",
                  "type": ""
                }
              ],
              "src": "18561:419:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "19092:114:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "19114:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "19122:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "19110:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19110:14:37"
                        },
                        {
                          "hexValue": "45524332303a206275726e2066726f6d20746865207a65726f20616464726573",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "19126:34:37",
                          "type": "",
                          "value": "ERC20: burn from the zero addres"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "19103:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19103:58:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "19103:58:37"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "19182:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "19190:2:37",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "19178:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19178:15:37"
                        },
                        {
                          "hexValue": "73",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "19195:3:37",
                          "type": "",
                          "value": "s"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "19171:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19171:28:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "19171:28:37"
                  }
                ]
              },
              "name": "store_literal_in_memory_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "19084:6:37",
                  "type": ""
                }
              ],
              "src": "18986:220:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "19358:220:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "19368:74:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "19434:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "19439:2:37",
                          "type": "",
                          "value": "33"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "19375:58:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19375:67:37"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "19368:3:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "19540:3:37"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f",
                        "nodeType": "YulIdentifier",
                        "src": "19451:88:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19451:93:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "19451:93:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "19553:19:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "19564:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "19569:2:37",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "19560:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19560:12:37"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "19553:3:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "19346:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "19354:3:37",
                  "type": ""
                }
              ],
              "src": "19212:366:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "19755:248:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "19765:26:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "19777:9:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "19788:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "19773:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19773:18:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "19765:4:37"
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
                              "src": "19812:9:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "19823:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "19808:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19808:17:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "19831:4:37"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "19837:9:37"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "19827:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19827:20:37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "19801:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19801:47:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "19801:47:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "19857:139:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "19991:4:37"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "19865:124:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19865:131:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "19857:4:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "19735:9:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "19750:4:37",
                  "type": ""
                }
              ],
              "src": "19584:419:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "20115:115:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "20137:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "20145:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "20133:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20133:14:37"
                        },
                        {
                          "hexValue": "45524332303a206275726e20616d6f756e7420657863656564732062616c616e",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "20149:34:37",
                          "type": "",
                          "value": "ERC20: burn amount exceeds balan"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "20126:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20126:58:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "20126:58:37"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "20205:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "20213:2:37",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "20201:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20201:15:37"
                        },
                        {
                          "hexValue": "6365",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "20218:4:37",
                          "type": "",
                          "value": "ce"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "20194:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20194:29:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "20194:29:37"
                  }
                ]
              },
              "name": "store_literal_in_memory_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "20107:6:37",
                  "type": ""
                }
              ],
              "src": "20009:221:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "20382:220:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "20392:74:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "20458:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "20463:2:37",
                          "type": "",
                          "value": "34"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "20399:58:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20399:67:37"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "20392:3:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "20564:3:37"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd",
                        "nodeType": "YulIdentifier",
                        "src": "20475:88:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20475:93:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "20475:93:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "20577:19:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "20588:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "20593:2:37",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "20584:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20584:12:37"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "20577:3:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "20370:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "20378:3:37",
                  "type": ""
                }
              ],
              "src": "20236:366:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "20779:248:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "20789:26:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "20801:9:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "20812:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "20797:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20797:18:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "20789:4:37"
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
                              "src": "20836:9:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "20847:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "20832:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20832:17:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "20855:4:37"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "20861:9:37"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "20851:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20851:20:37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "20825:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20825:47:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "20825:47:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "20881:139:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "21015:4:37"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "20889:124:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20889:131:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "20881:4:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "20759:9:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "20774:4:37",
                  "type": ""
                }
              ],
              "src": "20608:419:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "21139:118:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "21161:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "21169:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "21157:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "21157:14:37"
                        },
                        {
                          "hexValue": "45524332303a207472616e736665722066726f6d20746865207a65726f206164",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "21173:34:37",
                          "type": "",
                          "value": "ERC20: transfer from the zero ad"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "21150:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21150:58:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "21150:58:37"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "21229:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "21237:2:37",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "21225:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "21225:15:37"
                        },
                        {
                          "hexValue": "6472657373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "21242:7:37",
                          "type": "",
                          "value": "dress"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "21218:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21218:32:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "21218:32:37"
                  }
                ]
              },
              "name": "store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "21131:6:37",
                  "type": ""
                }
              ],
              "src": "21033:224:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "21409:220:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "21419:74:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "21485:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "21490:2:37",
                          "type": "",
                          "value": "37"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "21426:58:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21426:67:37"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "21419:3:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "21591:3:37"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea",
                        "nodeType": "YulIdentifier",
                        "src": "21502:88:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21502:93:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "21502:93:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "21604:19:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "21615:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "21620:2:37",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "21611:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21611:12:37"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "21604:3:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "21397:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "21405:3:37",
                  "type": ""
                }
              ],
              "src": "21263:366:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "21806:248:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "21816:26:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "21828:9:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "21839:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "21824:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21824:18:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "21816:4:37"
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
                              "src": "21863:9:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "21874:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "21859:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "21859:17:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "21882:4:37"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "21888:9:37"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "21878:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "21878:20:37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "21852:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21852:47:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "21852:47:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "21908:139:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "22042:4:37"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "21916:124:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21916:131:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "21908:4:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "21786:9:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "21801:4:37",
                  "type": ""
                }
              ],
              "src": "21635:419:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "22166:116:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "22188:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "22196:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "22184:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "22184:14:37"
                        },
                        {
                          "hexValue": "45524332303a207472616e7366657220746f20746865207a65726f2061646472",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "22200:34:37",
                          "type": "",
                          "value": "ERC20: transfer to the zero addr"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "22177:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22177:58:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "22177:58:37"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "22256:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "22264:2:37",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "22252:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "22252:15:37"
                        },
                        {
                          "hexValue": "657373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "22269:5:37",
                          "type": "",
                          "value": "ess"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "22245:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22245:30:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "22245:30:37"
                  }
                ]
              },
              "name": "store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "22158:6:37",
                  "type": ""
                }
              ],
              "src": "22060:222:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "22434:220:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "22444:74:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "22510:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "22515:2:37",
                          "type": "",
                          "value": "35"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "22451:58:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22451:67:37"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "22444:3:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "22616:3:37"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f",
                        "nodeType": "YulIdentifier",
                        "src": "22527:88:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22527:93:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "22527:93:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "22629:19:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "22640:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "22645:2:37",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "22636:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22636:12:37"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "22629:3:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "22422:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "22430:3:37",
                  "type": ""
                }
              ],
              "src": "22288:366:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "22831:248:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "22841:26:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "22853:9:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "22864:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "22849:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22849:18:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "22841:4:37"
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
                              "src": "22888:9:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "22899:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "22884:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "22884:17:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "22907:4:37"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "22913:9:37"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "22903:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "22903:20:37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "22877:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22877:47:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "22877:47:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "22933:139:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "23067:4:37"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "22941:124:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22941:131:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "22933:4:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "22811:9:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "22826:4:37",
                  "type": ""
                }
              ],
              "src": "22660:419:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "23191:119:37",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "23213:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "23221:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "23209:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23209:14:37"
                        },
                        {
                          "hexValue": "45524332303a207472616e7366657220616d6f756e7420657863656564732062",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "23225:34:37",
                          "type": "",
                          "value": "ERC20: transfer amount exceeds b"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "23202:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23202:58:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "23202:58:37"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "23281:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "23289:2:37",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "23277:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23277:15:37"
                        },
                        {
                          "hexValue": "616c616e6365",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "23294:8:37",
                          "type": "",
                          "value": "alance"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "23270:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23270:33:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "23270:33:37"
                  }
                ]
              },
              "name": "store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "23183:6:37",
                  "type": ""
                }
              ],
              "src": "23085:225:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "23462:220:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "23472:74:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "23538:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "23543:2:37",
                          "type": "",
                          "value": "38"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "23479:58:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23479:67:37"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "23472:3:37"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "23644:3:37"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6",
                        "nodeType": "YulIdentifier",
                        "src": "23555:88:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23555:93:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "23555:93:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "23657:19:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "23668:3:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "23673:2:37",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "23664:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23664:12:37"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "23657:3:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "23450:3:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "23458:3:37",
                  "type": ""
                }
              ],
              "src": "23316:366:37"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "23859:248:37",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "23869:26:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "23881:9:37"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "23892:2:37",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "23877:3:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23877:18:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "23869:4:37"
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
                              "src": "23916:9:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "23927:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "23912:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23912:17:37"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "23935:4:37"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "23941:9:37"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "23931:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23931:20:37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "23905:6:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23905:47:37"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "23905:47:37"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "23961:139:37",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "24095:4:37"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "23969:124:37"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23969:131:37"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "23961:4:37"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "23839:9:37",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "23854:4:37",
                  "type": ""
                }
              ],
              "src": "23688:419:37"
            }
          ]
        },
        "contents": "{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory_with_cleanup(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        mstore(add(dst, length), 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory_with_cleanup(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint8(value) -> cleaned {\n        cleaned := and(value, 0xff)\n    }\n\n    function abi_encode_t_uint8_to_t_uint8_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint8(value))\n    }\n\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint8_to_t_uint8_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function cleanup_t_address_payable(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_payable_to_t_address_payable_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address_payable(value))\n    }\n\n    function abi_encode_tuple_t_address_payable__to_t_address_payable__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_payable_to_t_address_payable_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_contract$_LiquidityPool_$11307(value) -> cleaned {\n        cleaned := cleanup_t_address(value)\n    }\n\n    function validator_revert_t_contract$_LiquidityPool_$11307(value) {\n        if iszero(eq(value, cleanup_t_contract$_LiquidityPool_$11307(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_contract$_LiquidityPool_$11307(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_contract$_LiquidityPool_$11307(value)\n    }\n\n    function abi_decode_tuple_t_contract$_LiquidityPool_$11307(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_contract$_LiquidityPool_$11307(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        sum := add(x, y)\n\n        if gt(x, sum) { panic_error_0x11() }\n\n    }\n\n    function store_literal_in_memory_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20(memPtr) {\n\n        mstore(add(memPtr, 0), \"OWNER_ONLY\")\n\n    }\n\n    function abi_encode_t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 10)\n        store_literal_in_memory_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: mint to the zero address\")\n\n    }\n\n    function abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 31)\n        store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff(memPtr) {\n\n        mstore(add(memPtr, 0), \"ABOVE_MAX_SUPPLY\")\n\n    }\n\n    function abi_encode_t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 16)\n        store_literal_in_memory_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function shift_right_1_unsigned(value) -> newValue {\n        newValue :=\n\n        shr(1, value)\n\n    }\n\n    function checked_exp_helper(_power, _base, exponent, max) -> power, base {\n        power := _power\n        base  := _base\n        for { } gt(exponent, 1) {}\n        {\n            // overflow check for base * base\n            if gt(base, div(max, base)) { panic_error_0x11() }\n            if and(exponent, 1)\n            {\n                // No checks for power := mul(power, base) needed, because the check\n                // for base * base above is sufficient, since:\n                // |power| <= base (proof by induction) and thus:\n                // |power * base| <= base * base <= max <= |min| (for signed)\n                // (this is equally true for signed and unsigned exp)\n                power := mul(power, base)\n            }\n            base := mul(base, base)\n            exponent := shift_right_1_unsigned(exponent)\n        }\n    }\n\n    function checked_exp_unsigned(base, exponent, max) -> power {\n        // This function currently cannot be inlined because of the\n        // \"leave\" statements. We have to improve the optimizer.\n\n        // Note that 0**0 == 1\n        if iszero(exponent) { power := 1 leave }\n        if iszero(base) { power := 0 leave }\n\n        // Specializations for small bases\n        switch base\n        // 0 is handled above\n        case 1 { power := 1 leave }\n        case 2\n        {\n            if gt(exponent, 255) { panic_error_0x11() }\n            power := exp(2, exponent)\n            if gt(power, max) { panic_error_0x11() }\n            leave\n        }\n        if or(\n            and(lt(base, 11), lt(exponent, 78)),\n            and(lt(base, 307), lt(exponent, 32))\n        )\n        {\n            power := exp(base, exponent)\n            if gt(power, max) { panic_error_0x11() }\n            leave\n        }\n\n        power, base := checked_exp_helper(1, base, exponent, max)\n\n        if gt(power, div(max, base)) { panic_error_0x11() }\n        power := mul(power, base)\n    }\n\n    function checked_exp_t_uint256_t_uint8(base, exponent) -> power {\n        base := cleanup_t_uint256(base)\n        exponent := cleanup_t_uint8(exponent)\n\n        power := checked_exp_unsigned(base, exponent, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        let product_raw := mul(x, y)\n        product := cleanup_t_uint256(product_raw)\n\n        // overflow, if x != 0 and y != product/x\n        if iszero(\n            or(\n                iszero(x),\n                eq(y, div(product, x))\n            )\n        ) { panic_error_0x11() }\n\n    }\n\n    function store_literal_in_memory_b2a82e4e45b336ce6c44d9804b6c2ced0fb24d6ef1a76c7dfe3cfb5d8d132923(memPtr) {\n\n        mstore(add(memPtr, 0), \"WRITE_ONCE\")\n\n    }\n\n    function abi_encode_t_stringliteral_b2a82e4e45b336ce6c44d9804b6c2ced0fb24d6ef1a76c7dfe3cfb5d8d132923_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 10)\n        store_literal_in_memory_b2a82e4e45b336ce6c44d9804b6c2ced0fb24d6ef1a76c7dfe3cfb5d8d132923(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_b2a82e4e45b336ce6c44d9804b6c2ced0fb24d6ef1a76c7dfe3cfb5d8d132923__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_b2a82e4e45b336ce6c44d9804b6c2ced0fb24d6ef1a76c7dfe3cfb5d8d132923_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: decreased allowance below\")\n\n        mstore(add(memPtr, 32), \" zero\")\n\n    }\n\n    function abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: approve from the zero add\")\n\n        mstore(add(memPtr, 32), \"ress\")\n\n    }\n\n    function abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 36)\n        store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: approve to the zero addre\")\n\n        mstore(add(memPtr, 32), \"ss\")\n\n    }\n\n    function abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 34)\n        store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: insufficient allowance\")\n\n    }\n\n    function abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 29)\n        store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: burn from the zero addres\")\n\n        mstore(add(memPtr, 32), \"s\")\n\n    }\n\n    function abi_encode_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 33)\n        store_literal_in_memory_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: burn amount exceeds balan\")\n\n        mstore(add(memPtr, 32), \"ce\")\n\n    }\n\n    function abi_encode_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 34)\n        store_literal_in_memory_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer from the zero ad\")\n\n        mstore(add(memPtr, 32), \"dress\")\n\n    }\n\n    function abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer to the zero addr\")\n\n        mstore(add(memPtr, 32), \"ess\")\n\n    }\n\n    function abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 35)\n        store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer amount exceeds b\")\n\n        mstore(add(memPtr, 32), \"alance\")\n\n    }\n\n    function abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n}\n",
        "id": 37,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "sourceMap": "429:2401:26:-:0;;;915:306;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1976:113:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2050:5;2042;:13;;;;;;:::i;:::-;;2075:7;2065;:17;;;;;;:::i;:::-;;1976:113;;1017:10:26::1;:8;;;:10;;:::i;:::-;1013:2;:14;;;;:::i;:::-;1004:6;:23;;;;:::i;:::-;991:10;:36;;;;1037:32;1051:4;1058:10;;1037:5;;;:32;;:::i;:::-;1088:10;1080:5;;:18;;;;;;;;;;;;;;;;;;1126:8;1109:14;;:25;;;;;;;;;;;;;;;;;;915:306:::0;429:2401;;3091:91:9;3149:5;3173:2;3166:9;;3091:91;:::o;8567:535::-;8669:1;8650:21;;:7;:21;;;8642:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;8718:49;8747:1;8751:7;8760:6;8718:20;;;:49;;:::i;:::-;8794:6;8778:12;;:22;;;;;;;:::i;:::-;;;;;;;;8968:6;8946:9;:18;8956:7;8946:18;;;;;;;;;;;;;;;;:28;;;;;;;;;;;9020:7;8999:37;;9016:1;8999:37;;;9029:6;8999:37;;;;;;:::i;:::-;;;;;;;;9047:48;9075:1;9079:7;9088:6;9047:19;;;:48;;:::i;:::-;8567:535;;:::o;12180:121::-;;;;:::o;12889:120::-;;;;:::o;88:117:37:-;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:104::-;511:7;540:24;558:5;540:24;:::i;:::-;529:35;;466:104;;;:::o;576:138::-;657:32;683:5;657:32;:::i;:::-;650:5;647:43;637:71;;704:1;701;694:12;637:71;576:138;:::o;720:159::-;785:5;816:6;810:13;801:22;;832:41;867:5;832:41;:::i;:::-;720:159;;;;:::o;885:367::-;963:6;1012:2;1000:9;991:7;987:23;983:32;980:119;;;1018:79;;:::i;:::-;980:119;1138:1;1163:72;1227:7;1218:6;1207:9;1203:22;1163:72;:::i;:::-;1153:82;;1109:136;885:367;;;;:::o;1258:99::-;1310:6;1344:5;1338:12;1328:22;;1258:99;;;:::o;1363:180::-;1411:77;1408:1;1401:88;1508:4;1505:1;1498:15;1532:4;1529:1;1522:15;1549:180;1597:77;1594:1;1587:88;1694:4;1691:1;1684:15;1718:4;1715:1;1708:15;1735:320;1779:6;1816:1;1810:4;1806:12;1796:22;;1863:1;1857:4;1853:12;1884:18;1874:81;;1940:4;1932:6;1928:17;1918:27;;1874:81;2002:2;1994:6;1991:14;1971:18;1968:38;1965:84;;2021:18;;:::i;:::-;1965:84;1786:269;1735:320;;;:::o;2061:141::-;2110:4;2133:3;2125:11;;2156:3;2153:1;2146:14;2190:4;2187:1;2177:18;2169:26;;2061:141;;;:::o;2208:93::-;2245:6;2292:2;2287;2280:5;2276:14;2272:23;2262:33;;2208:93;;;:::o;2307:107::-;2351:8;2401:5;2395:4;2391:16;2370:37;;2307:107;;;;:::o;2420:393::-;2489:6;2539:1;2527:10;2523:18;2562:97;2592:66;2581:9;2562:97;:::i;:::-;2680:39;2710:8;2699:9;2680:39;:::i;:::-;2668:51;;2752:4;2748:9;2741:5;2737:21;2728:30;;2801:4;2791:8;2787:19;2780:5;2777:30;2767:40;;2496:317;;2420:393;;;;;:::o;2819:77::-;2856:7;2885:5;2874:16;;2819:77;;;:::o;2902:60::-;2930:3;2951:5;2944:12;;2902:60;;;:::o;2968:142::-;3018:9;3051:53;3069:34;3078:24;3096:5;3078:24;:::i;:::-;3069:34;:::i;:::-;3051:53;:::i;:::-;3038:66;;2968:142;;;:::o;3116:75::-;3159:3;3180:5;3173:12;;3116:75;;;:::o;3197:269::-;3307:39;3338:7;3307:39;:::i;:::-;3368:91;3417:41;3441:16;3417:41;:::i;:::-;3409:6;3402:4;3396:11;3368:91;:::i;:::-;3362:4;3355:105;3273:193;3197:269;;;:::o;3472:73::-;3517:3;3472:73;:::o;3551:189::-;3628:32;;:::i;:::-;3669:65;3727:6;3719;3713:4;3669:65;:::i;:::-;3604:136;3551:189;;:::o;3746:186::-;3806:120;3823:3;3816:5;3813:14;3806:120;;;3877:39;3914:1;3907:5;3877:39;:::i;:::-;3850:1;3843:5;3839:13;3830:22;;3806:120;;;3746:186;;:::o;3938:543::-;4039:2;4034:3;4031:11;4028:446;;;4073:38;4105:5;4073:38;:::i;:::-;4157:29;4175:10;4157:29;:::i;:::-;4147:8;4143:44;4340:2;4328:10;4325:18;4322:49;;;4361:8;4346:23;;4322:49;4384:80;4440:22;4458:3;4440:22;:::i;:::-;4430:8;4426:37;4413:11;4384:80;:::i;:::-;4043:431;;4028:446;3938:543;;;:::o;4487:117::-;4541:8;4591:5;4585:4;4581:16;4560:37;;4487:117;;;;:::o;4610:169::-;4654:6;4687:51;4735:1;4731:6;4723:5;4720:1;4716:13;4687:51;:::i;:::-;4683:56;4768:4;4762;4758:15;4748:25;;4661:118;4610:169;;;;:::o;4784:295::-;4860:4;5006:29;5031:3;5025:4;5006:29;:::i;:::-;4998:37;;5068:3;5065:1;5061:11;5055:4;5052:21;5044:29;;4784:295;;;;:::o;5084:1395::-;5201:37;5234:3;5201:37;:::i;:::-;5303:18;5295:6;5292:30;5289:56;;;5325:18;;:::i;:::-;5289:56;5369:38;5401:4;5395:11;5369:38;:::i;:::-;5454:67;5514:6;5506;5500:4;5454:67;:::i;:::-;5548:1;5572:4;5559:17;;5604:2;5596:6;5593:14;5621:1;5616:618;;;;6278:1;6295:6;6292:77;;;6344:9;6339:3;6335:19;6329:26;6320:35;;6292:77;6395:67;6455:6;6448:5;6395:67;:::i;:::-;6389:4;6382:81;6251:222;5586:887;;5616:618;5668:4;5664:9;5656:6;5652:22;5702:37;5734:4;5702:37;:::i;:::-;5761:1;5775:208;5789:7;5786:1;5783:14;5775:208;;;5868:9;5863:3;5859:19;5853:26;5845:6;5838:42;5919:1;5911:6;5907:14;5897:24;;5966:2;5955:9;5951:18;5938:31;;5812:4;5809:1;5805:12;5800:17;;5775:208;;;6011:6;6002:7;5999:19;5996:179;;;6069:9;6064:3;6060:19;6054:26;6112:48;6154:4;6146:6;6142:17;6131:9;6112:48;:::i;:::-;6104:6;6097:64;6019:156;5996:179;6221:1;6217;6209:6;6205:14;6201:22;6195:4;6188:36;5623:611;;;5586:887;;5176:1303;;;5084:1395;;:::o;6485:180::-;6533:77;6530:1;6523:88;6630:4;6627:1;6620:15;6654:4;6651:1;6644:15;6671:102;6713:8;6760:5;6757:1;6753:13;6732:34;;6671:102;;;:::o;6779:848::-;6840:5;6847:4;6871:6;6862:15;;6895:5;6886:14;;6909:712;6930:1;6920:8;6917:15;6909:712;;;7025:4;7020:3;7016:14;7010:4;7007:24;7004:50;;;7034:18;;:::i;:::-;7004:50;7084:1;7074:8;7070:16;7067:451;;;7499:4;7492:5;7488:16;7479:25;;7067:451;7549:4;7543;7539:15;7531:23;;7579:32;7602:8;7579:32;:::i;:::-;7567:44;;6909:712;;;6779:848;;;;;;;:::o;7633:1073::-;7687:5;7878:8;7868:40;;7899:1;7890:10;;7901:5;;7868:40;7927:4;7917:36;;7944:1;7935:10;;7946:5;;7917:36;8013:4;8061:1;8056:27;;;;8097:1;8092:191;;;;8006:277;;8056:27;8074:1;8065:10;;8076:5;;;8092:191;8137:3;8127:8;8124:17;8121:43;;;8144:18;;:::i;:::-;8121:43;8193:8;8190:1;8186:16;8177:25;;8228:3;8221:5;8218:14;8215:40;;;8235:18;;:::i;:::-;8215:40;8268:5;;;8006:277;;8392:2;8382:8;8379:16;8373:3;8367:4;8364:13;8360:36;8342:2;8332:8;8329:16;8324:2;8318:4;8315:12;8311:35;8295:111;8292:246;;;8448:8;8442:4;8438:19;8429:28;;8483:3;8476:5;8473:14;8470:40;;;8490:18;;:::i;:::-;8470:40;8523:5;;8292:246;8563:42;8601:3;8591:8;8585:4;8582:1;8563:42;:::i;:::-;8548:57;;;;8637:4;8632:3;8628:14;8621:5;8618:25;8615:51;;;8646:18;;:::i;:::-;8615:51;8695:4;8688:5;8684:16;8675:25;;7633:1073;;;;;;:::o;8712:86::-;8747:7;8787:4;8780:5;8776:16;8765:27;;8712:86;;;:::o;8804:281::-;8862:5;8886:23;8904:4;8886:23;:::i;:::-;8878:31;;8930:25;8946:8;8930:25;:::i;:::-;8918:37;;8974:104;9011:66;9001:8;8995:4;8974:104;:::i;:::-;8965:113;;8804:281;;;;:::o;9091:410::-;9131:7;9154:20;9172:1;9154:20;:::i;:::-;9149:25;;9188:20;9206:1;9188:20;:::i;:::-;9183:25;;9243:1;9240;9236:9;9265:30;9283:11;9265:30;:::i;:::-;9254:41;;9444:1;9435:7;9431:15;9428:1;9425:22;9405:1;9398:9;9378:83;9355:139;;9474:18;;:::i;:::-;9355:139;9139:362;9091:410;;;;:::o;9507:169::-;9591:11;9625:6;9620:3;9613:19;9665:4;9660:3;9656:14;9641:29;;9507:169;;;;:::o;9682:181::-;9822:33;9818:1;9810:6;9806:14;9799:57;9682:181;:::o;9869:366::-;10011:3;10032:67;10096:2;10091:3;10032:67;:::i;:::-;10025:74;;10108:93;10197:3;10108:93;:::i;:::-;10226:2;10221:3;10217:12;10210:19;;9869:366;;;:::o;10241:419::-;10407:4;10445:2;10434:9;10430:18;10422:26;;10494:9;10488:4;10484:20;10480:1;10469:9;10465:17;10458:47;10522:131;10648:4;10522:131;:::i;:::-;10514:139;;10241:419;;;:::o;10666:191::-;10706:3;10725:20;10743:1;10725:20;:::i;:::-;10720:25;;10759:20;10777:1;10759:20;:::i;:::-;10754:25;;10802:1;10799;10795:9;10788:16;;10823:3;10820:1;10817:10;10814:36;;;10830:18;;:::i;:::-;10814:36;10666:191;;;;:::o;10863:118::-;10950:24;10968:5;10950:24;:::i;:::-;10945:3;10938:37;10863:118;;:::o;10987:222::-;11080:4;11118:2;11107:9;11103:18;11095:26;;11131:71;11199:1;11188:9;11184:17;11175:6;11131:71;:::i;:::-;10987:222;;;;:::o;429:2401:26:-;;;;;;;",
    "deployedSourceMap": "429:2401:26:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2154:98:9;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4431:197;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3242:106;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5190:286;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3091:91;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;571:25:26;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5871:234:9;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1647:349:26;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;783:37;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3406:125:9;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1347:140:26;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;679:20;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2365:102:9;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2006:122:26;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;6592:427:9;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3727:189;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2162:279:26;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3974:149:9;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2475:352:26;;;:::i;:::-;;2154:98:9;2208:13;2240:5;2233:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2154:98;:::o;4431:197::-;4514:4;4530:13;4546:12;:10;:12::i;:::-;4530:28;;4568:32;4577:5;4584:7;4593:6;4568:8;:32::i;:::-;4617:4;4610:11;;;4431:197;;;;:::o;3242:106::-;3303:7;3329:12;;3322:19;;3242:106;:::o;5190:286::-;5317:4;5333:15;5351:12;:10;:12::i;:::-;5333:30;;5373:38;5389:4;5395:7;5404:6;5373:15;:38::i;:::-;5421:27;5431:4;5437:2;5441:6;5421:9;:27::i;:::-;5465:4;5458:11;;;5190:286;;;;;:::o;3091:91::-;3149:5;3173:2;3166:9;;3091:91;:::o;571:25:26:-;;;;:::o;5871:234:9:-;5959:4;5975:13;5991:12;:10;:12::i;:::-;5975:28;;6013:64;6022:5;6029:7;6066:10;6038:25;6048:5;6055:7;6038:9;:25::i;:::-;:38;;;;:::i;:::-;6013:8;:64::i;:::-;6094:4;6087:11;;;5871:234;;;;:::o;1647:349:26:-;1280:5;;;;;;;;;;;1266:19;;:10;:19;;;1258:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;1750:1:::1;1731:21;;:7;:21;;::::0;1723:65:::1;;;;;;;;;;;;:::i;:::-;;;;;;;;;1873:10;;1863:6;1847:13;:11;:13::i;:::-;:22;;;;:::i;:::-;:36;;1839:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;1950:39;1956:7;1978:10;:8;:10::i;:::-;1974:2;:14;;;;:::i;:::-;1965:6;:23;;;;:::i;:::-;1950:5;:39::i;:::-;1647:349:::0;;:::o;783:37::-;;;;;;;;;;;;;:::o;3406:125:9:-;3480:7;3506:9;:18;3516:7;3506:18;;;;;;;;;;;;;;;;3499:25;;3406:125;;;:::o;1347:140:26:-;1280:5;;;;;;;;;;;1266:19;;:10;:19;;;1258:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;1445:1:::1;1422:25;;1430:2;;;;;;;;;;;1422:25;;;1414:48;;;;;;;;;;;;:::i;:::-;;;;;;;;;1477:3;1472:2;;:8;;;;;;;;;;;;;;;;;;1347:140:::0;:::o;679:20::-;;;;;;;;;;;;;:::o;2365:102:9:-;2421:13;2453:7;2446:14;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2365:102;:::o;2006:122:26:-;1280:5;;;;;;;;;;;1266:19;;:10;:19;;;1258:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;2082:39:::1;2088:7;2110:10;:8;:10::i;:::-;2106:2;:14;;;;:::i;:::-;2097:6;:23;;;;:::i;:::-;2082:5;:39::i;:::-;2006:122:::0;;:::o;6592:427:9:-;6685:4;6701:13;6717:12;:10;:12::i;:::-;6701:28;;6739:24;6766:25;6776:5;6783:7;6766:9;:25::i;:::-;6739:52;;6829:15;6809:16;:35;;6801:85;;;;;;;;;;;;:::i;:::-;;;;;;;;;6920:60;6929:5;6936:7;6964:15;6945:16;:34;6920:8;:60::i;:::-;7008:4;7001:11;;;;6592:427;;;;:::o;3727:189::-;3806:4;3822:13;3838:12;:10;:12::i;:::-;3822:28;;3860;3870:5;3877:2;3881:6;3860:9;:28::i;:::-;3905:4;3898:11;;;3727:189;;;;:::o;2162:279:26:-;2262:4;2278:134;2300:6;2328:8;2395:7;2356:36;2366:10;2386:4;2356:9;:36::i;:::-;:46;;;;:::i;:::-;2278:8;:134::i;:::-;2430:4;2423:11;;2162:279;;;;;:::o;3974:149:9:-;4063:7;4089:11;:18;4101:5;4089:18;;;;;;;;;;;;;;;:27;4108:7;4089:27;;;;;;;;;;;;;;;;4082:34;;3974:149;;;;:::o;2475:352:26:-;1280:5;;;;;;;;;;;1266:19;;:10;:19;;;1258:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;2534:20:::1;2570:10;:8;:10::i;:::-;2566:2;:14;;;;:::i;:::-;2557:6;:23;;;;:::i;:::-;2534:46;;2590:57;2614:4;2629:2;;;;;;;;;;;2634:12;2590:15;:57::i;:::-;2658:23;2684:24;2702:4;2684:9;:24::i;:::-;2658:50;;2718:72;2742:4;2757:14;;;;;;;;;;;2774:15;2718;:72::i;:::-;2805:15;;;;;;;;;;2524:303;;2475:352::o:0;640:96:19:-;693:7;719:10;712:17;;640:96;:::o;10504:370:9:-;10652:1;10635:19;;:5;:19;;;10627:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;10732:1;10713:21;;:7;:21;;;10705:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;10814:6;10784:11;:18;10796:5;10784:18;;;;;;;;;;;;;;;:27;10803:7;10784:27;;;;;;;;;;;;;;;:36;;;;10851:7;10835:32;;10844:5;10835:32;;;10860:6;10835:32;;;;;;:::i;:::-;;;;;;;;10504:370;;;:::o;11155:441::-;11285:24;11312:25;11322:5;11329:7;11312:9;:25::i;:::-;11285:52;;11371:17;11351:16;:37;11347:243;;11432:6;11412:16;:26;;11404:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;11514:51;11523:5;11530:7;11558:6;11539:16;:25;11514:8;:51::i;:::-;11347:243;11275:321;11155:441;;;:::o;1494:147:26:-;1592:42;1608:6;1616:9;1627:6;1592:15;:42::i;:::-;1494:147;;;:::o;8567:535:9:-;8669:1;8650:21;;:7;:21;;;8642:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;8718:49;8747:1;8751:7;8760:6;8718:20;:49::i;:::-;8794:6;8778:12;;:22;;;;;;;:::i;:::-;;;;;;;;8968:6;8946:9;:18;8956:7;8946:18;;;;;;;;;;;;;;;;:28;;;;;;;;;;;9020:7;8999:37;;9016:1;8999:37;;;9029:6;8999:37;;;;;;:::i;:::-;;;;;;;;9047:48;9075:1;9079:7;9088:6;9047:19;:48::i;:::-;8567:535;;:::o;9422:659::-;9524:1;9505:21;;:7;:21;;;9497:67;;;;;;;;;;;;:::i;:::-;;;;;;;;;9575:49;9596:7;9613:1;9617:6;9575:20;:49::i;:::-;9635:22;9660:9;:18;9670:7;9660:18;;;;;;;;;;;;;;;;9635:43;;9714:6;9696:14;:24;;9688:71;;;;;;;;;;;;:::i;:::-;;;;;;;;;9831:6;9814:14;:23;9793:9;:18;9803:7;9793:18;;;;;;;;;;;;;;;:44;;;;9946:6;9930:12;;:22;;;;;;;;;;;10004:1;9978:37;;9987:7;9978:37;;;10008:6;9978:37;;;;;;:::i;:::-;;;;;;;;10026:48;10046:7;10063:1;10067:6;10026:19;:48::i;:::-;9487:594;9422:659;;:::o;7473:818::-;7615:1;7599:18;;:4;:18;;;7591:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;7691:1;7677:16;;:2;:16;;;7669:64;;;;;;;;;;;;:::i;:::-;;;;;;;;;7744:38;7765:4;7771:2;7775:6;7744:20;:38::i;:::-;7793:19;7815:9;:15;7825:4;7815:15;;;;;;;;;;;;;;;;7793:37;;7863:6;7848:11;:21;;7840:72;;;;;;;;;;;;:::i;:::-;;;;;;;;;7978:6;7964:11;:20;7946:9;:15;7956:4;7946:15;;;;;;;;;;;;;;;:38;;;;8178:6;8161:9;:13;8171:2;8161:13;;;;;;;;;;;;;;;;:23;;;;;;;;;;;8225:2;8210:26;;8219:4;8210:26;;;8229:6;8210:26;;;;;;:::i;:::-;;;;;;;;8247:37;8267:4;8273:2;8277:6;8247:19;:37::i;:::-;7581:710;7473:818;;;:::o;12180:121::-;;;;:::o;12889:120::-;;;;:::o;7:99:37:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:169::-;196:11;230:6;225:3;218:19;270:4;265:3;261:14;246:29;;112:169;;;;:::o;287:246::-;368:1;378:113;392:6;389:1;386:13;378:113;;;477:1;472:3;468:11;462:18;458:1;453:3;449:11;442:39;414:2;411:1;407:10;402:15;;378:113;;;525:1;516:6;511:3;507:16;500:27;349:184;287:246;;;:::o;539:102::-;580:6;631:2;627:7;622:2;615:5;611:14;607:28;597:38;;539:102;;;:::o;647:377::-;735:3;763:39;796:5;763:39;:::i;:::-;818:71;882:6;877:3;818:71;:::i;:::-;811:78;;898:65;956:6;951:3;944:4;937:5;933:16;898:65;:::i;:::-;988:29;1010:6;988:29;:::i;:::-;983:3;979:39;972:46;;739:285;647:377;;;;:::o;1030:313::-;1143:4;1181:2;1170:9;1166:18;1158:26;;1230:9;1224:4;1220:20;1216:1;1205:9;1201:17;1194:47;1258:78;1331:4;1322:6;1258:78;:::i;:::-;1250:86;;1030:313;;;;:::o;1430:117::-;1539:1;1536;1529:12;1676:126;1713:7;1753:42;1746:5;1742:54;1731:65;;1676:126;;;:::o;1808:96::-;1845:7;1874:24;1892:5;1874:24;:::i;:::-;1863:35;;1808:96;;;:::o;1910:122::-;1983:24;2001:5;1983:24;:::i;:::-;1976:5;1973:35;1963:63;;2022:1;2019;2012:12;1963:63;1910:122;:::o;2038:139::-;2084:5;2122:6;2109:20;2100:29;;2138:33;2165:5;2138:33;:::i;:::-;2038:139;;;;:::o;2183:77::-;2220:7;2249:5;2238:16;;2183:77;;;:::o;2266:122::-;2339:24;2357:5;2339:24;:::i;:::-;2332:5;2329:35;2319:63;;2378:1;2375;2368:12;2319:63;2266:122;:::o;2394:139::-;2440:5;2478:6;2465:20;2456:29;;2494:33;2521:5;2494:33;:::i;:::-;2394:139;;;;:::o;2539:474::-;2607:6;2615;2664:2;2652:9;2643:7;2639:23;2635:32;2632:119;;;2670:79;;:::i;:::-;2632:119;2790:1;2815:53;2860:7;2851:6;2840:9;2836:22;2815:53;:::i;:::-;2805:63;;2761:117;2917:2;2943:53;2988:7;2979:6;2968:9;2964:22;2943:53;:::i;:::-;2933:63;;2888:118;2539:474;;;;;:::o;3019:90::-;3053:7;3096:5;3089:13;3082:21;3071:32;;3019:90;;;:::o;3115:109::-;3196:21;3211:5;3196:21;:::i;:::-;3191:3;3184:34;3115:109;;:::o;3230:210::-;3317:4;3355:2;3344:9;3340:18;3332:26;;3368:65;3430:1;3419:9;3415:17;3406:6;3368:65;:::i;:::-;3230:210;;;;:::o;3446:118::-;3533:24;3551:5;3533:24;:::i;:::-;3528:3;3521:37;3446:118;;:::o;3570:222::-;3663:4;3701:2;3690:9;3686:18;3678:26;;3714:71;3782:1;3771:9;3767:17;3758:6;3714:71;:::i;:::-;3570:222;;;;:::o;3798:619::-;3875:6;3883;3891;3940:2;3928:9;3919:7;3915:23;3911:32;3908:119;;;3946:79;;:::i;:::-;3908:119;4066:1;4091:53;4136:7;4127:6;4116:9;4112:22;4091:53;:::i;:::-;4081:63;;4037:117;4193:2;4219:53;4264:7;4255:6;4244:9;4240:22;4219:53;:::i;:::-;4209:63;;4164:118;4321:2;4347:53;4392:7;4383:6;4372:9;4368:22;4347:53;:::i;:::-;4337:63;;4292:118;3798:619;;;;;:::o;4423:86::-;4458:7;4498:4;4491:5;4487:16;4476:27;;4423:86;;;:::o;4515:112::-;4598:22;4614:5;4598:22;:::i;:::-;4593:3;4586:35;4515:112;;:::o;4633:214::-;4722:4;4760:2;4749:9;4745:18;4737:26;;4773:67;4837:1;4826:9;4822:17;4813:6;4773:67;:::i;:::-;4633:214;;;;:::o;4853:104::-;4898:7;4927:24;4945:5;4927:24;:::i;:::-;4916:35;;4853:104;;;:::o;4963:142::-;5066:32;5092:5;5066:32;:::i;:::-;5061:3;5054:45;4963:142;;:::o;5111:254::-;5220:4;5258:2;5247:9;5243:18;5235:26;;5271:87;5355:1;5344:9;5340:17;5331:6;5271:87;:::i;:::-;5111:254;;;;:::o;5371:329::-;5430:6;5479:2;5467:9;5458:7;5454:23;5450:32;5447:119;;;5485:79;;:::i;:::-;5447:119;5605:1;5630:53;5675:7;5666:6;5655:9;5651:22;5630:53;:::i;:::-;5620:63;;5576:117;5371:329;;;;:::o;5706:119::-;5766:7;5795:24;5813:5;5795:24;:::i;:::-;5784:35;;5706:119;;;:::o;5831:168::-;5927:47;5968:5;5927:47;:::i;:::-;5920:5;5917:58;5907:86;;5989:1;5986;5979:12;5907:86;5831:168;:::o;6005:185::-;6074:5;6112:6;6099:20;6090:29;;6128:56;6178:5;6128:56;:::i;:::-;6005:185;;;;:::o;6196:375::-;6278:6;6327:2;6315:9;6306:7;6302:23;6298:32;6295:119;;;6333:79;;:::i;:::-;6295:119;6453:1;6478:76;6546:7;6537:6;6526:9;6522:22;6478:76;:::i;:::-;6468:86;;6424:140;6196:375;;;;:::o;6577:118::-;6664:24;6682:5;6664:24;:::i;:::-;6659:3;6652:37;6577:118;;:::o;6701:222::-;6794:4;6832:2;6821:9;6817:18;6809:26;;6845:71;6913:1;6902:9;6898:17;6889:6;6845:71;:::i;:::-;6701:222;;;;:::o;6929:474::-;6997:6;7005;7054:2;7042:9;7033:7;7029:23;7025:32;7022:119;;;7060:79;;:::i;:::-;7022:119;7180:1;7205:53;7250:7;7241:6;7230:9;7226:22;7205:53;:::i;:::-;7195:63;;7151:117;7307:2;7333:53;7378:7;7369:6;7358:9;7354:22;7333:53;:::i;:::-;7323:63;;7278:118;6929:474;;;;;:::o;7409:180::-;7457:77;7454:1;7447:88;7554:4;7551:1;7544:15;7578:4;7575:1;7568:15;7595:320;7639:6;7676:1;7670:4;7666:12;7656:22;;7723:1;7717:4;7713:12;7744:18;7734:81;;7800:4;7792:6;7788:17;7778:27;;7734:81;7862:2;7854:6;7851:14;7831:18;7828:38;7825:84;;7881:18;;:::i;:::-;7825:84;7646:269;7595:320;;;:::o;7921:180::-;7969:77;7966:1;7959:88;8066:4;8063:1;8056:15;8090:4;8087:1;8080:15;8107:191;8147:3;8166:20;8184:1;8166:20;:::i;:::-;8161:25;;8200:20;8218:1;8200:20;:::i;:::-;8195:25;;8243:1;8240;8236:9;8229:16;;8264:3;8261:1;8258:10;8255:36;;;8271:18;;:::i;:::-;8255:36;8107:191;;;;:::o;8304:160::-;8444:12;8440:1;8432:6;8428:14;8421:36;8304:160;:::o;8470:366::-;8612:3;8633:67;8697:2;8692:3;8633:67;:::i;:::-;8626:74;;8709:93;8798:3;8709:93;:::i;:::-;8827:2;8822:3;8818:12;8811:19;;8470:366;;;:::o;8842:419::-;9008:4;9046:2;9035:9;9031:18;9023:26;;9095:9;9089:4;9085:20;9081:1;9070:9;9066:17;9059:47;9123:131;9249:4;9123:131;:::i;:::-;9115:139;;8842:419;;;:::o;9267:181::-;9407:33;9403:1;9395:6;9391:14;9384:57;9267:181;:::o;9454:366::-;9596:3;9617:67;9681:2;9676:3;9617:67;:::i;:::-;9610:74;;9693:93;9782:3;9693:93;:::i;:::-;9811:2;9806:3;9802:12;9795:19;;9454:366;;;:::o;9826:419::-;9992:4;10030:2;10019:9;10015:18;10007:26;;10079:9;10073:4;10069:20;10065:1;10054:9;10050:17;10043:47;10107:131;10233:4;10107:131;:::i;:::-;10099:139;;9826:419;;;:::o;10251:166::-;10391:18;10387:1;10379:6;10375:14;10368:42;10251:166;:::o;10423:366::-;10565:3;10586:67;10650:2;10645:3;10586:67;:::i;:::-;10579:74;;10662:93;10751:3;10662:93;:::i;:::-;10780:2;10775:3;10771:12;10764:19;;10423:366;;;:::o;10795:419::-;10961:4;10999:2;10988:9;10984:18;10976:26;;11048:9;11042:4;11038:20;11034:1;11023:9;11019:17;11012:47;11076:131;11202:4;11076:131;:::i;:::-;11068:139;;10795:419;;;:::o;11220:102::-;11262:8;11309:5;11306:1;11302:13;11281:34;;11220:102;;;:::o;11328:848::-;11389:5;11396:4;11420:6;11411:15;;11444:5;11435:14;;11458:712;11479:1;11469:8;11466:15;11458:712;;;11574:4;11569:3;11565:14;11559:4;11556:24;11553:50;;;11583:18;;:::i;:::-;11553:50;11633:1;11623:8;11619:16;11616:451;;;12048:4;12041:5;12037:16;12028:25;;11616:451;12098:4;12092;12088:15;12080:23;;12128:32;12151:8;12128:32;:::i;:::-;12116:44;;11458:712;;;11328:848;;;;;;;:::o;12182:1073::-;12236:5;12427:8;12417:40;;12448:1;12439:10;;12450:5;;12417:40;12476:4;12466:36;;12493:1;12484:10;;12495:5;;12466:36;12562:4;12610:1;12605:27;;;;12646:1;12641:191;;;;12555:277;;12605:27;12623:1;12614:10;;12625:5;;;12641:191;12686:3;12676:8;12673:17;12670:43;;;12693:18;;:::i;:::-;12670:43;12742:8;12739:1;12735:16;12726:25;;12777:3;12770:5;12767:14;12764:40;;;12784:18;;:::i;:::-;12764:40;12817:5;;;12555:277;;12941:2;12931:8;12928:16;12922:3;12916:4;12913:13;12909:36;12891:2;12881:8;12878:16;12873:2;12867:4;12864:12;12860:35;12844:111;12841:246;;;12997:8;12991:4;12987:19;12978:28;;13032:3;13025:5;13022:14;13019:40;;;13039:18;;:::i;:::-;13019:40;13072:5;;12841:246;13112:42;13150:3;13140:8;13134:4;13131:1;13112:42;:::i;:::-;13097:57;;;;13186:4;13181:3;13177:14;13170:5;13167:25;13164:51;;;13195:18;;:::i;:::-;13164:51;13244:4;13237:5;13233:16;13224:25;;12182:1073;;;;;;:::o;13261:281::-;13319:5;13343:23;13361:4;13343:23;:::i;:::-;13335:31;;13387:25;13403:8;13387:25;:::i;:::-;13375:37;;13431:104;13468:66;13458:8;13452:4;13431:104;:::i;:::-;13422:113;;13261:281;;;;:::o;13548:410::-;13588:7;13611:20;13629:1;13611:20;:::i;:::-;13606:25;;13645:20;13663:1;13645:20;:::i;:::-;13640:25;;13700:1;13697;13693:9;13722:30;13740:11;13722:30;:::i;:::-;13711:41;;13901:1;13892:7;13888:15;13885:1;13882:22;13862:1;13855:9;13835:83;13812:139;;13931:18;;:::i;:::-;13812:139;13596:362;13548:410;;;;:::o;13964:160::-;14104:12;14100:1;14092:6;14088:14;14081:36;13964:160;:::o;14130:366::-;14272:3;14293:67;14357:2;14352:3;14293:67;:::i;:::-;14286:74;;14369:93;14458:3;14369:93;:::i;:::-;14487:2;14482:3;14478:12;14471:19;;14130:366;;;:::o;14502:419::-;14668:4;14706:2;14695:9;14691:18;14683:26;;14755:9;14749:4;14745:20;14741:1;14730:9;14726:17;14719:47;14783:131;14909:4;14783:131;:::i;:::-;14775:139;;14502:419;;;:::o;14927:224::-;15067:34;15063:1;15055:6;15051:14;15044:58;15136:7;15131:2;15123:6;15119:15;15112:32;14927:224;:::o;15157:366::-;15299:3;15320:67;15384:2;15379:3;15320:67;:::i;:::-;15313:74;;15396:93;15485:3;15396:93;:::i;:::-;15514:2;15509:3;15505:12;15498:19;;15157:366;;;:::o;15529:419::-;15695:4;15733:2;15722:9;15718:18;15710:26;;15782:9;15776:4;15772:20;15768:1;15757:9;15753:17;15746:47;15810:131;15936:4;15810:131;:::i;:::-;15802:139;;15529:419;;;:::o;15954:223::-;16094:34;16090:1;16082:6;16078:14;16071:58;16163:6;16158:2;16150:6;16146:15;16139:31;15954:223;:::o;16183:366::-;16325:3;16346:67;16410:2;16405:3;16346:67;:::i;:::-;16339:74;;16422:93;16511:3;16422:93;:::i;:::-;16540:2;16535:3;16531:12;16524:19;;16183:366;;;:::o;16555:419::-;16721:4;16759:2;16748:9;16744:18;16736:26;;16808:9;16802:4;16798:20;16794:1;16783:9;16779:17;16772:47;16836:131;16962:4;16836:131;:::i;:::-;16828:139;;16555:419;;;:::o;16980:221::-;17120:34;17116:1;17108:6;17104:14;17097:58;17189:4;17184:2;17176:6;17172:15;17165:29;16980:221;:::o;17207:366::-;17349:3;17370:67;17434:2;17429:3;17370:67;:::i;:::-;17363:74;;17446:93;17535:3;17446:93;:::i;:::-;17564:2;17559:3;17555:12;17548:19;;17207:366;;;:::o;17579:419::-;17745:4;17783:2;17772:9;17768:18;17760:26;;17832:9;17826:4;17822:20;17818:1;17807:9;17803:17;17796:47;17860:131;17986:4;17860:131;:::i;:::-;17852:139;;17579:419;;;:::o;18004:179::-;18144:31;18140:1;18132:6;18128:14;18121:55;18004:179;:::o;18189:366::-;18331:3;18352:67;18416:2;18411:3;18352:67;:::i;:::-;18345:74;;18428:93;18517:3;18428:93;:::i;:::-;18546:2;18541:3;18537:12;18530:19;;18189:366;;;:::o;18561:419::-;18727:4;18765:2;18754:9;18750:18;18742:26;;18814:9;18808:4;18804:20;18800:1;18789:9;18785:17;18778:47;18842:131;18968:4;18842:131;:::i;:::-;18834:139;;18561:419;;;:::o;18986:220::-;19126:34;19122:1;19114:6;19110:14;19103:58;19195:3;19190:2;19182:6;19178:15;19171:28;18986:220;:::o;19212:366::-;19354:3;19375:67;19439:2;19434:3;19375:67;:::i;:::-;19368:74;;19451:93;19540:3;19451:93;:::i;:::-;19569:2;19564:3;19560:12;19553:19;;19212:366;;;:::o;19584:419::-;19750:4;19788:2;19777:9;19773:18;19765:26;;19837:9;19831:4;19827:20;19823:1;19812:9;19808:17;19801:47;19865:131;19991:4;19865:131;:::i;:::-;19857:139;;19584:419;;;:::o;20009:221::-;20149:34;20145:1;20137:6;20133:14;20126:58;20218:4;20213:2;20205:6;20201:15;20194:29;20009:221;:::o;20236:366::-;20378:3;20399:67;20463:2;20458:3;20399:67;:::i;:::-;20392:74;;20475:93;20564:3;20475:93;:::i;:::-;20593:2;20588:3;20584:12;20577:19;;20236:366;;;:::o;20608:419::-;20774:4;20812:2;20801:9;20797:18;20789:26;;20861:9;20855:4;20851:20;20847:1;20836:9;20832:17;20825:47;20889:131;21015:4;20889:131;:::i;:::-;20881:139;;20608:419;;;:::o;21033:224::-;21173:34;21169:1;21161:6;21157:14;21150:58;21242:7;21237:2;21229:6;21225:15;21218:32;21033:224;:::o;21263:366::-;21405:3;21426:67;21490:2;21485:3;21426:67;:::i;:::-;21419:74;;21502:93;21591:3;21502:93;:::i;:::-;21620:2;21615:3;21611:12;21604:19;;21263:366;;;:::o;21635:419::-;21801:4;21839:2;21828:9;21824:18;21816:26;;21888:9;21882:4;21878:20;21874:1;21863:9;21859:17;21852:47;21916:131;22042:4;21916:131;:::i;:::-;21908:139;;21635:419;;;:::o;22060:222::-;22200:34;22196:1;22188:6;22184:14;22177:58;22269:5;22264:2;22256:6;22252:15;22245:30;22060:222;:::o;22288:366::-;22430:3;22451:67;22515:2;22510:3;22451:67;:::i;:::-;22444:74;;22527:93;22616:3;22527:93;:::i;:::-;22645:2;22640:3;22636:12;22629:19;;22288:366;;;:::o;22660:419::-;22826:4;22864:2;22853:9;22849:18;22841:26;;22913:9;22907:4;22903:20;22899:1;22888:9;22884:17;22877:47;22941:131;23067:4;22941:131;:::i;:::-;22933:139;;22660:419;;;:::o;23085:225::-;23225:34;23221:1;23213:6;23209:14;23202:58;23294:8;23289:2;23281:6;23277:15;23270:33;23085:225;:::o;23316:366::-;23458:3;23479:67;23543:2;23538:3;23479:67;:::i;:::-;23472:74;;23555:93;23644:3;23555:93;:::i;:::-;23673:2;23668:3;23664:12;23657:19;;23316:366;;;:::o;23688:419::-;23854:4;23892:2;23881:9;23877:18;23869:26;;23941:9;23935:4;23931:20;23927:1;23916:9;23912:17;23905:47;23969:131;24095:4;23969:131;:::i;:::-;23961:139;;23688:419;;;:::o",
    "source": "// SPDX-License-Identifier: GPL-3.0-only\npragma solidity ^0.8.0;\n\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\nimport \"@openzeppelin/contracts/security/Pausable.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\nimport \"@openzeppelin/contracts/security/ReentrancyGuard.sol\";\nimport \"@openzeppelin/contracts/utils/Strings.sol\";\nimport \"@openzeppelin/contracts/utils/Context.sol\";\nimport \"./LiquidityPool.sol\";\n\ncontract Jet2Token is ERC20 {\n    event TreasuryMoved(); //                                                               자산이동  \n\n    uint256 public MAX_SUPPLY; //                                               발행량 jt : jt2 == 1:10 \n    address public owner; //                                                                    오너 \n    address payable public treasuryWallet; //                                               재무 계좌\n    LiquidityPool lp;\n   \n    constructor(address payable treasury) ERC20(\"Jet2 Token\", \"Jet2\") {\n        MAX_SUPPLY = 600000 * 10**decimals();\n        _mint(address(this), MAX_SUPPLY); \n        owner = msg.sender; \n        treasuryWallet = treasury; //                                               임시,현재는 오너 지갑\n    }\n\n    modifier ownerOnly() {\n        require(msg.sender == owner, \"OWNER_ONLY\");\n        _;\n    }\n\n    // set lp address \n    function setLPAddress(LiquidityPool _lp) public ownerOnly {\n       require(address(lp) == address(0), \"WRITE_ONCE\");\n        lp = _lp;\n    }\n \n    function _transfer(address sender, address recipient, uint256 amount) internal override {\n        super._transfer(sender, recipient, amount);\n    }\n\n    function mint(address account, uint256 amount) external ownerOnly {\n        require(account != address(0), \"ERC20: mint to the zero address\"); //   주소 전송 가능 여부 체크 \n        require(totalSupply() + amount <= MAX_SUPPLY, \"ABOVE_MAX_SUPPLY\"); //             총발행량 체크 \n        _mint(account, amount * 10**decimals());\n    }\n    \n    function burn(address account, uint256 amount) external ownerOnly {\n        _burn(account, amount * 10**decimals());\n    }\n\n    // 거래 제한 해제\n    function increaseContractAllowance(address _owner,address _spender,uint256 _amount) public returns (bool) {\n        _approve(\n            _owner, // from\n            _spender, // to\n            allowance(msg.sender, address(this)) + _amount\n        ); \n        return true;\n    }\n\n    // 재무 지갑 이동\n    function MoveToTreasuryWallet() public ownerOnly {\n        uint256 lpSwapAmount = 100000 * 10**decimals();\n        super._transfer(address(this), address(lp), lpSwapAmount);\n\n        uint256 remainingAmount = balanceOf(address(this));\n        super._transfer(address(this), address(treasuryWallet), remainingAmount);\n        emit TreasuryMoved();\n    }\n\n}",
    "sourcePath": "C:\\Users\\user\\Desktop\\project3\\BEB-06-FINAL-06\\contract\\contracts\\Jet2Token.sol",
    "ast": {
      "absolutePath": "project:/contracts/Jet2Token.sol",
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
        "Strings": [
          4683
        ]
      },
      "id": 5902,
      "license": "GPL-3.0-only",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 5643,
          "literals": [
            "solidity",
            "^",
            "0.8",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "41:23:26"
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
          "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
          "id": 5644,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 5902,
          "sourceUnit": 2489,
          "src": "66:55:26",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/security/Pausable.sol",
          "file": "@openzeppelin/contracts/security/Pausable.sol",
          "id": 5645,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 5902,
          "sourceUnit": 221,
          "src": "122:55:26",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
          "file": "@openzeppelin/contracts/access/Ownable.sol",
          "id": 5646,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 5902,
          "sourceUnit": 113,
          "src": "178:52:26",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/security/ReentrancyGuard.sol",
          "file": "@openzeppelin/contracts/security/ReentrancyGuard.sol",
          "id": 5647,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 5902,
          "sourceUnit": 275,
          "src": "231:62:26",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/utils/Strings.sol",
          "file": "@openzeppelin/contracts/utils/Strings.sol",
          "id": 5648,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 5902,
          "sourceUnit": 4684,
          "src": "294:51:26",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/utils/Context.sol",
          "file": "@openzeppelin/contracts/utils/Context.sol",
          "id": 5649,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 5902,
          "sourceUnit": 4435,
          "src": "346:51:26",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "project:/contracts/LiquidityPool.sol",
          "file": "./LiquidityPool.sol",
          "id": 5650,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 5902,
          "sourceUnit": 11308,
          "src": "398:29:26",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "baseName": {
                "id": 5651,
                "name": "ERC20",
                "nameLocations": [
                  "451:5:26"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 2488,
                "src": "451:5:26"
              },
              "id": 5652,
              "nodeType": "InheritanceSpecifier",
              "src": "451:5:26"
            }
          ],
          "canonicalName": "Jet2Token",
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 5901,
          "linearizedBaseContracts": [
            5901,
            2488,
            2591,
            2566,
            4434
          ],
          "name": "Jet2Token",
          "nameLocation": "438:9:26",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "anonymous": false,
              "eventSelector": "ede40e57f47ee7d3737450b9e0e25fc56b11ce89ebac5d06dd834fe351418fa7",
              "id": 5654,
              "name": "TreasuryMoved",
              "nameLocation": "469:13:26",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 5653,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "482:2:26"
              },
              "src": "463:22:26"
            },
            {
              "constant": false,
              "functionSelector": "32cb6b0c",
              "id": 5656,
              "mutability": "mutable",
              "name": "MAX_SUPPLY",
              "nameLocation": "586:10:26",
              "nodeType": "VariableDeclaration",
              "scope": 5901,
              "src": "571:25:26",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 5655,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "571:7:26",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "8da5cb5b",
              "id": 5658,
              "mutability": "mutable",
              "name": "owner",
              "nameLocation": "694:5:26",
              "nodeType": "VariableDeclaration",
              "scope": 5901,
              "src": "679:20:26",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 5657,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "679:7:26",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "4626402b",
              "id": 5660,
              "mutability": "mutable",
              "name": "treasuryWallet",
              "nameLocation": "806:14:26",
              "nodeType": "VariableDeclaration",
              "scope": 5901,
              "src": "783:37:26",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address_payable",
                "typeString": "address payable"
              },
              "typeName": {
                "id": 5659,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "783:15:26",
                "stateMutability": "payable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address_payable",
                  "typeString": "address payable"
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 5663,
              "mutability": "mutable",
              "name": "lp",
              "nameLocation": "903:2:26",
              "nodeType": "VariableDeclaration",
              "scope": 5901,
              "src": "889:16:26",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LiquidityPool_$11307",
                "typeString": "contract LiquidityPool"
              },
              "typeName": {
                "id": 5662,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 5661,
                  "name": "LiquidityPool",
                  "nameLocations": [
                    "889:13:26"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 11307,
                  "src": "889:13:26"
                },
                "referencedDeclaration": 11307,
                "src": "889:13:26",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_LiquidityPool_$11307",
                  "typeString": "contract LiquidityPool"
                }
              },
              "visibility": "internal"
            },
            {
              "body": {
                "id": 5698,
                "nodeType": "Block",
                "src": "981:240:26",
                "statements": [
                  {
                    "expression": {
                      "id": 5679,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 5672,
                        "name": "MAX_SUPPLY",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5656,
                        "src": "991:10:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5678,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "363030303030",
                          "id": 5673,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1004:6:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_600000_by_1",
                            "typeString": "int_const 600000"
                          },
                          "value": "600000"
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 5677,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 5674,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1013:2:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "**",
                          "rightExpression": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 5675,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1976,
                              "src": "1017:8:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
                                "typeString": "function () view returns (uint8)"
                              }
                            },
                            "id": 5676,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1017:10:26",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "1013:14:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1004:23:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "991:36:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 5680,
                    "nodeType": "ExpressionStatement",
                    "src": "991:36:26"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 5684,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967268,
                              "src": "1051:4:26",
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
                            "id": 5683,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1043:7:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 5682,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1043:7:26",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 5685,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1043:13:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 5686,
                          "name": "MAX_SUPPLY",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5656,
                          "src": "1058:10:26",
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
                        "id": 5681,
                        "name": "_mint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2305,
                        "src": "1037:5:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 5687,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1037:32:26",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 5688,
                    "nodeType": "ExpressionStatement",
                    "src": "1037:32:26"
                  },
                  {
                    "expression": {
                      "id": 5692,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 5689,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5658,
                        "src": "1080:5:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "expression": {
                          "id": 5690,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1088:3:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 5691,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1092:6:26",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1088:10:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "1080:18:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 5693,
                    "nodeType": "ExpressionStatement",
                    "src": "1080:18:26"
                  },
                  {
                    "expression": {
                      "id": 5696,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 5694,
                        "name": "treasuryWallet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5660,
                        "src": "1109:14:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 5695,
                        "name": "treasury",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5665,
                        "src": "1126:8:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "src": "1109:25:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "id": 5697,
                    "nodeType": "ExpressionStatement",
                    "src": "1109:25:26"
                  }
                ]
              },
              "id": 5699,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "hexValue": "4a65743220546f6b656e",
                      "id": 5668,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "959:12:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_214088bf49347cd4aabccbb93c04aa07312c4d42628da471b33ea2bad36e60fb",
                        "typeString": "literal_string \"Jet2 Token\""
                      },
                      "value": "Jet2 Token"
                    },
                    {
                      "hexValue": "4a657432",
                      "id": 5669,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "973:6:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_30187b1940e348684bffe65b02d9bc0e7d156eb223d4ba556cb9345919d365a5",
                        "typeString": "literal_string \"Jet2\""
                      },
                      "value": "Jet2"
                    }
                  ],
                  "id": 5670,
                  "kind": "baseConstructorSpecifier",
                  "modifierName": {
                    "id": 5667,
                    "name": "ERC20",
                    "nameLocations": [
                      "953:5:26"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 2488,
                    "src": "953:5:26"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "953:27:26"
                }
              ],
              "name": "",
              "nameLocation": "-1:-1:-1",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 5666,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5665,
                    "mutability": "mutable",
                    "name": "treasury",
                    "nameLocation": "943:8:26",
                    "nodeType": "VariableDeclaration",
                    "scope": 5699,
                    "src": "927:24:26",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    },
                    "typeName": {
                      "id": 5664,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "927:15:26",
                      "stateMutability": "payable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "926:26:26"
              },
              "returnParameters": {
                "id": 5671,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "981:0:26"
              },
              "scope": 5901,
              "src": "915:306:26",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 5710,
                "nodeType": "Block",
                "src": "1248:70:26",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 5705,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 5702,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "1266:3:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 5703,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1270:6:26",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "1266:10:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 5704,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5658,
                            "src": "1280:5:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1266:19:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "4f574e45525f4f4e4c59",
                          "id": 5706,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1287:12:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20",
                            "typeString": "literal_string \"OWNER_ONLY\""
                          },
                          "value": "OWNER_ONLY"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20",
                            "typeString": "literal_string \"OWNER_ONLY\""
                          }
                        ],
                        "id": 5701,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "1258:7:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 5707,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1258:42:26",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 5708,
                    "nodeType": "ExpressionStatement",
                    "src": "1258:42:26"
                  },
                  {
                    "id": 5709,
                    "nodeType": "PlaceholderStatement",
                    "src": "1310:1:26"
                  }
                ]
              },
              "id": 5711,
              "name": "ownerOnly",
              "nameLocation": "1236:9:26",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 5700,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1245:2:26"
              },
              "src": "1227:91:26",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 5736,
                "nodeType": "Block",
                "src": "1405:82:26",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 5728,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "id": 5722,
                                "name": "lp",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5663,
                                "src": "1430:2:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_LiquidityPool_$11307",
                                  "typeString": "contract LiquidityPool"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_LiquidityPool_$11307",
                                  "typeString": "contract LiquidityPool"
                                }
                              ],
                              "id": 5721,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1422:7:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 5720,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1422:7:26",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 5723,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1422:11:26",
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
                                "id": 5726,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1445:1:26",
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
                              "id": 5725,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1437:7:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 5724,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1437:7:26",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 5727,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1437:10:26",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1422:25:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "57524954455f4f4e4345",
                          "id": 5729,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1449:12:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_b2a82e4e45b336ce6c44d9804b6c2ced0fb24d6ef1a76c7dfe3cfb5d8d132923",
                            "typeString": "literal_string \"WRITE_ONCE\""
                          },
                          "value": "WRITE_ONCE"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_b2a82e4e45b336ce6c44d9804b6c2ced0fb24d6ef1a76c7dfe3cfb5d8d132923",
                            "typeString": "literal_string \"WRITE_ONCE\""
                          }
                        ],
                        "id": 5719,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "1414:7:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 5730,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1414:48:26",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 5731,
                    "nodeType": "ExpressionStatement",
                    "src": "1414:48:26"
                  },
                  {
                    "expression": {
                      "id": 5734,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 5732,
                        "name": "lp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5663,
                        "src": "1472:2:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LiquidityPool_$11307",
                          "typeString": "contract LiquidityPool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 5733,
                        "name": "_lp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5714,
                        "src": "1477:3:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LiquidityPool_$11307",
                          "typeString": "contract LiquidityPool"
                        }
                      },
                      "src": "1472:8:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LiquidityPool_$11307",
                        "typeString": "contract LiquidityPool"
                      }
                    },
                    "id": 5735,
                    "nodeType": "ExpressionStatement",
                    "src": "1472:8:26"
                  }
                ]
              },
              "functionSelector": "7a351a1d",
              "id": 5737,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 5717,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 5716,
                    "name": "ownerOnly",
                    "nameLocations": [
                      "1395:9:26"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 5711,
                    "src": "1395:9:26"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1395:9:26"
                }
              ],
              "name": "setLPAddress",
              "nameLocation": "1356:12:26",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 5715,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5714,
                    "mutability": "mutable",
                    "name": "_lp",
                    "nameLocation": "1383:3:26",
                    "nodeType": "VariableDeclaration",
                    "scope": 5737,
                    "src": "1369:17:26",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LiquidityPool_$11307",
                      "typeString": "contract LiquidityPool"
                    },
                    "typeName": {
                      "id": 5713,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 5712,
                        "name": "LiquidityPool",
                        "nameLocations": [
                          "1369:13:26"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 11307,
                        "src": "1369:13:26"
                      },
                      "referencedDeclaration": 11307,
                      "src": "1369:13:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LiquidityPool_$11307",
                        "typeString": "contract LiquidityPool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1368:19:26"
              },
              "returnParameters": {
                "id": 5718,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1405:0:26"
              },
              "scope": 5901,
              "src": "1347:140:26",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "baseFunctions": [
                2248
              ],
              "body": {
                "id": 5755,
                "nodeType": "Block",
                "src": "1582:59:26",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 5750,
                          "name": "sender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5739,
                          "src": "1608:6:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 5751,
                          "name": "recipient",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5741,
                          "src": "1616:9:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 5752,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5743,
                          "src": "1627:6:26",
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
                          "id": 5747,
                          "name": "super",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967271,
                          "src": "1592:5:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_super$_Jet2Token_$5901_$",
                            "typeString": "type(contract super Jet2Token)"
                          }
                        },
                        "id": 5749,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1598:9:26",
                        "memberName": "_transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2248,
                        "src": "1592:15:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 5753,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1592:42:26",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 5754,
                    "nodeType": "ExpressionStatement",
                    "src": "1592:42:26"
                  }
                ]
              },
              "id": 5756,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_transfer",
              "nameLocation": "1503:9:26",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 5745,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "1573:8:26"
              },
              "parameters": {
                "id": 5744,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5739,
                    "mutability": "mutable",
                    "name": "sender",
                    "nameLocation": "1521:6:26",
                    "nodeType": "VariableDeclaration",
                    "scope": 5756,
                    "src": "1513:14:26",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 5738,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1513:7:26",
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
                    "id": 5741,
                    "mutability": "mutable",
                    "name": "recipient",
                    "nameLocation": "1537:9:26",
                    "nodeType": "VariableDeclaration",
                    "scope": 5756,
                    "src": "1529:17:26",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 5740,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1529:7:26",
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
                    "id": 5743,
                    "mutability": "mutable",
                    "name": "amount",
                    "nameLocation": "1556:6:26",
                    "nodeType": "VariableDeclaration",
                    "scope": 5756,
                    "src": "1548:14:26",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5742,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1548:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1512:51:26"
              },
              "returnParameters": {
                "id": 5746,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1582:0:26"
              },
              "scope": 5901,
              "src": "1494:147:26",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 5795,
                "nodeType": "Block",
                "src": "1713:283:26",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 5771,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 5766,
                            "name": "account",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5758,
                            "src": "1731:7:26",
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
                                "id": 5769,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1750:1:26",
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
                              "id": 5768,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1742:7:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 5767,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1742:7:26",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 5770,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1742:10:26",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1731:21:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
                          "id": 5772,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1754:33:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
                            "typeString": "literal_string \"ERC20: mint to the zero address\""
                          },
                          "value": "ERC20: mint to the zero address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
                            "typeString": "literal_string \"ERC20: mint to the zero address\""
                          }
                        ],
                        "id": 5765,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "1723:7:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 5773,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1723:65:26",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 5774,
                    "nodeType": "ExpressionStatement",
                    "src": "1723:65:26"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 5781,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 5779,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 5776,
                                "name": "totalSupply",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1986,
                                "src": "1847:11:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                  "typeString": "function () view returns (uint256)"
                                }
                              },
                              "id": 5777,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1847:13:26",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "id": 5778,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5760,
                              "src": "1863:6:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1847:22:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "id": 5780,
                            "name": "MAX_SUPPLY",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5656,
                            "src": "1873:10:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1847:36:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "41424f56455f4d41585f535550504c59",
                          "id": 5782,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1885:18:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff",
                            "typeString": "literal_string \"ABOVE_MAX_SUPPLY\""
                          },
                          "value": "ABOVE_MAX_SUPPLY"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff",
                            "typeString": "literal_string \"ABOVE_MAX_SUPPLY\""
                          }
                        ],
                        "id": 5775,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "1839:7:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 5783,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1839:65:26",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 5784,
                    "nodeType": "ExpressionStatement",
                    "src": "1839:65:26"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 5786,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5758,
                          "src": "1956:7:26",
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
                          "id": 5792,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 5787,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5760,
                            "src": "1965:6:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 5791,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "hexValue": "3130",
                              "id": 5788,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1974:2:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_10_by_1",
                                "typeString": "int_const 10"
                              },
                              "value": "10"
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "**",
                            "rightExpression": {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 5789,
                                "name": "decimals",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1976,
                                "src": "1978:8:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
                                  "typeString": "function () view returns (uint8)"
                                }
                              },
                              "id": 5790,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1978:10:26",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            "src": "1974:14:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1965:23:26",
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
                        "id": 5785,
                        "name": "_mint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2305,
                        "src": "1950:5:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 5793,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1950:39:26",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 5794,
                    "nodeType": "ExpressionStatement",
                    "src": "1950:39:26"
                  }
                ]
              },
              "functionSelector": "40c10f19",
              "id": 5796,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 5763,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 5762,
                    "name": "ownerOnly",
                    "nameLocations": [
                      "1703:9:26"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 5711,
                    "src": "1703:9:26"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1703:9:26"
                }
              ],
              "name": "mint",
              "nameLocation": "1656:4:26",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 5761,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5758,
                    "mutability": "mutable",
                    "name": "account",
                    "nameLocation": "1669:7:26",
                    "nodeType": "VariableDeclaration",
                    "scope": 5796,
                    "src": "1661:15:26",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 5757,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1661:7:26",
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
                    "id": 5760,
                    "mutability": "mutable",
                    "name": "amount",
                    "nameLocation": "1686:6:26",
                    "nodeType": "VariableDeclaration",
                    "scope": 5796,
                    "src": "1678:14:26",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5759,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1678:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1660:33:26"
              },
              "returnParameters": {
                "id": 5764,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1713:0:26"
              },
              "scope": 5901,
              "src": "1647:349:26",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": {
                "id": 5815,
                "nodeType": "Block",
                "src": "2072:56:26",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 5806,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5798,
                          "src": "2088:7:26",
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
                          "id": 5812,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 5807,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5800,
                            "src": "2097:6:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 5811,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "hexValue": "3130",
                              "id": 5808,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2106:2:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_10_by_1",
                                "typeString": "int_const 10"
                              },
                              "value": "10"
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "**",
                            "rightExpression": {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 5809,
                                "name": "decimals",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1976,
                                "src": "2110:8:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
                                  "typeString": "function () view returns (uint8)"
                                }
                              },
                              "id": 5810,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2110:10:26",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            "src": "2106:14:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2097:23:26",
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
                        "id": 5805,
                        "name": "_burn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2377,
                        "src": "2082:5:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 5813,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2082:39:26",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 5814,
                    "nodeType": "ExpressionStatement",
                    "src": "2082:39:26"
                  }
                ]
              },
              "functionSelector": "9dc29fac",
              "id": 5816,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 5803,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 5802,
                    "name": "ownerOnly",
                    "nameLocations": [
                      "2062:9:26"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 5711,
                    "src": "2062:9:26"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2062:9:26"
                }
              ],
              "name": "burn",
              "nameLocation": "2015:4:26",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 5801,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5798,
                    "mutability": "mutable",
                    "name": "account",
                    "nameLocation": "2028:7:26",
                    "nodeType": "VariableDeclaration",
                    "scope": 5816,
                    "src": "2020:15:26",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 5797,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2020:7:26",
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
                    "id": 5800,
                    "mutability": "mutable",
                    "name": "amount",
                    "nameLocation": "2045:6:26",
                    "nodeType": "VariableDeclaration",
                    "scope": 5816,
                    "src": "2037:14:26",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5799,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2037:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2019:33:26"
              },
              "returnParameters": {
                "id": 5804,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2072:0:26"
              },
              "scope": 5901,
              "src": "2006:122:26",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": {
                "id": 5844,
                "nodeType": "Block",
                "src": "2268:173:26",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 5828,
                          "name": "_owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5818,
                          "src": "2300:6:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 5829,
                          "name": "_spender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5820,
                          "src": "2328:8:26",
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
                          "id": 5839,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "expression": {
                                  "id": 5831,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967281,
                                  "src": "2366:3:26",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 5832,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "2370:6:26",
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "src": "2366:10:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 5835,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4294967268,
                                    "src": "2386:4:26",
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
                                  "id": 5834,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "2378:7:26",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 5833,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2378:7:26",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 5836,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2378:13:26",
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
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 5830,
                              "name": "allowance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2043,
                              "src": "2356:9:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (address,address) view returns (uint256)"
                              }
                            },
                            "id": 5837,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2356:36:26",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "id": 5838,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5822,
                            "src": "2395:7:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2356:46:26",
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
                        "id": 5827,
                        "name": "_approve",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2422,
                        "src": "2278:8:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 5840,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2278:134:26",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 5841,
                    "nodeType": "ExpressionStatement",
                    "src": "2278:134:26"
                  },
                  {
                    "expression": {
                      "hexValue": "74727565",
                      "id": 5842,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2430:4:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 5826,
                    "id": 5843,
                    "nodeType": "Return",
                    "src": "2423:11:26"
                  }
                ]
              },
              "functionSelector": "d83a2bf3",
              "id": 5845,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "increaseContractAllowance",
              "nameLocation": "2171:25:26",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 5823,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5818,
                    "mutability": "mutable",
                    "name": "_owner",
                    "nameLocation": "2205:6:26",
                    "nodeType": "VariableDeclaration",
                    "scope": 5845,
                    "src": "2197:14:26",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 5817,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2197:7:26",
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
                    "id": 5820,
                    "mutability": "mutable",
                    "name": "_spender",
                    "nameLocation": "2220:8:26",
                    "nodeType": "VariableDeclaration",
                    "scope": 5845,
                    "src": "2212:16:26",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 5819,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2212:7:26",
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
                    "id": 5822,
                    "mutability": "mutable",
                    "name": "_amount",
                    "nameLocation": "2237:7:26",
                    "nodeType": "VariableDeclaration",
                    "scope": 5845,
                    "src": "2229:15:26",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5821,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2229:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2196:49:26"
              },
              "returnParameters": {
                "id": 5826,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5825,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 5845,
                    "src": "2262:4:26",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 5824,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2262:4:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2261:6:26"
              },
              "scope": 5901,
              "src": "2162:279:26",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 5899,
                "nodeType": "Block",
                "src": "2524:303:26",
                "statements": [
                  {
                    "assignments": [
                      5851
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 5851,
                        "mutability": "mutable",
                        "name": "lpSwapAmount",
                        "nameLocation": "2542:12:26",
                        "nodeType": "VariableDeclaration",
                        "scope": 5899,
                        "src": "2534:20:26",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 5850,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2534:7:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 5858,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 5857,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "hexValue": "313030303030",
                        "id": 5852,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2557:6:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100000_by_1",
                          "typeString": "int_const 100000"
                        },
                        "value": "100000"
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5856,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "3130",
                          "id": 5853,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2566:2:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10_by_1",
                            "typeString": "int_const 10"
                          },
                          "value": "10"
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "**",
                        "rightExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 5854,
                            "name": "decimals",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1976,
                            "src": "2570:8:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
                              "typeString": "function () view returns (uint8)"
                            }
                          },
                          "id": 5855,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2570:10:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "2566:14:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2557:23:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2534:46:26"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 5864,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967268,
                              "src": "2614:4:26",
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
                            "id": 5863,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2606:7:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 5862,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2606:7:26",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 5865,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2606:13:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "id": 5868,
                              "name": "lp",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5663,
                              "src": "2629:2:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_LiquidityPool_$11307",
                                "typeString": "contract LiquidityPool"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_LiquidityPool_$11307",
                                "typeString": "contract LiquidityPool"
                              }
                            ],
                            "id": 5867,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2621:7:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 5866,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2621:7:26",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 5869,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2621:11:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 5870,
                          "name": "lpSwapAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5851,
                          "src": "2634:12:26",
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
                          "id": 5859,
                          "name": "super",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967271,
                          "src": "2590:5:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_super$_Jet2Token_$5901_$",
                            "typeString": "type(contract super Jet2Token)"
                          }
                        },
                        "id": 5861,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2596:9:26",
                        "memberName": "_transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2248,
                        "src": "2590:15:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 5871,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2590:57:26",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 5872,
                    "nodeType": "ExpressionStatement",
                    "src": "2590:57:26"
                  },
                  {
                    "assignments": [
                      5874
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 5874,
                        "mutability": "mutable",
                        "name": "remainingAmount",
                        "nameLocation": "2666:15:26",
                        "nodeType": "VariableDeclaration",
                        "scope": 5899,
                        "src": "2658:23:26",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 5873,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2658:7:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 5881,
                    "initialValue": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 5878,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967268,
                              "src": "2702:4:26",
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
                            "id": 5877,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2694:7:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 5876,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2694:7:26",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 5879,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2694:13:26",
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
                        "id": 5875,
                        "name": "balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2000,
                        "src": "2684:9:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view returns (uint256)"
                        }
                      },
                      "id": 5880,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2684:24:26",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2658:50:26"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 5887,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967268,
                              "src": "2742:4:26",
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
                            "id": 5886,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2734:7:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 5885,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2734:7:26",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 5888,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2734:13:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "id": 5891,
                              "name": "treasuryWallet",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5660,
                              "src": "2757:14:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            ],
                            "id": 5890,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2749:7:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 5889,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2749:7:26",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 5892,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2749:23:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 5893,
                          "name": "remainingAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5874,
                          "src": "2774:15:26",
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
                          "id": 5882,
                          "name": "super",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967271,
                          "src": "2718:5:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_super$_Jet2Token_$5901_$",
                            "typeString": "type(contract super Jet2Token)"
                          }
                        },
                        "id": 5884,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2724:9:26",
                        "memberName": "_transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2248,
                        "src": "2718:15:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 5894,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2718:72:26",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 5895,
                    "nodeType": "ExpressionStatement",
                    "src": "2718:72:26"
                  },
                  {
                    "eventCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 5896,
                        "name": "TreasuryMoved",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5654,
                        "src": "2805:13:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                          "typeString": "function ()"
                        }
                      },
                      "id": 5897,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2805:15:26",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 5898,
                    "nodeType": "EmitStatement",
                    "src": "2800:20:26"
                  }
                ]
              },
              "functionSelector": "f3748af9",
              "id": 5900,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 5848,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 5847,
                    "name": "ownerOnly",
                    "nameLocations": [
                      "2514:9:26"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 5711,
                    "src": "2514:9:26"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2514:9:26"
                }
              ],
              "name": "MoveToTreasuryWallet",
              "nameLocation": "2484:20:26",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 5846,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2504:2:26"
              },
              "returnParameters": {
                "id": 5849,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2524:0:26"
              },
              "scope": 5901,
              "src": "2475:352:26",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 5902,
          "src": "429:2401:26",
          "usedErrors": []
        }
      ],
      "src": "41:2789:26"
    },
    "compiler": {
      "name": "solc",
      "version": "0.8.17+commit.8df45f5f.Emscripten.clang"
    },
    "networks": {},
    "schemaVersion": "3.4.10",
    "updatedAt": "2022-11-29T14:59:18.823Z",
    "networkType": "ethereum",
    "devdoc": {
      "kind": "dev",
      "methods": {
        "allowance(address,address)": {
          "details": "See {IERC20-allowance}."
        },
        "approve(address,uint256)": {
          "details": "See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."
        },
        "balanceOf(address)": {
          "details": "See {IERC20-balanceOf}."
        },
        "decimals()": {
          "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
        },
        "decreaseAllowance(address,uint256)": {
          "details": "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
        },
        "increaseAllowance(address,uint256)": {
          "details": "Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."
        },
        "name()": {
          "details": "Returns the name of the token."
        },
        "symbol()": {
          "details": "Returns the symbol of the token, usually a shorter version of the name."
        },
        "totalSupply()": {
          "details": "See {IERC20-totalSupply}."
        },
        "transfer(address,uint256)": {
          "details": "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`."
        },
        "transferFrom(address,address,uint256)": {
          "details": "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`."
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

module.exports = J2TOKEN;