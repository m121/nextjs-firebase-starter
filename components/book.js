export default function Book(props) {
  const [book, setBook] = React.useState({
    name: "Book name",
    description: "Book description",
    author: "Book author",
  });

  React.useEffect(() => {
    setBook(props.props);
  }, []);

  return (
    <div>
      <section>
        <h2>{book.name}</h2>
        <h2>{book.description}</h2>
        <h2>{book.author}</h2>
      </section>
    </div>
  );
}
