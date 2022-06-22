export default function Category(posts) {
  return (
    <dl className="category">
      <dt className="a11y-hidden">Category</dt>
      <dd>{posts.posts.category[0]}</dd>
      <dd>{posts.posts.category[1]}</dd>
    </dl>
  );
}
