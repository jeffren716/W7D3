{
  entities: {
    users:{
      1: {
        id: 1,
        name: "Fake Name"
        songs: [1,4,17,21,3],
        reposts: [5.4.3,9],
        likes: [20,30,4,7],
        profile_picture_url: "/fake_url"
      }
    }
    songs:{
      5: {
        id: 5,
        author_id: 1,
        reposters: [1,2,3,4,5],
        likers: [1,2,3,4,5],
        song_url: "/fake_url",
        album_art_url: "/another_fake_url",
        comments: [6,7,7,8,5]
      }
    }
    comments: {
      3: {
        id: 3,
        author_id: 1,
        body: "This is a comment",
        song_id: 5
      }
    }
  }
}
