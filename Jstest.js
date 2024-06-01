/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nftGallery = [];  //or you can use const nftGallery=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (title, genre, creator, price) {
   const nftMetadata = {
      title: title,
      genre: genre,
      creator: creator,
      price: price
  };
  nftGallery.push(nftMetadata);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for (let i = 0; i < nftGallery.length; i++) {
      console.log("Title: \t\t" + nftGallery[i].title);
      console.log("Genre: \t\t" + nftGallery[i].genre);
      console.log("Creator: \t" + nftGallery[i].creator);
      console.log("Price: \t\t" + nftGallery[i].price);
      console.log('------------------------');
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   return nftGallery.length;
}

// call your functions below this line
mintNFT("Sunset Bliss", "Landscape", "John Doe", "$3,000");
mintNFT("Cyber Dreams", "Sci-Fi", "Jane Smith", "$20,000");
mintNFT("Ethereal Beauty", "Fantasy", "Alex Johnson", "$18,000");
// Listing all NFTs
listNFTs();
// Printing the total supply of NFTs
console.log("Total NFTs minted: " + getTotalSupply());
