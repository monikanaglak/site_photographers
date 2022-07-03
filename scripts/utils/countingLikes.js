function countingLikes(photographer_all_likes){
    const all_likes = photographer_all_likes;
      let total = 0;
      for(let i=0; i<all_likes.length; i++){
          total += all_likes[i];
    }
    return total;
    
};