import './singleBookPage.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import Icon from '../../components/Icon/Icon';
import Book from '../../components/Book/Book';
import BookDetails from '../../components/BookDetails/BookDetails';

function SingleBookPage() {
    const [book, setBook] = useState(null);
    const {data : books, isLoading, isError} = useFetch('https://santosnr6.github.io/Data/childrens_books.json');
    const { id } = useParams();

    useEffect(() => {
        if(id && books) {
            const found = books.find(b => b.id === parseInt(id));
            setBook(found);
        }
    }, [id, books]);

  return (
    <section className="page single-page">
        <section className="single-page__container">
            <Icon />
            <section className="single-page__details">
                {
                    book && <Book book={ book } larger={true} />
                }
                {
                    book && <BookDetails book={ book } />
                }
            </section>
        </section>
    </section>
  )
}

export default SingleBookPage;
