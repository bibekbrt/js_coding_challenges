const user = {
  profile: {
    avatar: {
      url: "https://example.com/avatar.png"
    }
  }
};
const avatarUrl = user?.profile?.avatar?.url ?? "no avatar";

console.log(avatarUrl);

//avatar exists
const user1 = {
  profile: {
    avatar: {
      url: "https://example.com/avatar.png"
    }
  }
};

const avatarUrl1 = user1?.profile?.avatar?.url ?? "no avatar";
console.log(avatarUrl1); // https://example.com/avatar.png

//avatar missing
const user2 = {
  profile: {
    // avatar is missing
  }
};

const avatarUrl2 = user2?.profile?.avatar?.url ?? "no avatar";
console.log(avatarUrl2); // no avatar

//profile missing
const user3 = {
  // profile is missing
};

const avatarUrl3 = user3?.profile?.avatar?.url ?? "no avatar";
console.log(avatarUrl3); // no avatar