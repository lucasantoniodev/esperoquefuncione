import { PostDTO } from "../../dto/postDTO";

export class FakeRepository {
  posts: PostDTO[] = [];

  deletePostById(doc: PostDTO) {
    const foundPost = this.posts.find((post) => {
      return post.id === doc.id;
    });

    if (foundPost) {
      const postIndex = this.posts.indexOf(foundPost);
      this.posts.splice(postIndex, 1);
    }
  }

  loadData() {
    const post: PostDTO = {
      id: "1",
      name: "Pássaro de fogo",
      scientificName: "Fenix",
      sighting: "Quem soube nunca contou",
      sightingDate: "1850",
      sightingHour: "15:00",
      observation: "Muito lindo",
      img: "https://conexaoplaneta.com.br/wp-content/uploads/2017/05/gavi%C3%A3o-fuma%C3%A7a.jpg",
    };
    this.posts.push(post);
    return post;
  }
}
