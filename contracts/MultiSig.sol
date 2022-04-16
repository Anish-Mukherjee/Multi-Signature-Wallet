// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract MultiSig {
    address[] public owners;
    mapping(address => bool) isOwner;
    uint256 numConfirmationsRequired;

    constructor(address[] memory _owners, uint256 _numConfirmationsRequired) {
        require(_owners.length > 0, "Atleast 1 owner required");
        require(
            _numConfirmationsRequired > 0 &&
                _numConfirmationsRequired <= _owners.length,
            "Invalid number of confirmations"
        );
        for (uint256 i = 0; i < _owners.length; i++) {
            address owner = _owners[i];
            require(owner != address(0), "Invalid owner"); // Address 0 used to burn tokens
            require(!isOwner[owner], "Owner not unique");
            isOwner[owner] = true;
            owners.push(owner);
        }
        numConfirmationsRequired = _numConfirmationsRequired;
    }
}
