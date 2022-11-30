const ROUTER = {
  "contractName": "JetTRouter",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "contract LiquidityPool",
          "name": "_liquidityPool",
          "type": "address"
        },
        {
          "internalType": "contract JetToken",
          "name": "_jet",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "_getAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_jtAmount",
          "type": "uint256"
        }
      ],
      "name": "addLiquidity",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pullLiquidity",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_jtAmount",
          "type": "uint256"
        }
      ],
      "name": "swapTokens",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.17+commit.8df45f5f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"contract LiquidityPool\",\"name\":\"_liquidityPool\",\"type\":\"address\"},{\"internalType\":\"contract JetToken\",\"name\":\"_jet\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"_getAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_jtAmount\",\"type\":\"uint256\"}],\"name\":\"addLiquidity\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pullLiquidity\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_jtAmount\",\"type\":\"uint256\"}],\"name\":\"swapTokens\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/JetTRouter.sol\":\"JetTRouter\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/security/Pausable.sol\":{\"keccak256\":\"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004\",\"dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B\"]},\"@openzeppelin/contracts/security/ReentrancyGuard.sol\":{\"keccak256\":\"0x190dd6f8d592b7e4e930feb7f4313aeb8e1c4ad3154c27ce1cf6a512fc30d8cc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ce8dfb62d0c4fa260d6eec8f1cd47f5f2a044e11bde5b31d18072fa6e7d9010\",\"dweb:/ipfs/QmTyFztU3tLEcEDnqqiaW4UJetqsU77LXc6pjc9oTXCK5u\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x4ffc0547c02ad22925310c585c0f166f8759e2648a09e9b489100c42f15dd98d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://15f52f51413a9de1ff191e2f6367c62178e1df7806d7880fe857a98b0b66253d\",\"dweb:/ipfs/QmaQG1fwfgUt5E9nu2cccFiV47B2V78MM1tCy1qB7n4MsH\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34\",\"dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xa4d1d62251f8574deb032a35fc948386a9b4de74b812d4f545a1ac120486b48a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8c969013129ba9e651a20735ef659fef6d8a1139ea3607bd4b26ddea2d645634\",\"dweb:/ipfs/QmVhVa6LGuzAcB8qgDtVHRkucn4ihj5UZr8xBLcJkP6ucb\"]},\"@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xa1e8e83cd0087785df04ac79fb395d9f3684caeaf973d9e2c71caef723a3a5d6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://33bbf48cc069be677705037ba7520c22b1b622c23b33e1a71495f2d36549d40b\",\"dweb:/ipfs/Qmct36zWXv3j7LZB83uwbg7TXwnZSN1fqHNDZ93GG98bGz\"]},\"@uniswap/lib/contracts/libraries/Babylonian.sol\":{\"keccak256\":\"0xe20fc48e3575b4a2932e5d2dd53b6742e1ca96f652bd41038cb89d7f5d49a096\",\"urls\":[\"bzz-raw://6ba298d8e592d39960eabc2328b7d4a01ad6cf8b06366adc3ef0133d3b196a9f\",\"dweb:/ipfs/QmQgrNaHssJ8XVsPUCMHpyYRFLbBqNrumaoFgXHWdDiTyy\"]},\"project:/contracts/Jet2Token.sol\":{\"keccak256\":\"0x096e3b882b8e7937da0aaceac97b46cb323b5ea4afd51964f3a7554987f3d6ad\",\"license\":\"GPL-3.0-only\",\"urls\":[\"bzz-raw://a89f62ba22d7889200ffc06372874fa91e99913745f7ed120065df6815c3b1ea\",\"dweb:/ipfs/Qmean2SEtji3m6gWPEUPy7K5NdPigCXYkAjvycymP9htti\"]},\"project:/contracts/JetTRouter.sol\":{\"keccak256\":\"0xe3207be3bdf0bcfb4c93c91d85758324745b791c693e02385a940c2de35dc897\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://e52bc9ed1f0aa258458ab64189832e1d784948b41cde064ee795c8387258457e\",\"dweb:/ipfs/QmVSkSiWV4B1p8sj84bk6De3pWxkeCTeNbTRxzT2ot9b51\"]},\"project:/contracts/JetToken.sol\":{\"keccak256\":\"0x4702e50cf8503cc1120618e2333c1cf842c842cbf53ca25fb7a9fbb4e8f051ce\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://80ee0620b1f13a524f85482182c7e714b8edbfea964af077097c4d9634a09cfc\",\"dweb:/ipfs/Qmb91iASuLSuqZTotGfFA3EQkbNnRQ6yCbqcPpABRtdmk6\"]},\"project:/contracts/LPT.sol\":{\"keccak256\":\"0xed736abaceb3ae48c617e3f658e9b025d5b61ef8df551970899895432b0ec7b6\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://ad6919c26ab33a0f95936b6de5c1267e1a4ce2d41ef609c72be2ea63e39cf275\",\"dweb:/ipfs/QmVMZpeSSxWUxc9SME2pgQ3xwazzvdjRYGxF7sfMWGspwn\"]},\"project:/contracts/LiquidityPool.sol\":{\"keccak256\":\"0xfd66d7c0944de79c5c033775f51c15e42e4b46f9cf57be7ef0e4696432143382\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://307600d2025ef8566b2389a199fb50ccafbcdb35813a1deda78c0edac7d31592\",\"dweb:/ipfs/QmbFZWqDo9nyam9m8ms9WXaEbRqnW9ZrhATkRzUHTJfS3T\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162000b3c38038062000b3c833981810160405281019062000037919062000183565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050620001ca565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000f282620000c5565b9050919050565b60006200010682620000e5565b9050919050565b6200011881620000f9565b81146200012457600080fd5b50565b60008151905062000138816200010d565b92915050565b60006200014b82620000e5565b9050919050565b6200015d816200013e565b81146200016957600080fd5b50565b6000815190506200017d8162000152565b92915050565b600080604083850312156200019d576200019c620000c0565b5b6000620001ad8582860162000127565b9250506020620001c0858286016200016c565b9150509250929050565b61096280620001da6000396000f3fe60806040526004361061003f5760003560e01c806351c6590a14610044578063b2ceaa0114610060578063f8e35be71461008c578063fe784eaa146100a3575b600080fd5b61005e600480360381019061005991906106be565b6100bf565b005b34801561006c57600080fd5b506100756103a2565b60405161008392919061072c565b60405180910390f35b34801561009857600080fd5b506100a16103f1565b005b6100bd60048036038101906100b891906106be565b61047e565b005b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b815260040161011c9190610755565b602060405180830381865afa158015610139573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015d9190610785565b1161019d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101949061080f565b60405180910390fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d83a2bf33330856040518463ffffffff1660e01b81526004016101fe9392919061083e565b6020604051808303816000875af115801561021d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024191906108ad565b90508061024d57600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3360008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040518463ffffffff1660e01b81526004016102cc9392919061083e565b6020604051808303816000875af11580156102eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030f91906108ad565b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636e553f653484336040518463ffffffff1660e01b815260040161036c9291906108da565b6000604051808303818588803b15801561038557600080fd5b505af1158015610399573d6000803e3d6000fd5b50505050505050565b60008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915091509091565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166351cff8d9336040518263ffffffff1660e01b815260040161044a9190610755565b600060405180830381600087803b15801561046457600080fd5b505af1158015610478573d6000803e3d6000fd5b50505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d83a2bf33330856040518463ffffffff1660e01b81526004016104df9392919061083e565b6020604051808303816000875af11580156104fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052291906108ad565b90508061052e57600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3360008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040518463ffffffff1660e01b81526004016105ad9392919061083e565b6020604051808303816000875af11580156105cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f091906108ad565b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d004f0f73433856040518463ffffffff1660e01b815260040161064d929190610903565b6000604051808303818588803b15801561066657600080fd5b505af115801561067a573d6000803e3d6000fd5b50505050505050565b600080fd5b6000819050919050565b61069b81610688565b81146106a657600080fd5b50565b6000813590506106b881610692565b92915050565b6000602082840312156106d4576106d3610683565b5b60006106e2848285016106a9565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610716826106eb565b9050919050565b6107268161070b565b82525050565b6000604082019050610741600083018561071d565b61074e602083018461071d565b9392505050565b600060208201905061076a600083018461071d565b92915050565b60008151905061077f81610692565b92915050565b60006020828403121561079b5761079a610683565b5b60006107a984828501610770565b91505092915050565b600082825260208201905092915050565b7f4e4f5f415641494c41424c455f544f4b454e5300000000000000000000000000600082015250565b60006107f96013836107b2565b9150610804826107c3565b602082019050919050565b60006020820190508181036000830152610828816107ec565b9050919050565b61083881610688565b82525050565b6000606082019050610853600083018661071d565b610860602083018561071d565b61086d604083018461082f565b949350505050565b60008115159050919050565b61088a81610875565b811461089557600080fd5b50565b6000815190506108a781610881565b92915050565b6000602082840312156108c3576108c2610683565b5b60006108d184828501610898565b91505092915050565b60006040820190506108ef600083018561082f565b6108fc602083018461071d565b9392505050565b6000604082019050610918600083018561071d565b610925602083018461082f565b939250505056fea2646970667358221220eb025a12050dd765248ebbc383ec332670fbdcb1c5059309669acfbb44a5d56464736f6c63430008110033",
  "deployedBytecode": "0x60806040526004361061003f5760003560e01c806351c6590a14610044578063b2ceaa0114610060578063f8e35be71461008c578063fe784eaa146100a3575b600080fd5b61005e600480360381019061005991906106be565b6100bf565b005b34801561006c57600080fd5b506100756103a2565b60405161008392919061072c565b60405180910390f35b34801561009857600080fd5b506100a16103f1565b005b6100bd60048036038101906100b891906106be565b61047e565b005b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b815260040161011c9190610755565b602060405180830381865afa158015610139573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015d9190610785565b1161019d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101949061080f565b60405180910390fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d83a2bf33330856040518463ffffffff1660e01b81526004016101fe9392919061083e565b6020604051808303816000875af115801561021d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024191906108ad565b90508061024d57600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3360008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040518463ffffffff1660e01b81526004016102cc9392919061083e565b6020604051808303816000875af11580156102eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030f91906108ad565b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636e553f653484336040518463ffffffff1660e01b815260040161036c9291906108da565b6000604051808303818588803b15801561038557600080fd5b505af1158015610399573d6000803e3d6000fd5b50505050505050565b60008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915091509091565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166351cff8d9336040518263ffffffff1660e01b815260040161044a9190610755565b600060405180830381600087803b15801561046457600080fd5b505af1158015610478573d6000803e3d6000fd5b50505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d83a2bf33330856040518463ffffffff1660e01b81526004016104df9392919061083e565b6020604051808303816000875af11580156104fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052291906108ad565b90508061052e57600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3360008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040518463ffffffff1660e01b81526004016105ad9392919061083e565b6020604051808303816000875af11580156105cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f091906108ad565b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d004f0f73433856040518463ffffffff1660e01b815260040161064d929190610903565b6000604051808303818588803b15801561066657600080fd5b505af115801561067a573d6000803e3d6000fd5b50505050505050565b600080fd5b6000819050919050565b61069b81610688565b81146106a657600080fd5b50565b6000813590506106b881610692565b92915050565b6000602082840312156106d4576106d3610683565b5b60006106e2848285016106a9565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610716826106eb565b9050919050565b6107268161070b565b82525050565b6000604082019050610741600083018561071d565b61074e602083018461071d565b9392505050565b600060208201905061076a600083018461071d565b92915050565b60008151905061077f81610692565b92915050565b60006020828403121561079b5761079a610683565b5b60006107a984828501610770565b91505092915050565b600082825260208201905092915050565b7f4e4f5f415641494c41424c455f544f4b454e5300000000000000000000000000600082015250565b60006107f96013836107b2565b9150610804826107c3565b602082019050919050565b60006020820190508181036000830152610828816107ec565b9050919050565b61083881610688565b82525050565b6000606082019050610853600083018661071d565b610860602083018561071d565b61086d604083018461082f565b949350505050565b60008115159050919050565b61088a81610875565b811461089557600080fd5b50565b6000815190506108a781610881565b92915050565b6000602082840312156108c3576108c2610683565b5b60006108d184828501610898565b91505092915050565b60006040820190506108ef600083018561082f565b6108fc602083018461071d565b9392505050565b6000604082019050610918600083018561071d565b610925602083018461082f565b939250505056fea2646970667358221220eb025a12050dd765248ebbc383ec332670fbdcb1c5059309669acfbb44a5d56464736f6c63430008110033",
  "immutableReferences": {},
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:2116:37",
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
              "src": "511:51:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "521:35:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "550:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "532:17:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "532:24:37"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "521:7:37"
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
                "src": "493:5:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "503:7:37",
                "type": ""
              }
            ],
            "src": "466:96:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "636:51:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "646:35:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "675:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_address",
                      "nodeType": "YulIdentifier",
                      "src": "657:17:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "657:24:37"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "646:7:37"
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
                "src": "618:5:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "628:7:37",
                "type": ""
              }
            ],
            "src": "568:119:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "759:102:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "839:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "848:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "851:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "841:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "841:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "841:12:37"
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
                            "src": "782:5:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "830:5:37"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_contract$_LiquidityPool_$11307",
                              "nodeType": "YulIdentifier",
                              "src": "789:40:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "789:47:37"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "779:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "779:58:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "772:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "772:66:37"
                  },
                  "nodeType": "YulIf",
                  "src": "769:86:37"
                }
              ]
            },
            "name": "validator_revert_t_contract$_LiquidityPool_$11307",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "752:5:37",
                "type": ""
              }
            ],
            "src": "693:168:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "953:103:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "963:22:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "978:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "972:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "972:13:37"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "963:5:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1044:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_contract$_LiquidityPool_$11307",
                      "nodeType": "YulIdentifier",
                      "src": "994:49:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "994:56:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "994:56:37"
                }
              ]
            },
            "name": "abi_decode_t_contract$_LiquidityPool_$11307_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "931:6:37",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "939:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "947:5:37",
                "type": ""
              }
            ],
            "src": "867:189:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1124:51:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1134:35:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1163:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_address",
                      "nodeType": "YulIdentifier",
                      "src": "1145:17:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1145:24:37"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "1134:7:37"
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
                "src": "1106:5:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "1116:7:37",
                "type": ""
              }
            ],
            "src": "1062:113:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1241:96:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1315:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1324:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1327:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1317:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1317:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1317:12:37"
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
                            "src": "1264:5:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "1306:5:37"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_contract$_JetToken_$6888",
                              "nodeType": "YulIdentifier",
                              "src": "1271:34:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1271:41:37"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "1261:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1261:52:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "1254:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1254:60:37"
                  },
                  "nodeType": "YulIf",
                  "src": "1251:80:37"
                }
              ]
            },
            "name": "validator_revert_t_contract$_JetToken_$6888",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1234:5:37",
                "type": ""
              }
            ],
            "src": "1181:156:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1423:97:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1433:22:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "1448:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "1442:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1442:13:37"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "1433:5:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1508:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_contract$_JetToken_$6888",
                      "nodeType": "YulIdentifier",
                      "src": "1464:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1464:50:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1464:50:37"
                }
              ]
            },
            "name": "abi_decode_t_contract$_JetToken_$6888_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "1401:6:37",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "1409:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1417:5:37",
                "type": ""
              }
            ],
            "src": "1343:177:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1660:453:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1706:83:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "1708:77:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1708:79:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1708:79:37"
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
                            "src": "1681:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1690:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1677:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1677:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1702:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1673:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1673:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "1670:119:37"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1799:151:37",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1814:15:37",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1828:1:37",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1818:6:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1843:97:37",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1912:9:37"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1923:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1908:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1908:22:37"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1932:7:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_contract$_LiquidityPool_$11307_fromMemory",
                          "nodeType": "YulIdentifier",
                          "src": "1853:54:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1853:87:37"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1843:6:37"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1960:146:37",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1975:16:37",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1989:2:37",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1979:6:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2005:91:37",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2068:9:37"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2079:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2064:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2064:22:37"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2088:7:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_contract$_JetToken_$6888_fromMemory",
                          "nodeType": "YulIdentifier",
                          "src": "2015:48:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2015:81:37"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "2005:6:37"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_contract$_LiquidityPool_$11307t_contract$_JetToken_$6888_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1622:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1633:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1645:6:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1653:6:37",
                "type": ""
              }
            ],
            "src": "1526:587:37"
          }
        ]
      },
      "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_contract$_LiquidityPool_$11307(value) -> cleaned {\n        cleaned := cleanup_t_address(value)\n    }\n\n    function validator_revert_t_contract$_LiquidityPool_$11307(value) {\n        if iszero(eq(value, cleanup_t_contract$_LiquidityPool_$11307(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_contract$_LiquidityPool_$11307_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_contract$_LiquidityPool_$11307(value)\n    }\n\n    function cleanup_t_contract$_JetToken_$6888(value) -> cleaned {\n        cleaned := cleanup_t_address(value)\n    }\n\n    function validator_revert_t_contract$_JetToken_$6888(value) {\n        if iszero(eq(value, cleanup_t_contract$_JetToken_$6888(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_contract$_JetToken_$6888_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_contract$_JetToken_$6888(value)\n    }\n\n    function abi_decode_tuple_t_contract$_LiquidityPool_$11307t_contract$_JetToken_$6888_fromMemory(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_contract$_LiquidityPool_$11307_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_contract$_JetToken_$6888_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n}\n",
      "id": 37,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:5559:37",
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
              "src": "379:32:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "389:16:37",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "400:5:37"
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
            "name": "cleanup_t_uint256",
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
            "src": "334:77:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "460:79:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "517:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "526:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "529:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "519:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "519:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "519:12:37"
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
                            "src": "483:5:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "508:5:37"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "490:17:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "490:24:37"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "480:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "480:35:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "473:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "473:43:37"
                  },
                  "nodeType": "YulIf",
                  "src": "470:63:37"
                }
              ]
            },
            "name": "validator_revert_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "453:5:37",
                "type": ""
              }
            ],
            "src": "417:122:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "597:87:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "607:29:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "629:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "616:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "616:20:37"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "607:5:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "672:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "645:26:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "645:33:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "645:33:37"
                }
              ]
            },
            "name": "abi_decode_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "575:6:37",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "583:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "591:5:37",
                "type": ""
              }
            ],
            "src": "545:139:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "756:263:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "802:83:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "804:77:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "804:79:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "804:79:37"
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
                            "src": "777:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "786:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "773:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "773:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "798:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "769:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "769:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "766:119:37"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "895:117:37",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "910:15:37",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "924:1:37",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "914:6:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "939:63:37",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "974:9:37"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "985:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "970:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "970:22:37"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "994:7:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "949:20:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "949:53:37"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "939:6:37"
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
                "src": "726:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "737:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "749:6:37",
                "type": ""
              }
            ],
            "src": "690:329:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1070:81:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1080:65:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1095:5:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1102:42:37",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "1091:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1091:54:37"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "1080:7:37"
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
                "src": "1052:5:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "1062:7:37",
                "type": ""
              }
            ],
            "src": "1025:126:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1202:51:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1212:35:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1241:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "1223:17:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1223:24:37"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "1212:7:37"
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
                "src": "1184:5:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "1194:7:37",
                "type": ""
              }
            ],
            "src": "1157:96:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1324:53:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1341:3:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1364:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "1346:17:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1346:24:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1334:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1334:37:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1334:37:37"
                }
              ]
            },
            "name": "abi_encode_t_address_to_t_address_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1312:5:37",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1319:3:37",
                "type": ""
              }
            ],
            "src": "1259:118:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1509:206:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1519:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1531:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1542:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1527:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1527:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1519:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "1599:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1612:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1623:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1608:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1608:17:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "1555:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1555:71:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1555:71:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "1680:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1693:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1704:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1689:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1689:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "1636:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1636:72:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1636:72:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_address__to_t_address_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1473:9:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1485:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1493:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1504:4:37",
                "type": ""
              }
            ],
            "src": "1383:332:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1819:124:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1829:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1841:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1852:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1837:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1837:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1829:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "1909:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1922:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1933:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1918:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1918:17:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "1865:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1865:71:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1865:71:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1791:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1803:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1814:4:37",
                "type": ""
              }
            ],
            "src": "1721:222:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2012:80:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2022:22:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "2037:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "2031:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2031:13:37"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "2022:5:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2080:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "2053:26:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2053:33:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2053:33:37"
                }
              ]
            },
            "name": "abi_decode_t_uint256_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "1990:6:37",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "1998:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2006:5:37",
                "type": ""
              }
            ],
            "src": "1949:143:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2175:274:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2221:83:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "2223:77:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2223:79:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2223:79:37"
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
                            "src": "2196:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2205:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2192:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2192:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2217:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2188:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2188:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "2185:119:37"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "2314:128:37",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "2329:15:37",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2343:1:37",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "2333:6:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2358:74:37",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2404:9:37"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2415:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2400:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2400:22:37"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2424:7:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256_fromMemory",
                          "nodeType": "YulIdentifier",
                          "src": "2368:31:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2368:64:37"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "2358:6:37"
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
                "src": "2145:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2156:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2168:6:37",
                "type": ""
              }
            ],
            "src": "2098:351:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2551:73:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2568:3:37"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2573:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2561:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2561:19:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2561:19:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2589:29:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2608:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2613:4:37",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2604:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2604:14:37"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "2589:11:37"
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
                "src": "2523:3:37",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "2528:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "2539:11:37",
                "type": ""
              }
            ],
            "src": "2455:169:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2736:63:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "2758:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2766:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2754:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2754:14:37"
                      },
                      {
                        "hexValue": "4e4f5f415641494c41424c455f544f4b454e53",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "2770:21:37",
                        "type": "",
                        "value": "NO_AVAILABLE_TOKENS"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2747:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2747:45:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2747:45:37"
                }
              ]
            },
            "name": "store_literal_in_memory_f794614507589c64e4caeb4c21a3a53766343898d684121f31df5d2a819f76dd",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "2728:6:37",
                "type": ""
              }
            ],
            "src": "2630:169:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2951:220:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2961:74:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3027:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3032:2:37",
                        "type": "",
                        "value": "19"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2968:58:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2968:67:37"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "2961:3:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3133:3:37"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_f794614507589c64e4caeb4c21a3a53766343898d684121f31df5d2a819f76dd",
                      "nodeType": "YulIdentifier",
                      "src": "3044:88:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3044:93:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3044:93:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3146:19:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3157:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3162:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3153:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3153:12:37"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "3146:3:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_f794614507589c64e4caeb4c21a3a53766343898d684121f31df5d2a819f76dd_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "2939:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "2947:3:37",
                "type": ""
              }
            ],
            "src": "2805:366:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3348:248:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3358:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3370:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3381:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3366:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3366:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3358:4:37"
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
                            "src": "3405:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3416:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3401:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3401:17:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "3424:4:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3430:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3420:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3420:20:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3394:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3394:47:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3394:47:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3450:139:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "3584:4:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_f794614507589c64e4caeb4c21a3a53766343898d684121f31df5d2a819f76dd_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "3458:124:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3458:131:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3450:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_f794614507589c64e4caeb4c21a3a53766343898d684121f31df5d2a819f76dd__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3328:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3343:4:37",
                "type": ""
              }
            ],
            "src": "3177:419:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3667:53:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3684:3:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "3707:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "3689:17:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3689:24:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3677:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3677:37:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3677:37:37"
                }
              ]
            },
            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3655:5:37",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "3662:3:37",
                "type": ""
              }
            ],
            "src": "3602:118:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3880:288:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3890:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3902:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3913:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3898:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3898:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3890:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "3970:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3983:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3994:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3979:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3979:17:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "3926:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3926:71:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3926:71:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "4051:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4064:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4075:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4060:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4060:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "4007:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4007:72:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4007:72:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "4133:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4146:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4157:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4142:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4142:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "4089:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4089:72:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4089:72:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3836:9:37",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "3848:6:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "3856:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3864:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3875:4:37",
                "type": ""
              }
            ],
            "src": "3726:442:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4216:48:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4226:32:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "4251:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "4244:6:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4244:13:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "4237:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4237:21:37"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "4226:7:37"
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
                "src": "4198:5:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "4208:7:37",
                "type": ""
              }
            ],
            "src": "4174:90:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4310:76:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4364:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4373:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4376:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4366:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4366:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4366:12:37"
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
                            "src": "4333:5:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "4355:5:37"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_bool",
                              "nodeType": "YulIdentifier",
                              "src": "4340:14:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4340:21:37"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "4330:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4330:32:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "4323:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4323:40:37"
                  },
                  "nodeType": "YulIf",
                  "src": "4320:60:37"
                }
              ]
            },
            "name": "validator_revert_t_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4303:5:37",
                "type": ""
              }
            ],
            "src": "4270:116:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4452:77:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4462:22:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "4477:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "4471:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4471:13:37"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "4462:5:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4517:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_bool",
                      "nodeType": "YulIdentifier",
                      "src": "4493:23:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4493:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4493:30:37"
                }
              ]
            },
            "name": "abi_decode_t_bool_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "4430:6:37",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "4438:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4446:5:37",
                "type": ""
              }
            ],
            "src": "4392:137:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4609:271:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4655:83:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "4657:77:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4657:79:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4657:79:37"
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
                            "src": "4630:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4639:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4626:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4626:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4651:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "4622:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4622:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "4619:119:37"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4748:125:37",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4763:15:37",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4777:1:37",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4767:6:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4792:71:37",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4835:9:37"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4846:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4831:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4831:22:37"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4855:7:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_bool_fromMemory",
                          "nodeType": "YulIdentifier",
                          "src": "4802:28:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4802:61:37"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4792:6:37"
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
                "src": "4579:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "4590:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4602:6:37",
                "type": ""
              }
            ],
            "src": "4535:345:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5012:206:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5022:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5034:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5045:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5030:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5030:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5022:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "5102:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5115:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5126:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5111:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5111:17:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "5058:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5058:71:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5058:71:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "5183:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5196:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5207:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5192:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5192:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "5139:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5139:72:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5139:72:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256_t_address__to_t_uint256_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4976:9:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "4988:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4996:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5007:4:37",
                "type": ""
              }
            ],
            "src": "4886:332:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5350:206:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5360:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5372:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5383:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5368:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5368:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5360:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "5440:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5453:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5464:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5449:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5449:17:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "5396:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5396:71:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5396:71:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "5521:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5534:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5545:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5530:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5530:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "5477:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5477:72:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5477:72:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5314:9:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "5326:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5334:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5345:4:37",
                "type": ""
              }
            ],
            "src": "5224:332:37"
          }
        ]
      },
      "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address_t_address__to_t_address_t_address__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_f794614507589c64e4caeb4c21a3a53766343898d684121f31df5d2a819f76dd(memPtr) {\n\n        mstore(add(memPtr, 0), \"NO_AVAILABLE_TOKENS\")\n\n    }\n\n    function abi_encode_t_stringliteral_f794614507589c64e4caeb4c21a3a53766343898d684121f31df5d2a819f76dd_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 19)\n        store_literal_in_memory_f794614507589c64e4caeb4c21a3a53766343898d684121f31df5d2a819f76dd(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_f794614507589c64e4caeb4c21a3a53766343898d684121f31df5d2a819f76dd__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_f794614507589c64e4caeb4c21a3a53766343898d684121f31df5d2a819f76dd_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed(headStart , value2, value1, value0) -> tail {\n        tail := add(headStart, 96)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function validator_revert_t_bool(value) {\n        if iszero(eq(value, cleanup_t_bool(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bool_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_bool(value)\n    }\n\n    function abi_decode_tuple_t_bool_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bool_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_tuple_t_uint256_t_address__to_t_uint256_t_address__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n    }\n\n}\n",
      "id": 37,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "118:1403:27:-:0;;;196:129;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;284:14;268:13;;:30;;;;;;;;;;;;;;;;;;314:4;308:3;;:10;;;;;;;;;;;;;;;;;;196:129;;118:1403;;88:117:37;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:119::-;628:7;657:24;675:5;657:24;:::i;:::-;646:35;;568:119;;;:::o;693:168::-;789:47;830:5;789:47;:::i;:::-;782:5;779:58;769:86;;851:1;848;841:12;769:86;693:168;:::o;867:189::-;947:5;978:6;972:13;963:22;;994:56;1044:5;994:56;:::i;:::-;867:189;;;;:::o;1062:113::-;1116:7;1145:24;1163:5;1145:24;:::i;:::-;1134:35;;1062:113;;;:::o;1181:156::-;1271:41;1306:5;1271:41;:::i;:::-;1264:5;1261:52;1251:80;;1327:1;1324;1317:12;1251:80;1181:156;:::o;1343:177::-;1417:5;1448:6;1442:13;1433:22;;1464:50;1508:5;1464:50;:::i;:::-;1343:177;;;;:::o;1526:587::-;1645:6;1653;1702:2;1690:9;1681:7;1677:23;1673:32;1670:119;;;1708:79;;:::i;:::-;1670:119;1828:1;1853:87;1932:7;1923:6;1912:9;1908:22;1853:87;:::i;:::-;1843:97;;1799:151;1989:2;2015:81;2088:7;2079:6;2068:9;2064:22;2015:81;:::i;:::-;2005:91;;1960:146;1526:587;;;;;:::o;118:1403:27:-;;;;;;;",
  "deployedSourceMap": "118:1403:27:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;460:527;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;331:123;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;993:85;;;;;;;;;;;;;:::i;:::-;;1084:435;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;460:527;564:1;536:3;;;;;;;;;;;:13;;;550:10;536:25;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:29;528:61;;;;;;;;;;;;:::i;:::-;;;;;;;;;628:12;643:3;;;;;;;;;;;:29;;;686:10;727:4;752:9;643:129;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;628:144;;790:7;782:16;;;;;;817:3;;;;;;;;;;;:16;;;834:10;854:13;;;;;;;;;;870:9;817:63;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;891:13;;;;;;;;;;:21;;;920:9;931;942:10;891:62;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;518:469;460:527;:::o;331:123::-;375:7;384;418:13;;;;;;;;;;442:3;;;;;;;;;;;402:45;;;;331:123;;:::o;993:85::-;1037:13;;;;;;;;;;:22;;;1060:10;1037:34;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;993:85::o;1084:435::-;1150:12;1165:3;;;;;;;;;;;:29;;;1208:10;1240:4;1259:9;1165:113;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1150:128;;1296:7;1288:16;;;;;;1380:3;;;;;;;;;;;:16;;;1397:10;1417:13;;;;;;;;;;1433:9;1380:63;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1453:13;;;;;;;;;;:18;;;1479:9;1490:10;1502:9;1453:59;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1140:379;1084:435;:::o;88:117:37:-;197:1;194;187:12;334:77;371:7;400:5;389:16;;334:77;;;:::o;417:122::-;490:24;508:5;490:24;:::i;:::-;483:5;480:35;470:63;;529:1;526;519:12;470:63;417:122;:::o;545:139::-;591:5;629:6;616:20;607:29;;645:33;672:5;645:33;:::i;:::-;545:139;;;;:::o;690:329::-;749:6;798:2;786:9;777:7;773:23;769:32;766:119;;;804:79;;:::i;:::-;766:119;924:1;949:53;994:7;985:6;974:9;970:22;949:53;:::i;:::-;939:63;;895:117;690:329;;;;:::o;1025:126::-;1062:7;1102:42;1095:5;1091:54;1080:65;;1025:126;;;:::o;1157:96::-;1194:7;1223:24;1241:5;1223:24;:::i;:::-;1212:35;;1157:96;;;:::o;1259:118::-;1346:24;1364:5;1346:24;:::i;:::-;1341:3;1334:37;1259:118;;:::o;1383:332::-;1504:4;1542:2;1531:9;1527:18;1519:26;;1555:71;1623:1;1612:9;1608:17;1599:6;1555:71;:::i;:::-;1636:72;1704:2;1693:9;1689:18;1680:6;1636:72;:::i;:::-;1383:332;;;;;:::o;1721:222::-;1814:4;1852:2;1841:9;1837:18;1829:26;;1865:71;1933:1;1922:9;1918:17;1909:6;1865:71;:::i;:::-;1721:222;;;;:::o;1949:143::-;2006:5;2037:6;2031:13;2022:22;;2053:33;2080:5;2053:33;:::i;:::-;1949:143;;;;:::o;2098:351::-;2168:6;2217:2;2205:9;2196:7;2192:23;2188:32;2185:119;;;2223:79;;:::i;:::-;2185:119;2343:1;2368:64;2424:7;2415:6;2404:9;2400:22;2368:64;:::i;:::-;2358:74;;2314:128;2098:351;;;;:::o;2455:169::-;2539:11;2573:6;2568:3;2561:19;2613:4;2608:3;2604:14;2589:29;;2455:169;;;;:::o;2630:::-;2770:21;2766:1;2758:6;2754:14;2747:45;2630:169;:::o;2805:366::-;2947:3;2968:67;3032:2;3027:3;2968:67;:::i;:::-;2961:74;;3044:93;3133:3;3044:93;:::i;:::-;3162:2;3157:3;3153:12;3146:19;;2805:366;;;:::o;3177:419::-;3343:4;3381:2;3370:9;3366:18;3358:26;;3430:9;3424:4;3420:20;3416:1;3405:9;3401:17;3394:47;3458:131;3584:4;3458:131;:::i;:::-;3450:139;;3177:419;;;:::o;3602:118::-;3689:24;3707:5;3689:24;:::i;:::-;3684:3;3677:37;3602:118;;:::o;3726:442::-;3875:4;3913:2;3902:9;3898:18;3890:26;;3926:71;3994:1;3983:9;3979:17;3970:6;3926:71;:::i;:::-;4007:72;4075:2;4064:9;4060:18;4051:6;4007:72;:::i;:::-;4089;4157:2;4146:9;4142:18;4133:6;4089:72;:::i;:::-;3726:442;;;;;;:::o;4174:90::-;4208:7;4251:5;4244:13;4237:21;4226:32;;4174:90;;;:::o;4270:116::-;4340:21;4355:5;4340:21;:::i;:::-;4333:5;4330:32;4320:60;;4376:1;4373;4366:12;4320:60;4270:116;:::o;4392:137::-;4446:5;4477:6;4471:13;4462:22;;4493:30;4517:5;4493:30;:::i;:::-;4392:137;;;;:::o;4535:345::-;4602:6;4651:2;4639:9;4630:7;4626:23;4622:32;4619:119;;;4657:79;;:::i;:::-;4619:119;4777:1;4802:61;4855:7;4846:6;4835:9;4831:22;4802:61;:::i;:::-;4792:71;;4748:125;4535:345;;;;:::o;4886:332::-;5007:4;5045:2;5034:9;5030:18;5022:26;;5058:71;5126:1;5115:9;5111:17;5102:6;5058:71;:::i;:::-;5139:72;5207:2;5196:9;5192:18;5183:6;5139:72;:::i;:::-;4886:332;;;;;:::o;5224:::-;5345:4;5383:2;5372:9;5368:18;5360:26;;5396:71;5464:1;5453:9;5449:17;5440:6;5396:71;:::i;:::-;5477:72;5545:2;5534:9;5530:18;5521:6;5477:72;:::i;:::-;5224:332;;;;;:::o",
  "source": "//SPDX-License-Identifier: Unlicense\npragma solidity ^0.8.0;\n\nimport \"./JetToken.sol\";\nimport \"./LiquidityPool.sol\";\n\ncontract JetTRouter {\n    LiquidityPool liquidityPool;\n    JetToken jet;\n\n    constructor(LiquidityPool _liquidityPool, JetToken _jet) \n    {\n        liquidityPool = _liquidityPool;\n        jet = _jet;\n    }\n\n    function _getAddress() public view returns (address, address){\n        return (address(liquidityPool), address(jet));\n    }\n\n    function addLiquidity(uint256 _jtAmount) external payable {\n        require(jet.balanceOf(msg.sender) > 0, \"NO_AVAILABLE_TOKENS\"); // 토큰 보유량 체크 \n\n        bool success = jet.increaseContractAllowance(\n            msg.sender, // from \n            address(this), // to\n            _jtAmount \n        );\n        require(success);\n        \n        jet.transferFrom(msg.sender, address(liquidityPool), _jtAmount); \n        liquidityPool.deposit{value: msg.value}(_jtAmount, msg.sender); // value:이더, token:jt \n    }\n\n    function pullLiquidity() external {\n        liquidityPool.withdraw(msg.sender);\n    }\n\n    function swapTokens(uint256 _jtAmount) external payable {\n        bool success = jet.increaseContractAllowance(\n            msg.sender,\n            address(this),\n            _jtAmount\n        );\n        require(success);\n\n        // 요청자의 jttoken: 0 or 0이상 을 pool로 전송\n        jet.transferFrom(msg.sender, address(liquidityPool), _jtAmount);\n        liquidityPool.swap{value: msg.value}(msg.sender, _jtAmount);\n    }\n}",
  "sourcePath": "C:\\Users\\user\\Desktop\\project3\\BEB-06-FINAL-06\\contract\\contracts\\JetTRouter.sol",
  "ast": {
    "absolutePath": "project:/contracts/JetTRouter.sol",
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
      "JetTRouter": [
        6062
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
      ]
    },
    "id": 6063,
    "license": "Unlicense",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5903,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "37:23:27"
      },
      {
        "absolutePath": "project:/contracts/JetToken.sol",
        "file": "./JetToken.sol",
        "id": 5904,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 6063,
        "sourceUnit": 6889,
        "src": "62:24:27",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "project:/contracts/LiquidityPool.sol",
        "file": "./LiquidityPool.sol",
        "id": 5905,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 6063,
        "sourceUnit": 11308,
        "src": "87:29:27",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "JetTRouter",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 6062,
        "linearizedBaseContracts": [
          6062
        ],
        "name": "JetTRouter",
        "nameLocation": "127:10:27",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5908,
            "mutability": "mutable",
            "name": "liquidityPool",
            "nameLocation": "158:13:27",
            "nodeType": "VariableDeclaration",
            "scope": 6062,
            "src": "144:27:27",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LiquidityPool_$11307",
              "typeString": "contract LiquidityPool"
            },
            "typeName": {
              "id": 5907,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 5906,
                "name": "LiquidityPool",
                "nameLocations": [
                  "144:13:27"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 11307,
                "src": "144:13:27"
              },
              "referencedDeclaration": 11307,
              "src": "144:13:27",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LiquidityPool_$11307",
                "typeString": "contract LiquidityPool"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 5911,
            "mutability": "mutable",
            "name": "jet",
            "nameLocation": "186:3:27",
            "nodeType": "VariableDeclaration",
            "scope": 6062,
            "src": "177:12:27",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_JetToken_$6888",
              "typeString": "contract JetToken"
            },
            "typeName": {
              "id": 5910,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 5909,
                "name": "JetToken",
                "nameLocations": [
                  "177:8:27"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 6888,
                "src": "177:8:27"
              },
              "referencedDeclaration": 6888,
              "src": "177:8:27",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_JetToken_$6888",
                "typeString": "contract JetToken"
              }
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5928,
              "nodeType": "Block",
              "src": "258:67:27",
              "statements": [
                {
                  "expression": {
                    "id": 5922,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5920,
                      "name": "liquidityPool",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5908,
                      "src": "268:13:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LiquidityPool_$11307",
                        "typeString": "contract LiquidityPool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5921,
                      "name": "_liquidityPool",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5914,
                      "src": "284:14:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LiquidityPool_$11307",
                        "typeString": "contract LiquidityPool"
                      }
                    },
                    "src": "268:30:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LiquidityPool_$11307",
                      "typeString": "contract LiquidityPool"
                    }
                  },
                  "id": 5923,
                  "nodeType": "ExpressionStatement",
                  "src": "268:30:27"
                },
                {
                  "expression": {
                    "id": 5926,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5924,
                      "name": "jet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5911,
                      "src": "308:3:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_JetToken_$6888",
                        "typeString": "contract JetToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5925,
                      "name": "_jet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5917,
                      "src": "314:4:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_JetToken_$6888",
                        "typeString": "contract JetToken"
                      }
                    },
                    "src": "308:10:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_JetToken_$6888",
                      "typeString": "contract JetToken"
                    }
                  },
                  "id": 5927,
                  "nodeType": "ExpressionStatement",
                  "src": "308:10:27"
                }
              ]
            },
            "id": 5929,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5918,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5914,
                  "mutability": "mutable",
                  "name": "_liquidityPool",
                  "nameLocation": "222:14:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 5929,
                  "src": "208:28:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_LiquidityPool_$11307",
                    "typeString": "contract LiquidityPool"
                  },
                  "typeName": {
                    "id": 5913,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5912,
                      "name": "LiquidityPool",
                      "nameLocations": [
                        "208:13:27"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 11307,
                      "src": "208:13:27"
                    },
                    "referencedDeclaration": 11307,
                    "src": "208:13:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LiquidityPool_$11307",
                      "typeString": "contract LiquidityPool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5917,
                  "mutability": "mutable",
                  "name": "_jet",
                  "nameLocation": "247:4:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 5929,
                  "src": "238:13:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_JetToken_$6888",
                    "typeString": "contract JetToken"
                  },
                  "typeName": {
                    "id": 5916,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5915,
                      "name": "JetToken",
                      "nameLocations": [
                        "238:8:27"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 6888,
                      "src": "238:8:27"
                    },
                    "referencedDeclaration": 6888,
                    "src": "238:8:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_JetToken_$6888",
                      "typeString": "contract JetToken"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "207:45:27"
            },
            "returnParameters": {
              "id": 5919,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "258:0:27"
            },
            "scope": 6062,
            "src": "196:129:27",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5946,
              "nodeType": "Block",
              "src": "392:62:27",
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "arguments": [
                          {
                            "id": 5938,
                            "name": "liquidityPool",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5908,
                            "src": "418:13:27",
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
                          "id": 5937,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "410:7:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 5936,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "410:7:27",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 5939,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "410:22:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 5942,
                            "name": "jet",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5911,
                            "src": "442:3:27",
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
                          "id": 5941,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "434:7:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 5940,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "434:7:27",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 5943,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "434:12:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "id": 5944,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "409:38:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_address_$",
                      "typeString": "tuple(address,address)"
                    }
                  },
                  "functionReturnParameters": 5935,
                  "id": 5945,
                  "nodeType": "Return",
                  "src": "402:45:27"
                }
              ]
            },
            "functionSelector": "b2ceaa01",
            "id": 5947,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getAddress",
            "nameLocation": "340:11:27",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5930,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "351:2:27"
            },
            "returnParameters": {
              "id": 5935,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5932,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 5947,
                  "src": "375:7:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5931,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "375:7:27",
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
                  "id": 5934,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 5947,
                  "src": "384:7:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5933,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "384:7:27",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "374:18:27"
            },
            "scope": 6062,
            "src": "331:123:27",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6003,
              "nodeType": "Block",
              "src": "518:469:27",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5959,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 5955,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "550:3:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 5956,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "554:6:27",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "550:10:27",
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
                              "id": 5953,
                              "name": "jet",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5911,
                              "src": "536:3:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_JetToken_$6888",
                                "typeString": "contract JetToken"
                              }
                            },
                            "id": 5954,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "540:9:27",
                            "memberName": "balanceOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 2000,
                            "src": "536:13:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view external returns (uint256)"
                            }
                          },
                          "id": 5957,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "536:25:27",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 5958,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "564:1:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "536:29:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4e4f5f415641494c41424c455f544f4b454e53",
                        "id": 5960,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "567:21:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f794614507589c64e4caeb4c21a3a53766343898d684121f31df5d2a819f76dd",
                          "typeString": "literal_string \"NO_AVAILABLE_TOKENS\""
                        },
                        "value": "NO_AVAILABLE_TOKENS"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f794614507589c64e4caeb4c21a3a53766343898d684121f31df5d2a819f76dd",
                          "typeString": "literal_string \"NO_AVAILABLE_TOKENS\""
                        }
                      ],
                      "id": 5952,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "528:7:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 5961,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "528:61:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5962,
                  "nodeType": "ExpressionStatement",
                  "src": "528:61:27"
                },
                {
                  "assignments": [
                    5964
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5964,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "633:7:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 6003,
                      "src": "628:12:27",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 5963,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "628:4:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5975,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 5967,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "686:3:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 5968,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "690:6:27",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "686:10:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 5971,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "727:4:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_JetTRouter_$6062",
                              "typeString": "contract JetTRouter"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_JetTRouter_$6062",
                              "typeString": "contract JetTRouter"
                            }
                          ],
                          "id": 5970,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "719:7:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 5969,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "719:7:27",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 5972,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "719:13:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 5973,
                        "name": "_jtAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5949,
                        "src": "752:9:27",
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
                        "id": 5965,
                        "name": "jet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5911,
                        "src": "643:3:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_JetToken_$6888",
                          "typeString": "contract JetToken"
                        }
                      },
                      "id": 5966,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "647:25:27",
                      "memberName": "increaseContractAllowance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6695,
                      "src": "643:29:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 5974,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "643:129:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "628:144:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 5977,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5964,
                        "src": "790:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 5976,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "782:7:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 5978,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "782:16:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5979,
                  "nodeType": "ExpressionStatement",
                  "src": "782:16:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 5983,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "834:3:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 5984,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "838:6:27",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "834:10:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 5987,
                            "name": "liquidityPool",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5908,
                            "src": "854:13:27",
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
                          "id": 5986,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "846:7:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 5985,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "846:7:27",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 5988,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "846:22:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 5989,
                        "name": "_jtAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5949,
                        "src": "870:9:27",
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
                        "id": 5980,
                        "name": "jet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5911,
                        "src": "817:3:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_JetToken_$6888",
                          "typeString": "contract JetToken"
                        }
                      },
                      "id": 5982,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "821:12:27",
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2101,
                      "src": "817:16:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 5990,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "817:63:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5991,
                  "nodeType": "ExpressionStatement",
                  "src": "817:63:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 5998,
                        "name": "_jtAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5949,
                        "src": "931:9:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 5999,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "942:3:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 6000,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "946:6:27",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "942:10:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "expression": {
                          "id": 5992,
                          "name": "liquidityPool",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5908,
                          "src": "891:13:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_LiquidityPool_$11307",
                            "typeString": "contract LiquidityPool"
                          }
                        },
                        "id": 5994,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "905:7:27",
                        "memberName": "deposit",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 11009,
                        "src": "891:21:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_payable$_t_uint256_$_t_address_$returns$__$",
                          "typeString": "function (uint256,address) payable external"
                        }
                      },
                      "id": 5997,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "names": [
                        "value"
                      ],
                      "nodeType": "FunctionCallOptions",
                      "options": [
                        {
                          "expression": {
                            "id": 5995,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "920:3:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 5996,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "924:5:27",
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "src": "920:9:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "891:39:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_payable$_t_uint256_$_t_address_$returns$__$value",
                        "typeString": "function (uint256,address) payable external"
                      }
                    },
                    "id": 6001,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "891:62:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6002,
                  "nodeType": "ExpressionStatement",
                  "src": "891:62:27"
                }
              ]
            },
            "functionSelector": "51c6590a",
            "id": 6004,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addLiquidity",
            "nameLocation": "469:12:27",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5950,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5949,
                  "mutability": "mutable",
                  "name": "_jtAmount",
                  "nameLocation": "490:9:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 6004,
                  "src": "482:17:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5948,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "482:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "481:19:27"
            },
            "returnParameters": {
              "id": 5951,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "518:0:27"
            },
            "scope": 6062,
            "src": "460:527:27",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 6014,
              "nodeType": "Block",
              "src": "1027:51:27",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 6010,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1060:3:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 6011,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1064:6:27",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1060:10:27",
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
                        "id": 6007,
                        "name": "liquidityPool",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5908,
                        "src": "1037:13:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LiquidityPool_$11307",
                          "typeString": "contract LiquidityPool"
                        }
                      },
                      "id": 6009,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1051:8:27",
                      "memberName": "withdraw",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11142,
                      "src": "1037:22:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address) external"
                      }
                    },
                    "id": 6012,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1037:34:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6013,
                  "nodeType": "ExpressionStatement",
                  "src": "1037:34:27"
                }
              ]
            },
            "functionSelector": "f8e35be7",
            "id": 6015,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pullLiquidity",
            "nameLocation": "1002:13:27",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6005,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1015:2:27"
            },
            "returnParameters": {
              "id": 6006,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1027:0:27"
            },
            "scope": 6062,
            "src": "993:85:27",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 6060,
              "nodeType": "Block",
              "src": "1140:379:27",
              "statements": [
                {
                  "assignments": [
                    6021
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6021,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "1155:7:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 6060,
                      "src": "1150:12:27",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 6020,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "1150:4:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 6032,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 6024,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1208:3:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 6025,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1212:6:27",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1208:10:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 6028,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "1240:4:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_JetTRouter_$6062",
                              "typeString": "contract JetTRouter"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_JetTRouter_$6062",
                              "typeString": "contract JetTRouter"
                            }
                          ],
                          "id": 6027,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1232:7:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 6026,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1232:7:27",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 6029,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1232:13:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 6030,
                        "name": "_jtAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6017,
                        "src": "1259:9:27",
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
                        "id": 6022,
                        "name": "jet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5911,
                        "src": "1165:3:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_JetToken_$6888",
                          "typeString": "contract JetToken"
                        }
                      },
                      "id": 6023,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1169:25:27",
                      "memberName": "increaseContractAllowance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6695,
                      "src": "1165:29:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 6031,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1165:113:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1150:128:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 6034,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6021,
                        "src": "1296:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 6033,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1288:7:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 6035,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1288:16:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6036,
                  "nodeType": "ExpressionStatement",
                  "src": "1288:16:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 6040,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1397:3:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 6041,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1401:6:27",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1397:10:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 6044,
                            "name": "liquidityPool",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5908,
                            "src": "1417:13:27",
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
                          "id": 6043,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1409:7:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 6042,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1409:7:27",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 6045,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1409:22:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 6046,
                        "name": "_jtAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6017,
                        "src": "1433:9:27",
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
                        "id": 6037,
                        "name": "jet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5911,
                        "src": "1380:3:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_JetToken_$6888",
                          "typeString": "contract JetToken"
                        }
                      },
                      "id": 6039,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1384:12:27",
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2101,
                      "src": "1380:16:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 6047,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1380:63:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6048,
                  "nodeType": "ExpressionStatement",
                  "src": "1380:63:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 6055,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1490:3:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 6056,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1494:6:27",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1490:10:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 6057,
                        "name": "_jtAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6017,
                        "src": "1502:9:27",
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
                          "id": 6049,
                          "name": "liquidityPool",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5908,
                          "src": "1453:13:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_LiquidityPool_$11307",
                            "typeString": "contract LiquidityPool"
                          }
                        },
                        "id": 6051,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1467:4:27",
                        "memberName": "swap",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10877,
                        "src": "1453:18:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_payable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256) payable external"
                        }
                      },
                      "id": 6054,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "names": [
                        "value"
                      ],
                      "nodeType": "FunctionCallOptions",
                      "options": [
                        {
                          "expression": {
                            "id": 6052,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "1479:3:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 6053,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1483:5:27",
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "src": "1479:9:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "1453:36:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_payable$_t_address_$_t_uint256_$returns$__$value",
                        "typeString": "function (address,uint256) payable external"
                      }
                    },
                    "id": 6058,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1453:59:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6059,
                  "nodeType": "ExpressionStatement",
                  "src": "1453:59:27"
                }
              ]
            },
            "functionSelector": "fe784eaa",
            "id": 6061,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "swapTokens",
            "nameLocation": "1093:10:27",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6018,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6017,
                  "mutability": "mutable",
                  "name": "_jtAmount",
                  "nameLocation": "1112:9:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 6061,
                  "src": "1104:17:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6016,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1104:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1103:19:27"
            },
            "returnParameters": {
              "id": 6019,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1140:0:27"
            },
            "scope": 6062,
            "src": "1084:435:27",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 6063,
        "src": "118:1403:27",
        "usedErrors": []
      }
    ],
    "src": "37:1484:27"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.17+commit.8df45f5f.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.4.10",
  "updatedAt": "2022-11-29T14:59:18.796Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}

module.exports = ROUTER;