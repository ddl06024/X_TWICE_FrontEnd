pragma solidity >0.5.0;
//SPDX-License-Identifier: UNLICENSED

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";

contract PictureNFT is ERC721Full {
    struct Picture {
        string author;
        string dateCreated;
    }

    mapping(uint256 => Picture) Pictures;
    mapping(string => uint256) pictureIdsCreated;

    constructor(string memory name, string memory symbol)
        public
        ERC721Full(name, symbol)
    {}

    function mintNFT(
        string memory _pictureId,
        string memory _author,
        string memory _dateCreated,
        string memory _tokenURI
    ) public {
        require(
            pictureIdsCreated[_pictureId] == 0,
            "pictureId has already been created"
        );
        uint256 tokenId = totalSupply().add(1); //전체 토큰의 개수 +1
        Pictures[tokenId] = Picture(_author, _dateCreated);
        pictureIdsCreated[_pictureId] = tokenId;

        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, _tokenURI);
    }

    function getNFT(uint256 _tokenId)
        public
        view
        returns (string memory, string memory)
    {
        return (Pictures[_tokenId].author, Pictures[_tokenId].dateCreated);
    }

    function isTokenAlreadyCreated(string memory _pictureId)
        public
        view
        returns (bool)
    {
        return pictureIdsCreated[_pictureId] != 0 ? true : false;
    }
}
