import { useState, useEffect } from 'react';

export const useLocalStorageBookmarks = () => {
    const [bookmarks, setBookmarks] = useState(() => {
        const stored = localStorage.getItem('bookmarks');
        return JSON.parse(stored) || [];
    });

    useEffect(() => {
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }, [bookmarks]);

    const addBookmark = (book) => {
        setBookmarks(prev => [...prev, book]);
    }

    const removeBookmark = (id) => {
        setBookmarks(prev => prev.filter(b => b.id !== id));
    }

    return {bookmarks, addBookmark, removeBookmark};
}