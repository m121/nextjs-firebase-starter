import Link from "next/link";
function Books(props) {
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    setBooks(props.props.map((doc) => ({ ...doc, id: doc.id })));
  }, []);

  return (
    <div>
      <section>
        <div>
          <div>
            {books.map((row) => {
              return (
                <div key={row.id}>
                  <h2>{row.name}</h2>
                  <h2>{row.author}</h2>
                  <Link
                    href={{ pathname: "/book", query: { id: row.id } }}
                  >
                    <a>Book details</a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Books;
