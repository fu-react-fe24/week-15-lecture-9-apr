import Icon from '../../components/Icon/Icon';
import './bookmarksPage.css';
import { useLocalStorageBookmarks } from '../../hooks/useLocalStorageBookmarks';
import BookList from '../../components/BookList/BookList';

function BookmarksPage() {
  const { bookmarks } = useLocalStorageBookmarks();

  return (
    <section className="page bookmarks-page">
        <div className="page__top">
          <h1 className="page__title">Bookmarked</h1>
          <Icon path="/" type="fa-arrow-left" />
        </div>
        {
          bookmarks && <BookList books={bookmarks} />
        }
    </section>
  )
}

export default BookmarksPage;
