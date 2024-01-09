import { Header } from "./components/Header";
import { Post } from "./components/Post";
import Sidebar from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarURL: "https://picsum.photos/200",
      name: "Lorem Ipsum #1",
      role: "App Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nulla!",
      },
      {
        type: "paragraph",
        content:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nulla!",
      },
      {
        type: "link",
        content: "https://google.com",
      },
    ],
    publishedAt: new Date("2024-01-01 12:00:00"),
  },
  {
    id: 1,
    author: {
      avatarURL: "https://picsum.photos/300",
      name: "Lorem Ipsum #2",
      role: "App Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nulla!",
      },
      {
        type: "paragraph",
        content:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nulla!",
      },
      {
        type: "link",
        content: "https://google.com",
      },
    ],
    publishedAt: new Date("2024-01-01 12:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
