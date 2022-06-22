export default function Author(posts) {
  return (
    <dl className="author-wrap">
      <dt className="a11y-hidden">Author</dt>
      <dd className="author">
        <img src="./assets/profile.jpg" alt="" /> {posts.posts.userName}
      </dd>
      <dt className="a11y-hidden">Created</dt>
      <dd className="created">{posts.posts.created}</dd>
    </dl>
  );
}
