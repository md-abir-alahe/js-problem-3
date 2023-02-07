function gemsToDiamond(firstFriendsGems, secondFriendsGems, thirdFriendsGems){
    if(typeof(firstFriendsGems)=="number" && typeof(secondFriendsGems)=="number"&& typeof(thirdFriendsGems)=="number"){
        const firstFriendsDiamonds = firstFriendsGems*21;
        const secondFriendsDiamonds = secondFriendsGems*32;
        const thirdFriendsDiamonds = thirdFriendsGems*43;
        const totalDiamonds = firstFriendsDiamonds+secondFriendsDiamonds+thirdFriendsDiamonds;
        if(totalDiamonds>=(1000*2)){
             const remainDiamonds = totalDiamonds - 2000;
             return remainDiamonds;
        }
        return totalDiamonds;
        
    }
    return 'Please enter valid three number'
}

console.log(gemsToDiamond(100,5,1));